const brand = {
  nameAr: 'بصمة لتخليص المعاملات',
  nameEn: 'Basma Pro Services',
  slogan: 'ننجزها... ببصمة ثقة',
  whatsapp: '97366000000',
  email: 'info@basmapro.bh',
};

const navItems = [
  ['الرئيسية', 'home'],
  ['الخدمات', 'services'],
  ['تأسيس الشركات', 'setup'],
  ['النظام الداخلي', 'dashboard'],
  ['تواصل معنا', 'contact'],
];

const services = [
  {
    id: 'srv-01', icon: '🛂', title: 'خدمات الجوازات والهجرة',
    desc: 'إصدار وتجديد الإقامات، الزيارات، التمديد، ومتابعة الطلبات حتى الاعتماد.',
    price: 25, time: '1 - 5 أيام عمل', status: 'ظاهر',
    docs: ['نسخة الجواز', 'البطاقة الذكية', 'صورة شخصية', 'بيانات الكفيل'],
  },
  {
    id: 'srv-02', icon: '🏢', title: 'خدمات السجل التجاري',
    desc: 'فتح سجلات، إضافة أنشطة، تجديد التراخيص، وتعديل بيانات الشركات.',
    price: 35, time: '2 - 7 أيام عمل', status: 'ظاهر',
    docs: ['البطاقة الذكية', 'عقد الإيجار', 'اسم النشاط', 'تفويض المالك'],
  },
  {
    id: 'srv-03', icon: '💳', title: 'نظام حماية الأجور WPS',
    desc: 'تهيئة ملفات الأجور، معالجة الملاحظات، ومتابعة متطلبات حماية الأجور.',
    price: 20, time: '24 - 72 ساعة', status: 'ظاهر',
    docs: ['قائمة الموظفين', 'كشف الرواتب', 'بيانات الحساب البنكي'],
  },
  {
    id: 'srv-04', icon: '💡', title: 'خدمات الكهرباء والماء',
    desc: 'طلبات التوصيل، نقل الحساب، تحديث البيانات، ومراجعة الفواتير.',
    price: 15, time: '1 - 3 أيام عمل', status: 'ظاهر',
    docs: ['البطاقة الذكية', 'عقد الإيجار', 'رقم الحساب إن وجد'],
  },
  {
    id: 'srv-05', icon: '🪪', title: 'خدمات هيئة تنظيم سوق العمل LMRA',
    desc: 'تصاريح العمل، مواعيد البصمة، الفحص الطبي، وتجديد وإلغاء التصاريح.',
    price: 30, time: '3 - 10 أيام عمل', status: 'مميز',
    docs: ['جواز العامل', 'السجل التجاري', 'العقد', 'الصورة الشخصية'],
  },
  {
    id: 'srv-06', icon: '🚗', title: 'خدمات إدارة المرور',
    desc: 'تجديد ملكيات، نقل ملكية، مخالفات، وتخليص معاملات المركبات للشركات.',
    price: 18, time: '24 - 72 ساعة', status: 'ظاهر',
    docs: ['البطاقة الذكية', 'وثيقة التأمين', 'استمارة المركبة'],
  },
];

const setupTypes = [
  { type: 'مؤسسة فردية', price: 120, gov: 50, duration: '2 - 4 أيام', req: 'بطاقة ذكية، عنوان تجاري، اختيار الأنشطة', docs: 'هوية المالك، عقد إيجار، بيانات التواصل' },
  { type: 'شركة ذات مسؤولية محدودة WLL', price: 250, gov: 100, duration: '5 - 10 أيام', req: 'شركاء، عقد تأسيس، رأس مال، عنوان', docs: 'هويات الشركاء، عقد التأسيس، تفويض' },
  { type: 'فرع شركة أجنبية', price: 420, gov: 180, duration: '10 - 20 يوم', req: 'وثائق مصدقة، ممثل قانوني، عنوان بحريني', docs: 'سجل الشركة الأم، قرار مجلس الإدارة، وكالة' },
  { type: 'شركة الشخص الواحد S.P.C', price: 220, gov: 90, duration: '4 - 8 أيام', req: 'مالك واحد، اسم تجاري، نشاط محدد', docs: 'هوية المالك، عقد إيجار، بيانات النشاط' },
];

