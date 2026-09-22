import type { UICopy } from '../copy.ts';
import type { OrganizationTranslation } from '../directory-zh.ts';
import type { NewsTranslation } from '../news-zh.ts';

export const ui: UICopy = {
  language: '言語',
  automatic: '自動',
  pageTitle: 'FORK YOU — 未来に、別の道をつくろう。',
  pageDescription:
    'すべてをのみ込もうとする企業たち。未来に、別の道をつくろう。力を貸したくなるオープンソースのプロジェクトや企業、公益団体を探せます。',
  skip: '一覧へスキップ',
  home: 'FORK YOU ホーム',
  navigation: 'メインメニュー',
  news: 'ニュース',
  manifesto: 'このサイトの思い',
  directory: '仲間を見つける',
  contribute: '一覧づくりに参加',
  kicker: '未来は、まだ決まっていない',
  headline: 'すべてをのみ込もうとする企業たち。',
  headlineAccent: '未来に、別の道をつくろう。',
  intro:
    '開かれた未来には、つくる人が必要です。オープンソースのプロジェクト、開かれたものづくりをする企業、力を貸したくなる公益団体。自分に合う場所を探してみませんか。',
  places: (n) => 'まずは、この' + n + 'か所から',
  concernTitle: '何を心配しているの？',
  concern:
    '最先端のAI企業は、すべてをのみ込もうとする。そんな仮定から始めます。使う道具も、仕事も、残された時間と関心も。何をするにも、ほんの数社を通らなければならなくなったら？',
  possibility:
    'これは私たちの出発点となる仮定です。未来はまだ変えられます。中身を確かめられる道具、自分たちで決められるコミュニティ、サービスを離れても持ち出せる成果がほしいのです。',
  motto: 'コードは開く。力は分かち合う。人を大切にする。',
  forkTitle: 'どうして「FORK YOU」？',
  fork: 'ソフトウェアのforkは、共有されたコードを受け継いで、新しい方向に進めること。未来にも、そんな別の道をつくろうという誘いです。コードを書く、使いやすいものをデザインする、ガイドを訳す、誰かの権利を守る。選択肢を一緒に育てましょう。',
  participateTitle: '自分には何ができる？',
  projectAction: '開かれたプロジェクトを手伝う。',
  projectHelp: 'コード、文書、デザイン、翻訳など、参加の形はいろいろ。',
  careerAction: '応援したくなる仕事で働く。',
  careerHelp: '企業、協同組合、非営利団体の有給の仕事を探してみよう。',
  volunteerAction: '大切にしたいことに時間を使う。',
  volunteerHelp: '気になるコミュニティや公益活動に力を貸そう。',
  directoryTitle: '一緒に進む仲間を見つけよう。',
  curated: '選んだ理由も、出典も。',
  search: '団体、関心のあること、スキルを検索',
  searchPlaceholder: '気になること、できること、名前で検索…',
  clearSearch: '検索をクリア',
  involvement: 'どんな形で参加したい？',
  organizationType: '組織の種類',
  matches: (n) => n + '件見つかりました',
  emptyTitle: 'まだ見つかりませんでした。',
  emptyHelp: '別の言葉や参加方法で探してみてください。',
  clearFilters: '絞り込みを解除',
  directoryNote:
    '採用リンクは公式ページにつながります。現在募集中とは限りません。プロジェクトへの貢献やボランティアは無報酬の場合があります。',
  communityTitle: '知っているいい場所、教えてください。',
  community:
    '載っていないプロジェクトや、古い情報を見つけましたか？確認できる出典と一緒に知らせてもらえると、この一覧がもっと役立ちます。',
  suggest: 'プロジェクトを推薦',
  correction: '誤りを知らせる',
  submission:
    'GitHubの公開フォームが開きます。アカウントが必要です。提案や訂正を確認してから一覧を更新します。',
  standardsTitle: 'どんな団体を載せるの？',
  reasonTitle: 'ここに載る理由がある',
  reason:
    'オープンソースの活動、共同所有、記録で確かめられる公益の目的。どこがつながるのかを説明します。',
  routeTitle: '実際に参加できる入口がある',
  route:
    '公式の貢献ガイド、採用ページ、ボランティアの窓口。報酬のある仕事とない活動を分けて示します。',
  evidenceTitle: 'お墨付きより、出典を',
  evidence:
    '出典と確認日を添えます。架空の求人や「独立性スコア」、「AIの影響を受けない」という保証はつくりません。',
  openTitle: '開かれていれば、完璧？',
  open: 'そうとは限りません。オープンソースで生計を立てることも、非営利団体が判断を誤ることもあります。運営の仕組みや出典を読み、質問して、自分で考えてみてください。掲載は、その団体がFORK YOUを支持しているという意味ではありません。',
  slogan: '未来まで、お持ち帰りにはさせない。',
  forkSite: 'このサイトをforkする',
  back: '一覧に戻る',
  categories: {
    all: 'すべて',
    project: '開かれたプロジェクト',
    company: '企業・協同組合',
    nonprofit: 'NGO・非営利団体',
  },
  singular: {
    project: '開かれたプロジェクト',
    company: '企業 / 協同組合',
    nonprofit: 'NGO / 非営利団体',
  },
  intents: {
    all: 'どんな形でも',
    contribute: 'プロジェクトを手伝う',
    careers: '報酬のある仕事を探す',
    volunteer: 'ボランティアで参加',
  },
  whyListed: (name) => name + 'を紹介する理由',
  whyButton: '選んだ理由は？',
  receipts: '理由と出典を見てみよう',
  whyPicked: 'ここを選んだ理由',
  editorial: '私たちの判断です',
  governance: 'どう運営している？',
  wayIn: 'どう参加できる？',
  sources: '出典を読む',
  reviewed: (date) =>
    '出典の最終確認：' + date + '。参加できる機会は変わることがあります。',
  detailNote:
    'この一覧は、調べ始めるための入口です。雇用主の認証でも、その団体が私たちの宣言に賛同しているという意味でもありません。',
  correctionFor: (name) => name + 'の情報をGitHubで訂正する',
  publicForm: 'GitHubの公開フォームです。ログインが必要です。',
  close: '閉じる',
  newsKicker: 'ニュース / 権力 / 説明責任',
  newsTitle: 'ニュースも、その根拠も。',
  newsIntro:
    'AI企業、お金、そして誰が決めるのか。何が起きて、何が争われていて、なぜ気になるのかをまとめます。',
  readContext: '背景を読んでみる',
  contextFor: (title) => '背景を読む：' + title,
  sourceCount: (n) => '出典' + n + '件',
  sourceLabel: (n, label) => '出典' + n + '：' + label,
  editorialView: '私たちの見方',
  ourTake: '私たちはこう考える · 意見',
  sourceKinds: {
    'Primary source': '一次資料',
    Reporting: '報道',
    Opinion: '意見',
  },
  checked: '出典の確認日：',
  datedBrief:
    '（UTC）。この時点の情報をまとめています。その後の動きで見方が変わることがあります。',
  newsCorrection: (title) => 'この記事を訂正する：' + title,
  bringStory: '気になるニュース、出典と一緒に教えてください。',
  newsSubmission:
    '提案や訂正はGitHubの公開フォームに進み、ログインが必要です。出典を確認してから公開・更新します。',
};

