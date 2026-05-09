const state = {
  lang: 'ar',
  theme: 'light',
  dashboard: 'client',
  step: 1,
};

const copy = {
  ar: {
    dir: 'rtl', brand: 'بصمة', brandFull: 'بصمة | BASMA', langLabel: 'English', themeLabel: 'الوضع الليلي',
    nav: ['الرئيسية', 'الخدمات', 'تتبع الطلب', 'تقديم طلب', 'لوحة العميل', 'لوحة الموظفين', 'من نحن', 'تواصل'],
    heroTitle: 'شريكك الموثوق لإنجاز المعاملات الحكومية في البحرين بسرعة وشفافية.',
    heroLead: 'منصة رقمية فاخرة تجمع تقديم الطلبات، رفع المستندات، الدفع، التتبع الفوري، وإدارة فرق العمل في تجربة واحدة آمنة وسهلة للأفراد والشركات.',
    start: 'ابدأ معاملة', track: 'تتبع طلب', contact: 'تواصل معنا', quickTitle: 'طلب سريع خلال دقيقة',
    servicesTitle: 'خدمات حكومية منظمة حسب الجهة والوقت والتكلفة', dashboards: 'نظام لوحات متكامل',
  },
  en: {
    dir: 'ltr', brand: 'BASMA', brandFull: 'BASMA | بصمة', langLabel: 'العربية', themeLabel: 'Dark mode',
    nav: ['Home', 'Services', 'Track', 'Apply', 'Client Dashboard', 'Staff Panel', 'About', 'Contact'],
    heroTitle: 'Your trusted partner for fast and reliable government transactions in Bahrain.',
    heroLead: 'A premium digital platform for application intake, document uploads, payments, live tracking, and staff operations in one secure and effortless experience.',
    start: 'Start Transaction', track: 'Track Request', contact: 'Contact Us', quickTitle: 'Quick request in one minute',
    servicesTitle: 'Government services organized by entity, time, and price', dashboards: 'Integrated dashboard system',
  },
};

const services = [
  { icon: '🪪', title: 'LMRA Services', ar: 'خدمات هيئة تنظيم سوق العمل', cat: 'Companies', time: '3–10 days', price: '30 BHD', docs: ['Passport', 'CR copy', 'Employment contract'], featured: true },
  { icon: '🧾', title: 'CPR Services', ar: 'خدمات البطاقة السكانية', cat: 'Individuals', time: '1–4 days', price: '18 BHD', docs: ['Smart card', 'Address proof', 'Photo'] },
  { icon: '🏢', title: 'Sijilat & CR', ar: 'خدمات السجلات التجارية', cat: 'Companies', time: '2–7 days', price: '35 BHD', docs: ['Lease', 'Owner ID', 'Activity details'], featured: true },
  { icon: '💡', title: 'Electricity & Water', ar: 'الكهرباء والماء', cat: 'Utilities', time: '1–3 days', price: '15 BHD', docs: ['Smart card', 'Account number', 'Lease'] },
  { icon: '🛂', title: 'Visa Applications', ar: 'طلبات التأشيرات', cat: 'Immigration', time: '3–12 days', price: '25 BHD', docs: ['Passport', 'Sponsor data', 'Photo'] },
  { icon: '🏙️', title: 'Municipality Services', ar: 'خدمات البلدية', cat: 'Government', time: '4–14 days', price: '28 BHD', docs: ['CR', 'Location plan', 'Owner approval'] },
  { icon: '🚗', title: 'Traffic Services', ar: 'خدمات المرور', cat: 'Individuals', time: '1–3 days', price: '18 BHD', docs: ['Vehicle form', 'Insurance', 'Smart card'] },
  { icon: '📄', title: 'Commercial Registration', ar: 'التسجيل التجاري', cat: 'Companies', time: '5–10 days', price: '45 BHD', docs: ['Partners IDs', 'Capital data', 'Articles'] },
];