const orders = [
  { id: 'BPS-26051', customer: 'أحمد النور', company: 'النور للتجارة', phone: '+973 3999 1122', email: 'ahmed@example.com', requestType: 'موقع إلكتروني', category: 'LMRA', requestPrice: 30, agreed: 180, remaining: 60, payment: 'جزئي', date: '2026-05-02', deadline: '2026-05-08', status: 'Processing', employee: 'سارة علي', notes: 'تم تحديد موعد البصمة.', files: 6 },
  { id: 'BPS-26052', customer: 'مريم يوسف', company: '—', phone: '+973 3888 4433', email: 'maryam@example.com', requestType: 'إدخال يدوي', category: 'الكهرباء والماء', requestPrice: 15, agreed: 45, remaining: 0, payment: 'مدفوع', date: '2026-05-03', deadline: '2026-05-07', status: 'Completed', employee: 'محمد حسن', notes: 'تم تسليم رقم الحساب.', files: 3 },
  { id: 'BPS-26053', customer: 'شركة اللؤلؤ', company: 'اللؤلؤ للمطاعم', phone: '+973 3777 8822', email: 'ops@lulu.bh', requestType: 'موقع إلكتروني', category: 'السجل التجاري', requestPrice: 35, agreed: 260, remaining: 260, payment: 'غير مدفوع', date: '2026-05-04', deadline: '2026-05-12', status: 'Waiting Customer', employee: 'نور فهد', notes: 'بانتظار تفويض المدير.', files: 4 },
  { id: 'BPS-26054', customer: 'خالد عيسى', company: '—', phone: '+973 3555 6611', email: 'khalid@example.com', requestType: 'إدخال يدوي', category: 'الجوازات والهجرة', requestPrice: 25, agreed: 95, remaining: 0, payment: 'مدفوع', date: '2026-05-05', deadline: '2026-05-09', status: 'Pending', employee: 'سارة علي', notes: 'فحص المستندات قبل الرفع.', files: 2 },
];

const employees = [
  ['سارة علي', 'Employee', 18, 92, 'س'],
  ['محمد حسن', 'Super Admin', 27, 96, 'م'],
  ['نور فهد', 'Content Manager', 14, 89, 'ن'],
  ['علي جاسم', 'Accountant', 11, 91, 'ع'],
];

const statusAr = { Pending: 'قيد الانتظار', Processing: 'قيد التنفيذ', 'Waiting Customer': 'بانتظار العميل', Completed: 'مكتمل', Cancelled: 'ملغي' };
const logo = () => `<a class="logo" href="#home" aria-label="${brand.nameEn}"><span class="brand-mark"><i></i><b>✓</b></span><span><strong>${brand.nameAr}</strong><small>${brand.nameEn}</small></span></a>`;
const formatBhd = value => `${value.toLocaleString('ar-BH')} د.ب`;
const pill = status => `<span class="pill ${status.toLowerCase().replace(/\s/g, '-')}">${statusAr[status] || status}</span>`;
const kpi = (label, value, note, icon = '◆') => `<article class="kpi-card"><span>${icon}</span><b>${value}</b><small>${label}</small><em>${note}</em></article>`;

function serviceCard(service, management = false) {
  return `<article class="service-card glass" data-service="${service.id}">
    <div class="service-top"><span class="service-icon">${service.icon}</span><span class="service-status">${service.status}</span></div>
    <h3>${service.title}</h3><p>${service.desc}</p>
    <div class="service-meta"><b>${formatBhd(service.price)}</b><span>${service.time}</span></div>
    <details><summary>المستندات المطلوبة</summary><ul>${service.docs.map(doc => `<li>${doc}</li>`).join('')}</ul></details>
    ${management ? `<div class="card-actions"><button class="mini-btn edit-service" data-id="${service.id}">تعديل</button><button class="mini-btn danger delete-service" data-id="${service.id}">حذف</button><button class="mini-btn toggle-service" data-id="${service.id}">${service.status === 'مخفي' ? 'إظهار' : 'إخفاء'}</button></div>` : `<a class="text-link" href="#contact">اطلب الخدمة ←</a>`}
  </article>`;
}

