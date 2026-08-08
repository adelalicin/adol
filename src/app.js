const docs = [
  {id:'buyer-front', icon:'id', title:'هوية المشتري', side:'الوجه الأمامي', state:'done', meta:'تم الاستخراج • دقة 98%'},
  {id:'buyer-back', icon:'id', title:'هوية المشتري', side:'الوجه الخلفي', state:'done', meta:'تم الاستخراج • دقة 96%'},
  {id:'seller-front', icon:'id', title:'هوية البائع', side:'الوجه الأمامي', state:'done', meta:'تم الاستخراج • دقة 97%'},
  {id:'seller-back', icon:'id', title:'هوية البائع', side:'الوجه الخلفي', state:'done', meta:'تم الاستخراج • دقة 94%'},
  {id:'vehicle', icon:'car', title:'شهادة ملكية المركبة', side:'الأصل أو نسخة واضحة', state:'done', meta:'تم الاستخراج • دقة 99%'},
  {id:'insurance', icon:'shield', title:'شهادة التأمين', side:'بطاقة أو وثيقة التأمين', state:'waiting', meta:'بانتظار المستند'},
];
const transactions = [
  {plate:'582914', buyer:'فاطمة أحمد', seller:'علي حسن', date:'08 أغسطس 2026', status:'نقص مستندات'},
  {plate:'741203', buyer:'محمد يوسف', seller:'سلمان عبدالله', date:'06 أغسطس 2026', status:'جاهزة للمراجعة'},
  {plate:'193846', buyer:'نورة خالد', seller:'شركة المنامة', date:'02 أغسطس 2026', status:'مكتملة'},
];
const icons={car:'<svg viewBox="0 0 24 24"><path d="M5 17h14M6 17v2m12-2v2M4 13l2-6h12l2 6v4H4z"/><circle cx="7.5" cy="14.5" r="1"/><circle cx="16.5" cy="14.5" r="1"/></svg>',id:'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8" cy="11" r="2"/><path d="M5.5 16c.7-2 4.3-2 5 0M13 10h5m-5 4h4"/></svg>',shield:'<svg viewBox="0 0 24 24"><path d="M12 3l8 3v5c0 5-3.4 8.3-8 10-4.6-1.7-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></svg>',scan:'<svg viewBox="0 0 24 24"><path d="M4 8V4h4m8 0h4v4m0 8v4h-4M8 20H4v-4M8 12h8"/></svg>',lock:'<svg viewBox="0 0 24 24"><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 018 0v3"/></svg>',home:'<svg viewBox="0 0 24 24"><path d="M3 11l9-8 9 8v9h-6v-6H9v6H3z"/></svg>',file:'<svg viewBox="0 0 24 24"><path d="M6 2h8l4 4v16H6zM14 2v5h5M9 12h6m-6 4h6"/></svg>',plus:'<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',history:'<svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 108-8 8 8 0 00-7 4M4 4v5h5"/></svg>'};
const icon=n=>`<span class="icon">${icons[n]||icons.file}</span>`;
let lang='ar';

function shell(){document.getElementById('app').innerHTML=`
<div class="layout">
 <aside class="sidebar">
  <a class="brand" href="#">${icon('car')}<span><b>نَقْل</b><small>Vehicle Transfer Assistant</small></span></a>
  <nav><button class="nav-item active" data-view="new">${icon('plus')}<span>معاملة جديدة</span></button><button class="nav-item" data-view="transactions">${icon('history')}<span>المعاملات السابقة</span></button></nav>
  <div class="secure-note">${icon('lock')}<div><b>بياناتك مشفّرة وآمنة</b><small>لا تتم مشاركة بياناتك مع أي جهة دون موافقتك.</small></div></div>
  <div class="profile"><span>م</span><div><b>محمد الأحمد</b><small>m.alahmed@email.com</small></div><button aria-label="القائمة">•••</button></div>
 </aside>
 <main class="main">
  <header><button class="mobile-menu" aria-label="القائمة">☰</button><div class="header-brand">${icon('car')}<b>نَقْل</b></div><div class="header-actions"><button id="lang">EN</button><button class="help">؟ <span>مركز المساعدة</span></button><button class="bell" aria-label="الإشعارات">♧<i></i></button></div></header>
  <div id="content"></div>
 </main>
</div>`; renderNew(); bindShell();}

