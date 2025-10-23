// assets/script.js - 完整修正版本

const I18N = {
  zh: {
    nav_home: "首页",
    nav_about: "关于",
    nav_works: "作品一览", 
    nav_contact: "联系我",
    hero_hi: "你好！我是 Lynn\n一位专注于\"说人话\"的译员",
    hero_sub: "日 / 英 ➡ 简中 ｜ 翻译 · 本地化 · LQA",
    hero_more: "了解更多",
    hero_contact: "联系我",
    kpi_years: "9年译海浮沉",
    kpi_games: "参与游戏", 
    kpi_books: "译著书籍",
    kpi_reviews:"外文游戏评测",
    kpi_allwords: "总翻译字数",
    advantages: "我的翻译特色",
    adv1_t: "\"戴着镣铐跳舞\"",
    adv1_d: "忠于原文，但更忠于作品的灵魂。拒绝逐字对译，必要时用创译还原角色个性与作品氛围。",
    adv2_t: "是译者亦是观众", 
    adv2_d: "爱读书，也爱玩游戏，时常跳出译者的身份，用观者的角度思考并打磨出最重视他们感受的译文。",
    adv3_t: "民汉出身的专业译者",
    adv3_d: "从为爱发电到以译谋生，对第九艺术的热爱使我对译作与原作的高契合度有着天然的追求。",
    adv4_t: "太晚了脑子不转了",
    adv4_d: "最后一点等我想到了再加。",
    showcase: "部分作品展示",
    filter_all: "全部",
    filter_ja_zh: "日翻中",
    filter_en_zh: "英翻中", 
    filter_zh_ja: "中翻日",
    filter_zh_en: "中翻英",
    more_works: "查看作品一览",
    contact: "联系方式",
    footer_note: "© {year} Lynn",
    
    // showcase
    showcase1_title: "FlOWERS 四季",
    showcase1_desc: "日翻中 · 游戏本地化",
    showcase2_title: "幻兽帕鲁", 
    showcase2_desc: "日翻中 · 游戏本地化",
    showcase3_title: "晨曦族人",
    showcase3_desc: "英翻中 · 游戏本地化",
    showcase4_title: "花开公路",
    showcase4_desc: "英翻中 · 游戏本地化",
    showcase5_title: "面包审判",
    showcase5_desc: "中翻英 · 游戏本地化",
    showcase6_title: "无名者：屠龙",
    showcase6_desc: "中翻日 · 游戏本地化",
    showcase7_title: "无依之地",
    showcase7_desc: "英翻中 · 译著书籍",
    showcase8_title: "时间的女儿",
    showcase8_desc: "英翻中 · 译著书籍",
    showcase9_title: "无法别离",
    showcase9_desc: "英翻中 · 译著书籍",
    showcase10_title: "半七捕物帐",
    showcase10_desc: "日翻中 · 译著书籍",
    showcase11_title: "爱书的下尅上 第一部：士兵的女儿",
    showcase11_desc: "日翻中 · 译著书籍（轻小说）",
    showcase12_title: "工匠之国",
    showcase12_desc: "日翻中 · 译著书籍",
    showcase13_title: "酸葡萄效应：为什么总有人莫名其妙地讨厌你",
    showcase13_desc: "日翻中 · 译著书籍",
    showcase14_title: "迷你裙宇宙海贼 第三、十、十一卷",
    showcase14_desc: "日翻中 · 译著书籍（轻小说）",
    
    // About 页面
    about_title: "自我介绍",
      about_tagline1: "翻译 · 游戏本地化 · LQA",
      about_tagline2: "中 日 · 英",
      about_intro_p1: "你好，我是 Lynn！",
      about_intro_p2: "一位专注于\"说人话\"的译员。",
      about_intro_p3: "欢迎来到我的小展示厅，请随意参观！网站还在建设当中，我会努力再多写点关于自己的内容的。",
    edu_title: "教育背景",
      edu1_period: "2012 - 2013",
      edu1_school: "兰开斯特大学（Lancaster University）",
      edu1_degree: "管理学硕士（项目管理方向），以优异成绩毕业",

      edu2_period: "2008 - 2012",
      edu2_school: "杭州电子科技大学",
      edu2_degree: "管理学学士学位，会计专业",
    exp_title: "工作经历",

      exp1_period: "2017 - 至今",
      exp1_org: "自由译者",
      exp1_desc:
      "提供中、日、英三语翻译服务，累计翻译量超过300万字\n" +
      "作品体裁包括游戏、书籍、媒体文章、论文等多种类型",

      exp2_period: "2015 - 2021",
      exp2_org: "「圣彗星兰汉化组」- 核心成员",
      exp2_desc:
      "因兴趣开始录制百合游戏《FLOWERS》的实况视频并自行翻译、制作字幕，获得2000+粉丝\n" +
      "与同伴组建「圣彗星兰学院汉化组」，翻译并制作《FLOWERS》汉化补丁，后因质量上乘、口碑优良而被官方选为官方汉化\n" +
      "亦作为「白衣汉化组」成员参与多个游戏补丁的汉化工作",

      exp3_period: "2013 - 2015",
      exp3_org: "杭州南森诚道信息咨询有限公司 - 高级顾问",
      exp3_desc:
      "提供出国留学相关咨询服务\n" +
      "协助学生筛选国外院校，指导学生撰写相关申请文书",

    email: "电子邮箱",
    
    // Works 页面
    works_title: "作品一览",
    works_role: "负责内容",
    load_more: "查看更多作品",
    // 作品项描述
    work1_title: "FlOWERS 四季",
    work1_desc: "JA→ZHCN · 开发商：Innocent Grey · 发行商：JAST",
    work1_role: "翻译 / 审校 / LQA",
    
    work2_title: "幻兽帕鲁", 
    work2_desc: "JA→ZHCN · 开发商：Pocket Pair · 发行商：Pocket Pair",
    work2_role: "审校",

    work3_title: "晨曦族人", 
    work3_desc: "EN→ZHCN · 开发商：Darenn Keller · 发行商：Astra Logical",
    work3_role: "翻译",

    work4_title: "花开公路", 
    work4_desc: "EN→ZHCN · 开发商：Studio Élan · 发行商：Studio Élan",
    work4_role: "审校"
    
  },
  en: {
    nav_home: "Home",
    nav_about: "About Me", 
    nav_works: "Portfolio",
    nav_contact: "Contact",
    hero_hi: "Hi, I'm Lynn! \na translator who makes words sound just right.",
    hero_sub: "JA / EN ➡ ZHCN ｜ Translation · Localization · LQA", 
    hero_more: "Find out More",
    hero_contact: "Contact Me",
    kpi_years: "Years of Experience",
    kpi_games: "Localized Game Titles",
    kpi_books: "Translated Books",
    kpi_reviews:"Game Review Translations",
    kpi_allwords: "Words Translated", 
    advantages: "Features",
    adv1_t: "Context-first Localization",
    adv1_d: "Restore character voice & tone.",
    adv2_t: "From the Player's View",
    adv2_d: "Translations that truly speak to the audience.",
    adv3_t: "From Fan Translator to Pro", 
    adv3_d: "Born from passion, driven by craft and quality.",
    adv4_t: "Add later",
    adv4_d: "It's mid-night now. I'll come back after my brain gets some proper rest lol.",
    showcase: "Showcase",
    filter_all: "All",
    filter_ja_zh: "JA→ZHCN",
    filter_en_zh: "EN→ZHCN",
    filter_zh_ja: "ZHCN→JA", 
    filter_zh_en: "ZHCN→EN",
    more_works: "View All",
    contact: "Contact",
    footer_note: "© {year} Lynn",
    
    // showcase
    showcase1_title: "Flowers Les Quatre Saisons",
    showcase1_desc: "JA→ZHCN · Game Localization", 
    showcase2_title: "Palworld",
    showcase2_desc: "JA→ZHCN · Game Localization",
    showcase3_title: "Dawnfolk",
    showcase3_desc: "EN→ZHCN · Game Localization",
    showcase4_title: "Highway Blossoms",
    showcase4_desc: "EN→ZHCN · Game Localization",
    
    // About 页面
    about_title: "About Me",
      about_tagline1: "Translator · Game Localization",
      about_tagline2: "CN ⇄ JA ⇄ EN",
      about_intro_p1: "Hi, I'm Lynn!",
      about_intro_p2: "- a translator who makes words sound just right.",
      about_intro_p3: "Welcome to my personal homepage! Just click around and take a casual look at my place, and I'll write more about myself soon enough ;)",
    edu_title: "Education",
      edu1_period: "2012 - 2013",
      edu1_school: "Lancaster University (UK)",
      edu1_degree: "MSc in Management with Project Management - Merit",
      edu2_period: "2008 - 2012",
      edu2_school: "Hangzhou Dianzi University",
      edu2_degree: "Bachelor of Management, majored in Accounting",
    exp_title: "Experience",
      exp1_period: "2017 - Present",
      exp1_org: "Freelance Translator",
      exp1_desc: "Providing professional translation services in Chinese, Japanese, and English, with a cumulative translation volume exceeding 3 million words\n"+"Specialized in diverse fields including video games, books, media articles, and academic papers",
      exp2_period: "2015 - 2021",
      exp2_org: "St. Angraecum Academy Fan Translation Group",
      exp2_desc: "Started by creating and translating Let's Play videos for the yuri game FLOWERS, attracting 2,000+ followers\n"+"Co-founded a dedicated team for the FLOWERS series; the high-quality Chinese localization patch developed by the team gained significant community acclaim and was later officially adopted by the developer for its exceptional quality and reception\n"+"Also participated in several officially licensed localization projects as a member of the \"Hakui\" translation group",
      exp3_period: "2013 - 2015",
      exp3_org: "Hangzhou Nansen Information Consulting Co., Ltd.",
      exp3_desc: "Advised clients on overseas study options and provided end-to-end application support\n"+"Guided students through university selection and provided expert coaching on the preparation and compelling of application documents",
    email: "Email",
  
    
    // Works 页面
    works_title: "Portfolio",
    works_role: "Role",
    load_more: "View More",
    // 作品项描述
    work1_title: "FlOWERS Les Quatre Saisons (Shiki)",
    work1_desc: "JA→ZHCN \nDeveloper: Innocent Grey \nPublisher: JAST",
    work1_role: "Translation / Editing / LQA",
    
    work2_title: "Palworld", 
    work2_desc: "JA→ZHCN \nDeveloper: Pocket Pair \nPublisher: Pocket Pair",
    work2_role: "Editing / Proofreading",

    work3_title: "Dawnfolk", 
    work3_desc: "EN→ZHCN \nDeveloper: Darenn Keller \nPublisher: Astra Logical",
    work3_role: "Translation",

    work4_title: "Highway Blossoms", 
    work4_desc: "EN→ZHCN \nDeveloper: Studio Élan \nPublisher: Studio Élan",
    work4_role: "Translation / Editing"
  },
  ja: {
    nav_home: "ホーム",
    nav_about: "自己紹介",
    nav_works: "実績一覧", 
    nav_contact: "お問い合わせ",
    hero_hi: "こんにちは、Lynnです\n言葉の奥にある想いを、自然な形で届けます",
    hero_sub: "日・英 ➡ 中 ｜ 翻訳・ローカライズ・LQA",
    hero_more: "もっと見る",
    hero_contact: "お問い合わせ",
    kpi_years: "業界経験年数",
    kpi_games: "携わった\nゲームタイトル", 
    kpi_books: "翻訳書籍",
    kpi_reviews:"翻訳ゲームレビュー",
    kpi_allwords: "累計翻訳文字数",
    advantages: "私の翻訳スタイル",
    adv1_t: "意訳重視・文脈優先",
    adv1_d: "逐語訳に頼らず、言葉の魂を伝えます。",
    adv2_t: "読者とゲーマーの目線で",
    adv2_d: "体験する人の心に届く訳文を。", 
    adv3_t: "同人出身のプロ翻訳者",
    adv3_d: "愛から始まり、今は仕事に。情熱と品質を両立。",
    adv4_t: "ちょっと眠いや",
    adv4_d: "夜更かししすぎて頭ぐにゃぐにゃ～。ちょっと寝てくるね。",
    showcase: "一部の作品紹介",
    filter_all: "すべて",
    filter_ja_zh: "日→中",
    filter_en_zh: "英→中", 
    filter_zh_ja: "中→日",
    filter_zh_en: "中→英",
    more_works: "実績一覧へ",
    contact: "お問い合わせ", 
    footer_note: "© {year} Lynn",
    
    // showcase
    showcase1_title: "FlOWERS 四季",
    showcase1_desc: "日→中 · ゲームローカライゼーション",
    showcase2_title: "パルワールド", 
    showcase2_desc: "日→中 · ゲームローカライゼーション",
    showcase3_title: "Dawnfolk",
    showcase3_desc: "英→中 · ゲームローカライゼーション",
    showcase4_title: "Highway Blossoms",
    showcase4_desc: "英→中 · ゲームローカライゼーション",
    
    // About 页面
    about_title: "自己紹介",
      about_tagline1: "翻訳・ゲームローカライズ",
      about_tagline2: "中 ⇄ 日 ⇄ 英",
      about_intro_p1: "こんにちは。Lynnです。私の個人サイトへようこそ！",
      about_intro_p2: "フリーランスの翻訳者として、言葉の奥にある想いをできるだけ自然な形で届けたい――そんな気持ちで日々仕事をしています。どうぞよろしくお願いします。",
      about_intro_p3: "このサイトはまだ制作途中で、今のところあまり多くのコンテンツはありませんが、少しずつ充実させていく予定です。よかったら、気軽にいろいろ見て回ってくださいね。",

    edu_title: "学歴",
      edu1_period: "2008–2012",
      edu1_school: "杭州電子科技大学",
      edu1_degree: "経営学部 会計学科 卒業",
      edu2_period: "2012–2013",
      edu2_school: "ランカスター大学（英国）",
      edu2_degree: "MSc in Management（Project Management）・Merit",

    exp_title: "職歴",
      exp1_period: "2017 - 現在",
      exp1_org: "フリーランス翻訳者（中日英）",
      exp1_desc: "これまでに、ゲーム・書籍・メディア記事・学術論文など多岐にわたる分野で、累計300万文字以上の翻訳を手がける\n"+"中国語、日本語、英語の3か国語における高品質な翻訳サービスを提供",
      exp2_period: "2015 - 2021",
      exp2_org: "聖アングレカム学院翻訳グループ",
      exp2_desc: "百合ゲーム『FLOWERS』の自主実況翻訳・字幕制作から活動を開始し、2,000人以上のフォロワーを獲得\n"+"その後、チームを結成して同作の中国語化パッチを開発。その品質の高さが評価され、公式版として正式採用される\n"+"その他、『白衣翻訳グループ』のメンバーとしても、複数ゲームの公式翻訳・ローカライズ作業に貢献",
      exp3_period: "2013 - 2015",
      exp3_org: "杭州南森誠道信息諮詢有限公司",
      exp3_desc: "海外留学に関する総合的なコンサルティング業務を担当\n"+"クライアントの顧客のご要望に沿った留学先の提案から、願書をはじめとする申請書類の作成指導までを一貫して支援",
    
    // Works 页面
    works_title: "実績一覧",
    works_role: "担当内容",
    load_more: "もっと見る",
    // 作品项描述
    work1_title: "FlOWERS 四季",
    work1_desc: "日→中 \n開発元：Innocent Grey \n発売元：JAST",
    work1_role: "翻訳 / レビュー / LQA",
    
    work2_title: "パルワールド",
    work2_desc: "日→中 \n開発元：Pocket Pair \n発売元：Pocket Pair", 
    work2_role: "レビュー",

    work3_title: "Dawnfolk",
    work3_desc: "英→中 \n開発元：Darenn Keller \n発売元：Astra Logical", 
    work3_role: "翻訳",

    work4_title: "Highway Blossoms",
    work4_desc: "英→中 \n開発元：Studio Élan \n発売元：Studio Élan", 
    work4_role: "翻訳 / レビュー"
  }
};