function render() {
  document.getElementById('app').innerHTML = `<div class="app">
    <header class="site-header"><div class="container nav-wrap">${logo()}<button class="menu-toggle" aria-label="فتح القائمة">☰</button><nav>${navItems.map(([label, id]) => `<a href="#${id}">${label}</a>`).join('')}</nav><a class="btn small" href="#login">دخول الموظفين</a></div></header>

    <main>
      <section id="home" class="hero section-pad"><div class="container hero-grid">
        <div class="hero-copy reveal"><span class="eyebrow">مكتب بحريني لإدارة وتخليص المعاملات الحكومية</span><h1>${brand.slogan}</h1><p>منصة عربية أولاً تجمع موقعاً تسويقياً سريعاً ونظام CRM داخلياً لإدارة الطلبات، المدفوعات، الملفات، التنبيهات، التسويق بالذكاء الاصطناعي، والطباعة الاحترافية.</p><div class="hero-actions"><a class="btn primary" href="#contact">ابدأ طلبك الآن</a><a class="btn ghost" href="#dashboard">استعرض لوحة التحكم</a></div><div class="trust-row"><span>ثقة ومصداقية</span><span>سرعة في الإنجاز</span><span>دقة في التفاصيل</span></div></div>
        <div class="hero-product glass reveal delay"><div class="hero-logo-card">${logo()}<span>تم الإنجاز</span></div><div class="dashboard-preview"><div class="preview-bar"></div><div class="preview-grid"><i></i><i></i><i></i></div><div class="preview-list"><b></b><b></b><b></b></div></div><div class="bassam-card"><div class="bassam">👨🏻‍💼</div><div><b>بَصّام</b><small>مساعد المتابعة الذكي</small></div></div></div>
      </div></section>

      <section id="about" class="section-pad"><div class="container split"><div><span class="eyebrow">من نحن</span><h2>وجهتك الموثوقة لإنجاز معاملاتك الحكومية والخاصة بسرعة واحترافية.</h2><p>بصمة لتخليص المعاملات تساعد الأفراد والشركات في البحرين على تجهيز المستندات، متابعة الجهات المختصة، وتقديم تجربة شفافة من أول استشارة حتى إغلاق الطلب.</p><div class="value-grid"><article><b>🛡️</b><h3>السرية والخصوصية</h3><p>صلاحيات مستخدمين وسجل نشاط لكل إجراء.</p></article><article><b>⏱️</b><h3>الالتزام بالمواعيد</h3><p>تقويم وتنبيهات للمواعيد النهائية.</p></article><article><b>📌</b><h3>شفافية كاملة</h3><p>حالة الطلب والمبالغ المتبقية واضحة دائماً.</p></article></div></div><aside class="brand-board glass"><span class="brand-mark big"><i></i><b>✓</b></span><h3>${brand.nameAr}</h3><p>${brand.nameEn}</p><small>Royal Blue #0D3B66 • Emerald Green #009966 • White • Light Gray</small></aside></div></section>

      <section id="services" class="section-pad soft"><div class="container"><div class="section-head"><span class="eyebrow">الخدمات</span><h2>نظام خدمات ديناميكي قابل للتحديث من لوحة التحكم</h2><p>استُخدمت الفئات المرجعية لخدمات البحرين مثل الجوازات والهجرة، السجل التجاري، WPS، الكهرباء والماء، LMRA، المرور، السفارات، وتمكين.</p></div><div id="publicServices" class="cards services-grid"></div></div></section>

      <section id="setup" class="section-pad"><div class="container"><div class="section-head"><span class="eyebrow">تأسيس الشركات في البحرين</span><h2>حاسبة أسعار ومتطلبات قابلة للتحرير بالكامل</h2><p>يمكن للمشرف تحديث أنواع الشركات، الأسعار، الرسوم الحكومية، المستندات، الملاحظات، ومدة المعالجة فوراً.</p></div><div class="setup-grid">${setupTypes.map(item => `<article class="setup-card glass"><h3>${item.type}</h3><div class="price-row"><b>${formatBhd(item.price)}</b><span>رسوم حكومية تقديرية: ${formatBhd(item.gov)}</span></div><p><strong>المتطلبات:</strong> ${item.req}</p><p><strong>المستندات:</strong> ${item.docs}</p><small>مدة المعالجة: ${item.duration}</small></article>`).join('')}</div></div></section>

      <section class="section-pad soft"><div class="container"><div class="stat-grid">${kpi('معاملة منجزة', '+1,240', 'خلال آخر 12 شهر', '✅')}${kpi('متوسط رضا العملاء', '97%', 'متابعة عبر واتساب', '⭐')}${kpi('متوسط زمن الرد', '12 د', 'خلال ساعات العمل', '⚡')}${kpi('ملفات مؤرشفة', '+8K', 'إدارة آمنة للوثائق', '📁')}</div><div class="testimonial-grid"><article>“تعامل احترافي وتحديثات مستمرة حتى انتهاء السجل التجاري.”<b>— شركة خليجية ناشئة</b></article><article>“اختصروا علينا الوقت والزيارات، كل شيء كان واضحاً.”<b>— عميل أفراد</b></article><article>“النظام الداخلي ممتاز للمتابعة والمحاسبة.”<b>— مدير عمليات</b></article></div></div></section>

      <section id="faq" class="section-pad"><div class="container faq"><span class="eyebrow">الأسئلة الشائعة</span><h2>إجابات سريعة قبل بدء الطلب</h2>${['هل الأسعار تشمل الرسوم الحكومية؟|تظهر الرسوم الحكومية بشكل مستقل لأن قيمتها قد تختلف حسب الجهة ونوع الطلب.', 'هل يمكن إرسال الملفات عبر واتساب؟|نعم، مع إمكانية رفعها وأرشفتها داخل الطلب في النظام الداخلي.', 'كيف أعرف حالة طلبي؟|يصلك رقم طلب ويمكن لفريق بصمة تحديثك عبر واتساب أو البريد.', 'هل المنصة تدعم الطباعة وPDF؟|نعم، يوجد مولد مستندات A4 وتصدير PDF وWord في لوحة التحكم.'].map(row => { const [q,a]=row.split('|'); return `<details><summary>${q}</summary><p>${a}</p></details>`; }).join('')}</div></section>

      <section id="login" class="section-pad soft"><div class="container login-grid"><div><span class="eyebrow">نظام دخول آمن</span><h2>صلاحيات حسب الدور: Super Admin، Employee، Accountant، Content Manager.</h2><p>واجهة جاهزة للربط مع JWT، تشفير كلمات المرور، جلسات قصيرة، وسجل نشاط لكل عملية حساسة.</p><div class="roles">${employees.map(e => `<span>${e[1]}</span>`).join('')}</div></div><form class="login-card glass"><label>البريد الإلكتروني<input value="admin@basmapro.bh" /></label><label>كلمة المرور<input type="password" value="password" /></label><button type="button" class="btn primary">تسجيل الدخول إلى لوحة التحكم</button></form></div></section>

      <section id="dashboard" class="section-pad dashboard-section"><div class="container"><div class="dash-shell glass"><aside class="sidebar">${logo()}<button class="dash-tab active" data-tab="overview">الرئيسية</button><button class="dash-tab" data-tab="orders">المهام والطلبات</button><button class="dash-tab" data-tab="services">إدارة الخدمات</button><button class="dash-tab" data-tab="marketing">AI التسويق</button><button class="dash-tab" data-tab="documents">مولد المستندات</button><button class="dash-tab" data-tab="reports">التقارير والمحاسبة</button><button class="dash-tab" data-tab="admin">الإدارة والنسخ الاحتياطي</button></aside><div class="dash-main"><div class="dash-head"><div><span class="eyebrow">Employee / Admin Dashboard</span><h2 id="dashTitle">لوحة الإدارة</h2></div><div class="dash-actions"><button class="mini-btn">🔔 6</button><button class="mini-btn">بحث ⌘K</button><button class="mini-btn">نسخ احتياطي</button></div></div><div id="dashContent"></div></div></div></div></section>

      <section id="contact" class="section-pad"><div class="container contact-grid"><div><span class="eyebrow">تواصل معنا</span><h2>ابدأ معاملتك مع فريق بصمة اليوم.</h2><p>واتساب مباشر، نموذج تواصل، ساعات عمل، خرائط جوجل، وروابط اجتماعية جاهزة.</p><div class="contact-actions"><a class="btn whatsapp" href="https://wa.me/${brand.whatsapp}" target="_blank">واتساب مباشر</a><a class="btn ghost" href="mailto:${brand.email}">${brand.email}</a></div><div class="office-card glass"><b>ساعات العمل</b><span>الأحد - الخميس: 8:00 صباحاً - 6:00 مساءً</span><span>السبت: 9:00 صباحاً - 2:00 مساءً</span><span>Instagram • TikTok • LinkedIn</span></div><div class="map glass">📍 Google Maps Embed — مملكة البحرين</div></div><form class="contact-form glass"><input placeholder="الاسم الكامل"/><input placeholder="رقم الهاتف"/><input placeholder="البريد الإلكتروني"/><select><option>اختر نوع الخدمة</option>${services.map(service => `<option>${service.title}</option>`).join('')}</select><textarea placeholder="اكتب تفاصيل الطلب"></textarea><button class="btn primary" type="button">إرسال الطلب</button></form></div></section>
    </main>
    <a class="float-wa" href="https://wa.me/${brand.whatsapp}" target="_blank" aria-label="WhatsApp">💬</a><footer><div class="container">${logo()}<p>© 2026 Basma Pro Services. ${brand.slogan}</p></div></footer>
  </div>`;
  renderPublicServices();
  renderDashboard('overview');
}

