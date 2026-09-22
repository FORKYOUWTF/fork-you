export type OrganizationTranslation = {
  name: string;
  description: string;
  tags: string[];
  reason: string;
  governance: string;
  participation: string;
};

export const organizationTranslations: Record<string, OrganizationTranslation> =
  {
    godot: {
      name: 'Godot',
      description: '想做一个自己的游戏世界？这款开源游戏引擎可以陪你开始。',
      tags: ['游戏', 'C++', '文档'],
      reason:
        '共享的游戏引擎，让创作者能看源码、自己改，也能一直用下去。参与的方式很多，不只是写程序。',
      governance:
        '项目由非营利的 Godot 基金会支持。贡献者保留自己代码的版权，引擎使用 MIT 许可证。',
      participation:
        '先看贡献指南。引擎开发、文档、示例、教程和社区答疑，都有你能帮忙的地方。这些是社区参与入口，不是招聘岗位。',
    },
    igalia: {
      name: 'Igalia',
      description: '在一家由员工共同拥有的技术咨询公司，为开放的互联网做点事。',
      tags: ['员工所有', '浏览器', '工程开发'],
      reason:
        'Igalia 把有报酬的开源开发，和员工所有、民主决策的公司模式放到了一起。',
      governance:
        '这是一家员工共同拥有的开源咨询公司。公开介绍中，它把自己描述为扁平、合作式的组织。',
      participation:
        '去官方招聘页看看现有机会和申请方式。具体要求和报酬，以每个岗位的信息为准。',
    },
    eff: {
      name: '电子前哨基金会（EFF）',
      description: '为隐私、自由表达，以及我们在数字世界里的权利出一份力。',
      tags: ['数字权利', '政策', '公共倡议'],
      reason:
        '我们需要好软件，也需要权利得到保护。EFF 提供了参与公益倡议、法律和技术工作的机会。',
      governance:
        '一家关注数字权利的非营利组织，公开了管理团队、组织文件和财务报告。',
      participation:
        '机会页面汇总了工作、实习和志愿者入口。逐项看看申请条件，以及有没有报酬。',
    },
    mastodon: {
      name: 'Mastodon',
      description: '让社区自己经营一小片互联网的社交网络。',
      tags: ['社交网络', '联邦式网络', 'Ruby'],
      reason:
        '开源、联邦式的社交软件，让社区能选自己的服务器、定自己的规则，不必全挤在一个中心平台上。',
      governance:
        '核心项目介绍称，它由非营利组织开发。各个服务器有自己的运营者和内容管理规则。',
      participation:
        '从官方代码仓库开始，提出改动前先读贡献指南。社区贡献通常没有报酬。',
    },
    codeberg: {
      name: 'Codeberg',
      description: '给开源项目找个家，由非营利社区一起撑起来。',
      tags: ['开发工具', '社区', '基础设施'],
      reason:
        '由社区支持的开发基础设施，让项目在商业代码托管平台之外，多一个实实在在的选择。',
      governance:
        'Codeberg e.V. 是会员制非营利组织。活跃会员可以就协会事务投票，支持型会员的权利有所不同。',
      participation:
        '先看看入会和志愿服务说明。入会可能需要交费；有哪些志愿者角色、目前能否参与，要向 Codeberg 确认。',
    },
    collabora: {
      name: 'Collabora',
      description: '靠做开源系统获得收入，也让别人能接着你的成果往下做。',
      tags: ['Linux', '基础设施', '工程开发'],
      reason:
        '商业公司也能为上游开源项目的维护提供资金。Collabora 明确把这类工作放在工程业务的核心。',
      governance:
        '这是一家商业开源咨询公司。我们收录它，是因为有据可查的开源工作，不是说它属于非营利或员工所有的组织。',
      participation:
        '到官方招聘页查看岗位和工作地点。这里介绍的是公司，不保证它现在一定有空缺。',
    },
    blender: {
      name: 'Blender',
      description: '让做 3D 创作的人，能把工具掌握在自己手里。',
      tags: ['3D 与艺术', '设计', '文档'],
      reason:
        '共享的创作工具，让艺术家在专有软件订阅之外还有选择。设计、代码、测试和文档，都需要人参与。',
      governance:
        'Blender 基金会支持这个自由开源项目。开发按模块组织，各类职责有公开说明。',
      participation:
        '参与指南列出了开发、文档、翻译等入口。开始前，先看看对应团队的说明。',
    },
    nextcloud: {
      name: 'Nextcloud',
      description: '一起做协作工具，让使用者自己决定把数据放在哪里。',
      tags: ['自托管', 'PHP', '协作'],
      reason:
        '开源、可自托管的协作工具，让组织对文件和对话存在哪里，有更多选择。',
      governance:
        '一家有贡献者社区的商业开源公司，也提供付费产品和服务。被收录在这里，不代表它拒绝使用 AI。',
      participation:
        '想找有报酬的工作，可以看招聘页；想参与代码、测试、翻译或社区工作，可以看贡献指南。社区贡献和正式雇佣是两回事。',
    },
    tor: {
      name: 'Tor 项目',
      description: '帮人们在监控和审查之外，自由沟通、浏览网络。',
      tags: ['隐私', '对抗审查', '翻译'],
      reason:
        '当互联网的控制权越来越集中，保护隐私的基础设施就更重要。Tor 有技术和非技术的参与方式。',
      governance:
        '一个设有董事会的非营利组织，也有更广泛的志愿者社区。招聘页和社区页面分别说明了不同的参与方式。',
      participation:
        '社区入口里有翻译、推广、研究和技术志愿服务；想找有报酬的岗位，可以看招聘页。每项活动都有自己的参与说明。',
    },
    wikimedia: {
      name: '维基媒体基金会',
      description: '支持自由分享知识的人，也支持他们背后的基础设施。',
      tags: ['知识', '教育', '公共利益'],
      reason:
        '共享知识需要有人打理基础设施。维基媒体基金会提供有报酬的工作，支持维基百科等项目背后的技术和社区。',
      governance:
        '非营利的维基媒体基金会支持维基媒体各项目。在基金会任职，和在更广泛的社群里志愿编辑，是不同的参与方式。',
      participation:
        '到基金会招聘页查看现有岗位、地点要求和申请细节。这条介绍不保证某个岗位现在有空缺。',
    },
    libreoffice: {
      name: 'LibreOffice',
      description: '让天天要用的办公软件，成为大家都能一起改进的工具。',
      tags: ['办公工具', '设计', '翻译'],
      reason:
        '文档是日常生活的一部分。社区共同开发的办公套件，让人们能研究、改进和分享自己用的工具。',
      governance:
        '这是一个由贡献者社区开发、文档基金会（The Document Foundation）支持的自由开源项目。',
      participation:
        '贡献指南涵盖设计、翻译、文档、开发和测试，也有适合上手的小任务。指南建议先和项目导师聊聊。',
    },
    openstreetmap: {
      name: 'OpenStreetMap（开放街图）',
      description: '把你对家附近的了解，画进一张大家都能用的地图。',
      tags: ['开放数据', '地图绘制', '社区'],
      reason:
        '共享地图数据，让社区在专有地图服务之外也能有所依靠。熟悉自己生活的地方，本身就是有用的贡献。',
      governance:
        '这是一个社区协作的地图项目。OpenStreetMap 基金会代表社区运营主站及相关服务。地图数据有自己的开放数据许可证和署名要求。',
      participation:
        '从新手指南学起，了解怎样画地图、帮助社区。这是参与开放数据的入口，不会编程也没关系。',
    },
    zulip: {
      name: 'Zulip',
      description: '和一家由非营利基金会持有的公司，一起做开源团队聊天工具。',
      tags: ['团队聊天', '自托管', '基金会所有'],
      reason:
        '开源聊天软件加上非营利所有权，给协作工具的长期运营提供了另一种办法。但这种结构仍然值得细看，不等于自动获得「独立」认证。',
      governance:
        '2026 年 5 月的公告称，Zulip 背后的公司 Kandra Labs 归独立的非营利 Zulip 基金会所有。同一公告也提到，创始人和三位资深成员将离开并加入 Anthropic。',
      participation:
        '到官方招聘页查看岗位和申请要求。这里介绍的是公司及其基金会所有权，不代表团队成员与 AI 公司没有个人联系。',
    },
    element: {
      name: 'Element',
      description: '做开放、去中心化的通信工具，让聊天多一些选择。',
      tags: ['即时通信', '开放标准', '隐私'],
      reason:
        '基于 Matrix 标准的通信工具，让人们能更多地决定对话托管在哪里，以及如何和其他服务连接。',
      governance:
        'Matrix 生态里的一家商业公司。招聘页称，公司编写的软件几乎都是开源的；这不等于每款产品、每项功能都开源。',
      participation:
        '到官方招聘页查看现有岗位和要求。先了解它做的工作和产品模式，再判断这个团队是否符合你的想法。',
    },
    openproject: {
      name: 'OpenProject',
      description: '用开源项目管理工具，帮团队把事情安排明白。',
      tags: ['项目管理', '产品与用户体验', '工程开发'],
      reason:
        '团队协作离不开的工具，也可以是共享的基础设施。OpenProject 把有报酬的产品工作和公开源码联系在一起。',
      governance:
        '一家商业开源软件公司。招聘页介绍了免费的社区版，以及工程、产品、设计和客户服务等团队。',
      participation:
        '到官方招聘页查看空缺和地点要求。团队介绍能帮你了解工作范围，但不代表每个方向都在招人。',
    },
    'access-now': {
      name: 'Access Now',
      description: '为处境脆弱的人和社区，守住数字世界里的权利。',
      tags: ['人权', '政策', '数字安全'],
      reason:
        '开放的未来，也需要有人反对审查、监控和滥用权力。除了写软件，你还可以参与权利倡议。',
      governance:
        '一个关注数字权利的全球人权组织，团队分布在不同地方，招聘流程公开。',
      participation:
        '到官方页面查看工作、研修项目和实习机会。工作许可与地点要求各不相同；写着「远程」，不代表在任何地方都能申请。',
    },
    'open-knowledge': {
      name: '开放知识基金会',
      description: '让公共知识不只是放在那里，而是真的能被使用和分享。',
      tags: ['开放数据', '公共利益', '教育'],
      reason:
        '开放知识需要好用的工具、技能和组织来支持。基金会把这些工作和各地服务公共利益的社区联系起来。',
      governance:
        '一家注册于英格兰及威尔士的非营利组织，公开治理、董事会和资助方信息，既做基金会工作，也提供服务。',
      participation:
        '到职位与机会页面看看目前有哪些选择。这是一个值得了解的组织，不代表它今天正在招聘某个特定岗位。',
    },
    framasoft: {
      name: 'Framasoft',
      description: '帮社区把日常用的数字工具，重新掌握在自己手里。',
      tags: ['自由软件', '社区', '翻译'],
      reason:
        'Framasoft 不只批评技术权力过于集中，也把想法做成了大家能用的软件、服务和公共教育资源。',
      governance:
        '一家法国非营利协会，开发自由软件、运营面向社区的服务，由捐款、员工和志愿者共同支持。',
      participation:
        '参与入口有英文介绍，进一步的资料可能是法语。先看看各项目的说明，再决定从哪里帮起。',
    },
  };

