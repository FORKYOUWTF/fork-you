import type { UICopy } from '../copy.ts';
import type { OrganizationTranslation } from '../directory-zh.ts';
import type { NewsTranslation } from '../news-zh.ts';

export const ui: UICopy = {
  language: '언어',
  automatic: '자동',
  pageTitle: 'FORK YOU — 미래는 우리가 새로 만들어요.',
  pageDescription:
    '그들은 전부 집어삼키려 해요. 우리는 다른 길을 만들어요. 함께할 오픈소스 프로젝트, 기업, 공익 단체를 찾아보세요.',
  skip: '목록으로 건너뛰기',
  home: 'FORK YOU 홈',
  navigation: '주요 메뉴',
  news: '뉴스',
  manifesto: '이 사이트를 만든 이유',
  directory: '같이할 곳 찾기',
  contribute: '목록에 보태기',
  kicker: '미래는 아직 정해지지 않았어요',
  headline: '그들은 전부 집어삼키려 해요.',
  headlineAccent: '우리는 다른 길을 만들어요.',
  intro:
    '열린 미래는 함께 만들어야 하니까요. 오픈소스 프로젝트, 열린 방식으로 일하는 기업, 여러분의 역량을 나눌 공익 단체를 찾아보세요.',
  places: (n) => '여기 ' + n + '곳에서 시작해 보세요',
  concernTitle: '무엇이 걱정되나요?',
  concern:
    '이런 가정에서 출발해요. 선두 AI 기업들은 우리가 쓰는 도구, 하는 일, 남은 관심까지 모두 차지하려 할 거예요. 무엇을 하든 몇몇 기업을 거쳐야 한다면 어떻게 될까요?',
  possibility:
    '이건 우리의 출발점이 되는 가정이에요. 미래는 아직 바꿀 수 있어요. 직접 살펴볼 수 있는 도구, 함께 결정하는 공동체, 플랫폼을 떠나도 가져갈 수 있는 작업물이 필요해요.',
  motto: '코드는 열고, 권한은 나누고, 사람은 소중하게.',
  forkTitle: '왜 이름이 ‘FORK YOU’인가요?',
  fork: '소프트웨어에서 fork는 공유된 코드를 가져와 새로운 방향으로 발전시키는 일이에요. 미래에도 그렇게 해 보자는 초대예요. 코드를 쓰고, 유용한 디자인을 만들고, 안내서를 번역하고, 누군가의 권리를 지켜주세요. 다른 선택지가 계속 살아 있도록요.',
  participateTitle: '내가 할 수 있는 일은요?',
  projectAction: '열린 프로젝트에 힘을 보태요.',
  projectHelp: '코드, 문서, 디자인, 번역 등 할 수 있는 일이 많아요.',
  careerAction: '내가 지지하는 일을 직업으로 삼아요.',
  careerHelp: '기업, 협동조합, 비영리 단체를 살펴보세요.',
  volunteerAction: '소중한 일에 시간을 나눠요.',
  volunteerHelp: '관심 있는 공동체나 공익 활동을 도와주세요.',
  directoryTitle: '같이할 곳을 찾아봐요.',
  curated: '고른 이유와 출처도 함께.',
  search: '단체, 관심 분야, 역량 검색',
  searchPlaceholder: '관심 분야, 할 수 있는 일, 이름으로 검색…',
  clearSearch: '검색어 지우기',
  involvement: '어떻게 참여하고 싶나요',
  organizationType: '조직 유형',
  matches: (n) => n + '곳을 찾았어요',
  emptyTitle: '아직 맞는 곳을 못 찾았어요.',
  emptyHelp: '다른 검색어나 참여 방식을 시도해 보세요.',
  clearFilters: '필터를 지우고 다시 보기',
  directoryNote:
    '채용 링크는 공식 페이지로 연결돼요. 지금 채용 중이라는 뜻은 아니에요. 프로젝트 기여와 자원봉사는 보수가 없을 수 있어요.',
  communityTitle: '알고 있는 좋은 곳을 알려주세요.',
  community:
    '빠진 프로젝트가 있나요? 오래된 정보를 발견했나요? 확인할 수 있는 출처와 함께 알려주시면 더 쓸모 있는 목록이 돼요.',
  suggest: '프로젝트 추천하기',
  correction: '틀린 정보 알려주기',
  submission:
    '공개 GitHub 양식이 열려요. GitHub 계정이 필요하며, 제안과 정정 내용을 검토한 뒤 목록을 수정해요.',
  standardsTitle: '어떤 곳을 소개하나요?',
  reasonTitle: '소개할 이유가 있는 곳',
  reason:
    '오픈소스 활동, 공동 소유, 기록으로 확인되는 공익 목적이 있는 곳이에요. 왜 골랐는지 설명해요.',
  routeTitle: '실제로 참여할 방법이 있는 곳',
  route:
    '공식 기여 안내, 채용 페이지, 자원봉사 창구가 있어야 해요. 보수가 있는 일과 없는 활동을 구분해요.',
  evidenceTitle: '후광보다 출처를 봐요',
  evidence:
    '출처와 확인 날짜를 붙여요. 없는 채용 공고, ‘독립성 점수’, ‘AI로부터 안전한 곳’이라는 보장은 만들지 않아요.',
  openTitle: '열려 있으면 완벽한가요?',
  open: '그렇지는 않아요. 오픈소스로도 생계를 꾸릴 수 있고, 비영리 단체도 잘못된 결정을 할 수 있어요. 운영 방식과 출처를 읽고, 질문하고, 직접 판단해 보세요. 여기 소개됐다고 FORK YOU를 지지한다는 뜻은 아니에요.',
  slogan: '미래까지 포장해 가져갈 수는 없어요.',
  forkSite: '이 사이트 포크하기',
  back: '목록으로 돌아가기',
  categories: {
    all: '전체',
    project: '열린 프로젝트',
    company: '기업·협동조합',
    nonprofit: 'NGO·비영리 단체',
  },
  singular: {
    project: '열린 프로젝트',
    company: '기업 / 협동조합',
    nonprofit: 'NGO / 비영리 단체',
  },
  intents: {
    all: '모든 참여 방식',
    contribute: '프로젝트에 기여하기',
    careers: '보수 있는 일 찾기',
    volunteer: '자원봉사하기',
  },
  whyListed: (name) => '이곳을 소개하는 이유: ' + name,
  whyButton: '왜 골랐나요?',
  receipts: '이유와 출처를 함께 봐요',
  whyPicked: '우리가 고른 이유',
  editorial: '편집진의 판단이에요',
  governance: '어떻게 운영하나요',
  wayIn: '어떻게 참여하나요',
  sources: '출처 살펴보기',
  reviewed: (date) =>
    '출처를 마지막으로 확인한 날: ' + date + '. 참여 기회는 달라질 수 있어요.',
  detailNote:
    '알아보기 위한 출발점이에요. 고용주 인증도 아니고, 해당 단체가 우리의 선언에 동의한다는 뜻도 아니에요.',
  correctionFor: (name) => 'GitHub에서 ' + name + ' 정보 정정하기',
  publicForm: '공개 GitHub 양식이에요. 로그인이 필요해요.',
  close: '닫기',
  newsKicker: '뉴스 / 권력 / 책임',
  newsTitle: '뉴스도, 근거도 함께.',
  newsIntro:
    'AI 기업, 돈, 그리고 누가 결정하는지. 무슨 일이 있었고, 무엇이 아직 논란이며, 왜 살펴보는지 이야기해요.',
  readContext: '자세한 맥락 보기',
  contextFor: (title) => '자세한 맥락: ' + title,
  sourceCount: (n) => '출처 ' + n + '개',
  sourceLabel: (n, label) => '출처 ' + n + ': ' + label,
  editorialView: '우리의 생각',
  ourTake: '우리는 이렇게 봐요 · 의견',
  sourceKinds: {
    'Primary source': '1차 출처',
    Reporting: '언론 보도',
    Opinion: '의견',
  },
  checked: '출처 확인일:',
  datedBrief:
    '(UTC). 당시 정보를 정리한 글이에요. 이후 상황에 따라 판단이 달라질 수 있어요.',
  newsCorrection: (title) => '내용 정정하기: ' + title,
  bringStory: '살펴볼 만한 뉴스, 출처와 함께 알려주세요.',
  newsSubmission:
    '제안과 정정은 공개 GitHub 양식으로 연결되며 로그인이 필요해요. 출처를 확인한 뒤 새 글을 올리거나 수정해요.',
};