// 选择语言
function pickLanguage() {
  const qp = new URL(location.href).searchParams.get("lang");
  if (qp) return qp.split("-")[0];
  
  const saved = localStorage.getItem("lang");
  if (saved) return saved;
  
  const browserLang = (navigator.language || "en").split("-")[0];
  return ["zh", "ja", "en"].includes(browserLang) ? browserLang : "en";
}

// 应用语言 - 修正版本：保留换行符
function applyLanguage(lang) {
  const dict = I18N[lang] || I18N.en;
  
  // 更新所有带 data-i18n 属性的元素
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    let text = dict[key] || key;
    
    // 特殊处理 footer_note 中的年份
    if (key === "footer_note") {
      text = text.replace("{year}", new Date().getFullYear());
    }
    
    // 对于工作经历描述和教育学位，使用 textContent 保留 \n
    if ((key.includes('exp') && key.includes('desc')) || 
        (key.includes('edu') && key.includes('degree'))) {
      el.textContent = text;
    } else {
      el.innerText = text;
    }
  });
  
  // 更新语言按钮状态
  document.querySelectorAll("[data-lang]").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });
  
  // 保存到本地存储
  localStorage.setItem("lang", lang);

  // 立即格式化
  enhanceExpDesc();
  enhanceEduDegree();
  
  // 额外保险：100ms 后再次检查（处理可能的渲染延迟）
  setTimeout(() => {
    // 检查是否还有未格式化的内容
    document.querySelectorAll('.exp-desc').forEach(node => {
      if (!node.querySelector('.bp') && node.textContent.includes('\n')) {
        console.log('Found unformatted content, reapplying formatting');
        enhanceExpDesc();
      }
    });
  }, 100);
}

