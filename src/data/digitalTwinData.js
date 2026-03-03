const digitalTwinData = {
  definition: {
    title: 'ما هو التوأم الرقمي؟',
    text: 'نسخة افتراضية متزامنة وواقعية لكائن مادي أو عملية أو نظام. يتم إنشاؤه بجمع البيانات من أجهزة استشعار IoT ومحاكاتها باستخدام الذكاء الاصطناعي ومحاكاة مونت كارلو الشهيرة، وما تطور عنها حتى هذا العصر، خاصة مع الذكاء الاصطناعي، لتقييم الأداء واستكشاف سيناريوهات "ماذا لو".',
    image: '/images/digital-twin/dt-concept.jpg',
  },
  comparisonImage: '/images/digital-twin/dt-before-after.png',
  processSteps: [
    {
      step: 1,
      title: 'الجمع والربط',
      description: 'ربط الكائن المادي بأجهزة استشعار IoT لجمع بيانات آنية مع استخدام أنظمة ERP لجمع كل البيانات الآنية',
      icon: 'fa-link',
      image: '/images/digital-twin/dt-step-collect.jpg',
    },
    {
      step: 2,
      title: 'إنشاء النموذج',
      description: 'إنشاء نموذج افتراضي متكامل يحاكي سلوك الأصل بدقة',
      icon: 'fa-cubes',
      image: '/images/digital-twin/dt-step-model.jpg',
    },
    {
      step: 3,
      title: 'التحليل',
      description: 'استخدام الذكاء الاصطناعي لتقييم الأداء واستكشاف السيناريوهات',
      icon: 'fa-chart-line',
      image: '/images/digital-twin/dt-step-analyze.jpg',
    },
    {
      step: 4,
      title: 'التحسين',
      description: 'اتخاذ قرارات استباقية للصيانة الوقائية وتطوير العمليات',
      icon: 'fa-rocket',
      image: '/images/digital-twin/dt-step-optimize.webp',
    },
  ],
  stats: [
    { value: '49.2', suffix: ' مليار دولار', description: 'حجم السوق في 2026' },
    { value: '35.95', suffix: '%', description: 'معدل النمو السنوي CAGR حتى 2031' },
    { value: '70', suffix: '%', description: 'من قادة التكنولوجيا يستثمرون في التوائم الرقمية' },
    { value: '25-50', suffix: '%', description: 'تخفيض في التوقفات غير المخطط لها' },
    { value: '15-40', suffix: '%', description: 'توفير في استهلاك الطاقة' },
    { value: '50', suffix: '%', description: 'تخفيض في انبعاثات الكربون للمباني' },
    { value: '52', suffix: ' مليون دولار', description: 'توفير سنوي لشركة يونيليفر في 8 مصانع' },
    { value: '15', suffix: '%', description: 'تحسن في المبيعات والكفاءة التشغيلية' },
  ],
  beforeAfter: [
    {
      before: 'توقفات مفاجئة في الإنتاج',
      after: 'تخفيض 25-50% في التوقفات غير المخطط لها',
    },
    {
      before: 'استهلاك طاقة مرتفع وغير محسوب',
      after: 'توفير 15-40% في استهلاك الطاقة',
    },
    {
      before: 'انبعاثات كربونية عالية',
      after: 'تخفيض 50% في انبعاثات الكربون',
    },
    {
      before: 'قرارات مبنية على التخمين',
      after: 'قرارات مبنية على بيانات وسيناريوهات',
    },
    {
      before: 'صيانة تفاعلية (بعد العطل)',
      after: 'صيانة وقائية استباقية',
    },
  ],
};

export default digitalTwinData;
