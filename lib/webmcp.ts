import {
  categories,
  intents,
  filterOrganizations,
  getPrimaryAction,
  parseFilters,
  type DirectoryFilters,
} from './directory.ts';
import { getOrganizations } from './localization.ts';
import type { Language } from './language.ts';

type Tool = {
  name: string;
  description: string;
  inputSchema: object;
  annotations: { readOnlyHint: boolean; untrustedContentHint: boolean };
  execute: (input: unknown) => unknown;
};
type ModelContext = {
  registerTool: (
    tool: Tool,
    options: { signal: AbortSignal },
  ) => void | Promise<void>;
};

export function registerDirectoryTools(actions: {
  language: () => Language;
  read: () => Required<DirectoryFilters>;
  apply: (filters: Required<DirectoryFilters>) => void;
}) {
  const context = (document as Document & { modelContext?: ModelContext })
    .modelContext;
  if (!context?.registerTool) return;
  const lifecycle = new AbortController();
  const snapshot = () => {
    const filters = actions.read();
    return {
      filters,
      language: actions.language(),
      results: filterOrganizations(
        getOrganizations(actions.language()),
        filters,
      ).map((org) => ({
        id: org.id,
        name: org.name,
        category: org.category,
        action: getPrimaryAction(org, filters.intent),
        sources: org.sources,
        reviewedAt: org.reviewedAt,
      })),
    };
  };
  const register = (tool: Tool) => {
    try {
      void Promise.resolve(
        context.registerTool(tool, { signal: lifecycle.signal }),
      ).catch(() =>
        console.warn(
          'Directory tools could not be registered. Search remains available.',
        ),
      );
    } catch {
      console.warn(
        'Directory tools are unavailable. Search remains available.',
      );
    }
  };
  register({
    name: 'set_directory_filters',
    description:
      'Replace the visible FORK YOU directory search and filters, then return matching organizations with official participation links. Omitted filters reset to defaults. Does not apply for jobs or contact organizations.',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', maxLength: 300 },
        category: {
          type: 'string',
          enum: categories.map((item) => item.value),
        },
        intent: { type: 'string', enum: intents.map((item) => item.value) },
      },
      additionalProperties: false,
    },
    annotations: { readOnlyHint: false, untrustedContentHint: true },
    execute: (input) => {
      const filters = parseFilters(input);
      actions.apply(filters);
      return snapshot();
    },
  });
  register({
    name: 'read_directory',
    description:
      'Read the current visible search filters and matching organizations, including their official sources and participation links.',
    inputSchema: {
      type: 'object',
      properties: {},
      additionalProperties: false,
    },
    annotations: { readOnlyHint: true, untrustedContentHint: true },
    execute: (input) => {
      if (
        !input ||
        typeof input !== 'object' ||
        Array.isArray(input) ||
        Object.keys(input).length
      )
        throw new Error('Expected an empty object.');
      return snapshot();
    },
  });
  return () => lifecycle.abort();
}