export const actionLabels: Record<string, string> = {
  'Find a contribution': '看看能帮什么忙',
  'Explore careers': '看看工作机会',
  'Find volunteer routes': '看看志愿者机会',
  'Explore the source': '看看源码和参与方式',
  'Explore ways to help': '看看怎么出一份力',
  'Start mapping': '开始画地图',
};

export const sourceLabels: Record<string, string> = {
  'Ways to contribute': '可以怎样参与',
  'Governance model': '项目治理方式',
  'Igalia values and cooperative decision-making':
    'Igalia 的理念与共同决策方式',
  'Working at Igalia': '在 Igalia 工作',
  'Official opportunities and volunteer links': '官方工作机会与志愿者入口',
  'Mastodon: software, federation, and organization':
    'Mastodon：软件、联邦式网络与组织介绍',
  'Membership, voting rights, and volunteering': '会员、投票权与志愿服务',
  'Careers and open-source engineering': '工作机会与开源开发',
  'Ways to get involved': '可以怎样参与',
  'Blender Foundation': 'Blender 基金会',
  'Jobs and company description': '工作机会与公司介绍',
  'Community contribution guide': '社区贡献指南',
  'Tor community portal': 'Tor 社区入口',
  'Jobs and organization': '工作机会与组织介绍',
  'Foundation careers and mission': '基金会的工作机会与使命',
  'Community and contribution routes': '社区与参与方式',
  'Community, open data, and Foundation role': '社区、开放数据与基金会的职责',
  'Welcome and ways to contribute': '新手指南与参与方式',
  'Jobs and current stewardship': '工作机会与目前的运营情况',
  'Foundation ownership and leadership transition': '基金会所有权与团队变动',
  'Careers and open-source work': '工作机会与开源工作',
  'Teams, open-source model, and careers': '团队、开源模式与工作机会',
  'Mission, employment, and application requirements':
    '使命、工作机会与申请条件',
  'Mission, organization, and governance links': '使命、组织与治理信息',
  'Jobs and opportunities': '职位与参与机会',
  'Association, mission, and projects': '协会、使命与项目',
  'Participation guide': '参与指南',
};
