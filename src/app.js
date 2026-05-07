const brand = {
  nameAr: 'بصمة لتخليص المعاملات',
  nameEn: 'Basma Pro Services',
  slogan: 'ننجزها... ببصمة ثقة',
};

const services = [
  ['💡', 'الكهرباء والماء', 'طلبات التوصيل، تحديث البيانات، متابعة الفواتير، وإنهاء الإجراءات لدى الجهات المختصة.'],
  ['🪪', 'خدمات LMRA', 'إصدار وتجديد تصاريح العمل، مواعيد البصمة، متابعة الطلبات، وتحضير المستندات.'],
  ['🛂', 'معاملات التأشيرات', 'تقديم التأشيرات، الإقامات، الزيارات، التمديد، وتجهيز الملفات المطلوبة بسرعة.'],
  ['🏛️', 'السجل التجاري والخدمات الحكومية', 'السجلات التجارية، التراخيص، التصديقات، والطلبات الحكومية للشركات والأفراد.'],
];

const values = [
  ['⚡', 'سرعة الإنجاز', 'مسارات عمل واضحة ومتابعة يومية لتقليل زمن الانتظار.'],
  ['🛡️', 'ثقة ومصداقية', 'تعامل آمن مع الوثائق وشفافية كاملة في مراحل الطلب.'],
  ['🎯', 'دقة في التفاصيل', 'مراجعة متعددة للطلبات قبل رفعها لتقليل الملاحظات والرفض.'],
];

const requests = [
  { id: 'BPS-24051', client: 'أحمد النور', service: 'تجديد إقامة', employee: 'سارة علي', status: 'قيد التنفيذ', progress: 68, due: 'اليوم', docs: 4, notes: 'تم رفع صورة الجواز والبطاقة الذكية.' },
  { id: 'BPS-24052', client: 'شركة الخليج للتجارة', service: 'سجل تجاري', employee: 'محمد حسن', status: 'بانتظار المراجعة', progress: 35, due: 'غداً', docs: 7, notes: 'بانتظار تفويض المدير.' },
  { id: 'BPS-24053', client: 'مريم يوسف', service: 'كهرباء وماء', employee: 'نور فهد', status: 'مكتمل', progress: 100, due: 'منجز', docs: 3, notes: 'تم تسليم رقم الحساب للعميل.' },
  { id: 'BPS-24054', client: 'مطعم اللؤلؤ', service: 'LMRA تصريح عمل', employee: 'سارة علي', status: 'قيد التنفيذ', progress: 52, due: 'بعد يومين', docs: 6, notes: 'تم تحديد موعد البصمة.' },
];

const employees = [
  ['سارة علي', 'موظفة معاملات', 12, 91, 'س'],
  ['محمد حسن', 'مشرف عمليات', 9, 88, 'م'],
  ['نور فهد', 'خدمة عملاء', 15, 95, 'ن'],
];

const logo = () => `<a class="logo" href="#home" aria-label="Basma Pro Services"><span class="fingerprint" aria-hidden="true"><span>✓</span></span><span><strong>${brand.nameAr}</strong><small>${brand.nameEn}</small></span></a>`;
const bassam = (compact = false) => `<div class="bassam ${compact ? 'bassam-compact' : ''}" aria-label="Bassam mascot"><div class="hair"></div><div class="face"><span class="eye e1"></span><span class="eye e2"></span><span class="smile"></span></div><div class="suit"><span class="tie"></span><span class="badge">✓</span></div><div class="thumb">👍</div></div>`;
const pill = status => `<span class="pill ${status === 'مكتمل' ? 'done' : ''}">${status}</span>`;
const progress = amount => `<div class="progress"><i style="width:${amount}%"></i></div>`;