function renderPublicServices() {
  document.getElementById('publicServices').innerHTML = services.filter(s => s.status !== 'مخفي').map(service => serviceCard(service)).join('');
}

function ordersTable() {
  return `<div class="toolbar"><input placeholder="بحث عن عميل أو رقم طلب"/><select><option>كل الحالات</option><option>Pending</option><option>Processing</option><option>Waiting Customer</option><option>Completed</option><option>Cancelled</option></select><button class="btn small primary">+ طلب جديد</button></div><div class="table-wrap"><table><thead><tr><th>رقم الطلب</th><th>العميل</th><th>الشركة</th><th>الهاتف</th><th>الفئة</th><th>المبلغ</th><th>المتبقي</th><th>الدفع</th><th>الموعد</th><th>الحالة</th><th>الموظف</th><th>ملفات</th></tr></thead><tbody>${orders.map(o => `<tr><td dir="ltr">${o.id}</td><td>${o.customer}<small>${o.email}</small></td><td>${o.company}</td><td dir="ltr">${o.phone}</td><td>${o.category}</td><td>${formatBhd(o.agreed)}</td><td>${formatBhd(o.remaining)}</td><td>${o.payment}</td><td>${o.deadline}</td><td>${pill(o.status)}</td><td>${o.employee}</td><td>${o.files}</td></tr>`).join('')}</tbody></table></div>`;
}