// Works页面专用筛选函数 - 筛选时自动显示匹配的隐藏卡片
function initWorksFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");
      
      // 更新按钮状态
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      // 筛选作品卡片
      const workCards = document.querySelectorAll(".work-card");
      let visibleCount = 0;
      
      workCards.forEach((item) => {
        const tag = item.getAttribute("data-tag");
        
        if (filter === "all" || filter === tag) {
          // 无论是否隐藏，只要匹配筛选条件就显示
          item.classList.remove("hidden");
          item.style.display = ""; // 确保显示
          visibleCount++;
        } else {
          // 不匹配的卡片隐藏
          item.classList.add("hidden");
          item.style.display = "none";
        }
      });
      
      console.log(`筛选 "${filter}"，显示 ${visibleCount} 张卡片`);
      
      // 更新加载更多按钮状态
      updateLoadMoreVisibilityAfterFilter(filter);
    });
  });
}

// 筛选后的加载更多可见性检查
function updateLoadMoreVisibilityAfterFilter(currentFilter) {
  const worksGrid = document.getElementById('worksGrid');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  const loadMoreContainer = document.getElementById('loadMoreContainer');
  
  if (!worksGrid || !loadMoreBtn || !loadMoreContainer) return;
  
  const allCards = worksGrid.querySelectorAll('.work-card');
  const visibleCards = worksGrid.querySelectorAll('.work-card:not(.hidden)');
  const totalHiddenByLoadMore = Array.from(allCards).filter(card => 
    card.classList.contains('hidden') && 
    (currentFilter === 'all' || card.getAttribute('data-tag') === currentFilter)
  ).length;
  
  console.log(`总卡片: ${allCards.length}, 可见: ${visibleCards.length}, 可加载: ${totalHiddenByLoadMore}`);
  
  // 如果有可加载的隐藏卡片（匹配当前筛选条件）且当前有可见卡片，显示加载更多
  if (totalHiddenByLoadMore > 0 && visibleCards.length > 0) {
    loadMoreBtn.style.display = 'inline-flex';
    loadMoreContainer.style.display = 'flex';
    console.log('显示加载更多按钮');
  } else {
    loadMoreBtn.style.display = 'none';
    loadMoreContainer.style.display = 'none';
    console.log('隐藏加载更多按钮');
  }
}