function render() {
  document.getElementById('app').innerHTML = `
  <div class="app">
    <header class="site-header"><div class="container nav-wrap">${logo()}<button class="menu-toggle" aria-label="فتح القائمة">☰</button><nav>${[['الرئيسية','home'],['الخدمات','services'],['عن بصمة','about'],['تتبع طلبك','track'],['لوحة التحكم','dashboard'],['تواصل معنا','contact']].map(([l,id]) => `<a href="#${id}">${l}</a>`).join('')}</nav><button class="mode">🌙 الوضع</button></div></header>
    <section id="home" class="hero section-pad"><div class="container hero-grid"><div class="hero-copy reveal"><span class="eyebrow">منصة تخليص معاملات حكومية احترافية</span><h1>${brand.slogan}</h1><p>نحوّل إجراءات العملاء الحكومية إلى رحلة رقمية واضحة: رقم تتبع، تحديثات فورية، فريق متخصص، وإدارة داخلية دقيقة للموظفين والمهام.</p><div class="hero-actions"><a class="btn primary" href="#track">ابدأ طلبك الآن</a><a class="btn ghost" href="#dashboard">استكشف النظام</a></div><div class="trust-row"><span>متابعة لحظية</span><span>ملفات آمنة</span><span>تقارير أداء</span></div></div><div class="hero-card reveal delay">${bassam()}<div class="stamp">تم الإنجاز</div><div class="mini-card"><b>BPS-24051</b><span>تجديد إقامة • قيد التنفيذ</span><div><i style="width:68%"></i></div></div></div></div></section>
    <section id="services" class="section-pad"><div class="container"><div class="section-head"><span class="eyebrow">خدماتنا الحكومية</span><h2>كل معاملة لها مسار واضح وفريق مسؤول</h2><p>حلول تخليص معاملات للأفراد والشركات، مع قوائم مستندات ومواعيد ومتابعة دقيقة من البداية حتى الاعتماد.</p></div><div class="cards services-grid">${services.map(([icon,title,text]) => `<article class="service-card"><span class="service-icon">${icon}</span><h3>${title}</h3><p>${text}</p><a href="#contact">اطلب الخدمة ←</a></article>`).join('')}</div></div></section>
    <section class="why section-pad compact-pad"><div class="container why-grid">${values.map(([icon,title,text]) => `<div class="value-card"><span>${icon}</span><h3>${title}</h3><p>${text}</p></div>`).join('')}</div></section>
    <section id="about" class="about section-pad"><div class="container about-grid"><div><span class="eyebrow">قصتنا</span><h2>بصمة برو: شريك موثوق لإنجاز معاملاتك</h2><p>رسالتنا هي تبسيط الإجراءات الحكومية عبر منصة تجمع بين الخبرة التشغيلية والشفافية الرقمية. نؤمن أن العميل يستحق معرفة حالة طلبه في كل لحظة، وأن الموظف يحتاج أدوات واضحة لإنجاز المهام بدقة.</p><p>يمثل “بسّام” شخصية العلامة: مساعد محترف، سريع، ودود، يرافق العميل في كل خطوة ويذكر الفريق بأهمية الثقة والدقة.</p></div><div class="mascot-panel">${bassam(true)}<h3>مرحباً، أنا بسّام</h3><p>سأساعدك في تجهيز المستندات وتتبع طلبك حتى تظهر علامة الإنجاز.</p></div></div></section>
    <section class="testimonials section-pad compact-pad"><div class="container"><div class="section-head"><span class="eyebrow">آراء العملاء</span><h2>تجربة خدمة راقية وواضحة</h2></div><div class="testimonial-grid">${['تحديثات الطلب على واتساب اختصرت علينا الكثير من الاتصالات.','فريق بصمة راجع المستندات بدقة وأنجز المعاملة قبل الموعد.','لوحة التتبع أعطتنا وضوحاً ممتازاً لحالة طلب الشركة.'].map((t,i) => `<blockquote>“${t}”<cite>${['أحمد النور','مريم يوسف','شركة الخليج'][i]}</cite></blockquote>`).join('')}</div></div></section>
    <section id="track" class="track section-pad"><div class="container track-grid"><div><span class="eyebrow">تتبع طلب العميل</span><h2>أدخل رقم التتبع لمعرفة آخر تحديث</h2><p>كل عميل يحصل على رقم تتبع خاص لمتابعة مراحل المعاملة والملاحظات والوثائق المطلوبة.</p><div class="track-form"><input id="trackingInput" value="BPS-24051" placeholder="مثال: BPS-24051" dir="ltr"/><button class="btn primary" id="trackingButton">تحقق</button></div></div><div class="status-card" id="trackingResult"></div></div></section>
    <section id="dashboard" class="dashboard section-pad"><div class="container"><div class="dash-shell"><aside>${logo()}<button class="dash-tab active" data-tab="admin">لوحة المدير</button><button class="dash-tab" data-tab="employee">لوحة الموظف</button><button class="dash-tab" data-tab="reports">التقارير والتنبيهات</button><div class="secure-box">🔐 دخول آمن<br/><small>JWT / Firebase Auth ready</small></div></aside><main><div class="dash-head"><div><span class="eyebrow">نظام داخلي</span><h2 id="dashTitle">إدارة الموظفين والمعاملات</h2></div><button class="btn primary">+ معاملة جديدة</button></div><div id="dashContent"></div></main></div></div></section>
    <section id="contact" class="contact section-pad"><div class="container contact-grid"><div><span class="eyebrow">تواصل معنا</span><h2>جاهزون لإنجاز معاملتك القادمة</h2><p>راسلنا على واتساب أو املأ النموذج وسيقوم فريق خدمة العملاء بالتواصل معك وتجهيز قائمة المستندات المطلوبة.</p><div class="contact-actions"><a class="btn whatsapp" href="https://wa.me/97366000000" target="_blank">واتساب مباشر</a><a class="btn ghost" href="mailto:info@basmapro.sa">info@basmapro.sa</a></div><div class="map">📍 موقع المكتب - Bahrain / GCC<br/><small>Map integration ready</small></div></div><form class="contact-form"><input placeholder="الاسم الكامل"/><input placeholder="رقم الهاتف"/><select><option>اختر نوع الخدمة</option>${services.map(s => `<option>${s[1]}</option>`).join('')}</select><textarea placeholder="اكتب تفاصيل الطلب"></textarea><button class="btn primary" type="button">إرسال الطلب</button></form></div></section>
    <a class="float-wa" href="https://wa.me/97366000000" target="_blank" aria-label="WhatsApp">💬</a><footer><div class="container">${logo()}<p>© 2026 Basma Pro Services. ننجزها... ببصمة ثقة.</p></div></footer>
  </div>`;
}