function renderDashboard(tab) {
  const titleMap = { overview: 'الرئيسية التنفيذية', orders: 'إدارة المهام والطلبات', services: 'إدارة الخدمات والأسعار', marketing: 'مولد المحتوى التسويقي بالذكاء الاصطناعي', documents: 'مولد المستندات والطباعة', reports: 'التقارير والمحاسبة', admin: 'إدارة النظام' };
  document.getElementById('dashTitle').textContent = titleMap[tab];
  const revenue = orders.reduce((sum, o) => sum + o.agreed, 0);
  const remaining = orders.reduce((sum, o) => sum + o.remaining, 0);
  const completed = orders.filter(o => o.status === 'Completed').length;
  const overview = `<div class="stat-grid">${kpi('إجمالي الإيرادات', formatBhd(revenue), 'هذا الشهر', '💰')}${kpi('الأرصدة المتبقية', formatBhd(remaining), 'تحتاج متابعة', '📌')}${kpi('طلبات مكتملة', completed, 'معدل إنجاز 82%', '✅')}${kpi('مواعيد قريبة', 7, 'خلال 72 ساعة', '⏰')}</div><div class="panel-grid"><article class="panel wide"><h3>آخر الطلبات</h3>${ordersTable()}</article><article class="panel"><h3>نشاط الموظفين</h3>${employees.map(e => `<div class="employee"><span class="avatar">${e[4]}</span><div><b>${e[0]}</b><small>${e[1]} • ${e[2]} مهمة</small></div><em>${e[3]}%</em></div>`).join('')}</article></div>`;
  const servicesManagement = `<div class="toolbar"><input id="serviceTitle" placeholder="اسم الخدمة"/><input id="servicePrice" type="number" placeholder="السعر"/><button class="btn small primary" id="addService">إضافة خدمة</button></div><div id="serviceManager" class="cards services-grid">${services.map(service => serviceCard(service, true)).join('')}</div>`;
  const marketing = `<div class="ai-grid"><form class="panel ai-form"><label>اسم الخدمة<input id="aiService" value="تأسيس الشركات في البحرين"/></label><label>تفاصيل العرض<textarea id="aiOffer">خصم خاص على باقة تأسيس الشركات الجديدة مع متابعة كاملة.</textarea></label><label>الجمهور المستهدف<input id="aiAudience" value="رواد الأعمال والمستثمرون في البحرين"/></label><button class="btn primary" type="button" id="generateMarketing">توليد المحتوى</button></form><article class="panel"><h3>مخرجات جاهزة</h3><div id="marketingOutput" class="output-box">سيظهر هنا منشور Instagram، إعلان WhatsApp، أفكار Reels/TikTok، ونص عربي احترافي عبر OpenAI API.</div></article></div>`;
  const documents = `<div class="doc-layout"><form class="panel"><label>العميل / الشركة<select><option>النور للتجارة</option><option>اللؤلؤ للمطاعم</option></select></label><label>الطرف الثاني<input value="الموظف / العميل"/></label><label>نوع المستند<select id="docType"><option>Salary Certificate</option><option>Employment Letter</option><option>Contract</option><option>Authorization Letter</option><option>Invoice</option><option>Receipt</option><option>Agreement</option></select></label><button class="btn primary" type="button" id="generateDoc">توليد مستند A4</button><div class="card-actions"><button class="mini-btn" type="button">حفظ كقالب</button><button class="mini-btn" type="button">Export PDF</button><button class="mini-btn" type="button">Export Word</button><button class="mini-btn" type="button">Print</button></div></form><article id="documentPreview" class="a4"><header>${logo()}<span>Official Letterhead</span></header><h2>خطاب رسمي</h2><p contenteditable="true">اختر البيانات واضغط توليد لإنشاء مستند عربي RTL قابل للتحرير والطباعة.</p><footer>ختم وتوقيع بصمة لتخليص المعاملات</footer></article></div>`;
  const reports = `<div class="stat-grid">${kpi('الإيرادات', formatBhd(revenue), 'Revenue reports', '📈')}${kpi('المدفوعات', formatBhd(revenue - remaining), 'Payments reports', '💳')}${kpi('المتبقي', formatBhd(remaining), 'Outstanding balances', '🧾')}${kpi('معدل الإكمال', '82%', 'Completion rates', '🎯')}</div><div class="panel-grid"><article class="panel wide"><h3>الرسم البياني الشهري</h3><div class="chart">${[68, 82, 54, 92, 74, 88, 96].map((h, i) => `<span style="height:${h}%"><b>${h}</b><small>${['ينا','فبر','مار','أبر','ماي','يون','يول'][i]}</small></span>`).join('')}</div></article><article class="panel"><h3>تنبيهات محاسبية</h3><ul class="alerts"><li>3 طلبات بأرصدة متبقية.</li><li>فاتورتان جاهزتان للطباعة.</li><li>تقرير أداء الموظفين محدث.</li></ul></article></div>`;
  const admin = `<div class="admin-grid">${['Notifications system', 'Activity logs', 'File management', 'Internal notes', 'Calendar', 'Deadline reminders', 'Global search', 'Advanced filters', 'Encrypted backup system'].map(item => `<article class="admin-feature glass"><b>✓</b><span>${item}</span><small>جاهز للربط مع API والصلاحيات.</small></article>`).join('')}</div><article class="panel"><h3>بنية الإنتاج</h3><p>JWT Auth، PostgreSQL أو MongoDB، Express API، Cloudinary/Firebase Storage، OpenAI API، وسجلات تدقيق لكل عملية.</p><a class="text-link" href="docs/architecture.md">عرض ملف بنية قاعدة البيانات وواجهات API</a></article>`;
  document.getElementById('dashContent').innerHTML = { overview, orders: ordersTable(), services: servicesManagement, marketing, documents, reports, admin }[tab];
}

