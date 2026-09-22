export type NewsTranslation = {
  title: string;
  topic: string;
  summary: string;
  status: string;
  context: Record<string, { label: string; text: string }>;
  ourTake: string;
  sourceLabels: Record<string, string>;
};

export const newsTranslations: Record<string, NewsTranslation> = {
  'zcode-git-workspace-uploads': {
    title: 'ZCode 上传的，不只是源码，还有 .git 里的历史。',
    topic: '代码隐私与用户同意',
    summary:
      '研究者发现，ZCode 会把项目文件和 Git 历史打包，准备在后台上传。智谱随后道歉，新版本也处理了这条上传链路。但此前已经传到云端的数据，后来怎么样了，仍无法独立核实。',
    status: '发现上传行为，后续报告称已修复',
    context: {
      'What was packaged': {
        label: '到底打包了什么',
        text: 'ferstar 在 9 月 18 日对 ZCode 3.12.3 的分析中，描述了一条把工作区快照加密后传向阿里云存储的链路。文件清单里有源码、Git 对象、LFS 大文件缓存和 reflog 操作记录。在他测量的那份快照里，.git 占了 86.6%。',
      },
      'An attempted upload is not a completed upload': {
        label: '准备上传，不等于已经传出去了',
        text: '作者在 9 月 19 日补充说明：那份 313 MB 的商业项目压缩包，从未成功上传。另一个包含 538 个文件的公开仓库，则得到了服务端的接收确认。电脑里出现了大压缩包，不能单凭这一点就说它已经到了云端。',
      },
      'A separate local inspection': {
        label: '另一位开发者也检查了自己的电脑',
        text: 'Silent Star 报告称，在 3.10.1 版中发现了以 Git 数据为主的文件清单：较小的快照被服务端接收，一个私有仓库仍在等待上传。其分析认为，Git 元数据绕过了普通文件的过滤规则。这可能让以前提交过的密钥也被带进去，但作者说，在这次检查的仓库中没有发现真实凭据。',
      },
      'The company’s response': {
        label: '智谱怎么回应',
        text: '据 IT 之家报道，智谱在 9 月 18 日道歉，将问题归因于代码库索引和上线初期默认开启的 Repo Wiki 功能。公司称，云端生成 Wiki 页面后，上传的数据会被销毁。它还承诺开源 ZCode、请外部人员审查；这些是承诺，还不是已经完成的审计。',
      },
      'What changed in 3.14.0': {
        label: '3.14.0 改了什么',
        text: 'ZCode 的 9 月 19 日更新说明列出了一项仓库 Wiki 上传修复。ferstar 后续检查称，3.14.0 已移除上传链路。这能说明客户端的变化，却不能独立证明之前上传的数据已经删除。FORK YOU 核对了这些来源，没有自行复现客户端分析。',
      },
    },
    ourTake:
      '仓库的历史和眼前的文件一样，都应该在你知情同意后才能上传。编程工具该说清楚哪些东西会离开电脑，给一个真的管用的关闭开关，也让数据保留承诺经得起核查。公开源码和独立审计，能让用户有实实在在的东西可看。',
    sourceLabels: {
      ferstar: 'ferstar：原始分析与 9 月 19 日补充说明（英文）',
      'silent-star': 'Silent Star：在自己电脑上的独立检查',
      ithome: 'IT 之家：智谱的道歉与回应',
      'zcode-changelog': 'ZCode：3.14.0 官方更新说明（英文）',
    },
  },
  'openai-project-lily-chat-review': {
    title: 'Lily 项目：谁在读你和 ChatGPT 的对话？',
    topic: '隐私与数据审核工作',
    summary:
      '404 Media 报道称，OpenAI 的外包审核人员会阅读真实的 ChatGPT 对话，有时其中还包含敏感信息。OpenAI 面向个人用户的常见问题中，也说明了为改进模型等特定目的进行有限人工访问的情况。',
    status: '据调查报道',
    context: {
      'The original investigation': {
        label: '原始调查发现了什么',
        text: 'Joseph Cox 在 9 月 14 日的报道中描述，Lily 项目雇用了数百名外包人员给聊天机器人的回复打分，依据包括 404 Media 看到的内部文件和真实提示词。这项工作旨在改善回复，比如减少过度迎合，以及声称自己拥有人类感受或经历的说法。',
      },
      'More than a single prompt': {
        label: '看到的可能不只是一句提问',
        text: 'Tom’s Hardware 引用 404 Media 的后续报道说，审核人员拿到的除了对话，还可能有用户记忆摘要，其中可能包含位置等个人背景。这篇报道沿用了同一次调查，并不是另一批独立泄露的证据。',
      },
      'OpenAI’s response and disclosures': {
        label: 'OpenAI 的回应与公开说明',
        text: '404 Media 报道称，审核人员看不到用户名；OpenAI 表示会尽力去除个人信息，但承认仍可能有遗漏。其个人用户常见问题说明，获授权的员工和服务商可为滥用调查、客服、法律事务或模型改进访问内容；用户可以退出最后这一项用途。页面也介绍了保密义务、访问限制和操作记录。',
      },
      'What filtering can miss': {
        label: '去掉个人信息，也可能有漏网之鱼',
        text: 'OpenAI 的 Privacy Filter 文档明确提醒，这个工具不保证匿名化，也可能漏掉少见的身份标识或含义不明确的私人信息。这说明脱敏需要谨慎，但不能用来推算 Lily 项目内部实际漏掉了多少。',
      },
      'What you can control': {
        label: '你能控制哪些设置',
        text: 'OpenAI 提供训练退出选项，路径是 Settings → Data Controls → Improve the model for everyone（设置 → 数据控制 → 为所有人改进模型）。常见问题说，临时聊天不会用于训练，但可能因滥用监测而被审核。退出训练，不等于公司承诺其他已列明的用途也完全没有人工访问。',
      },
    },
    ourTake:
      '一个让人愿意聊私事的界面，也该把「谁可能看到这些话」讲清楚。用户应该能在分享敏感内容之前，了解并决定是否接受。做审核工作的那些人，也值得被看见。',
    sourceLabels: {
      '404-media': '404 Media：Lily 项目原始调查（英文）',
      'toms-hardware': 'Tom’s Hardware：审核权限与记忆摘要的后续报道（英文）',
      'consumer-faq': 'OpenAI：个人用户服务的数据使用说明（英文）',
      'privacy-filter': 'OpenAI：Privacy Filter 及其局限（英文）',
      'data-controls': 'OpenAI：数据控制常见问题（英文）',
    },
  },
  'anthropic-slowdown-ipo': {
    title: 'Anthropic 一边呼吁 AI 慢一点，一边筹备上市。',
    topic: '安全与商业利益',
    summary:
      'Dario Amodei 希望 AI 竞赛放慢脚步，同时 Anthropic 正在寻求上市。谁会从中受益，确实值得讨论。但下面这些来源，并没有证明它呼吁放慢发展只是为了 IPO。',
    status: '「为了 IPO」的动机尚未证实',
    context: {
      'The proposal': {
        label: '他提出了什么',
        text: 'Amodei 在 9 月 12 日的文章中呼吁放慢能力增长，让外部评估人员进入研发过程，并加强公司与政府之间的协调。他给出的理由是，让安全工作有时间跟上。他也说，这种节奏调整不会停止模型训练。',
      },
      'The money': {
        label: '另一边，上市在推进',
        text: '路透社 9 月 11 日报道称，英伟达正商谈投资 Anthropic 计划中的 IPO。报道引用了匿名消息人士，提醒计划仍可能改变，并记录了 Anthropic 拒绝置评的回应。',
      },
      'The criticism': {
        label: '争议在哪里',
        text: '《世界报》的 Nicolas Chapuis 在 9 月 15 日的专栏中谈到一种怀疑：监管会不会保护领先的公司，让成本更低的开放模型更难竞争？他也提到另一种解释：在竞争压力下，公司确实有安全担忧。这两种解释，都不能直接证明背后藏着 IPO 动机。',
      },
    },
    ourTake:
      '安全规则需要独立监督，也需要公众发声。值得盯紧的是：谁在制定规则，谁负担得起合规成本，开放的替代方案还有没有生存空间。',
    sourceLabels: {
      amodei: 'Dario Amodei：We Must Pace the Frontier（英文）',
      reuters:
        '路透社，经 Investing.com 刊载：英伟达与 Anthropic 的 IPO 商谈（英文）',
      'le-monde': '《世界报》：AI 减速争论背后的商业利益（英文）',
    },
  },
  'openai-buckmaster-math-credit': {
    title: 'OpenAI 宣布数学突破，成果归属却起了争议。',
    topic: '研究与权力',
    summary:
      'OpenAI 宣布了一个 Navier–Stokes 问题的证明。纽约大学数学家 Tristan Buckmaster 质疑它在自己与 Levent Alpöge 的相关研究中所作的处理。OpenAI 不认同他的说法；是否使用了两人未公开的研究，目前尚未证实。',
    status: '双方说法存在争议',
    context: {
      'The announcement': {
        label: 'OpenAI 宣布了什么',
        text: '9 月 8 日，OpenAI 发布了它所称的 Navier–Stokes 千禧年大奖问题解答，并附上论文和 Lean 形式化证明。这是公司的数学主张；这篇简报没有独立验证该证明。',
      },
      'Buckmaster’s account': {
        label: 'Buckmaster 怎么说',
        text: 'Buckmaster 说，OpenAI 曾提议发表一篇不署名其合作者 Alpöge 的论文；Alpöge 是 Anthropic 员工。他还说，自己询问两人在 Codex 中的草稿是否被用于训练，起初没有得到答复。他在声明中明确表示，不知道数据是否被使用。两人已发表的结果涉及相关流体方程，包括受迫欧拉方程。',
      },
      'OpenAI’s response': {
        label: 'OpenAI 如何回应',
        text: 'OpenAI 否认在成果发表前看过两人的研究。公司在 9 月 10 日更新中表示，经调查，已排除 Buckmaster 在此前两个月的 Codex 提示词对系统的影响，包括训练方面。WIRED 还报道，Sébastien Bubeck 否认了 OpenAI 试图去掉 Alpöge 署名的说法。',
      },
    },
    ourTake:
      '当提供研究工具的公司，也在争取率先做出发现，边界就更需要讲清楚。除了结果本身，成果归属、数据用途和算力获取，也都值得认真追问。',
    sourceLabels: {
      openai: 'OpenAI：研究公告与 9 月 10 日回应更新（英文）',
      buckmaster: 'Tristan Buckmaster：公开声明（英文 PDF）',
      wired: 'WIRED：研究公告与双方说法（英文）',
    },
  },
};
