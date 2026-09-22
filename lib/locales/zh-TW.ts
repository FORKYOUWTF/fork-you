import type { UICopy } from '../copy.ts';
import type { OrganizationTranslation } from '../directory-zh.ts';
import type { NewsTranslation } from '../news-zh.ts';

export const ui: UICopy = {
  language: '語言',
  automatic: '自動',
  pageTitle: 'FORK YOU — 未來，我們另開一條路。',
  pageDescription:
    '他們想把一切都吃下。未來，我們另開一條路。一起找找值得參與的開源專案、開放協作的公司和公益組織。',
  skip: '跳到專案目錄',
  home: 'FORK YOU 首頁',
  navigation: '網站導航',
  news: '看看新聞',
  manifesto: '為什麼做這個',
  directory: '找到同路人',
  contribute: '一起補充名單',
  kicker: '未來還沒定，我們也有份',
  headline: '他們想把一切都吃下。',
  headlineAccent: '未來，我們另開一條路。',
  intro:
    '想要一個開放的未來，總得有人動手。這裡有開源專案、開放協作的公司，還有值得你出一份力的公益組織。看看有沒有你想加入的。',
  places: (n) => `${n} 個地方，總有一個能開始`,
  concernTitle: '我們在擔心什麼？',
  concern:
    '不妨先做個假設：那些走在 AI 最前面的公司，會想把什麼都吃下——我們用的工具、做的工作，連剩下那點注意力也不放過。如果做什麼都得經過這幾家公司，會怎樣？',
  possibility:
    '這是我們思考的起點。未來還沒定，我們仍然能參與。我們想要看得懂、改得了的工具，能一起商量事情的社群，還有離開一個平台也帶得走的成果。',
  motto: '程式碼公開，事情一起決定，每個人都算數。',
  forkTitle: '為什麼叫「FORK YOU」？',
  fork: '寫程式碼時，fork 就是拿一份共享的程式碼，走出另一條路。我們也想邀你這樣對待未來：寫點程式碼，做個有用的設計，翻譯一份指南，幫人守住權利。讓大家多一種選擇。',
  participateTitle: '我能做點什麼？',
  projectAction: '幫開源專案一個忙。',
  projectHelp: '寫程式碼、補文件、做設計、幫忙翻譯，都算。',
  careerAction: '找一份自己願意支持的工作。',
  careerHelp: '看看這些公司、合作社和非營利組織。',
  volunteerAction: '為在乎的事出一份力。',
  volunteerHelp: '給社群幫個忙，或者支持你關心的公益方向。',
  directoryTitle: '找到你的同路人。',
  curated: '有篩選，也有出處。',
  search: '搜尋組織、關注的話題或技能',
  searchPlaceholder: '搜名字、技能，或你關心的事…',
  clearSearch: '清空搜尋',
  involvement: '你想怎麼參與',
  organizationType: '組織類型',
  matches: (n) => `找到 ${n} 個`,
  emptyTitle: '暫時沒找到合適的。',
  emptyHelp: '換個關鍵字，或者試試別的參與方式。',
  clearFilters: '清空篩選，重新看看',
  directoryNote:
    '徵才連結通往各家的官方頁面，不代表他們今天一定在招人。參與專案或當志工，也可能沒有報酬。',
  communityTitle: '把你認識的好專案也帶來。',
  community:
    '有我們漏掉的專案？還是發現哪條資訊過時了？歡迎幫忙補充，記得帶上出處，讓這份名單更有用。',
  suggest: '推薦一個專案',
  correction: '告訴我們哪裡不對',
  submission:
    '會打開公開的 GitHub 表單，需要登入 GitHub。我們核對建議和更正後，再更新名單。',
  standardsTitle: '什麼樣的組織會被列進來？',
  reasonTitle: '有值得了解的理由',
  reason:
    '做開源、共同擁有，或有據可查地服務公共利益。我們會說清楚為什麼選它。',
  routeTitle: '真的能參與進去',
  route:
    '有官方貢獻指南、徵才頁或志工入口。有報酬和無報酬的參與方式，會分別寫清楚。',
  evidenceTitle: '看出處，別看光環',
  evidence:
    '附上來源和核對日期。不編徵才資訊，不打「獨立性分數」，也不保證誰能躲過 AI 的衝擊。',
  openTitle: '開放，就一定好嗎？',
  open: '當然不是。做開源也要養活自己，非營利組織也會做錯決定。看看它怎麼運作，讀讀來源，多問幾句，再自己判斷。被列在這裡，也不代表對方支持 FORK YOU。',
  slogan: '未來，不能讓幾家公司打包帶走。',
  forkSite: 'Fork 這個網站',
  back: '回到專案目錄',
  categories: {
    all: '全部',
    project: '開源專案',
    company: '公司與合作社',
    nonprofit: '公益與非營利組織',
  },
  singular: {
    project: '開源專案',
    company: '公司 / 合作社',
    nonprofit: '公益 / 非營利組織',
  },
  intents: {
    all: '先都看看',
    contribute: '參與開源專案',
    careers: '找有報酬的工作',
    volunteer: '當志工',
  },
  whyListed: (name) => `為什麼把 ${name} 列在這裡`,
  whyButton: '為什麼選它？',
  receipts: '理由和出處都在這裡',
  whyPicked: '我們為什麼選它',
  editorial: '這是我們的判斷',
  governance: '它是怎麼運作的',
  wayIn: '你可以怎麼參與',
  sources: '看看原始出處',
  reviewed: (date) => `上次核對這些來源是在 ${date}，具體機會可能會變。`,
  detailNote:
    '這份名單給你一個了解的起點，不是雇主認證，也不代表這個組織贊同我們的主張。',
  correctionFor: (name) => `到 GitHub 更正 ${name} 的資訊`,
  publicForm: '這是公開的 GitHub 表單，需要登入。',
  close: '關閉',
  newsKicker: '新聞 / 權力 / 誰來負責',
  newsTitle: '聊新聞，也擺出處。',
  newsIntro:
    'AI 大公司、錢，還有誰說了算。發生了什麼，哪裡還有爭議，我們為什麼在意，都放在這裡。',
  readContext: '展開看看來龍去脈',
  contextFor: (title) => `展開看看：${title}`,
  sourceCount: (n) => `${n} 個來源`,
  sourceLabel: (n, label) => `來源 ${n}：${label}`,
  editorialView: '我們的看法',
  ourTake: '我們怎麼看 · 觀點',
  sourceKinds: {
    'Primary source': '一手來源',
    Reporting: '新聞報導',
    Opinion: '觀點文章',
  },
  checked: '上次核對來源：',
  datedBrief: '（UTC）。這裡記錄的是當時的資訊，後續進展可能改變判斷。',
  newsCorrection: (title) => `更正這篇內容：${title}`,
  bringStory: '有值得聊的新聞？帶著出處來。',
  newsSubmission:
    '推薦新聞或提出更正，會打開公開的 GitHub 表單，需要登入。我們核對來源後，再發布或更新。',
};