const applications = [
  { no: 'BAS-26051', service: 'LMRA Services', client: 'Al Noor Trading', status: 'Government Processing', percent: 72, owner: 'Sara Ali', due: '2026-05-12', pay: 'Partially paid' },
  { no: 'BAS-26052', service: 'Electricity & Water', client: 'Maryam Yousif', status: 'Completed', percent: 100, owner: 'Mohammed Hassan', due: '2026-05-07', pay: 'Paid' },
  { no: 'BAS-26053', service: 'Sijilat & CR', client: 'Pearl Restaurants', status: 'Waiting for Documents', percent: 44, owner: 'Noor Fahad', due: '2026-05-14', pay: 'Unpaid' },
  { no: 'BAS-26054', service: 'CPR Services', client: 'Khalid Essa', status: 'Under Review', percent: 28, owner: 'Ali Jassim', due: '2026-05-10', pay: 'Paid' },
];

const statuses = ['Submitted', 'Under Review', 'Waiting for Documents', 'Government Processing', 'Completed'];
const staff = [['Sara Ali', 'Admin', 18, '96%'], ['Mohammed Hassan', 'Manager', 27, '94%'], ['Noor Fahad', 'Employee', 14, '91%'], ['Ali Jassim', 'Employee', 11, '89%']];

const t = key => copy[state.lang][key];
const isAr = () => state.lang === 'ar';
const local = (en, ar) => isAr() ? ar : en;
const iconLogo = () => `<span class="brand-mark" aria-hidden="true"><i></i><b>B</b></span>`;
const sectionTitle = (eyebrow, title, lead = '') => `<div class="section-title"><span class="eyebrow">${eyebrow}</span><h2>${title}</h2>${lead ? `<p>${lead}</p>` : ''}</div>`;

function serviceCards() {
  return services.map(service => `<article class="service-card glass ${service.featured ? 'featured' : ''}" data-cat="${service.cat}">
    <div class="service-top"><span class="service-icon">${service.icon}</span><span class="badge">${service.cat}</span></div>
    <h3>${local(service.title, service.ar)}</h3><p>${local('Estimated processing', 'مدة الإنجاز')}: <b>${service.time}</b></p>
    <ul>${service.docs.map(doc => `<li>${doc}</li>`).join('')}</ul>
    <div class="card-footer"><strong>${service.price}</strong><a class="mini-btn" href="#apply">${local('Apply now', 'قدم الآن')}</a></div>
  </article>`).join('');
}

function trackingTimeline() {
  return statuses.map((status, index) => `<li class="${index < 4 ? 'done' : ''}"><span>${index + 1}</span><div><b>${local(status, {
    Submitted: 'تم الإرسال', 'Under Review': 'قيد المراجعة', 'Waiting for Documents': 'بانتظار مستندات', 'Government Processing': 'معالجة حكومية', Completed: 'مكتمل'
  }[status])}</b><small>${index === 2 ? local('Client uploaded CPR copy', 'تم رفع نسخة البطاقة') : local('Status synchronized', 'تحديث متزامن')}</small></div></li>`).join('');
}

function appRows() {
  return applications.map(app => `<tr><td><b>${app.no}</b><small>${app.service}</small></td><td>${app.client}</td><td><span class="pill ${app.status.toLowerCase().replaceAll(' ', '-')}">${app.status}</span></td><td><div class="progress"><span style="width:${app.percent}%"></span></div><small>${app.percent}%</small></td><td>${app.owner}</td><td>${app.due}</td><td>${app.pay}</td></tr>`).join('');
}