// showcase 点击事件
function initShowcase() {
  const showcaseItems = document.querySelectorAll('.showcase-item');
  
  showcaseItems.forEach(item => {
    item.addEventListener('click', () => {
      const target = item.getAttribute('data-target');
      window.location.href = `works.html#${target}`;
    });
    
    // 添加键盘支持
    item.setAttribute('tabindex', '0');
    item.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const target = item.getAttribute('data-target');
        window.location.href = `works.html#${target}`;
      }
    });
  });
}

// Showcase自动滚动函数 - 双排版本
function initAutoScroll() {
  const showcaseContainer = document.querySelector('.showcase-container');
  const showcaseRows = document.querySelectorAll('.showcase-row');
  
  if (!showcaseContainer || showcaseRows.length === 0) return;
  
  // 为双排布局：复制每一行的内容以实现无缝循环
  showcaseRows.forEach(row => {
    const clone = row.cloneNode(true);
    showcaseContainer.appendChild(clone);
  });
  
  // 添加自动滚动类
  showcaseContainer.classList.add('auto-scroll');
  
  // 鼠标悬停时暂停滚动
  showcaseContainer.addEventListener('mouseenter', () => {
    showcaseContainer.classList.add('paused');
  });
  
  showcaseContainer.addEventListener('mouseleave', () => {
    showcaseContainer.classList.remove('paused');
  });
}