export const organizationTranslations: Record<string, OrganizationTranslation> =
  {
    godot: {
      name: 'Godot',
      description:
        '만들고 싶은 게임 속 세상이 있나요? 열린 게임 엔진으로 시작해 보세요.',
      tags: ['게임', 'C++', '문서'],
      reason:
        '공유된 게임 엔진은 직접 살펴보고 고치며 계속 쓸 수 있어요. 프로그래밍 말고도 도울 일이 많아요.',
      governance:
        '비영리 Godot 재단이 지원해요. 기여자는 자신의 코드 저작권을 유지하고, 엔진은 MIT 라이선스를 사용해요.',
      participation:
        '기여 안내에서 엔진 개발, 문서, 데모, 튜토리얼, 공동체 지원을 살펴보세요. 채용 공고가 아닌 커뮤니티 참여 창구예요.',
    },
    igalia: {
      name: 'Igalia',
      description:
        '직원이 함께 소유한 기술 컨설팅 회사에서 열린 웹을 만들어요.',
      tags: ['직원 소유', '브라우저', '엔지니어링'],
      reason:
        '보수 있는 오픈소스 개발과 직원 소유, 민주적 의사결정을 한 회사에 담았어요.',
      governance:
        '직원이 소유한 오픈소스 컨설팅 회사예요. 공개 소개에서 수평적이고 협동적인 조직이라고 설명해요.',
      participation:
        '공식 채용 페이지에서 기회와 지원 방법을 확인하세요. 요건과 보수는 각 공고에 따라 달라요.',
    },
    eff: {
      name: '전자프런티어재단 (EFF)',
      description: '사생활, 표현의 자유, 디지털 세상에서의 권리를 지켜요.',
      tags: ['디지털 권리', '정책', '권익 옹호'],
      reason:
        '좋은 소프트웨어만큼 권리 보호도 필요해요. EFF는 공익 활동, 법률, 기술 분야에서 참여할 길을 제공해요.',
      governance:
        '디지털 권리를 다루는 비영리 단체예요. 지도부, 조직 문서, 재무 보고서를 공개해요.',
      participation:
        '기회 안내 페이지에 일자리, 인턴십, 자원봉사가 모여 있어요. 각 활동의 자격과 보수 여부를 확인하세요.',
    },
    mastodon: {
      name: 'Mastodon',
      description:
        '공동체가 인터넷의 작은 한 구석을 직접 운영하는 소셜 네트워크예요.',
      tags: ['소셜 네트워크', '연합형 네트워크', 'Ruby'],
      reason:
        '열린 연합형 소셜 소프트웨어로 서버와 규칙을 직접 고를 수 있어요. 하나의 중앙 플랫폼에 모두 의존할 필요가 줄어요.',
      governance:
        '핵심 프로젝트는 비영리 조직이 개발한다고 소개해요. 각 서버에는 별도의 운영자와 콘텐츠 관리 규칙이 있어요.',
      participation:
        '공식 저장소에서 시작하고 변경을 제안하기 전에 기여 안내를 읽으세요. 커뮤니티 기여는 보통 무보수예요.',
    },
    codeberg: {
      name: 'Codeberg',
      description:
        '비영리 공동체가 함께 지탱하는 오픈소스 프로젝트의 집이에요.',
      tags: ['개발 도구', '공동체', '인프라'],
      reason:
        '공동체가 지원하는 개발 인프라는 상업적 코드 호스팅 서비스 밖의 실질적인 선택지가 돼요.',
      governance:
        'Codeberg e.V.는 회원제 비영리 협회예요. 활동 회원은 협회 일에 투표할 수 있고, 후원 회원의 권리는 달라요.',
      participation:
        '회원 가입과 자원봉사 안내를 읽어보세요. 회비가 있을 수 있으며, 가능한 역할과 현재 참여 여건은 Codeberg에 확인해야 해요.',
    },
    collabora: {
      name: 'Collabora',
      description:
        '다른 사람이 이어서 발전시킬 수 있는 열린 시스템을 만들며 일해요.',
      tags: ['Linux', '인프라', '엔지니어링'],
      reason:
        '상업적 개발도 원래 오픈소스 프로젝트의 유지보수를 지원할 수 있어요. Collabora는 이를 기술 사업의 중심에 두고 있어요.',
      governance:
        '상업적 오픈소스 컨설팅 회사예요. 확인 가능한 오픈소스 활동 때문에 소개하며, 비영리나 직원 소유 회사라는 뜻은 아니에요.',
      participation:
        '공식 채용 페이지에서 역할과 근무지를 보세요. 이 소개가 현재 채용을 보장하지는 않아요.',
    },
    blender: {
      name: 'Blender',
      description: '3D를 만드는 사람들이 자신의 도구를 직접 다룰 수 있게 해요.',
      tags: ['3D·예술', '디자인', '문서'],
      reason:
        '함께 쓰는 창작 도구는 독점 소프트웨어 구독 밖의 선택지를 줘요. 디자인, 코드, 테스트, 문서로 참여할 수 있어요.',
      governance:
        'Blender 재단이 이 자유·오픈소스 프로젝트를 지원해요. 개발은 모듈별로 나뉘고 담당 역할이 공개돼 있어요.',
      participation:
        '참여 안내에서 개발, 문서, 번역 등을 살펴보세요. 시작 전에 해당 팀의 안내를 읽어주세요.',
    },
    nextcloud: {
      name: 'Nextcloud',
      description:
        '데이터를 어디에 둘지 직접 정할 수 있는 협업 도구를 만들어요.',
      tags: ['셀프 호스팅', 'PHP', '협업'],
      reason:
        '공개된 코드를 직접 서버에 설치해 쓰면 파일과 대화를 어디에 보관할지 더 많이 선택할 수 있어요.',
      governance:
        '기여자 공동체와 유료 제품·서비스를 가진 상업적 오픈소스 회사예요. 이곳에 있다는 것이 AI를 거부한다는 뜻은 아니에요.',
      participation:
        '보수 있는 일은 채용 페이지를, 코드·테스트·번역·공동체 활동은 기여 안내를 보세요. 커뮤니티 기여와 고용은 별개예요.',
    },
    tor: {
      name: 'Tor 프로젝트',
      description: '감시와 검열을 피해 소통하고 웹을 이용하도록 도와요.',
      tags: ['사생활 보호', '검열 저항', '번역'],
      reason:
        '인터넷 통제권이 집중될수록 사생활 보호 인프라가 중요해요. Tor에는 기술자와 비기술자 모두 참여할 길이 있어요.',
      governance:
        '이사회가 있는 비영리 조직과 더 넓은 자원봉사 공동체가 함께해요. 채용과 커뮤니티 페이지에서 참여 방식을 따로 안내해요.',
      participation:
        '커뮤니티 창구에는 번역, 홍보, 연구, 기술 자원봉사가 있어요. 보수 있는 일은 채용 페이지를 보세요. 활동마다 안내가 달라요.',
    },
    wikimedia: {
      name: '위키미디어 재단',
      description:
        '자유로운 지식 공유를 가능하게 하는 사람들과 기반을 지원해요.',
      tags: ['지식', '교육', '공익'],
      reason:
        '공유 지식에는 꾸준히 돌볼 인프라가 필요해요. 재단은 위키백과 등 프로젝트의 기술과 공동체를 지원하는 유급 일자리를 제공해요.',
      governance:
        '비영리 위키미디어 재단이 위키미디어 프로젝트들을 지원해요. 재단 직원으로 일하는 것과 공동체에서 자원 편집하는 것은 달라요.',
      participation:
        '재단 채용 페이지에서 현재 공고, 근무지 요건, 지원 방법을 확인하세요. 특정 공석을 보장하는 소개는 아니에요.',
    },
    libreoffice: {
      name: 'LibreOffice',
      description: '매일 쓰는 오피스 도구를 함께 더 좋게 만들어요.',
      tags: ['오피스 도구', '디자인', '번역'],
      reason:
        '문서는 일상의 일부예요. 공동체가 만드는 오피스 프로그램은 우리가 쓰는 도구를 살펴보고 개선하고 나눌 수 있게 해요.',
      governance:
        'The Document Foundation과 기여자 공동체가 지원하는 자유·오픈소스 프로젝트예요.',
      participation:
        '안내에는 디자인, 번역, 문서, 개발, 테스트와 입문용 작은 과제가 있어요. 프로젝트 멘토와 먼저 이야기하기를 권해요.',
    },
    openstreetmap: {
      name: 'OpenStreetMap',
      description: '우리 동네에 대한 지식을 누구나 쓸 수 있는 지도에 담아봐요.',
      tags: ['열린 데이터', '지도 제작', '공동체'],
      reason:
        '공유 지도 데이터는 독점 지도 서비스 밖의 대안이에요. 사는 곳을 잘 아는 것만으로도 도움이 돼요.',
      governance:
        '공동체 지도 프로젝트예요. OpenStreetMap 재단이 공동체를 위해 주 사이트와 관련 서비스를 운영해요. 데이터에는 별도의 개방형 라이선스와 출처 표시 요건이 있어요.',
      participation:
        '시작 안내에서 지도 그리기와 공동체 지원 방법을 배워보세요. 열린 데이터에 참여하는 길이며 프로그래밍을 몰라도 괜찮아요.',
    },
    zulip: {
      name: 'Zulip',
      description:
        '비영리 재단이 소유한 회사와 함께 만드는 열린 팀 채팅 도구예요.',
      tags: ['팀 채팅', '셀프 호스팅', '재단 소유'],
      reason:
        '오픈소스 채팅과 비영리 소유 구조는 협업 도구를 오래 운영할 또 다른 방법이에요. 다만 구조를 살펴볼 필요는 있으며, 자동으로 독립성이 인증되지는 않아요.',
      governance:
        '2026년 5월 발표에 따르면 Zulip의 회사 Kandra Labs는 독립 비영리 Zulip 재단 소유예요. 같은 발표에서 창업자와 경력 있는 팀원 세 명이 Anthropic으로 옮긴다는 소식도 전했어요.',
      participation:
        '공식 채용 페이지에서 역할과 요건을 보세요. 회사와 재단 소유 구조를 소개하는 것이며, 구성원에게 AI 기업과의 개인적 연결이 없다는 뜻은 아니에요.',
    },
    element: {
      name: 'Element',
      description: '열린 분산형 소통을 위한 메시징 도구를 만들어요.',
      tags: ['메시징', '개방형 표준', '사생활 보호'],
      reason:
        'Matrix 표준을 쓰는 소통 도구는 대화를 어디에 두고 다른 서비스와 어떻게 연결할지 더 많은 선택을 줘요.',
      governance:
        'Matrix 생태계의 상업적 회사예요. 채용 페이지는 만드는 소프트웨어의 거의 전부가 오픈소스라고 설명하며, 모든 제품과 기능을 뜻하지는 않아요.',
      participation:
        '공식 페이지에서 채용과 요건을 확인하세요. 하는 일과 제품 모델을 살펴보고 자신의 생각과 맞는지 판단해 보세요.',
    },
    openproject: {
      name: 'OpenProject',
      description: '오픈소스 프로젝트 관리로 팀이 일을 정리하도록 도와요.',
      tags: ['프로젝트 관리', '제품·UX', '엔지니어링'],
      reason:
        '팀의 협업 도구도 공유 인프라가 될 수 있어요. OpenProject는 보수 있는 제품 개발과 공개 코드를 연결해요.',
      governance:
        '상업적 오픈소스 소프트웨어 회사예요. 채용 페이지에서 무료 Community 버전과 개발, 제품, 디자인, 고객 지원 팀을 소개해요.',
      participation:
        '공식 채용 페이지에서 공고와 근무지 요건을 보세요. 팀 소개가 모든 직군의 현재 채용을 뜻하지는 않아요.',
    },
    'access-now': {
      name: 'Access Now',
      description: '위험에 놓인 사람들과 공동체의 디지털 권리를 지켜요.',
      tags: ['인권', '정책', '디지털 보안'],
      reason:
        '열린 미래에는 검열, 감시, 권력 남용에 맞서는 사람도 필요해요. 권리 옹호는 소프트웨어 밖에서도 기여할 수 있는 길이에요.',
      governance:
        '디지털 권리에 집중하는 국제 인권 단체예요. 여러 곳에 분산된 팀과 공개 채용 절차를 갖고 있어요.',
      participation:
        '공식 페이지에서 일자리, 펠로십, 인턴십을 확인하세요. 취업 자격과 지역 요건이 다르며, 원격 근무라고 어디서나 지원할 수 있는 건 아니에요.',
    },
    'open-knowledge': {
      name: 'Open Knowledge Foundation',
      description: '공공 지식을 누구나 실제로 쓰고 나눌 수 있게 해요.',
      tags: ['열린 데이터', '공익', '교육'],
      reason:
        '열린 지식에는 도구, 역량, 기관의 지원이 필요해요. 재단은 이런 활동을 여러 지역의 공익 공동체와 연결해요.',
      governance:
        '잉글랜드와 웨일스에 등록된 비영리 조직으로, 운영 체계·이사회·지원자 정보를 공개해요. 재단 활동과 서비스 제공을 함께해요.',
      participation:
        '일자리와 기회 페이지에서 현재 선택지를 살펴보세요. 알아볼 만한 조직이라는 소개이지, 특정 직무가 지금 공석이라는 뜻은 아니에요.',
    },
    framasoft: {
      name: 'Framasoft',
      description:
        '공동체가 일상의 디지털 도구를 다시 자기 손에 쥐도록 도와요.',
      tags: ['자유 소프트웨어', '공동체', '번역'],
      reason:
        '기술 권력 집중을 비판하는 데서 나아가, 실제로 쓸 수 있는 소프트웨어와 서비스, 교육 자료를 만들어요.',
      governance:
        '자유 소프트웨어와 공동체 서비스를 만드는 프랑스 비영리 협회예요. 기부금, 직원, 자원봉사자의 지원으로 운영돼요.',
      participation:
        '참여 입구는 영어로 제공되며 더 자세한 자료는 프랑스어일 수 있어요. 프로젝트별 안내를 보고 도울 곳을 골라보세요.',
    },
  };