function dashboard(tab = state.dashboard) {
  state.dashboard = tab;
  const client = `<div class="dash-content-grid">
    ${['Total applications|12|📁', 'Pending requests|4|⏳', 'Completed requests|8|✅', 'Unread notifications|6|🔔'].map(item => { const [a,b,c]=item.split('|'); return `<article class="kpi-card"><span>${c}</span><b>${b}</b><small>${local(a, {'Total applications':'إجمالي الطلبات','Pending requests':'طلبات معلقة','Completed requests':'طلبات مكتملة','Unread notifications':'إشعارات جديدة'}[a])}</small></article>` }).join('')}
    <article class="panel wide"><h3>${local('My applications', 'طلباتي')}</h3><div class="table-wrap"><table><thead><tr><th>#</th><th>${local('Client','العميل')}</th><th>${local('Status','الحالة')}</th><th>${local('Progress','التقدم')}</th><th>${local('Staff','الموظف')}</th><th>${local('Due','الموعد')}</th><th>${local('Payment','الدفع')}</th></tr></thead><tbody>${appRows()}</tbody></table></div></article>
    <article class="panel"><h3>${local('Secure file vault', 'خزنة الملفات الآمنة')}</h3><div class="upload-zone">⇧<b>${local('Drag & drop documents', 'اسحب المستندات هنا')}</b><small>PDF, JPG, PNG · OCR ready · encrypted storage</small></div></article>
  </div>`;
  const staffPanel = `<div class="dash-content-grid">
    ${['Active cases|38|🗂️', 'Revenue|2,840 BHD|📈', 'SLA success|94%|🎯', 'Files reviewed|126|🔐'].map(item => { const [a,b,c]=item.split('|'); return `<article class="kpi-card"><span>${c}</span><b>${b}</b><small>${a}</small></article>` }).join('')}
    <article class="panel wide"><h3>Kanban operations</h3><div class="kanban">${statuses.slice(0,4).map(status => `<div><b>${status}</b>${applications.filter((_, i) => i % 4 === statuses.indexOf(status) % 4).map(app => `<span>${app.no}<small>${app.service}</small></span>`).join('')}</div>`).join('')}</div></article>
    <article class="panel"><h3>${local('Team performance', 'أداء الفريق')}</h3>${staff.map(([name, role, casesDone, rate]) => `<div class="employee"><span>${name[0]}</span><div><b>${name}</b><small>${role} · ${casesDone} cases</small></div><em>${rate}</em></div>`).join('')}</article>
    <article class="panel wide"><h3>${local('Smart management tools', 'أدوات الإدارة الذكية')}</h3><div class="feature-list">${['Role-based access', 'Activity logs', 'PDF / Excel export', 'Internal notes', 'Deadline reminders', 'Advanced filters', 'Payment history', 'Invoice generation'].map(x => `<span>✓ ${x}</span>`).join('')}</div></article>
  </div>`;
  return `<section id="dashboard" class="section-pad"><div class="container">${sectionTitle(local('Dashboards', 'لوحات التحكم'), t('dashboards'), local('Client and staff workspaces with authentication, notifications, payments, files, and analytics.', 'مساحات عمل للعملاء والموظفين مع المصادقة والإشعارات والدفع والملفات والتحليلات.'))}
    <div class="dash-shell glass"><aside class="sidebar"><button class="dash-tab ${tab === 'client' ? 'active' : ''}" data-dash="client">${local('Client Dashboard', 'لوحة العميل')}</button><button class="dash-tab ${tab === 'staff' ? 'active' : ''}" data-dash="staff">${local('Staff Admin Panel', 'لوحة الموظفين')}</button><button class="dash-tab" data-dash="auth">${local('Authentication', 'المصادقة')}</button></aside><main class="dash-main">${tab === 'staff' ? staffPanel : tab === 'auth' ? authPanel() : client}</main></div></div></section>`;
}

function authPanel() {
  return `<div class="auth-grid"><article class="panel"><h3>${local('Secure login', 'تسجيل دخول آمن')}</h3><label>Email / CPR<input placeholder="client@basma.bh" /></label><label>Password<input type="password" placeholder="••••••••" /></label><button class="btn primary">${local('Login with OTP', 'دخول مع رمز OTP')}</button></article><article class="panel"><h3>${local('Security features', 'خصائص الأمان')}</h3><div class="feature-list vertical">${['OTP verification', 'Email verification', 'Password reset', 'Role-based access', 'Session management', 'Encrypted uploads'].map(x => `<span>🔒 ${x}</span>`).join('')}</div></article></div>`;
}