// Education格式化功能
function enhanceEduDegree() {
  console.log('enhanceEduDegree called');
  
  document.querySelectorAll('.edu-degree').forEach((node, index) => {
    const raw = node.textContent || '';
    console.log(`Processing edu-degree ${index + 1}: "${raw}"`);
    
    // 确保有内容
    if (!raw.trim()) return;
    
    // 确保应用箭头样式
    if (!node.classList.contains('has-arrow')) {
      node.classList.add('has-arrow');
    }
  });
}

// Experience描述格式化功能
function enhanceExpDesc() {
  console.log('enhanceExpDesc called');
  
  document.querySelectorAll('.exp-desc').forEach((node, index) => {
    const raw = node.textContent || '';
    console.log(`Processing exp-desc ${index + 1}: "${raw}"`);
    console.log('Contains \\n:', raw.includes('\n'));
    
    const parts = raw.split('\n').map(s => s.trim()).filter(Boolean);
    console.log('Split parts:', parts);
    
    // 如果没有内容，直接返回
    if (parts.length === 0) return;
    
    // 关键修复：总是先完全清空内容
    node.innerHTML = '';
    
    // 逐段创建 <p class="bp">
    parts.forEach((line, lineIndex) => {
      line = line.replace(/^(\u279C|\u27A4|➤|->|→)\s*/, '');
      const p = document.createElement('p');
      p.className = 'bp';
      p.textContent = line;
      node.appendChild(p);
      console.log(`Added line ${lineIndex}: "${line}"`);
    });
  });
}