render();

document.querySelector('.menu-toggle').addEventListener('click', () => document.querySelector('nav').classList.toggle('open'));
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => document.querySelector('nav').classList.remove('open')));
document.querySelectorAll('.dash-tab').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.dash-tab').forEach(tab => tab.classList.remove('active'));
  button.classList.add('active');
  renderDashboard(button.dataset.tab);
}));

document.addEventListener('click', event => {
  if (event.target.id === 'addService') {
    const title = document.getElementById('serviceTitle').value.trim() || 'خدمة جديدة';
    const price = Number(document.getElementById('servicePrice').value || 10);
    services.unshift({ id: `srv-${Date.now()}`, icon: '✨', title, desc: 'خدمة مضافة من لوحة التحكم ويمكن تعديل وصفها ومتطلباتها.', price, time: 'حسب الطلب', status: 'ظاهر', docs: ['مستندات حسب نوع الطلب'] });
    renderPublicServices(); renderDashboard('services');
  }
  if (event.target.matches('.delete-service')) {
    const index = services.findIndex(s => s.id === event.target.dataset.id);
    if (index >= 0) services.splice(index, 1);
    renderPublicServices(); renderDashboard('services');
  }
  if (event.target.matches('.toggle-service')) {
    const service = services.find(s => s.id === event.target.dataset.id);
    service.status = service.status === 'مخفي' ? 'ظاهر' : 'مخفي';
    renderPublicServices(); renderDashboard('services');
  }
  if (event.target.matches('.edit-service')) {
    const service = services.find(s => s.id === event.target.dataset.id);
    service.price += 5;
    service.status = 'محدث';
    renderPublicServices(); renderDashboard('services');
  }
  if (event.target.id === 'generateMarketing') {
    const service = document.getElementById('aiService').value;
    const offer = document.getElementById('aiOffer').value;
    const audience = document.getElementById('aiAudience').value;
    document.getElementById('marketingOutput').innerHTML = `<h4>منشور Instagram</h4><p>ابدأ معاملتك بثقة مع بصمة. ${service} أصبح أسهل مع فريق يتابع عنك التفاصيل خطوة بخطوة.</p><h4>إعلان WhatsApp</h4><p>${offer} للـ ${audience}. تواصل الآن واحصل على قائمة المستندات خلال دقائق.</p><h4>Reels/TikTok</h4><ul><li>قبل/بعد: من أوراق كثيرة إلى طلب منجز.</li><li>لقطة ختم “تم الإنجاز” مع شعار بصمة.</li><li>3 أخطاء تؤخر معاملات الشركات.</li></ul>`;
  }
  if (event.target.id === 'generateDoc') {
    const type = document.getElementById('docType').value;
    document.getElementById('documentPreview').innerHTML = `<header>${logo()}<span>${new Date().toLocaleDateString('ar-BH')}</span></header><h2>${type}</h2><p contenteditable="true">تشهد بصمة لتخليص المعاملات بأن البيانات المذكورة صحيحة حسب المستندات المقدمة، وقد تم إعداد هذا المستند بصياغة مهنية قابلة للتعديل والطباعة على مقاس A4.</p><div class="signature">التوقيع والختم الرسمي</div><footer>${brand.slogan}</footer>`;
  }
});