function multiStepForm() {
  const steps = [local('Personal information', 'المعلومات الشخصية'), local('Service type', 'نوع الخدمة'), local('Attachments', 'المرفقات'), local('Payment', 'الدفع'), local('Confirmation', 'التأكيد')];
  return `<section id="apply" class="section-pad soft"><div class="container"><div class="split"><div>${sectionTitle(local('Online form', 'النموذج الإلكتروني'), local('Submit a request with auto-save', 'قدّم طلبك مع حفظ تلقائي'), local('Dynamic fields, validation, mobile uploads, payment, and confirmation in a guided flow.', 'حقول ديناميكية، تحقق، رفع ملفات، دفع، وتأكيد في مسار واضح.'))}<div class="stepper">${steps.map((s,i)=>`<span class="${i + 1 <= state.step ? 'active' : ''}">${i+1}<small>${s}</small></span>`).join('')}</div></div><form class="request-card glass"><label>${local('Full name', 'الاسم الكامل')}<input required placeholder="${local('Fatima Ahmed', 'فاطمة أحمد')}" /></label><label>${local('Service', 'الخدمة')}<select>${services.map(s=>`<option>${local(s.title, s.ar)}</option>`).join('')}</select></label><label>${local('Notes', 'ملاحظات')}<textarea placeholder="${local('Tell us what you need...', 'اكتب تفاصيل الطلب...')}"></textarea></label><div class="upload-zone">⇧<b>${local('Upload required documents', 'ارفع المستندات المطلوبة')}</b><small>Auto-save · OCR · PDF preview</small></div><button class="btn primary" type="button" id="nextStep">${local('Continue securely', 'متابعة آمنة')}</button></form></div></div></section>`;
}