export const organizationTranslations: Record<string, OrganizationTranslation> =
  {
    godot: {
      name: 'Godot',
      description: '想做一個自己的遊戲世界？這款開源遊戲引擎可以陪你開始。',
      tags: ['遊戲', 'C++', '文件'],
      reason:
        '共享的遊戲引擎，讓創作者能看原始碼、自己改，也能一直用下去。參與的方式很多，不只是寫程式。',
      governance:
        '專案由非營利的 Godot 基金會支持。貢獻者保留自己程式碼的著作權，引擎使用 MIT 授權條款。',
      participation:
        '先看貢獻指南。引擎開發、文件、示例、教學和社群答疑，都有你能幫忙的地方。這些是社群參與入口，不是職缺。',
    },
    igalia: {
      name: 'Igalia',
      description:
        '在一家由員工共同擁有的技術顧問公司，為開放的網際網路做點事。',
      tags: ['員工所有', '瀏覽器', '工程開發'],
      reason:
        'Igalia 把有報酬的開源開發，和員工所有、民主決策的公司模式放到了一起。',
      governance:
        '這是一家員工共同擁有的開源顧問公司。公開介紹中，它把自己描述為扁平、合作式的組織。',
      participation:
        '去官方徵才頁看看現有機會和申請方式。具體要求和報酬，以每個職位的資訊為準。',
    },
    eff: {
      name: '電子前哨基金會（EFF）',
      description: '為隱私、自由表達，以及我們在數位世界裡的權利出一份力。',
      tags: ['數位權利', '政策', '公共倡議'],
      reason:
        '我們需要好軟體，也需要權利得到保護。EFF 提供了參與公益倡議、法律和技術工作的機會。',
      governance:
        '一家關注數位權利的非營利組織，公開了管理團隊、組織文件和財務報告。',
      participation:
        '機會頁面匯總了工作、實習和志工入口。逐項看看申請條件，以及有沒有報酬。',
    },
    mastodon: {
      name: 'Mastodon',
      description: '讓社群自己經營一小片網際網路的社交網路。',
      tags: ['社交網路', '聯邦式網路', 'Ruby'],
      reason:
        '開源、聯邦式的社交軟體，讓社群能選自己的伺服器、定自己的規則，不必全擠在一個中心平台上。',
      governance:
        '核心專案介紹稱，它由非營利組織開發。各個伺服器有自己的營運者和內容管理規則。',
      participation:
        '從官方程式碼儲存庫開始，提出改動前先讀貢獻指南。社群貢獻通常沒有報酬。',
    },
    codeberg: {
      name: 'Codeberg',
      description: '給開源專案找個家，由非營利社群一起撐起來。',
      tags: ['開發工具', '社群', '基礎設施'],
      reason:
        '由社群支持的開發基礎設施，讓專案在商業程式碼代管平台之外，多一個實實在在的選擇。',
      governance:
        'Codeberg e.V. 是會員制非營利組織。活躍會員可以就協會事務投票，支持型會員的權利有所不同。',
      participation:
        '先看看入會和志工服務說明。入會可能需要交費；有哪些志工角色、目前能否參與，要向 Codeberg 確認。',
    },
    collabora: {
      name: 'Collabora',
      description: '靠做開源系統維生，也讓別人能接著你的成果往下做。',
      tags: ['Linux', '基礎設施', '工程開發'],
      reason:
        '商業公司也能為上游開源專案的維護提供資金。Collabora 明確把這類工作放在工程業務的核心。',
      governance:
        '這是一家商業開源顧問公司。我們收錄它，是因為有據可查的開源工作，不是說它屬於非營利或員工所有的組織。',
      participation:
        '到官方徵才頁查看職位和工作地點。這裡介紹的是公司，不保證它現在一定有空缺。',
    },
    blender: {
      name: 'Blender',
      description: '讓做 3D 創作的人，能把工具掌握在自己手裡。',
      tags: ['3D 與藝術', '設計', '文件'],
      reason:
        '共享的創作工具，讓藝術家在專有軟體訂閱之外還有選擇。設計、程式碼、測試和文件，都需要人參與。',
      governance:
        'Blender 基金會支持這個自由開源專案。開發按模組組織，各類職責有公開說明。',
      participation:
        '參與指南列出了開發、文件、翻譯等入口。開始前，先看看對應團隊的說明。',
    },
    nextcloud: {
      name: 'Nextcloud',
      description: '一起做協作工具，讓使用者自己決定把資料放在哪裡。',
      tags: ['自行架設', 'PHP', '協作'],
      reason:
        '開源、可自行架設的協作工具，讓組織對檔案和對話存在哪裡，有更多選擇。',
      governance:
        '一家有貢獻者社群的商業開源公司，也提供付費產品和服務。被收錄在這裡，不代表它拒絕使用 AI。',
      participation:
        '想找有報酬的工作，可以看徵才頁；想參與程式碼、測試、翻譯或社群工作，可以看貢獻指南。社群貢獻和正式僱用是兩回事。',
    },
    tor: {
      name: 'Tor 專案',
      description: '幫人們在監控和審查之外，自由溝通、瀏覽網路。',
      tags: ['隱私', '對抗審查', '翻譯'],
      reason:
        '當網際網路的控制權越來越集中，保護隱私的基礎設施就更重要。Tor 有技術和非技術的參與方式。',
      governance:
        '一個設有董事會的非營利組織，也有更廣泛的志工社群。徵才頁和社群頁面分別說明了不同的參與方式。',
      participation:
        '社群入口裡有翻譯、推廣、研究和技術志工服務；想找有報酬的職位，可以看徵才頁。每項活動都有自己的參與說明。',
    },
    wikimedia: {
      name: '維基媒體基金會',
      description: '支持自由分享知識的人，也支持他們背後的基礎設施。',
      tags: ['知識', '教育', '公共利益'],
      reason:
        '共享知識需要有人打理基礎設施。維基媒體基金會提供有報酬的工作，支持維基百科等專案背後的技術和社群。',
      governance:
        '非營利的維基媒體基金會支持維基媒體各專案。在基金會任職，和在更廣泛的社群裡以志工身分編輯，是不同的參與方式。',
      participation:
        '到基金會徵才頁查看現有職位、地點要求和申請細節。這條介紹不保證某個職位現在有空缺。',
    },
    libreoffice: {
      name: 'LibreOffice',
      description: '讓天天要用的辦公軟體，成為大家都能一起改進的工具。',
      tags: ['辦公工具', '設計', '翻譯'],
      reason:
        '文件是日常生活的一部分。社群共同開發的辦公套件，讓人們能研究、改進和分享自己用的工具。',
      governance:
        '這是一個由貢獻者社群開發、文件基金會（The Document Foundation）支持的自由開源專案。',
      participation:
        '貢獻指南涵蓋設計、翻譯、文件、開發和測試，也有適合上手的小任務。指南建議先和專案導師聊聊。',
    },
    openstreetmap: {
      name: 'OpenStreetMap（開放街圖）',
      description: '把你對家附近的了解，畫進一張大家都能用的地圖。',
      tags: ['開放資料', '地圖繪製', '社群'],
      reason:
        '共享地圖資料，讓社群在專有地圖服務之外也能有所依靠。熟悉自己生活的地方，本身就是有用的貢獻。',
      governance:
        '這是一個社群協作的地圖專案。OpenStreetMap 基金會代表社群營運主站及相關服務。地圖資料有自己的開放資料授權條款和署名要求。',
      participation:
        '從新手指南學起，了解怎樣畫地圖、幫助社群。這是參與開放資料的入口，不會寫程式也沒關係。',
    },
    zulip: {
      name: 'Zulip',
      description: '和一家由非營利基金會持有的公司，一起做開源團隊聊天工具。',
      tags: ['團隊聊天', '自行架設', '基金會所有'],
      reason:
        '開源聊天軟體加上非營利所有權，給協作工具的長期營運提供了另一種辦法。但這種結構仍然值得細看，不等於自動獲得「獨立」認證。',
      governance:
        '2026 年 5 月的公告稱，Zulip 背後的公司 Kandra Labs 歸獨立的非營利 Zulip 基金會所有。同一公告也提到，創辦人和三位資深成員將離開並加入 Anthropic。',
      participation:
        '到官方徵才頁查看職位和申請要求。這裡介紹的是公司及其基金會所有權，不代表團隊成員與 AI 公司沒有個人聯繫。',
    },
    element: {
      name: 'Element',
      description: '做開放、去中心化的通訊工具，讓聊天多一些選擇。',
      tags: ['即時通訊', '開放標準', '隱私'],
      reason:
        '基於 Matrix 標準的通訊工具，讓人們能更多地決定對話代管在哪裡，以及如何和其他服務連接。',
      governance:
        'Matrix 生態裡的一家商業公司。徵才頁稱，公司編寫的軟體幾乎都是開源的；這不等於每款產品、每項功能都開源。',
      participation:
        '到官方徵才頁查看現有職位和要求。先了解它做的工作和產品模式，再判斷這個團隊是否符合你的想法。',
    },
    openproject: {
      name: 'OpenProject',
      description: '用開源專案管理工具，幫團隊把事情安排好。',
      tags: ['專案管理', '產品與使用者體驗', '工程開發'],
      reason:
        '團隊協作離不開的工具，也可以是共享的基礎設施。OpenProject 把有報酬的產品工作和公開原始碼聯繫在一起。',
      governance:
        '一家商業開源軟體公司。徵才頁介紹了免費的社群版，以及工程、產品、設計和客戶服務等團隊。',
      participation:
        '到官方徵才頁查看空缺和地點要求。團隊介紹能幫你了解工作範圍，但不代表每個方向都在招人。',
    },
    'access-now': {
      name: 'Access Now',
      description: '為處境脆弱的人和社群，守住數位世界裡的權利。',
      tags: ['人權', '政策', '數位安全'],
      reason:
        '開放的未來，也需要有人反對審查、監控和濫用權力。除了寫軟體，你還可以參與權利倡議。',
      governance:
        '一個關注數位權利的全球人權組織，團隊分布在不同地方，徵才流程公開。',
      participation:
        '到官方頁面查看工作、研修專案和實習機會。工作許可與地點要求各不相同；寫著「遠端」，不代表在任何地方都能申請。',
    },
    'open-knowledge': {
      name: '開放知識基金會',
      description: '讓公共知識不只是放在那裡，而是真的能被使用和分享。',
      tags: ['開放資料', '公共利益', '教育'],
      reason:
        '開放知識需要好用的工具、技能和組織來支持。基金會把這些工作和各地服務公共利益的社群聯繫起來。',
      governance:
        '一家註冊於英格蘭及威爾士的非營利組織，公開治理、董事會和資助方資訊，既做基金會工作，也提供服務。',
      participation:
        '到職位與機會頁面看看目前有哪些選擇。這是一個值得了解的組織，不代表它今天有某個特定職缺。',
    },
    framasoft: {
      name: 'Framasoft',
      description: '幫社群把日常用的數位工具，重新掌握在自己手裡。',
      tags: ['自由軟體', '社群', '翻譯'],
      reason:
        'Framasoft 不只批評技術權力過於集中，也把想法做成了大家能用的軟體、服務和公共教育資源。',
      governance:
        '一家法國非營利協會，開發自由軟體、營運面向社群的服務，由捐款、員工和志工共同支持。',
      participation:
        '參與入口有英文介紹，進一步的資料可能是法語。先看看各專案的說明，再決定從哪裡幫起。',
    },
  };