// Works 页面功能
function initWorksPage() {
  const worksGrid = document.getElementById('worksGrid');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  const backToTopBtn = document.getElementById('backToTop');
  
  if (!worksGrid || !loadMoreBtn) return;
  
  let itemsPerLoad = 6;
  let currentVisibleCount = 6;
  let isLoading = false;

  // 加载更多功能 - 只加载当前筛选条件下的隐藏卡片
  function loadMoreItems() {
    if (isLoading) return;
    
    isLoading = true;
    
    // 添加加载状态
    loadMoreBtn.disabled = true;
    loadMoreBtn.innerHTML = '<span class="loading-text">加载中...</span>';
    
    // 获取当前活跃的筛选条件
    const activeFilter = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
    
    // 只加载匹配当前筛选条件的隐藏卡片
    const allHiddenItems = worksGrid.querySelectorAll('.work-card.hidden');
    const matchingHiddenItems = Array.from(allHiddenItems).filter(item => {
      const tag = item.getAttribute('data-tag');
      return activeFilter === 'all' || tag === activeFilter;
    });
    
    const itemsToShow = matchingHiddenItems.slice(0, itemsPerLoad);
    
    console.log(`加载更多: 筛选条件 "${activeFilter}", 可加载 ${matchingHiddenItems.length} 张, 本次显示 ${itemsToShow.length} 张`);
    
    setTimeout(() => {
      itemsToShow.forEach(item => {
        item.classList.remove('hidden');
        item.style.display = "";
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
          item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, 50);
      });
      
      currentVisibleCount += itemsToShow.length;
      
      // 恢复按钮状态
      loadMoreBtn.disabled = false;
      loadMoreBtn.innerHTML = `
        <span class="load-more-text" data-i18n="load_more">Load More</span>
        <span class="load-more-arrow">↓</span>
      `;
      
      // 更新多语言
      applyLanguage(pickLanguage());
      
      // 检查是否还有更多可加载的卡片
      updateLoadMoreVisibilityAfterFilter(activeFilter);
      
      isLoading = false;
    }, 500);
  }
  
  // 返回顶部功能
  function initBackToTop() {
    if (!backToTopBtn) return;
    
    function toggleBackToTop() {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
    
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    
    window.addEventListener('scroll', toggleBackToTop);
    backToTopBtn.addEventListener('click', scrollToTop);
  }
  
  // 自动加载
  function initAutoLoadOnScroll() {
    let autoLoadTriggered = false;
    
    function checkScroll() {
      if (isLoading || autoLoadTriggered) return;
      
      const loadMoreContainer = document.getElementById('loadMoreContainer');
      if (!loadMoreContainer) return;
      
      const containerRect = loadMoreContainer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.66;
      
      if (containerRect.top <= triggerPoint) {
        autoLoadTriggered = true;
        loadMoreItems();
        
        setTimeout(() => {
          autoLoadTriggered = false;
        }, 2000);
      }
    }
    
    let scrollTimeout;
    function debouncedCheckScroll() {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(checkScroll, 100);
    }
    
    window.addEventListener('scroll', debouncedCheckScroll);
  }
  
  // 绑定事件
  loadMoreBtn.addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = 'scale(1)';
      loadMoreItems();
    }, 150);
  });
  
  initBackToTop();
  initAutoLoadOnScroll();
  
  // 初始隐藏超出数量的卡片
  const allCards = worksGrid.querySelectorAll('.work-card');
  allCards.forEach((card, index) => {
    if (index >= currentVisibleCount) {
      card.classList.add('hidden');
    }
  });
  
  // 初始化筛选器
  initWorksFilters();
}

// 通用筛选函数（用于其他页面）
function initFilters() {
  const filterButtons = document.querySelectorAll(".filters button");
  
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");
      
      // 更新按钮状态
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      // 筛选首页的 .work 元素（小卡片）
      const indexWorks = document.querySelectorAll(".work");
      if (indexWorks.length > 0) {
        indexWorks.forEach(item => {
          const tag = item.getAttribute("data-tag");
          item.style.display = (filter === "all" || filter === tag) ? "" : "none";
        });
      }
    });
  });
}

// 初始化
function initI18N() {
  const currentLang = pickLanguage();
  applyLanguage(currentLang);
  
  // 语言切换事件
  document.querySelectorAll("[data-lang]").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      applyLanguage(lang);
    });
  });
  
  // 初始化筛选功能
  initFilters();
  
  // 初始化 showcase 点击事件
  initShowcase();
  
  // 初始化自动滚动
  initAutoScroll();
  
  // 初始化 Works 页面功能
  if (window.location.pathname.includes('works.html')) {
    initWorksPage();
  }
}

// DOM 加载完成后初始化
document.addEventListener("DOMContentLoaded", initI18N);