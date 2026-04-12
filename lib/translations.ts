export type Lang = "en" | "ar";

export interface BentoMetric { label: string; value: string; delta: string }
export interface SeoKeyword  { kw: string; rank: string }

export interface Translations {
  nav: {
    links: Array<{ label: string; href: string }>;
    cta: string;
  };
  hero: {
    badge: string;
    headline: { line1: string; highlight: string; rest: string; line3: string };
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    stats: Array<{ value: string; label: string }>;
  };
  bento: {
    badge: string;
    heading: string;
    subtext: string;
    card1: { eyebrow: string; title: string; description: string };
    card2: { eyebrow: string; title: string; description: string };
    card3: { eyebrow: string; title: string; description: string };
    card4: { eyebrow: string; title: string; description: string };
    chat: { messages: [string, string, string]; typing: string };
    seoKeywords: [SeoKeyword, SeoKeyword, SeoKeyword];
    metrics: [BentoMetric, BentoMetric, BentoMetric];
  };
  playground: {
    badge: string;
    heading: string;
    headingAccent: string;
    subtext: string;
    subtext2: string;
    desktop: string;
    mobile: string;
    light: string;
    dark: string;
    dashboard: {
      overview: string;
      revenueTrend: string;
      nav: [string, string, string, string, string];
    };
  };
  codeSwitcher: {
    badge: string;
    heading: string;
    subtext: string;
    footerNote: string;
    visualLabel: string;
  };
  calculator: {
    badge: string;
    heading: string;
    highlight: string;
    subtext: string;
    sliderLabel: string;
    currency: string;
    results: {
      hoursSaved: string;
      revenueRecovered: string;
      autoHandled: string;
      hoursUnit: string;
      dailyUnit: string;
    };
    disclaimer: string;
  };
  solutions: {
    badge: string;
    heading: string;
    highlight: string;
    subtext: string;
    mostPopular: string;
    bestValue: string;
    packages: Array<{
      name: string;
      tagline: string;
      price: string;
      period: string;
      priceSuffix?: string;
      description: string;
      features: string[];
      bundleNote?: string;
      cta: string;
    }>;
    bottomNote: string;
  };
  process: {
    badge: string;
    heading: string;
    highlight: string;
    subtext: string;
    steps: Array<{ title: string; description: string; details: string[] }>;
    ctaText: string;
    ctaButton: string;
  };
  footer: {
    eyebrow: string;
    heading: string;
    highlight: string;
    subtext: string;
    primaryCta: string;
    secondaryCta: string;
    brand: { description: string; location: string };
    packagesLabel: string;
    companyLabel: string;
    packageLinks: Array<{ label: string; href: string }>;
    companyLinks: Array<{ label: string; href: string }>;
    copyright: string;
    builtIn: string;
  };
}

