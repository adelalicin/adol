const dashboardFields = [
  ["اسم العميل", "clientName"],
  ["نوع الخدمة", "serviceName"],
  ["حالة الطلب", "status"],
  ["المبلغ المتفق", "priceAgreed"],
];

const sampleOrders = [
  { serial: 101, client: "شركة النخبة", service: "تجديد سجل", status: "In Progress", price: 120 },
  { serial: 102, client: "مؤسسة البحر", service: "إصدار تأشيرة", status: "AwaitingPayment", price: 80 },
  { serial: 103, client: "Blue Gate", service: "تمديد جوازات", status: "UnderReview", price: 200 },
];

let state = {
  currentOrder: null,
  attachments: [],
  activeOrders: [...sampleOrders],
  sortDir: 1,
};

const dashboard = document.getElementById("dashboard");
const attachmentsTable = document.getElementById("attachmentsTable");
const activeOrdersTable = document.getElementById("activeOrdersTable");
const preview = document.getElementById("preview");
const dropZone = document.getElementById("dropZone");
const fileInput = document.getElementById("fileInput");
const modal = document.getElementById("modal");

function renderDashboard() {
  const order = state.currentOrder || {};
  dashboard.innerHTML = dashboardFields
    .map(([label, key]) => `
      <div class="stat">
        <div class="label">${label}</div>
        <div class="value">${order[key] ?? "---"}${key === "priceAgreed" && order[key] ? " BHD" : ""}</div>
      </div>
    `)
    .join("");
}

function renderAttachments() {
  attachmentsTable.innerHTML = state.attachments
    .map((file, i) => `
      <tr data-index="${i}">
        <td>${file.name}</td>
        <td>${Math.ceil(file.size / 1024)} KB</td>
      </tr>
    `)
    .join("");

  attachmentsTable.querySelectorAll("tr").forEach((tr) => {
    tr.addEventListener("click", () => {
      const file = state.attachments[Number(tr.dataset.index)];
      renderPreview(file);
    });
  });
}

function renderPreview(file) {
  if (!file) return;
  if (file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = () => {
      preview.innerHTML = `<img src="${reader.result}" alt="preview" />`;
    };
    reader.readAsDataURL(file);
  } else if (file.type === "application/pdf") {
    preview.innerHTML = `<div>تم اختيار ملف PDF: ${file.name}</div>`;
  } else {
    preview.textContent = `تم اختيار الملف: ${file.name}`;
  }
}

function renderActiveOrders() {
  activeOrdersTable.innerHTML = state.activeOrders
    .map((o) => `
      <tr>
        <td>${o.serial}</td><td>${o.client}</td><td>${o.service}</td><td>${o.status}</td><td>${o.price} BHD</td>
      </tr>`)
    .join("");

  activeOrdersTable.querySelectorAll("tr").forEach((row, idx) => {
    row.addEventListener("dblclick", () => {
      const order = state.activeOrders[idx];
      document.getElementById("serialInput").value = order.serial;
      openOrder();
      switchTab("current");
    });
  });
}

function openOrder() {
  const serial = Number(document.getElementById("serialInput").value.trim());
  if (!serial) return;

  const found = state.activeOrders.find((o) => o.serial === serial);
  state.currentOrder = found
    ? {
        clientName: found.client,
        serviceName: found.service,
        status: found.status,
        priceAgreed: found.price,
      }
    : {
        clientName: "عميل جديد",
        serviceName: "خدمة غير معروفة",
        status: "SubmittedToAuthority",
        priceAgreed: 0,
      };

  document.getElementById("openFolderBtn").disabled = false;
  renderDashboard();
}

function switchTab(tab) {
  document.querySelectorAll(".tab-btn").forEach((btn) => btn.classList.toggle("active", btn.dataset.tab === tab));
  document.getElementById("current-tab").classList.toggle("active", tab === "current");
  document.getElementById("active-tab").classList.toggle("active", tab === "active");
}

function openModal(html) {
  modal.innerHTML = html;
  modal.showModal();
}

document.getElementById("openOrderBtn").addEventListener("click", openOrder);
document.getElementById("refreshOrdersBtn").addEventListener("click", () => renderActiveOrders());
document.getElementById("openFolderBtn").addEventListener("click", () => {
  alert("في نسخة الويب لا يمكن فتح مجلد النظام مباشرة. يمكن رفع وإدارة الملفات من داخل الصفحة.");
});

document.querySelectorAll(".tab-btn").forEach((btn) => btn.addEventListener("click", () => switchTab(btn.dataset.tab)));

document.querySelectorAll(".sidebar button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const action = btn.dataset.action;
    if (action === "note") {
      openModal(`
        <h3>طباعة ملاحظة</h3>
        <textarea id="noteText" rows="6" style="width:100%" placeholder="اكتب الملاحظة..."></textarea>
        <div style="margin-top:10px;display:flex;gap:8px;justify-content:end">
          <button id="closeModal">إلغاء</button>
          <button id="printNote">طباعة</button>
        </div>
      `);
      document.getElementById("closeModal").onclick = () => modal.close();
      document.getElementById("printNote").onclick = () => {
        const text = document.getElementById("noteText").value.trim();
        if (!text) return;
        const printWin = window.open("", "_blank");
        printWin.document.write(`<pre style="font:16px sans-serif;white-space:pre-wrap">${text}</pre>`);
        printWin.print();
        modal.close();
      };
    } else {
      alert("تم تجهيز هذه الوظيفة في واجهة الويب ويمكن ربطها لاحقاً بالـ API والطباعة الرسمية.");
    }
  });
});

["dragenter", "dragover"].forEach((ev) =>
  dropZone.addEventListener(ev, (e) => {
    e.preventDefault();
    dropZone.classList.add("drag");
  }),
);
["dragleave", "drop"].forEach((ev) =>
  dropZone.addEventListener(ev, (e) => {
    e.preventDefault();
    dropZone.classList.remove("drag");
  }),
);

dropZone.addEventListener("drop", (e) => {
  state.attachments.push(...[...e.dataTransfer.files]);
  renderAttachments();
});
dropZone.addEventListener("click", () => fileInput.click());
fileInput.addEventListener("change", (e) => {
  state.attachments.push(...[...e.target.files]);
  renderAttachments();
});

document.querySelectorAll("th[data-sort]").forEach((th) => {
  th.addEventListener("click", () => {
    const key = th.dataset.sort;
    state.sortDir *= -1;
    state.activeOrders.sort((a, b) => {
      const left = a[key];
      const right = b[key];
      if (typeof left === "number") return (left - right) * state.sortDir;
      return String(left).localeCompare(String(right), "ar") * state.sortDir;
    });
    renderActiveOrders();
  });
});

renderDashboard();
renderAttachments();
renderActiveOrders();