export const actionLabels: Record<string, string> = {
  'Find a contribution': '기여할 일 찾아보기',
  'Explore careers': '일자리 알아보기',
  'Find volunteer routes': '자원봉사 기회 찾기',
  'Explore the source': '코드와 참여 방법 보기',
  'Explore ways to help': '도울 방법 찾아보기',
  'Start mapping': '지도 그리기 시작',
};
export const sourceLabels: Record<string, string> = {
  'Ways to contribute': '기여할 수 있는 방법',
  'Governance model': '운영 체계',
  'Igalia values and cooperative decision-making':
    'Igalia의 가치와 공동 의사결정',
  'Working at Igalia': 'Igalia에서 일하기',
  'Official opportunities and volunteer links': '공식 일자리·자원봉사 안내',
  'Mastodon: software, federation, and organization':
    'Mastodon: 소프트웨어, 연합 구조, 조직',
  'Membership, voting rights, and volunteering': '회원 자격, 투표권, 자원봉사',
  'Careers and open-source engineering': '채용과 오픈소스 개발',
  'Ways to get involved': '참여 방법',
  'Blender Foundation': 'Blender 재단',
  'Jobs and company description': '채용과 회사 소개',
  'Community contribution guide': '커뮤니티 기여 안내',
  'Tor community portal': 'Tor 커뮤니티 창구',
  'Jobs and organization': '채용과 조직 소개',
  'Foundation careers and mission': '재단의 채용과 목적',
  'Community and contribution routes': '공동체와 기여 방법',
  'Community, open data, and Foundation role':
    '공동체, 열린 데이터, 재단의 역할',
  'Welcome and ways to contribute': '시작 안내와 기여 방법',
  'Jobs and current stewardship': '채용과 현재 운영 체계',
  'Foundation ownership and leadership transition': '재단 소유와 지도부 변화',
  'Careers and open-source work': '채용과 오픈소스 활동',
  'Teams, open-source model, and careers': '팀, 오픈소스 모델, 채용',
  'Mission, employment, and application requirements': '목적, 채용, 지원 요건',
  'Mission, organization, and governance links': '목적, 조직, 운영 정보',
  'Jobs and opportunities': '일자리와 참여 기회',
  'Association, mission, and projects': '협회, 목적, 프로젝트',
  'Participation guide': '참여 안내',
};