export const organizationTranslations: Record<string, OrganizationTranslation> =
  {
    godot: {
      name: 'Godot',
      description:
        'つくりたい世界がある人のための、オープンソースのゲームエンジン。',
      tags: ['ゲーム', 'C++', '文書'],
      reason:
        '共有のゲームエンジンなら、中身を調べ、手を加え、使い続けられます。プログラミング以外にも参加の道があります。',
      governance:
        '非営利のGodot Foundationが支援しています。貢献者は自分のコードの著作権を保ち、エンジンはMITライセンスを使います。',
      participation:
        'まず貢献ガイドへ。エンジン、文書、デモ、チュートリアル、コミュニティ支援などがあります。求人ではなく、コミュニティへの参加窓口です。',
    },
    igalia: {
      name: 'Igalia',
      description:
        '働く人たちが所有する技術コンサルティング会社で、開かれたWebをつくる。',
      tags: ['従業員所有', 'ブラウザ', 'エンジニアリング'],
      reason:
        '有給のオープンソース開発と、従業員所有・民主的な経営を組み合わせています。',
      governance:
        '従業員が所有するオープンソースのコンサルティング会社。公開情報では、水平的で協同的な組織と説明しています。',
      participation:
        '公式採用ページで募集と応募方法を確認してください。条件や報酬は各職種によって異なります。',
    },
    eff: {
      name: '電子フロンティア財団（EFF）',
      description: 'プライバシー、表現の自由、デジタル社会での権利を守る。',
      tags: ['デジタル権利', '政策', '権利擁護'],
      reason:
        'よいソフトウェアだけでなく、権利を守る活動も必要です。EFFには政策提言、法律、技術で参加する道があります。',
      governance:
        'デジタル権利に取り組む非営利団体。役員、組織の文書、財務報告を公開しています。',
      participation:
        '機会の案内ページに求人、インターン、ボランティアがまとまっています。それぞれの条件と報酬の有無を確認してください。',
    },
    mastodon: {
      name: 'Mastodon',
      description:
        'コミュニティが、自分たちのインターネットの一角を運営できるSNS。',
      tags: ['SNS', '連合型ネットワーク', 'Ruby'],
      reason:
        '開かれた連合型SNSなら、サーバーやルールを選べます。全員が一つの中央プラットフォームに頼る必要はありません。',
      governance:
        '中心となるプロジェクトは非営利組織が開発すると説明しています。各サーバーには独自の運営者とモデレーション方針があります。',
      participation:
        '公式リポジトリから始め、変更を提案する前に貢献ガイドを読んでください。コミュニティへの貢献は通常、無報酬です。',
    },
    codeberg: {
      name: 'Codeberg',
      description:
        '非営利のコミュニティが支える、オープンソースプロジェクトの居場所。',
      tags: ['開発ツール', 'コミュニティ', 'インフラ'],
      reason:
        'コミュニティが支える開発基盤は、商用のコードホスティング以外の実用的な選択肢になります。',
      governance:
        'Codeberg e.V.は会員制の非営利団体です。活動会員は団体の運営について投票でき、支援会員とは権利が異なります。',
      participation:
        '入会とボランティアの案内を確認してください。会費がかかる場合があります。募集する役割や受け入れ状況はCodebergに確かめましょう。',
    },
    collabora: {
      name: 'Collabora',
      description: '誰かが引き継いで育てられる、開かれたシステムを仕事にする。',
      tags: ['Linux', 'インフラ', 'エンジニアリング'],
      reason:
        '商用の仕事も、上流のオープンソースプロジェクトの保守を支えられます。Collaboraはそれを技術事業の中心に据えています。',
      governance:
        '商用のオープンソースコンサルティング会社。確認できるオープンソース活動を理由に紹介しており、非営利や従業員所有という意味ではありません。',
      participation:
        '公式採用ページで職種と勤務地を確認してください。この紹介は、現在の募集を保証するものではありません。',
    },
    blender: {
      name: 'Blender',
      description: '3Dをつくる人たちが、自分の手に取り戻せる制作ツール。',
      tags: ['3D・アート', 'デザイン', '文書'],
      reason:
        '共有の制作ツールは、専有ソフトのサブスクリプション以外の選択肢になります。デザイン、コード、テスト、文書で参加できます。',
      governance:
        'Blender Foundationが支える自由でオープンソースのプロジェクト。開発はモジュールごとに分かれ、担当する役割が公開されています。',
      participation:
        '参加ガイドには開発、文書、翻訳などの入口があります。始める前に、関わりたいチームの案内を読んでください。',
    },
    nextcloud: {
      name: 'Nextcloud',
      description:
        'データをどこに置くか、自分たちで決められる共同作業ツールをつくる。',
      tags: ['セルフホスト', 'PHP', '共同作業'],
      reason:
        '開かれたツールを自前で運用できれば、ファイルや会話をどこに保存するか、組織の選択肢が増えます。',
      governance:
        '貢献者コミュニティと有料製品・サービスを持つ商用のオープンソース企業です。ここへの掲載は、AIを使わないという意味ではありません。',
      participation:
        '有給の仕事は採用ページへ。コード、テスト、翻訳、コミュニティ活動は貢献ガイドへ。コミュニティへの貢献と雇用は別です。',
    },
    tor: {
      name: 'Tor Project',
      description: '監視や検閲を避けて、話し、Webを使えるようにする。',
      tags: ['プライバシー', '検閲への抵抗', '翻訳'],
      reason:
        'インターネットの支配が集中するほど、プライバシーを守る基盤が大切です。Torには技術系以外の参加方法もあります。',
      governance:
        '理事会を持つ非営利組織と、より広いボランティアのコミュニティがあります。採用とコミュニティのページで参加方法を分けて案内しています。',
      participation:
        'コミュニティの入口には翻訳、広報、研究、技術ボランティアがあります。有給の仕事は採用ページへ。活動ごとの案内を確認してください。',
    },
    wikimedia: {
      name: 'ウィキメディア財団',
      description: '知識を自由に分かち合う人たちと、その土台を支える。',
      tags: ['知識', '教育', '公益'],
      reason:
        '共有の知識には、手入れされる基盤が必要です。財団には、Wikipediaなどの技術とコミュニティを支える有給の仕事があります。',
      governance:
        '非営利のウィキメディア財団が各プロジェクトを支援しています。財団で働くことと、コミュニティでボランティアとして編集することは異なります。',
      participation:
        '財団の採用ページで現在の職種、勤務地の条件、応募方法を確認してください。特定の求人を保証する紹介ではありません。',
    },
    libreoffice: {
      name: 'LibreOffice',
      description: '毎日使うオフィスソフトを、みんなでよくしていく。',
      tags: ['オフィスツール', 'デザイン', '翻訳'],
      reason:
        '文書は暮らしの一部です。コミュニティでつくるオフィスソフトなら、使う道具を調べ、改善し、共有できます。',
      governance:
        'The Document Foundationと貢献者コミュニティが支える、自由でオープンソースのプロジェクトです。',
      participation:
        '案内にはデザイン、翻訳、文書、開発、テスト、最初の小さな課題があります。まずプロジェクトのメンターに相談することを勧めています。',
    },
    openstreetmap: {
      name: 'OpenStreetMap',
      description: 'よく知る近所のことを、みんなで使える地図にしよう。',
      tags: ['オープンデータ', '地図づくり', 'コミュニティ'],
      reason:
        '共有の地図データは、専有サービス以外の選択肢になります。住んでいる場所をよく知っていることも、役立つ貢献です。',
      governance:
        'コミュニティによる地図プロジェクト。OpenStreetMap財団が主サイトと関連サービスをコミュニティのために運営しています。データには独自のオープンライセンスと帰属表示の条件があります。',
      participation:
        '初めての方向けのガイドで、地図づくりや支援を学べます。オープンデータへの参加で、プログラミングは必須ではありません。',
    },
    zulip: {
      name: 'Zulip',
      description:
        '非営利財団が所有する会社とつくる、オープンソースのチームチャット。',
      tags: ['チームチャット', 'セルフホスト', '財団所有'],
      reason:
        '開かれたチャットと非営利の所有形態は、共同作業ツールを続ける別の方法です。ただし、その仕組みは確認が必要で、自動的な「独立」の認定にはなりません。',
      governance:
        '2026年5月の発表では、Zulipの会社Kandra Labsは独立した非営利のZulip Foundationが所有しています。同じ発表で、創業者と経験豊富なメンバー3人がAnthropicへ移ることも明かしています。',
      participation:
        '公式採用ページで職種と条件を確認してください。会社と所有形態の紹介であり、メンバーにAI企業との個人的なつながりがないという主張ではありません。',
    },
    element: {
      name: 'Element',
      description:
        '開かれた分散型コミュニケーションのためのメッセージングをつくる。',
      tags: ['メッセージング', 'オープン標準', 'プライバシー'],
      reason:
        'Matrix標準に基づく通信は、会話の保存先や他サービスとの接続について、より多くの選択肢を与えます。',
      governance:
        'Matrixのエコシステムにある商用企業。採用ページでは、書かれるソフトウェアのほぼすべてがオープンソースと説明しており、全製品・全機能を意味するわけではありません。',
      participation:
        '公式ページで募集と条件を確認してください。仕事や製品の仕組みを見て、自分の考えと合うか確かめましょう。',
    },
    openproject: {
      name: 'OpenProject',
      description:
        'オープンソースのプロジェクト管理で、チームの仕事を整理する。',
      tags: ['プロジェクト管理', 'プロダクト・UX', 'エンジニアリング'],
      reason:
        'チームが頼る調整の道具も、共有の基盤にできます。OpenProjectは有給の製品開発と公開コードをつなげています。',
      governance:
        '商用のオープンソース企業。採用ページでは無料のCommunity版と、開発、製品、デザイン、顧客対応のチームを紹介しています。',
      participation:
        '公式採用ページで職種と勤務地の条件を確認してください。チーム紹介は、すべての分野で募集中という意味ではありません。',
    },
    'access-now': {
      name: 'Access Now',
      description: '危険にさらされる人やコミュニティの、デジタル権利を守る。',
      tags: ['人権', '政策', 'デジタルセキュリティ'],
      reason:
        '開かれた未来には、検閲、監視、権力の乱用に向き合う人も必要です。権利擁護は、ソフトウェアを書く以外の参加の道です。',
      governance:
        'デジタル権利を中心に活動する国際的な人権団体。各地にいるチームと、公開された採用手続きがあります。',
      participation:
        '公式ページで求人、フェローシップ、インターンを確認してください。就労資格や勤務地の条件は異なり、リモートでもどこからでも応募できるとは限りません。',
    },
    'open-knowledge': {
      name: 'Open Knowledge Foundation',
      description: '公共の知識を、実際に使い、分かち合えるものにする。',
      tags: ['オープンデータ', '公益', '教育'],
      reason:
        '開かれた知識には、道具、スキル、組織の支えが必要です。財団はそれらを各地の公益コミュニティとつなぎます。',
      governance:
        'イングランドとウェールズで登録された非営利組織。運営、理事会、資金提供者の情報を公開し、財団活動とサービス提供の両方を行います。',
      participation:
        '仕事と機会のページで今の選択肢を見てください。調べる価値のある団体という紹介で、特定の職種の募集を保証するものではありません。',
    },
    framasoft: {
      name: 'Framasoft',
      description: '日々のデジタルツールを、コミュニティの手に取り戻す。',
      tags: ['自由ソフトウェア', 'コミュニティ', '翻訳'],
      reason:
        '技術の力が集中することへの批判を、使えるソフトウェア、サービス、学びの資料にしています。',
      governance:
        '自由ソフトウェアとコミュニティ向けサービスをつくるフランスの非営利団体。寄付、職員、ボランティアが支えています。',
      participation:
        '参加の入口は英語で案内されていますが、詳しい資料はフランス語の場合があります。各プロジェクトの説明を読んで、手伝う場所を選びましょう。',
    },
  };