function render() {
  const c = copy[state.lang];
  document.documentElement.lang = state.lang;
  document.documentElement.dir = c.dir;
  document.body.dataset.theme = state.theme;
  document.getElementById('app').innerHTML = `<header class="site-header"><div class="container nav-wrap"><a class="logo" href="#home">${iconLogo()}<span><strong>${c.brandFull}</strong><small>Government Clearance Platform</small></span></a><nav>${c.nav.map((n,i)=>`<a href="#${['home','services','track','apply','dashboard','dashboard','about','contact'][i]}">${n}</a>`).join('')}</nav><button class="chip" id="langBtn">${c.langLabel}</button><button class="chip" id="themeBtn">${c.themeLabel}</button><button class="menu-toggle" id="menuBtn">☰</button></div></header>
  <main><section id="home" class="hero section-pad"><div class="container hero-grid"><div class="reveal"><span class="eyebrow">${local('Luxury · Government · Technology', 'فخامة · حكومة · تقنية')}</span><h1>${c.heroTitle}</h1><p>${c.heroLead}</p><div class="hero-actions"><a class="btn primary" href="#apply">${c.start}</a><a class="btn ghost" href="#track">${c.track}</a><a class="btn whatsapp" href="https://wa.me/97366000000">WhatsApp</a></div><div class="trust-row"><span>🇧🇭 Bahrain focused</span><span>OTP secure</span><span>SMS · Email · WhatsApp</span><span>QR verification</span></div></div><aside class="hero-product glass reveal delay"><div class="orbit"></div>${iconLogo()}<h3>${c.quickTitle}</h3><label>${local('Application number', 'رقم الطلب')}<input value="BAS-26051" /></label><label>${local('Mobile number', 'رقم الهاتف')}<input value="+973 " /></label><button class="btn primary">${c.track}</button><div class="mini-stats"><b>4.9/5<span>${local('Reviews', 'تقييم العملاء')}</span></b><b>2,400+<span>${local('Transactions', 'معاملة')}</span></b><b>82%<span>${local('Same-week completion', 'إنجاز أسبوعي')}</span></b></div></aside></div></section>
  <section id="services" class="section-pad"><div class="container">${sectionTitle(local('Services', 'الخدمات'), c.servicesTitle, local('Search, filter, price, documents, processing times, and one-click application for Bahrain government transactions.', 'بحث وتصفية وأسعار ومستندات ومدد إنجاز وتقديم مباشر للمعاملات الحكومية في البحرين.'))}<div class="service-toolbar glass"><input id="serviceSearch" placeholder="${local('Search services...', 'ابحث عن خدمة...')}" /><select id="serviceFilter"><option>All</option><option>Companies</option><option>Individuals</option><option>Government</option><option>Utilities</option></select></div><div class="services-grid" id="serviceGrid">${serviceCards()}</div></div></section>
  <section id="track" class="section-pad soft"><div class="container split"><div>${sectionTitle(local('Live tracking', 'تتبع مباشر'), local('Track every step with a clear timeline', 'تابع كل خطوة عبر مسار زمني واضح'), local('Clients can upload missing documents, read staff notes, and receive real-time SMS, email, WhatsApp, and push updates.', 'يمكن للعملاء رفع النواقص وقراءة الملاحظات واستلام تحديثات SMS والبريد وواتساب والتنبيهات.'))}<div class="track-box glass"><input value="BAS-26051" /><button class="btn primary">${c.track}</button></div></div><ol class="timeline glass">${trackingTimeline()}</ol></div></section>
  ${multiStepForm()}${dashboard()}
  <section id="about" class="section-pad"><div class="container split"><div>${sectionTitle(local('About BASMA', 'عن بصمة'), local('A Bahraini identity built on trust and precision', 'هوية بحرينية مبنية على الثقة والدقة'), local('BASMA combines government-service know-how with digital workflows, premium support, audit logs, and a professional team for individuals and companies.', 'تجمع بصمة خبرة الخدمات الحكومية مع سير عمل رقمي ودعم فاخر وسجلات تدقيق وفريق احترافي للأفراد والشركات.'))}<div class="values">${['Vision & mission', 'Certified process', 'Bahrain-first service', 'Transparent pricing'].map(x=>`<span>${x}</span>`).join('')}</div></div><div class="reviews glass"><h3>${local('Customer reviews', 'آراء العملاء')}</h3><blockquote>“${local('BASMA turned a stressful government process into a clear digital journey.', 'حوّلت بصمة المعاملة الحكومية إلى رحلة رقمية واضحة وسهلة.')}”</blockquote><small>— Al Dana Group</small></div></div></section>
  <section class="section-pad soft"><div class="container">${sectionTitle(local('Smart features', 'خصائص ذكية'), local('AI, OCR, QR verification, and proactive reminders', 'ذكاء اصطناعي و OCR و QR وتذكيرات تلقائية'))}<div class="smart-grid">${['AI assistant chatbot', 'Smart application suggestions', 'OCR document reading', 'Digital receipt QR verification', 'Auto-reminders', 'Client activity logs', 'Skeleton loaders', 'Dark/light mode'].map(x=>`<article class="smart-card glass">✦<b>${x}</b><small>Ready for Firebase or Supabase integration</small></article>`).join('')}</div></div></section>
  <section id="contact" class="section-pad"><div class="container contact-grid"><div>${sectionTitle(local('Contact', 'تواصل'), local('Always close to clients', 'دائماً قريبون من العملاء'))}<div class="contact-actions"><a class="btn whatsapp" href="https://wa.me/97366000000">WhatsApp</a><a class="btn ghost" href="mailto:info@basma.bh">info@basma.bh</a></div><p>Manama, Kingdom of Bahrain · Sunday–Thursday · 8:00–17:00</p></div><form class="request-card glass"><input placeholder="${local('Name', 'الاسم')}" /><input placeholder="${local('Phone', 'الهاتف')}" /><textarea placeholder="${local('Message', 'الرسالة')}"></textarea><button class="btn primary" type="button">${c.contact}</button></form></div></section></main><a class="float-wa" href="https://wa.me/97366000000">☘</a><footer><div class="container"><div class="logo">${iconLogo()}<span><strong>${c.brandFull}</strong><small>© 2026 BASMA Bahrain</small></span></div><p>SEO optimized · responsive · secure architecture · Lighthouse-ready static prototype.</p></div></footer>`;
  bindEvents();
}

function bindEvents() {
  document.getElementById('langBtn').onclick = () => { state.lang = isAr() ? 'en' : 'ar'; render(); };
  document.getElementById('themeBtn').onclick = () => { state.theme = state.theme === 'light' ? 'dark' : 'light'; render(); };
  document.getElementById('menuBtn').onclick = () => document.querySelector('nav').classList.toggle('open');
  document.querySelectorAll('.dash-tab').forEach(btn => btn.onclick = () => { document.querySelector('#dashboard').outerHTML = dashboard(btn.dataset.dash); bindEvents(); });
  const search = document.getElementById('serviceSearch');
  const filter = document.getElementById('serviceFilter');
  const filterServices = () => {
    const q = search.value.toLowerCase();
    const f = filter.value;
    document.querySelectorAll('.service-card').forEach(card => {
      card.style.display = (card.textContent.toLowerCase().includes(q) && (f === 'All' || card.dataset.cat === f)) ? '' : 'none';
    });
  };
  search.oninput = filterServices;
  filter.onchange = filterServices;
  document.getElementById('nextStep').onclick = () => { state.step = state.step === 5 ? 1 : state.step + 1; render(); location.hash = '#apply'; };
}

render();