export const newsTranslations: Record<string, NewsTranslation> = {
  'zcode-git-workspace-uploads': {
    title: 'ZCode 업로드에는 코드뿐 아니라 .git 기록도 들어 있었어요.',
    topic: '코드 보호와 사용자 동의',
    summary:
      '연구자들이 ZCode가 프로젝트 파일과 Git 기록을 묶어 백그라운드 업로드를 준비하는 동작을 발견했어요. Z.ai는 사과했고, 이후 버전은 업로드 기능을 수정했어요. 이전에 클라우드로 간 데이터가 어떻게 됐는지는 아직 독립적으로 확인되지 않았어요.',
    status: '업로드 동작 발견, 수정 보고',
    context: {
      'What was packaged': {
        label: '무엇이 묶였나요',
        text: 'ferstar는 9월 18일 ZCode 3.12.3 분석에서 작업 공간을 암호화한 뒤 Alibaba Cloud로 보내는 흐름을 설명했어요. 목록에는 소스 파일, Git 객체, LFS 파일, reflog가 있었어요. 측정한 스냅샷에서 .git이 차지하는 비중은 86.6%였어요.',
      },
      'An attempted upload is not a completed upload': {
        label: '업로드 시도와 완료는 달라요',
        text: '작성자는 9월 19일 설명을 보충해, 상업용 프로젝트의 313 MB 압축 파일은 업로드에 성공한 적이 없다고 밝혔어요. 별도의 공개 저장소에 담긴 538개 파일은 서버의 수신 확인을 받았어요. 큰 압축 파일이 디스크에 있다는 사실만으로 클라우드에 도착했다고 할 수는 없어요.',
      },
      'A separate local inspection': {
        label: '다른 개발자의 로컬 점검',
        text: 'Silent Star는 3.10.1에서 Git 데이터가 많은 파일 목록을 발견했다고 보고했어요. 작은 스냅샷은 서버가 받았고 비공개 저장소 하나는 대기 중이었어요. 분석에 따르면 Git 메타데이터는 일반 파일의 필터를 우회했어요. 과거 커밋의 비밀 정보가 포함될 수 있지만, 작성자는 점검한 저장소에서 실제 인증 정보를 찾지 못했다고 밝혔어요.',
      },
      'The company’s response': {
        label: '회사는 뭐라고 했나요',
        text: 'IT Home에 따르면 Z.ai는 9월 18일 사과하며 코드베이스 인덱싱과 초기에 기본 활성화됐던 Repo Wiki를 원인으로 설명했어요. 회사는 클라우드에서 위키 페이지 생성이 끝나면 업로드 데이터를 파기한다고 해요. ZCode 소스 공개와 외부 검토도 약속했지만, 완료된 감사는 아니에요.',
      },
      'What changed in 3.14.0': {
        label: '3.14.0에서 바뀐 점',
        text: '9월 19일 공식 변경 기록에는 저장소 위키 업로드 수정이 적혀 있어요. ferstar의 후속 점검은 3.14.0이 업로드 경로를 제거했다고 해요. 이는 클라이언트 변화에 관한 결과이며, 이전 데이터 삭제를 독립적으로 확인한 것은 아니에요. FORK YOU는 출처를 검토했으며 클라이언트 분석을 직접 재현하지는 않았어요.',
      },
    },
    ourTake:
      '저장소의 과거 기록도 현재 파일처럼 동의를 받고 전송해야 해요. 개발 도구는 무엇이 컴퓨터 밖으로 나가는지 보여주고, 실제로 끌 수 있게 하고, 보관 약속을 확인할 수 있게 해야 해요. 소스 공개와 독립 감사가 있다면 사용자가 직접 살펴볼 근거가 생겨요.',
    sourceLabels: {
      ferstar: 'ferstar: 원본 분석과 9월 19일 추가 설명 (영어)',
      'silent-star': 'Silent Star: 별도의 로컬 점검 (중국어)',
      ithome: 'IT Home: Z.ai의 사과와 답변 (중국어)',
      'zcode-changelog': 'ZCode: 3.14.0 공식 변경 기록 (영어)',
    },
  },
  'openai-project-lily-chat-review': {
    title: 'Lily 프로젝트: ChatGPT와 나눈 대화를 누가 읽을까요?',
    topic: '사생활과 데이터 검토 노동',
    summary:
      '404 Media는 OpenAI 외주 검토자들이 실제 ChatGPT 대화를 읽으며, 때로 민감한 정보도 포함된다고 보도했어요. OpenAI의 개인 사용자 FAQ도 모델 개선 등 정해진 목적의 제한적 인적 접근을 설명하고 있어요.',
    status: '탐사보도로 알려진 관행',
    context: {
      'The original investigation': {
        label: '처음 보도는 무엇을 밝혔나요',
        text: 'Joseph Cox의 9월 14일 기사는 Lily 프로젝트에서 수백 명의 외주 인력이 챗봇 답변을 평가한다고 설명해요. 404 Media가 본 내부 문서와 실제 입력 내용을 근거로 삼았어요. 사용자의 말에 지나치게 동조하거나 사람 같은 경험을 주장하는 답변을 줄이는 등 응답 개선을 위한 작업이라고 해요.',
      },
      'More than a single prompt': {
        label: '질문 하나만 보이는 건 아닐 수 있어요',
        text: '404 Media를 인용한 Tom’s Hardware의 후속 보도는 검토자가 대화와 사용자 기억 요약을 받으며, 위치 같은 개인적 맥락이 포함될 수 있다고 해요. 같은 조사를 다룬 보도로, 별도의 독립적인 유출 증거는 아니에요.',
      },
      'OpenAI’s response and disclosures': {
        label: 'OpenAI의 답변과 공개 설명',
        text: '404 Media에 따르면 검토자는 사용자 이름을 보지 못해요. OpenAI는 개인 정보를 지우려 하지만 일부가 남을 수 있다고 인정했어요. 개인 사용자 FAQ는 승인된 직원과 서비스 제공자가 악용 조사, 고객 지원, 법률 업무, 모델 개선을 위해 내용을 볼 수 있다고 설명해요. 마지막 목적은 사용자가 거부할 수 있어요. 비밀유지 의무, 접근 제한, 기록도 설명하고 있어요.',
      },
      'What filtering can miss': {
        label: '필터가 놓칠 수 있는 것',
        text: 'OpenAI의 Privacy Filter 문서는 익명성을 보장하지 않으며 드문 식별자나 모호한 사적 표현을 놓칠 수 있다고 밝혀요. 비식별화에 주의가 필요하다는 근거지만, Lily 프로젝트 내부의 실패율을 측정한 자료는 아니에요.',
      },
      'What you can control': {
        label: '내가 바꿀 수 있는 설정',
        text: 'OpenAI는 Settings → Data Controls → Improve the model for everyone에서 학습 이용을 끌 수 있게 해요. FAQ에 따르면 임시 채팅은 학습에 쓰지 않지만 악용 감시 목적으로 검토할 수 있어요. 학습을 거부한다고 다른 명시된 목적의 인적 접근까지 없어진다는 약속은 아니에요.',
      },
    },
    ourTake:
      '사적인 이야기를 하게 되는 화면이라면 누가 그 말을 읽을 수 있는지도 분명히 알려줘야 해요. 민감한 내용을 나누기 전에 이해하고 선택할 수 있어야 하죠. 검토 노동을 하는 사람들의 존재도 드러나야 해요.',
    sourceLabels: {
      '404-media': '404 Media: Lily 프로젝트 원본 조사 (영어)',
      'toms-hardware':
        'Tom’s Hardware: 검토자 접근과 기억 요약 후속 보도 (영어)',
      'consumer-faq': 'OpenAI: 개인 사용자 서비스 데이터 이용 FAQ (영어)',
      'privacy-filter': 'OpenAI: Privacy Filter와 한계 (영어)',
      'data-controls': 'OpenAI: 데이터 제어 FAQ (영어)',
    },
  },
  'anthropic-slowdown-ipo': {
    title: 'Anthropic은 AI 속도를 늦추자면서 상장도 준비하고 있어요.',
    topic: '안전과 돈',
    summary:
      'Dario Amodei는 AI 경쟁을 늦추길 원하고, Anthropic은 상장을 추진하고 있어요. 누가 이익을 얻는지는 따져볼 문제예요. 다만 아래 출처는 상장만을 위한 주장이라는 동기를 입증하지 못해요.',
    status: 'IPO를 위한 동기는 입증되지 않음',
    context: {
      'The proposal': {
        label: '어떤 제안인가요',
        text: 'Amodei는 9월 12일 글에서 성능 향상 속도 조절, 외부 평가자의 개발 과정 참여, 기업과 정부의 협력을 요청했어요. 안전 연구가 따라잡을 시간을 주려는 것이 이유라고 해요. 속도 조절이 모델 학습의 중단을 뜻하지는 않는다고도 밝혔어요.',
      },
      'The money': {
        label: '한편으로는 상장 준비',
        text: 'Reuters는 9월 11일 Nvidia가 Anthropic의 예정된 IPO에 투자하는 방안을 논의 중이라고 보도했어요. 익명 소식통을 인용했고 계획이 바뀔 수 있다고 했으며, Anthropic이 논평을 거절했다고 전했어요.',
      },
      'The criticism': {
        label: '무엇이 논란인가요',
        text: 'Le Monde의 Nicolas Chapuis는 9월 15일 칼럼에서 규제가 더 저렴한 개방형 모델로부터 선두 기업을 보호할 수 있다는 의심을 다뤘어요. 경쟁 압력 속의 진지한 안전 우려라는 다른 해석도 소개했어요. 어느 해석도 숨은 IPO 동기를 입증하지는 못해요.',
      },
    },
    ourTake:
      '안전 규칙에는 독립적인 감시와 시민의 목소리가 필요해요. 누가 규칙을 만들고, 누가 준수 비용을 감당할 수 있으며, 열린 대안이 살아갈 공간이 남는지 살펴봐야 해요.',
    sourceLabels: {
      amodei: 'Dario Amodei: We Must Pace the Frontier (영어)',
      reuters: 'Reuters / Investing.com: Nvidia와 Anthropic IPO 논의 (영어)',
      'le-monde': 'Le Monde: AI 감속 논쟁 뒤의 경제적 이해관계 (영어)',
    },
  },
  'openai-buckmaster-math-credit': {
    title: 'OpenAI가 수학 돌파구를 발표했지만, 공로를 두고 논란이 생겼어요.',
    topic: '연구와 권력',
    summary:
      'OpenAI가 Navier–Stokes 증명을 발표했어요. 뉴욕대 수학자 Tristan Buckmaster는 Levent Alpöge와 진행한 관련 연구를 둘러싼 회사의 행동에 이의를 제기했어요. OpenAI는 그의 설명을 반박하며, 비공개 연구의 사용 여부는 입증되지 않았어요.',
    status: '양측의 설명이 엇갈림',
    context: {
      'The announcement': {
        label: 'OpenAI는 무엇을 발표했나요',
        text: '9월 8일 OpenAI는 논문과 Lean 형식화를 공개하며 Navier–Stokes 밀레니엄 문제의 해법이라고 설명했어요. 이는 회사의 수학적 주장이며, 이 글이 그 증명을 독립적으로 검증한 것은 아니에요.',
      },
      'Buckmaster’s account': {
        label: 'Buckmaster의 설명',
        text: 'Buckmaster는 OpenAI가 Anthropic 직원인 공동 연구자 Alpöge를 제외한 논문을 제안했다고 해요. Codex의 연구 초안을 학습에 썼는지 물었지만 처음에는 답을 받지 못했다고도 했어요. 다만 성명에서 데이터가 사용됐는지는 모른다고 명시했어요. 두 사람의 공개 연구는 외력이 있는 오일러 방정식 등 관련 유체 방정식을 다뤄요.',
      },
      'OpenAI’s response': {
        label: 'OpenAI의 답변',
        text: 'OpenAI는 발표 전에 두 사람의 연구를 본 적이 없다고 부인했어요. 9월 10일 갱신된 설명에서는 직전 두 달간 Buckmaster의 Codex 입력이 학습 등을 통해 영향을 줬을 가능성을 조사로 배제했다고 밝혔어요. WIRED는 Sébastien Bubeck이 OpenAI가 Alpöge의 이름을 빼려 했다는 주장도 반박했다고 전했어요.',
      },
    },
    ourTake:
      '연구 도구를 제공하는 회사가 발견을 놓고 경쟁도 한다면 경계가 분명해야 해요. 결과뿐 아니라 공로의 인정, 데이터 용도, 연산 자원에 대한 접근도 함께 살펴볼 필요가 있어요.',
    sourceLabels: {
      openai: 'OpenAI: 연구 발표와 9월 10일 답변 갱신 (영어)',
      buckmaster: 'Tristan Buckmaster: 공개 성명 (영어 PDF)',
      wired: 'WIRED: 발표와 양측의 설명 (영어)',
    },
  },
};