// ─── English ─────────────────────────────────────────────────
const en: Translations = {
  nav: {
    links: [
      { label: "Features",  href: "#features"  },
      { label: "Integrate", href: "#integrate" },
      { label: "Pricing",   href: "#packages"  },
      { label: "Process",   href: "#process"   },
    ],
    cta: "Get started",
  },

  hero: {
    badge: "Built for SMEs in Oman & GCC",
    headline: {
      line1: "Turning Business",
      highlight: "Chaos",
      rest: " into",
      line3: "Digital Systems.",
    },
    subheadline:
      "One platform to automate your operations, own your local search, and never miss a lead — starting from day one.",
    primaryCta: "Book a free diagnostic",
    secondaryCta: "See pricing",
    stats: [
      { value: "< 30s",  label: "avg. lead response time" },
      { value: "70%",    label: "reduction in manual work" },
      { value: "3×",     label: "faster decisions" },
    ],
  },

  bento: {
    badge: "Platform capabilities",
    heading: "Everything your business needs",
    subtext:
      "One unified platform to capture leads, automate your ops, and grow your online presence.",
    card1: {
      eyebrow: "Lead capture",
      title: "Never miss a lead",
      description:
        "Automated WhatsApp responses qualify every inquiry — even at 2 am.",
    },
    card2: {
      eyebrow: "Live analytics",
      title: "Real-time dashboard",
      description:
        "Revenue, leads, and conversions in one unified view. Decisions backed by data.",
    },
    card3: {
      eyebrow: "Search dominance",
      title: "Own your local market",
      description:
        "Precision SEO that puts your business at the top of Google for searches that matter.",
    },
    card4: {
      eyebrow: "Operations",
      title: "70% less manual work",
      description:
        "Automate repetitive tasks so your team can focus entirely on growth.",
    },
    chat: {
      messages: [
        "Do you have a table for 4 tonight?",
        "Hi! Yes, we have tables available. Shall I book for you?",
        "Yes please, 8 pm would be perfect.",
      ],
      typing: "Responding automatically · < 30s",
    },
    seoKeywords: [
      { kw: '"best restaurant muscat"',  rank: "#1"     },
      { kw: '"IT services oman"',        rank: "#2"     },
      { kw: '"web design muscat"',       rank: "#4 ↑3"  },
    ],
    metrics: [
      { label: "Revenue",     value: "OMR 24,381", delta: "+12%" },
      { label: "New Leads",   value: "847",        delta: "+34%" },
      { label: "Conversion",  value: "23%",        delta: "+5%"  },
    ],
  },

  playground: {
    badge: "Interactive preview",
    heading: "Your system,",
    headingAccent: "live.",
    subtext: "See how the Rakiz dashboard looks and feels before you commit.",
    subtext2: "Toggle between device sizes and themes.",
    desktop: "Desktop",
    mobile: "Mobile",
    light: "Light",
    dark: "Dark",
    dashboard: {
      overview: "Overview",
      revenueTrend: "Revenue trend",
      nav: ["Dashboard", "Leads", "Automations", "SEO", "Reports"],
    },
  },

  codeSwitcher: {
    badge: "Custom integration capabilities",
    heading: "Smart, bespoke integrations",
    subtext:
      "We build the technical bridges that connect your systems intelligently — WhatsApp, CRM, payments, and beyond. We handle the complexity so you don't have to.",
    footerNote:
      "Note: Every integration is custom-built per project to ensure the highest standards of security and performance.",
    visualLabel: "Visual example",
  },

  calculator: {
    badge: "ROI calculator",
    heading: "See your",
    highlight: "potential savings",
    subtext:
      "Drag the slider to see how much time and revenue Rakiz recovers for you each month.",
    sliderLabel: "Manual customer inquiries per day",
    currency: "OMR",
    results: {
      hoursSaved:        "Hours saved / month",
      revenueRecovered:  "Potential revenue recovered",
      autoHandled:       "Inquiries auto-handled / day",
      hoursUnit:         "h",
      dailyUnit:         "/d",
    },
    disclaimer:
      "Estimates based on 70% automation rate, 8 min/inquiry avg, 12% lead-to-sale conversion.",
  },

  solutions: {
    badge: "Pricing",
    heading: "Pick your",
    highlight: "growth path",
    subtext:
      "Modular packages — combine, upgrade, or start focused. No hidden fees.",
    mostPopular: "Most Popular",
    bestValue: "Best Value",
    packages: [
      {
        name: "Digital Foundation",
        tagline: "Get found. Get leads.",
        price: "OMR 99",
        period: "one-time setup",
        description:
          "The essential launchpad for your business. Stand out with a premium digital presence.",
        features: [
          "Custom Minimalist Landing Page",
          "Local SEO & Google Maps setup",
          "Direct WhatsApp Integration",
          "1-Month Priority Support",
        ],
        bundleNote: "Waived completely with a 6-month Growth Engine partnership.",
        cta: "Get started",
      },
      {
        name: "Operations & SaaS",
        tagline: "Automate. Optimise. Dominate.",
        price: "OMR 199",
        period: "setup",
        priceSuffix: "+ OMR 29 / month",
        description:
          "Transform your operations. We build the system, you scale the business.",
        features: [
          "Bespoke Operations Dashboard",
          "Automated Workflows & CRM",
          "Smart WhatsApp Bot",
          "Continuous System Support",
        ],
        cta: "Get started",
      },
      {
        name: "Growth Engine",
        tagline: "Your dedicated digital partner.",
        price: "OMR 59",
        period: "/ month",
        description:
          "A complete digital partnership. We handle the growth, so you can handle the clients.",
        features: [
          "Advanced SEO Campaigns",
          "AI-Assisted Content Creation",
          "Continuous Conversion Optimisation",
          "Full Website Maintenance",
        ],
        cta: "Get started",
      },
    ],
    bottomNote:
      "All packages include a free 30-minute diagnostic call. No commitment required.",
  },

  process: {
    badge: "How it works",
    heading: "Three steps to",
    highlight: "digital clarity",
    subtext:
      "From scattered operations to a compounding digital machine — in three focused phases.",
    steps: [
      {
        title: "Audit & Diagnose",
        description:
          "A deep-dive into your operations, digital footprint, and competitors. No guesswork.",
        details: ["30-min discovery call", "Competitor gap analysis", "Tech stack audit", "Prioritised action plan"],
      },
      {
        title: "Build & Automate",
        description:
          "We execute — building your pages, configuring automations, and wiring dashboards.",
        details: ["Agile sprint delivery", "Weekly progress updates", "Staging environment", "Zero-surprise pricing"],
      },
      {
        title: "Launch & Scale",
        description:
          "Go live with confidence. We monitor KPIs monthly and push for the next growth level.",
        details: ["Monitored go-live", "Monthly KPI reports", "Continuous optimisation", "On-demand support"],
      },
    ],
    ctaText: "Ready to start?",
    ctaButton: "Book your free diagnostic",
  },

  footer: {
    eyebrow: "Let's build something great",
    heading: "Ready to upgrade",
    highlight: "your business?",
    subtext:
      "Start with a free, no-obligation 30-minute diagnostic. We'll show you exactly where you're leaving money on the table.",
    primaryCta: "Book via WhatsApp",
    secondaryCta: "hello@rakiz.om",
    brand: {
      description:
        "Turning business chaos into digital systems. We build the technical foundations that let SMEs grow with confidence.",
      location: "Based in Muscat, Oman · Serving the GCC",
    },
    packagesLabel: "Packages",
    companyLabel:  "Company",
    packageLinks: [
      { label: "Digital Foundation", href: "#packages" },
      { label: "Operations & SaaS",  href: "#packages" },
      { label: "Growth Engine",      href: "#packages" },
      { label: "Playground",         href: "#features" },
    ],
    companyLinks: [
      { label: "Our Process", href: "#process"                  },
      { label: "Book a Call", href: "#contact"                  },
      { label: "WhatsApp",    href: "https://api.whatsapp.com/send?phone=96876807632&text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%20%D8%B1%D9%83%D9%8A%D8%B2%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85." },
    ],
    copyright: `© ${new Date().getFullYear()} Rakiz Digital Solutions. All rights reserved.`,
    builtIn: "Built with precision in Oman 🇴🇲",
  },
};