export const actionLabels: Record<string, string> = {
  'Find a contribution': '看看能幫什麼忙',
  'Explore careers': '看看工作機會',
  'Find volunteer routes': '看看志工機會',
  'Explore the source': '看看原始碼和參與方式',
  'Explore ways to help': '看看怎麼出一份力',
  'Start mapping': '開始畫地圖',
};

export const sourceLabels: Record<string, string> = {
  'Ways to contribute': '可以怎樣參與',
  'Governance model': '專案治理方式',
  'Igalia values and cooperative decision-making':
    'Igalia 的理念與共同決策方式',
  'Working at Igalia': '在 Igalia 工作',
  'Official opportunities and volunteer links': '官方工作機會與志工入口',
  'Mastodon: software, federation, and organization':
    'Mastodon：軟體、聯邦式網路與組織介紹',
  'Membership, voting rights, and volunteering': '會員、投票權與志工服務',
  'Careers and open-source engineering': '工作機會與開源開發',
  'Ways to get involved': '可以怎樣參與',
  'Blender Foundation': 'Blender 基金會',
  'Jobs and company description': '工作機會與公司介紹',
  'Community contribution guide': '社群貢獻指南',
  'Tor community portal': 'Tor 社群入口',
  'Jobs and organization': '工作機會與組織介紹',
  'Foundation careers and mission': '基金會的工作機會與使命',
  'Community and contribution routes': '社群與參與方式',
  'Community, open data, and Foundation role': '社群、開放資料與基金會的職責',
  'Welcome and ways to contribute': '新手指南與參與方式',
  'Jobs and current stewardship': '工作機會與目前的營運情況',
  'Foundation ownership and leadership transition': '基金會所有權與團隊變動',
  'Careers and open-source work': '工作機會與開源工作',
  'Teams, open-source model, and careers': '團隊、開源模式與工作機會',
  'Mission, employment, and application requirements':
    '使命、工作機會與申請條件',
  'Mission, organization, and governance links': '使命、組織與治理資訊',
  'Jobs and opportunities': '職位與參與機會',
  'Association, mission, and projects': '協會、使命與專案',
  'Participation guide': '參與指南',
};