function steps(){return `<div class="steps">${['المستندات','استخراج البيانات','مراجعة البيانات','خيارات إضافية','المعاينة','التوقيع','PDF'].map((s,i)=>`<div class="step ${i===0?'active':''}"><span>${i+1}</span><b>${s}</b></div>`).join('')}</div>`}
function renderNew(){document.getElementById('content').innerHTML=`<section class="page new-page">
 <div class="title-row"><div><span class="overline">معاملة جديدة</span><h1>لنبدأ بتجهيز مستنداتك</h1><p>صوّر أو ارفع المستندات المطلوبة. سنقرأ البيانات تلقائيًا، وستراجعها قبل إنشاء أي مستند رسمي.</p></div><div class="save"><i></i>محفوظ تلقائيًا <small>منذ لحظات</small></div></div>
 ${steps()}
 <div class="notice">${icon('shield')}<div><b>خصوصيتك أولويتنا</b><p>تُشفّر جميع الملفات أثناء النقل والتخزين. لن نعتمد أي بيانات حساسة قبل مراجعتك وموافقتك.</p></div><button>تفاصيل الأمان</button></div>
 <div class="workspace">
  <div><div class="section-title"><div><h2>المستندات المطلوبة</h2><p>5 من 6 مستندات جاهزة</p></div><span>83% مكتمل</span></div><div class="bar"><i style="width:83%"></i></div>
   <div class="doc-grid">${docs.map(docCard).join('')}</div>
   <button class="add-file">${icon('plus')} إضافة مرفق آخر <span>PDF, JPG, PNG • حتى 10 MB</span></button>
  </div>
  <aside class="side-panel"><div class="scan-visual">${icon('scan')}<i class="line"></i></div><h3>نقرأ مستنداتك بذكاء</h3><p>نكتشف نوع المستند، نصحح الميل، ونستخرج الحقول بدقة باستخدام OCR والذكاء الاصطناعي.</p><ul><li><i>✓</i> اكتشاف تلقائي لنوع المستند</li><li><i>✓</i> تحسين جودة ووضوح النص</li><li><i>✓</i> مطابقة ذكية للحقول</li></ul><div class="privacy-mini">${icon('lock')}<span><b>لا مشاركة تلقائية</b><small>هذا التطبيق مساعد للتجهيز فقط، ولا يرسل بياناتك إلى الجهات الحكومية.</small></span></div></aside>
 </div>
 <div class="next-bar"><div><b>متبقٍ مستند واحد</b><small>ارفع شهادة التأمين للانتقال إلى استخراج البيانات.</small></div><button id="continue" disabled>متابعة إلى استخراج البيانات <span>←</span></button></div>
</section>`; bindNew();}
function docCard(d){return `<article class="doc-card ${d.state}" data-id="${d.id}"><div class="doc-icon">${icon(d.icon)}${d.state==='done'?'<i>✓</i>':''}</div><div class="doc-copy"><h3>${d.title}</h3><p>${d.side}</p><small>${d.meta}</small></div><button class="more" aria-label="خيارات">•••</button>${d.state==='waiting'?`<label class="upload"><input type="file" accept="image/*,application/pdf" capture="environment"/><span>⌁</span><b>التقاط صورة أو رفع ملف</b><small>ضع المستند داخل الإطار وبإضاءة جيدة</small></label>`:`<div class="thumb"><span>${d.icon==='car'?'مملكة البحرين<br><b>شهادة الملكية</b>':'KINGDOM OF BAHRAIN<br><b>IDENTITY CARD</b>'}</span></div>`}</article>`}

function renderTransactions(){document.getElementById('content').innerHTML=`<section class="page"><div class="title-row"><div><span class="overline">سجل المعاملات</span><h1>المعاملات السابقة</h1><p>تابع معاملاتك أو أكمل مسودة محفوظة.</p></div><button class="primary-btn" data-view="new">${icon('plus')} معاملة جديدة</button></div><div class="transaction-list">${transactions.map(t=>`<article><div class="plate"><small>BAHRAIN</small><b>${t.plate}</b></div><div><h3>${t.buyer} ← ${t.seller}</h3><p>${t.date}</p></div><span class="status ${t.status==='مكتملة'?'complete':''}">${t.status}</span><button>فتح المعاملة</button></article>`).join('')}</div></section>`; document.querySelector('[data-view=new]').onclick=()=>{activate('new');renderNew()}}
function bindShell(){document.querySelectorAll('.nav-item').forEach(b=>b.onclick=()=>{activate(b.dataset.view);b.dataset.view==='new'?renderNew():renderTransactions()});document.querySelector('.mobile-menu').onclick=()=>document.querySelector('.sidebar').classList.toggle('open');document.getElementById('lang').onclick=()=>{lang=lang==='ar'?'en':'ar';document.documentElement.dir=lang==='ar'?'rtl':'ltr';document.getElementById('lang').textContent=lang==='ar'?'EN':'عربي';toast(lang==='ar'?'تم تفعيل العربية':'English interface enabled')};}
function activate(view){document.querySelectorAll('.nav-item').forEach(x=>x.classList.toggle('active',x.dataset.view===view));document.querySelector('.sidebar').classList.remove('open')}
function bindNew(){document.querySelectorAll('input[type=file]').forEach(input=>input.onchange=()=>{if(!input.files.length)return;const d=docs.find(x=>x.id===input.closest('.doc-card').dataset.id);d.state='done';d.meta='تم الرفع • جارٍ التحقق';renderNew();setTimeout(()=>toast('تم رفع المستند بنجاح، وبدأ التحليل الذكي'),50)});document.querySelectorAll('.more').forEach(b=>b.onclick=()=>toast('يمكنك إعادة التصوير أو استبدال الملف'));document.querySelector('.add-file').onclick=()=>toast('اختر مرفقًا إضافيًا من جهازك');document.querySelector('.notice button').onclick=()=>toast('تشفير AES-256 • تخزين خاص • حذف نهائي متاح');}
function toast(message){const t=document.getElementById('toast');t.textContent=message;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2600)}
shell();
if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'));