// ─── Arabic ──────────────────────────────────────────────────
const ar: Translations = {
  nav: {
    links: [
      { label: "المميزات",  href: "#features"  },
      { label: "التكامل",   href: "#integrate" },
      { label: "الأسعار",   href: "#packages"  },
      { label: "العملية",   href: "#process"   },
    ],
    cta: "ابدأ الآن",
  },

  hero: {
    badge: "مبني لشركات عُمان والخليج الصغيرة والمتوسطة",
    headline: {
      line1: "حوِّل",
      highlight: "فوضى",
      rest: " أعمالك",
      line3: "إلى أنظمة رقمية.",
    },
    subheadline:
      "منصة واحدة لأتمتة عملياتك وقيادة نتائج البحث المحلي وعدم فقدان أي عميل — منذ اليوم الأول.",
    primaryCta: "احجز تشخيصاً مجانياً",
    secondaryCta: "الأسعار",
    stats: [
      { value: "< 30 ث", label: "متوسط وقت الرد على العميل" },
      { value: "70%",    label: "تقليل في العمل اليدوي"     },
      { value: "3×",     label: "أسرع في اتخاذ القرارات"    },
    ],
  },

  bento: {
    badge: "قدرات المنصة",
    heading: "كل ما يحتاجه عملك",
    subtext:
      "منصة موحدة لالتقاط العملاء المحتملين وأتمتة العمليات وتنمية حضورك الرقمي.",
    card1: {
      eyebrow: "التقاط العملاء",
      title: "لا تفوّت عميلاً",
      description:
        "ردود واتساب آلية تؤهل وتلتقط كل استفسار — حتى في الساعة الثانية صباحاً.",
    },
    card2: {
      eyebrow: "تحليلات حية",
      title: "لوحة بيانات فورية",
      description:
        "الإيرادات والعملاء والتحويلات في عرض موحد. قرارات مدعومة بالبيانات.",
    },
    card3: {
      eyebrow: "هيمنة البحث",
      title: "سيطر على سوقك المحلي",
      description:
        "SEO دقيق يضع أعمالك في قمة جوجل للبحثات الأكثر قيمة لعملك.",
    },
    card4: {
      eyebrow: "العمليات",
      title: "70% أقل عمل يدوي",
      description:
        "أتمت المهام المتكررة ودع فريقك يركز كلياً على النمو.",
    },
    chat: {
      messages: [
        "هل عندكم طاولة لـ 4 أشخاص الليلة؟",
        "أهلاً! نعم عندنا طاولات. هل أحجز لك؟",
        "نعم من فضلك، الساعة 8 مساءً تماماً.",
      ],
      typing: "الرد تلقائياً · أقل من 30 ث",
    },
    seoKeywords: [
      { kw: '"أفضل مطعم مسقط"',       rank: "#1"    },
      { kw: '"خدمات تقنية عُمان"',     rank: "#2"    },
      { kw: '"تصميم مواقع مسقط"',     rank: "#4 ↑3" },
    ],
    metrics: [
      { label: "الإيرادات",   value: "24,381 ر.ع.", delta: "+12%" },
      { label: "عملاء جدد",   value: "847",         delta: "+34%" },
      { label: "معدل التحويل",value: "23%",          delta: "+5%"  },
    ],
  },

  playground: {
    badge: "معاينة تفاعلية",
    heading: "نظامك،",
    headingAccent: "مباشرة.",
    subtext: "شاهد كيف تبدو لوحة تحكم ركيز قبل البدء.",
    subtext2: "بدّل بين أحجام الأجهزة والسمات.",
    desktop: "سطح المكتب",
    mobile: "الجوّال",
    light: "فاتح",
    dark: "داكن",
    dashboard: {
      overview: "نظرة عامة",
      revenueTrend: "مسار الإيرادات",
      nav: ["لوحة التحكم", "العملاء", "الأتمتة", "سيو", "التقارير"],
    },
  },

  codeSwitcher: {
    badge: "قدرات الربط المخصص",
    heading: "حلول ربط مخصصة وذكية",
    subtext:
      "نصمم لك جسوراً تقنية تربط أنظمتك بذكاء. سواء كان ذلك ربطاً مع WhatsApp، أو أنظمة CRM، أو المدفوعات — نحن نتولى الجانب التقني المعقد عنك.",
    footerNote:
      "ملاحظة: نقوم ببرمجة حلول الربط بشكل خاص لكل مشروع لضمان أعلى معايير الأمان والكفاءة.",
    visualLabel: "مثال توضيحي",
  },

  calculator: {
    badge: "حاسبة العائد على الاستثمار",
    heading: "اكتشف",
    highlight: "وفوراتك المحتملة",
    subtext:
      "حرّك الشريط لترى كم يمكن لركيز أن يوفر لك من وقت وإيرادات شهرياً.",
    sliderLabel: "عدد استفسارات العملاء اليدوية يومياً",
    currency: "ر.ع.",
    results: {
      hoursSaved:       "ساعة موفرة / شهر",
      revenueRecovered: "الإيرادات المسترجعة المحتملة",
      autoHandled:      "استفسار يُعالج آلياً / يوم",
      hoursUnit:        "س",
      dailyUnit:        "/ي",
    },
    disclaimer:
      "التقديرات مبنية على معدل أتمتة 70%، ومتوسط 8 دقائق للاستفسار، ومعدل تحويل 12%.",
  },

  solutions: {
    badge: "الأسعار",
    heading: "اختر",
    highlight: "مسار نموك",
    subtext: "باقات متكاملة — ادمجها أو طوّرها أو ابدأ بتركيز. لا رسوم خفية.",
    mostPopular: "الأكثر طلباً",
    bestValue: "الأفضل قيمةً",
    packages: [
      {
        name: "الأساس الرقمي",
        tagline: "احضر. واجذب العملاء.",
        price: "٩٩ ر.ع.",
        period: "إعداد لمرة واحدة",
        description:
          "منصة الانطلاق الأساسية لعملك. تميّز بحضور رقمي احترافي.",
        features: [
          "صفحة هبوط مخصصة وأنيقة",
          "SEO المحلي وإعداد خرائط جوجل",
          "تكامل واتساب مباشر",
          "دعم أولوية لمدة شهر",
        ],
        bundleNote: "يُعفى منها كلياً عند الاشتراك بـ محرك النمو لـ 6 أشهر.",
        cta: "ابدأ الآن",
      },
      {
        name: "العمليات والأنظمة",
        tagline: "أتمت. حسِّن. تفوَّق.",
        price: "١٩٩ ر.ع.",
        period: "إعداد",
        priceSuffix: "+ ٢٩ ر.ع. / شهر",
        description:
          "حوِّل عملياتك. نبني النظام، وأنت توسّع الأعمال.",
        features: [
          "لوحة عمليات مخصصة",
          "أتمتة سير العمل ونظام CRM",
          "بوت واتساب ذكي",
          "دعم مستمر للنظام",
        ],
        cta: "ابدأ الآن",
      },
      {
        name: "محرك النمو",
        tagline: "شريكك الرقمي المتكامل.",
        price: "٥٩ ر.ع.",
        period: "/ شهر",
        description:
          "شراكة رقمية متكاملة. نحن نتولّى النمو، وأنت تتولّى العملاء.",
        features: [
          "حملات SEO متقدمة",
          "إنتاج محتوى بالذكاء الاصطناعي",
          "تحسين مستمر لمعدلات التحويل",
          "صيانة كاملة للموقع",
        ],
        cta: "ابدأ الآن",
      },
    ],
    bottomNote: "جميع الباقات تشمل مكالمة تشخيصية مجانية 30 دقيقة. لا التزامات.",
  },

  process: {
    badge: "كيف نعمل",
    heading: "ثلاث خطوات نحو",
    highlight: "الوضوح الرقمي",
    subtext:
      "من عمليات متشتتة إلى آلة رقمية متراكمة النتائج — في ثلاث مراحل محددة.",
    steps: [
      {
        title: "التدقيق والتشخيص",
        description:
          "فهم عميق لعملياتك وبصمتك الرقمية ومنافسيك. لا تخمين، فقط وضوح تام.",
        details: ["مكالمة اكتشاف 30 دقيقة", "تحليل فجوة المنافسين", "تدقيق المنظومة التقنية", "خطة عمل ذات أولويات"],
      },
      {
        title: "البناء والأتمتة",
        description:
          "ننفذ بدقة — نبني صفحتك ونضبط الأتمتة ونربط لوحات البيانات.",
        details: ["تسليم سريع بمراحل", "تحديثات أسبوعية", "وصول لبيئة الاختبار", "أسعار بلا مفاجآت"],
      },
      {
        title: "الإطلاق والتوسع",
        description:
          "انطلق بثقة. نراقب ونحسِّن ونرفع تقارير KPI شهرياً لتحقيق نمو متراكم.",
        details: ["إطلاق مراقب", "تقارير KPI شهرية", "تحسين مستمر", "دعم عند الطلب"],
      },
    ],
    ctaText: "مستعد لبدء تشخيصك؟",
    ctaButton: "احجز تشخيصك المجاني",
  },

  footer: {
    eyebrow: "لنبنِ شيئاً عظيماً",
    heading: "مستعد للارتقاء",
    highlight: "بأعمالك؟",
    subtext:
      "ابدأ بمكالمة تشخيصية مجانية لا التزامات. سنريك بالضبط أين تُهدر الفرص.",
    primaryCta: "احجز عبر واتساب",
    secondaryCta: "hello@rakiz.om",
    brand: {
      description:
        "نحوِّل فوضى الأعمال إلى أنظمة رقمية. نبني الأسس التقنية التي تمكِّن الشركات الصغيرة من النمو بثقة.",
      location: "مقرنا في مسقط، عُمان · نخدم دول الخليج العربي",
    },
    packagesLabel: "الباقات",
    companyLabel:  "الشركة",
    packageLinks: [
      { label: "الأساس الرقمي",   href: "#packages" },
      { label: "العمليات والأنظمة",href: "#packages" },
      { label: "محرك النمو",       href: "#packages" },
      { label: "الملعب التجريبي",  href: "#features" },
    ],
    companyLinks: [
      { label: "عمليتنا",              href: "#process"                  },
      { label: "احجز مكالمة",          href: "#contact"                  },
      { label: "راسلنا على واتساب",    href: "https://api.whatsapp.com/send?phone=96876807632&text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%20%D8%B1%D9%83%D9%8A%D8%B2%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85." },
    ],
    copyright: `© ${new Date().getFullYear()} ركيز للحلول الرقمية. جميع الحقوق محفوظة.`,
    builtIn: "صُنع بعناية في عُمان 🇴🇲",
  },
};

export const translations: Record<Lang, Translations> = { en, ar };