export const newsTranslations: Record<string, NewsTranslation> = {
  'zcode-git-workspace-uploads': {
    title: 'ZCode 上傳的，不只是原始碼，還有 .git 裡的歷史。',
    topic: '程式碼隱私與使用者同意',
    summary:
      '研究者發現，ZCode 會把專案檔案和 Git 歷史打包，準備在背景上傳。智譜隨後道歉，新版本也處理了這條上傳流程。但此前已經傳到雲端的資料，後來怎麼樣了，仍無法獨立核實。',
    status: '發現上傳行為，後續報告稱已修復',
    context: {
      'What was packaged': {
        label: '到底打包了什麼',
        text: 'ferstar 在 9 月 18 日對 ZCode 3.12.3 的分析中，描述了一條把工作區快照加密後傳向阿里雲儲存的傳輸流程。檔案清單裡有原始碼、Git 物件、LFS 大型檔案快取和 reflog 操作記錄。在他測量的那份快照裡，.git 佔了 86.6%。',
      },
      'An attempted upload is not a completed upload': {
        label: '準備上傳，不等於已經傳出去了',
        text: '作者在 9 月 19 日補充說明：那份 313 MB 的商業專案壓縮檔，從未成功上傳。另一個包含 538 個檔案的公開儲存庫，則得到了伺服器端的接收確認。電腦裡出現了大壓縮檔，不能單憑這一點就說它已經到了雲端。',
      },
      'A separate local inspection': {
        label: '另一位開發者也檢查了自己的電腦',
        text: 'Silent Star 報告稱，在 3.10.1 版中發現了以 Git 資料為主的檔案清單：較小的快照被伺服器端接收，一個私人儲存庫仍在等待上傳。其分析認為，Git 中繼資料繞過了一般檔案的過濾規則。這可能讓以前提交過的金鑰也被帶進去，但作者說，在這次檢查的儲存庫中沒有發現真實認證資訊。',
      },
      'The company’s response': {
        label: '智譜怎麼回應',
        text: '據 IT 之家報導，智譜在 9 月 18 日道歉，將問題歸因於程式碼庫索引和上線初期預設開啟的 Repo Wiki 功能。公司稱，雲端生成 Wiki 頁面後，上傳的資料會被銷毀。它還承諾開源 ZCode、請外部人員審查；這些是承諾，還不是已經完成的稽核。',
      },
      'What changed in 3.14.0': {
        label: '3.14.0 改了什麼',
        text: 'ZCode 的 9 月 19 日更新說明列出了一項儲存庫 Wiki 上傳修復。ferstar 後續檢查稱，3.14.0 已移除上傳流程。這能說明用戶端的變化，卻不能獨立證明之前上傳的資料已經刪除。FORK YOU 核對了這些來源，沒有自行重現用戶端分析。',
      },
    },
    ourTake:
      '儲存庫的歷史和目前的檔案一樣，都應該在你知情同意後才能上傳。程式開發工具該說清楚哪些東西會離開電腦，給一個真的管用的關閉開關，也讓資料保留承諾經得起核查。公開原始碼和獨立稽核，能讓使用者有實實在在的東西可看。',
    sourceLabels: {
      ferstar: 'ferstar：原始分析與 9 月 19 日補充說明（英文）',
      'silent-star': 'Silent Star：在自己電腦上的獨立檢查',
      ithome: 'IT 之家：智譜的道歉與回應',
      'zcode-changelog': 'ZCode：3.14.0 官方更新說明（英文）',
    },
  },
  'openai-project-lily-chat-review': {
    title: 'Lily 專案：誰在讀你和 ChatGPT 的對話？',
    topic: '隱私與資料審核工作',
    summary:
      '404 Media 報導稱，OpenAI 的外包審核人員會閱讀真實的 ChatGPT 對話，有時其中還包含敏感資訊。OpenAI 面向個人使用者的常見問題中，也說明了為改進模型等特定目的進行有限人工存取的情況。',
    status: '據調查報導',
    context: {
      'The original investigation': {
        label: '原始調查發現了什麼',
        text: 'Joseph Cox 在 9 月 14 日的報導中描述，Lily 專案僱用了數百名外包人員給聊天機器人的回覆打分，依據包括 404 Media 看到的內部文件和真實提示詞。這項工作旨在改善回覆，比如減少過度迎合，以及聲稱自己擁有人類感受或經歷的說法。',
      },
      'More than a single prompt': {
        label: '看到的可能不只是一句提問',
        text: 'Tom’s Hardware 引用 404 Media 的後續報導說，審核人員拿到的除了對話，還可能有使用者記憶摘要，其中可能包含位置等個人背景。這篇報導沿用了同一次調查，並不是另一批獨立外洩的證據。',
      },
      'OpenAI’s response and disclosures': {
        label: 'OpenAI 的回應與公開說明',
        text: '404 Media 報導稱，審核人員看不到使用者名稱；OpenAI 表示會盡力去除個人資訊，但承認仍可能有遺漏。其個人使用者常見問題說明，獲授權的員工和服務商可為濫用調查、客服、法律事務或模型改進存取內容；使用者可以退出最後這一項用途。頁面也介紹了保密義務、存取限制和操作記錄。',
      },
      'What filtering can miss': {
        label: '去掉個人資訊，也可能有漏網之魚',
        text: 'OpenAI 的 Privacy Filter 文件明確提醒，這個工具不保證匿名化，也可能漏掉少見的身分識別資訊或含義不明確的私人資訊。這說明脫敏需要謹慎，但不能用來推算 Lily 專案內部實際漏掉了多少。',
      },
      'What you can control': {
        label: '你能控制哪些設定',
        text: 'OpenAI 提供訓練退出選項，路徑是 Settings → Data Controls → Improve the model for everyone（設定 → 資料控制 → 為所有人改進模型）。常見問題說，暫時聊天不會用於訓練，但可能因濫用監測而被審核。退出訓練，不等於公司承諾其他已列明的用途也完全沒有人工存取。',
      },
    },
    ourTake:
      '一個讓人願意聊私事的介面，也該把「誰可能看到這些話」講清楚。使用者應該能在分享敏感內容之前，了解並決定是否接受。做審核工作的那些人，也值得被看見。',
    sourceLabels: {
      '404-media': '404 Media：Lily 專案原始調查（英文）',
      'toms-hardware': 'Tom’s Hardware：審核權限與記憶摘要的後續報導（英文）',
      'consumer-faq': 'OpenAI：個人使用者服務的資料使用說明（英文）',
      'privacy-filter': 'OpenAI：Privacy Filter 及其局限（英文）',
      'data-controls': 'OpenAI：資料控制常見問題（英文）',
    },
  },
  'anthropic-slowdown-ipo': {
    title: 'Anthropic 一邊呼籲 AI 慢一點，一邊籌備上市。',
    topic: '安全與商業利益',
    summary:
      'Dario Amodei 希望 AI 競賽放慢腳步，同時 Anthropic 正在尋求上市。誰會從中受益，確實值得討論。但下面這些來源，並沒有證明它呼籲放慢發展只是為了 IPO。',
    status: '「為了 IPO」的動機尚未證實',
    context: {
      'The proposal': {
        label: '他提出了什麼',
        text: 'Amodei 在 9 月 12 日的文章中呼籲放慢能力增長，讓外部評估人員進入研發過程，並加強公司與政府之間的協調。他給出的理由是，讓安全工作有時間跟上。他也說，這種節奏調整不會停止模型訓練。',
      },
      'The money': {
        label: '另一邊，上市在推進',
        text: '路透社 9 月 11 日報導稱，輝達正商談投資 Anthropic 計畫中的 IPO。報導引用了匿名消息人士，提醒計畫仍可能改變，並記錄了 Anthropic 拒絕置評的回應。',
      },
      'The criticism': {
        label: '爭議在哪裡',
        text: '《世界報》的 Nicolas Chapuis 在 9 月 15 日的專欄中談到一種懷疑：監管會不會保護領先的公司，讓成本更低的開放模型更難競爭？他也提到另一種解釋：在競爭壓力下，公司確實有安全擔憂。這兩種解釋，都不能直接證明背後藏著 IPO 動機。',
      },
    },
    ourTake:
      '安全規則需要獨立監督，也需要公眾發聲。值得盯緊的是：誰在制定規則，誰負擔得起合規成本，開放的替代方案還有沒有生存空間。',
    sourceLabels: {
      amodei: 'Dario Amodei：We Must Pace the Frontier（英文）',
      reuters:
        '路透社，經 Investing.com 刊載：輝達與 Anthropic 的 IPO 商談（英文）',
      'le-monde': '《世界報》：AI 減速爭論背後的商業利益（英文）',
    },
  },
  'openai-buckmaster-math-credit': {
    title: 'OpenAI 宣布數學突破，成果歸屬卻起了爭議。',
    topic: '研究與權力',
    summary:
      'OpenAI 宣布了一個 Navier–Stokes 問題的證明。紐約大學數學家 Tristan Buckmaster 質疑它在自己與 Levent Alpöge 的相關研究中所作的處理。OpenAI 不認同他的說法；是否使用了兩人未公開的研究，目前尚未證實。',
    status: '雙方說法存在爭議',
    context: {
      'The announcement': {
        label: 'OpenAI 宣布了什麼',
        text: '9 月 8 日，OpenAI 發布了它所稱的 Navier–Stokes 千禧年大獎問題解答，並附上論文和 Lean 形式化證明。這是公司的數學主張；這篇簡報沒有獨立驗證該證明。',
      },
      'Buckmaster’s account': {
        label: 'Buckmaster 怎麼說',
        text: 'Buckmaster 說，OpenAI 曾提議發表一篇不署名其合作者 Alpöge 的論文；Alpöge 是 Anthropic 員工。他還說，自己詢問兩人在 Codex 中的草稿是否被用於訓練，起初沒有得到答覆。他在聲明中明確表示，不知道資料是否被使用。兩人已發表的結果涉及相關流體方程，包括受迫歐拉方程。',
      },
      'OpenAI’s response': {
        label: 'OpenAI 如何回應',
        text: 'OpenAI 否認在成果發表前看過兩人的研究。公司在 9 月 10 日更新中表示，經調查，已排除 Buckmaster 在此前兩個月的 Codex 提示詞對系統的影響，包括訓練方面。WIRED 還報導，Sébastien Bubeck 否認了 OpenAI 試圖去掉 Alpöge 署名的說法。',
      },
    },
    ourTake:
      '當提供研究工具的公司，也在爭取率先做出發現，邊界就更需要講清楚。除了結果本身，成果歸屬、資料用途和算力獲取，也都值得認真追問。',
    sourceLabels: {
      openai: 'OpenAI：研究公告與 9 月 10 日回應更新（英文）',
      buckmaster: 'Tristan Buckmaster：公開聲明（英文 PDF）',
      wired: 'WIRED：研究公告與雙方說法（英文）',
    },
  },
};