export const actionLabels: Record<string, string> = {
  'Find a contribution': '手伝えることを探す',
  'Explore careers': '仕事を探す',
  'Find volunteer routes': 'ボランティアの入口へ',
  'Explore the source': 'コードと参加方法を見る',
  'Explore ways to help': '力を貸す方法を探す',
  'Start mapping': '地図づくりを始める',
};
export const sourceLabels: Record<string, string> = {
  'Ways to contribute': '貢献できること',
  'Governance model': '運営の仕組み',
  'Igalia values and cooperative decision-making':
    'Igaliaの価値観と共同の意思決定',
  'Working at Igalia': 'Igaliaで働く',
  'Official opportunities and volunteer links': '公式の仕事・ボランティア窓口',
  'Mastodon: software, federation, and organization':
    'Mastodon：ソフトウェア、連合の仕組み、組織',
  'Membership, voting rights, and volunteering': '会員、投票権、ボランティア',
  'Careers and open-source engineering': '採用とオープンソース開発',
  'Ways to get involved': '参加できること',
  'Blender Foundation': 'Blender財団',
  'Jobs and company description': '採用と会社紹介',
  'Community contribution guide': 'コミュニティへの貢献ガイド',
  'Tor community portal': 'Torコミュニティの入口',
  'Jobs and organization': '採用と組織紹介',
  'Foundation careers and mission': '財団の採用と使命',
  'Community and contribution routes': 'コミュニティと参加方法',
  'Community, open data, and Foundation role':
    'コミュニティ、オープンデータ、財団の役割',
  'Welcome and ways to contribute': '初めての方へ・参加方法',
  'Jobs and current stewardship': '採用と現在の運営',
  'Foundation ownership and leadership transition':
    '財団の所有と運営メンバーの交代',
  'Careers and open-source work': '採用とオープンソース活動',
  'Teams, open-source model, and careers':
    'チーム、オープンソースの仕組み、採用',
  'Mission, employment, and application requirements': '使命、採用、応募条件',
  'Mission, organization, and governance links': '使命、組織、運営の情報',
  'Jobs and opportunities': '仕事と参加の機会',
  'Association, mission, and projects': '団体、使命、プロジェクト',
  'Participation guide': '参加ガイド',
};