function renderTracking() {
  const code = document.getElementById('trackingInput').value.trim().toLowerCase();
  const r = requests.find(item => item.id.toLowerCase() === code);
  document.getElementById('trackingResult').innerHTML = r ? `<div class="status-top"><b>${r.id}</b>${pill(r.status)}</div><h3>${r.service}</h3><p>العميل: ${r.client}</p>${progress(r.progress)}<small>${r.progress}% مكتمل • المسؤول: ${r.employee}</small><p class="note">${r.notes}</p>` : '<p>لم يتم العثور على طلب بهذا الرقم.</p>';
}

function requestTable() {
  return `<div class="table-wrap"><table><thead><tr><th>رقم الطلب</th><th>العميل</th><th>الخدمة</th><th>الموظف</th><th>الحالة</th><th>التقدم</th></tr></thead><tbody>${requests.map(r => `<tr><td dir="ltr">${r.id}</td><td>${r.client}</td><td>${r.service}</td><td>${r.employee}</td><td>${pill(r.status)}</td><td><div class="progress small"><i style="width:${r.progress}%"></i></div></td></tr>`).join('')}</tbody></table></div>`;
}

function renderDashboard(tab = 'admin') {
  const stats = { total: requests.length, completed: requests.filter(r => r.status === 'مكتمل').length, progress: requests.filter(r => r.status === 'قيد التنفيذ').length, docs: requests.reduce((sum, r) => sum + r.docs, 0) };
  const title = tab === 'admin' ? 'إدارة الموظفين والمعاملات' : tab === 'employee' ? 'مهامي اليوم' : 'تحليلات الأداء';
  document.getElementById('dashTitle').textContent = title;
  const admin = `<div class="stat-grid">${[['إجمالي الطلبات',stats.total],['قيد التنفيذ',stats.progress],['مكتملة',stats.completed],['وثائق مرفوعة',stats.docs]].map(([l,v]) => `<div class="stat"><span>${l}</span><b>${v}</b></div>`).join('')}</div><div class="panel-grid"><div class="panel wide"><h3>متابعة المعاملات</h3>${requestTable()}</div><div class="panel"><h3>الموظفون</h3>${employees.map(([name,role,tasks,completion,avatar]) => `<div class="employee"><span class="avatar">${avatar}</span><div><b>${name}</b><small>${role} • ${tasks} مهام</small></div><em>${completion}%</em></div>`).join('')}<div class="upload-box">⬆️ رفع المستندات<br/><small>PDF, PNG, JPG</small></div></div></div>`;
  const employee = `<div class="panel wide"><h3>المهام المسندة</h3>${requests.filter(r => r.status !== 'مكتمل').map(r => `<div class="task"><div><b>${r.service}</b><small>${r.id} • ${r.client} • استحقاق: ${r.due}</small><p>${r.notes}</p></div><button class="btn ghost update-task" data-id="${r.id}">تحديث الحالة</button></div>`).join('')}<div class="comment-box"><textarea placeholder="أضف ملاحظة داخلية للطلب..."></textarea><button class="btn primary">حفظ الملاحظة</button></div></div>`;
  const reports = `<div class="panel-grid"><div class="panel wide"><h3>الأداء الشهري</h3><div class="chart">${[74,92,58,88,66,96,81].map(h => `<span style="height:${h}%"><b>${h}</b></span>`).join('')}</div></div><div class="panel"><h3>التنبيهات</h3><ul class="alerts"><li>🔔 طلب BPS-24052 يحتاج تفويضاً.</li><li>📄 14 وثيقة تم رفعها هذا الأسبوع.</li><li>✅ نسبة إنجاز اليوم ${Math.round((stats.completed / stats.total) * 100)}%.</li></ul></div></div>`;
  document.getElementById('dashContent').innerHTML = { admin, employee, reports }[tab];
}

render();
renderTracking();
renderDashboard();

document.querySelector('.menu-toggle').addEventListener('click', () => document.querySelector('nav').classList.toggle('open'));
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => document.querySelector('nav').classList.remove('open')));
document.querySelector('.mode').addEventListener('click', event => {
  document.querySelector('.app').classList.toggle('dark');
  event.currentTarget.textContent = document.querySelector('.app').classList.contains('dark') ? '☀️ الوضع' : '🌙 الوضع';
});
document.getElementById('trackingButton').addEventListener('click', renderTracking);
document.getElementById('trackingInput').addEventListener('keydown', event => { if (event.key === 'Enter') renderTracking(); });
document.querySelectorAll('.dash-tab').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.dash-tab').forEach(tab => tab.classList.remove('active'));
  button.classList.add('active');
  renderDashboard(button.dataset.tab);
}));
document.addEventListener('click', event => {
  if (!event.target.matches('.update-task')) return;
  const request = requests.find(r => r.id === event.target.dataset.id);
  if (request) {
    request.status = 'قيد التنفيذ';
    request.progress = Math.min(100, request.progress + 15);
    renderDashboard('employee');
  }
});