export const newsTranslations: Record<string, NewsTranslation> = {
  'zcode-git-workspace-uploads': {
    title: 'ZCodeのアップロードには、コードだけでなく.gitの履歴も。',
    topic: 'コードのプライバシーと同意',
    summary:
      '研究者たちは、ZCodeがプロジェクトのファイルとGit履歴をまとめ、バックグラウンドで送信しようとする動作を見つけました。Z.aiは謝罪し、後のバージョンで仕組みを修正。以前クラウドに送られたデータの扱いは、まだ独立して確認されていません。',
    status: '送信の動作を確認、修正の報告あり',
    context: {
      'What was packaged': {
        label: '何がまとめられていた？',
        text: 'ferstarは9月18日のZCode 3.12.3の分析で、作業環境のスナップショットを暗号化し、Alibaba Cloudへ送る経路を説明しています。一覧にはソースファイル、Gitオブジェクト、LFSファイル、reflogが含まれ、測定したスナップショットの86.6%を.gitが占めていました。',
      },
      'An attempted upload is not a completed upload': {
        label: '送信の試みと完了は別のこと',
        text: '著者は9月19日の補足で、商用プロジェクトの313 MBの圧縮ファイルは一度も正常に送信されなかったと説明しました。一方、538ファイルを含む別の公開リポジトリにはサーバーの受信確認がありました。大きなファイルがディスクにあるだけでは、クラウドへ届いた証拠にはなりません。',
      },
      'A separate local inspection': {
        label: '別の開発者によるローカル調査',
        text: 'Silent Starは3.10.1でGitデータの多い一覧を発見したと報告しています。小さなスナップショットはサーバーに受理され、非公開リポジトリは待機中でした。分析ではGitメタデータが通常ファイルのフィルターを回避していたとされます。過去にコミットした秘密情報が含まれるおそれはありますが、調査したリポジトリに実際の認証情報は見つからなかったと著者は述べています。',
      },
      'The company’s response': {
        label: '会社はどう答えた？',
        text: 'IT Homeによると、Z.aiは9月18日に謝罪し、コードの索引作成と、当初は標準で有効だったRepo Wikiが原因だと説明しました。クラウドでWikiページをつくり終えた後、送信データは破棄するとしています。ZCodeのソース公開と外部の検証も約束しましたが、これは約束であり、完了した監査ではありません。',
      },
      'What changed in 3.14.0': {
        label: '3.14.0で変わったこと',
        text: '9月19日の公式更新履歴には、リポジトリWikiの送信に関する修正が記載されています。ferstarの再調査では、3.14.0で送信経路が取り除かれたと報告されています。クライアントの変更に関する結果で、以前送ったデータの削除を独立して確認したものではありません。FORK YOUは出典を確認しており、クライアント分析を自ら再現したわけではありません。',
      },
    },
    ourTake:
      'リポジトリの履歴も、今のファイルと同じように同意を得てから送るべきです。開発ツールは、何が端末を離れるかを示し、実際に止められる設定と、保管の約束を確かめる方法を用意してほしい。ソースの公開と独立した監査があれば、利用者が具体的に確認できます。',
    sourceLabels: {
      ferstar: 'ferstar：元の分析と9月19日の補足（英語）',
      'silent-star': 'Silent Star：別のローカル調査（中国語）',
      ithome: 'IT Home：Z.aiの謝罪と回答（中国語）',
      'zcode-changelog': 'ZCode：3.14.0の公式更新履歴（英語）',
    },
  },
  'openai-project-lily-chat-review': {
    title: 'Project Lily：ChatGPTとの会話を、誰が読んでいる？',
    topic: 'プライバシーとレビューの仕事',
    summary:
      '404 Mediaは、OpenAIの外部委託スタッフが、時に機微な情報を含む実際のChatGPTの会話を確認していると報じました。OpenAIの個人向けFAQも、モデル改善など定められた目的での限定的な人のアクセスを説明しています。',
    status: '調査報道で明らかになった運用',
    context: {
      'The original investigation': {
        label: '最初の調査が伝えたこと',
        text: 'Joseph Coxの9月14日の記事は、Project Lilyで数百人の外部委託スタッフが回答を評価すると説明しています。404 Mediaが確認した内部文書と実際の入力が根拠です。過度な同調や、人間のような経験を語る回答を減らすなど、応答の改善を目指す仕事だとされています。',
      },
      'More than a single prompt': {
        label: '一つの質問だけとは限らない',
        text: '404 Mediaを引用したTom’s Hardwareの続報は、会話に加えて、居場所などの個人的な背景を含み得るユーザーの記憶の要約も渡されると説明しています。同じ調査を扱う記事で、別の独立した流出証拠ではありません。',
      },
      'OpenAI’s response and disclosures': {
        label: 'OpenAIの回答と公開情報',
        text: '404 Mediaによると、確認担当者にユーザー名は見えません。OpenAIは個人情報を取り除くよう努める一方、残ることもあると認めています。個人向けFAQでは、権限を持つ職員や委託先が、不正利用の調査、サポート、法的事項、モデル改善のために内容へアクセスできると説明しています。最後の用途は拒否できます。守秘義務、アクセス制御、操作記録も記載されています。',
      },
      'What filtering can miss': {
        label: 'フィルターが見落とすもの',
        text: 'OpenAIのPrivacy Filter文書は、匿名性を保証せず、珍しい識別情報や曖昧な私的表現を見逃すことがあると明記しています。情報の除去に注意が必要だという根拠ですが、Project Lily内の実際の失敗率を示す資料ではありません。',
      },
      'What you can control': {
        label: '自分で変えられる設定',
        text: '学習への利用は、Settings → Data Controls → Improve the model for everyoneから停止できます。FAQでは、一時チャットは学習に使われませんが、不正利用の監視のために確認される場合があると説明しています。学習を拒否しても、記載された他の目的で人が一切見ないという保証にはなりません。',
      },
    },
    ourTake:
      '個人的なことを話したくなる画面なら、誰が読む可能性があるのかも明確にしてほしい。機微な情報を渡す前に、理解して選べることが大切です。その確認作業を担う人たちの存在も見えるようにする必要があります。',
    sourceLabels: {
      '404-media': '404 Media：Project Lilyの元の調査（英語）',
      'toms-hardware':
        'Tom’s Hardware：担当者のアクセスと記憶の要約の続報（英語）',
      'consumer-faq': 'OpenAI：個人向けサービスのデータ利用FAQ（英語）',
      'privacy-filter': 'OpenAI：Privacy Filterとその限界（英語）',
      'data-controls': 'OpenAI：データ管理FAQ（英語）',
    },
  },
  'anthropic-slowdown-ipo': {
    title: 'AIの減速を求めるAnthropic。その一方で上場も準備中。',
    topic: '安全とお金',
    summary:
      'Dario AmodeiはAI競争の減速を求め、Anthropicは上場を目指しています。誰が得をするかは議論すべき点です。ただし、以下の出典は「IPOのためだけ」という動機を立証していません。',
    status: 'IPO目的という動機は未立証',
    context: {
      'The proposal': {
        label: 'どんな提案？',
        text: 'Amodeiの9月12日の論考は、能力向上の減速、外部評価者の開発過程への参加、企業と政府の協調を求めています。安全への取り組みが追いつく時間をつくるというのが本人の説明です。ペース調整はモデルの学習を止めるものではないとも述べています。',
      },
      'The money': {
        label: '上場をめぐる動き',
        text: 'Reutersは9月11日、NvidiaがAnthropicの予定するIPOへの投資を協議していると報じました。匿名の情報源を引用し、計画は変わり得ること、Anthropicはコメントを控えたことも記しています。',
      },
      'The criticism': {
        label: '何が議論になっている？',
        text: 'Le MondeのNicolas Chapuisは9月15日のコラムで、規制が安価な開放型モデルから大手を守るのではないかという疑念を紹介しました。同時に、競争の圧力の中での真剣な安全上の懸念という別の見方も示しています。どちらも隠れたIPO動機を証明するものではありません。',
      },
    },
    ourTake:
      '安全のルールには、独立した監督と市民の声が必要です。誰が決め、誰が対応費用を払え、開かれた選択肢に居場所が残るのかを見ていきたい。',
    sourceLabels: {
      amodei: 'Dario Amodei：We Must Pace the Frontier（英語）',
      reuters: 'Reuters／Investing.com：NvidiaとAnthropicのIPO協議（英語）',
      'le-monde': 'Le Monde：AI減速論争の背後にあるお金（英語版）',
    },
  },
  'openai-buckmaster-math-credit': {
    title: 'OpenAIが数学の突破口を発表。成果の帰属には異論。',
    topic: '研究と権力',
    summary:
      'OpenAIはNavier–Stokesの証明を発表しました。ニューヨーク大学の数学者Tristan Buckmasterは、Levent Alpögeとの関連研究をめぐる会社の対応に異議を唱えています。OpenAIはその説明に反論し、非公開研究の使用は立証されていません。',
    status: '双方の説明が対立',
    context: {
      'The announcement': {
        label: '発表された内容',
        text: '9月8日、OpenAIはNavier–Stokesのミレニアム懸賞問題の解法だとする論文とLeanによる形式化を公開しました。これは会社の数学的な主張であり、この記事が証明を独立して検証したわけではありません。',
      },
      'Buckmaster’s account': {
        label: 'Buckmasterの説明',
        text: 'Buckmasterは、OpenAIが共同研究者でAnthropic社員のAlpögeを外した論文を提案したと述べています。Codex上の草稿を学習に使ったかという質問にも、当初は返答がなかったとしています。ただし声明には、データが使われたかどうかは分からないと明記されています。二人の公開済み成果は、外力項のあるEuler方程式など関連する流体方程式を扱っています。',
      },
      'OpenAI’s response': {
        label: 'OpenAIの回答',
        text: 'OpenAIは発表前に二人の研究を見たことを否定しています。9月10日の更新では、直前2か月のBuckmasterのCodex入力が、学習を含めて影響した可能性は調査で排除したと説明しました。WIREDは、Sébastien BubeckがAlpögeの名前を外そうとしたという主張にも反論したと伝えています。',
      },
    },
    ourTake:
      '研究の道具を提供する会社が発見を競う側でもあるなら、明確な線引きが必要です。成果そのものとともに、功績の扱い、データの使い道、計算資源へのアクセスも問われるべきです。',
    sourceLabels: {
      openai: 'OpenAI：発表と9月10日の回答更新（英語）',
      buckmaster: 'Tristan Buckmaster：公開声明（英語PDF）',
      wired: 'WIRED：発表と双方の説明（英語）',
    },
  },
};
