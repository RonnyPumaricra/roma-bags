const products = [
  { id: 1, name: "Cartera Siena", sku: "RB-SIE-01", main: 3, secondary: 1, min: 6, price: 189 },
  { id: 2, name: "Bolso Roma", sku: "RB-ROM-02", main: 24, secondary: 8, min: 8, price: 159 },
  { id: 3, name: "Cartera Milano", sku: "RB-MIL-03", main: 15, secondary: 6, min: 7, price: 219 },
  { id: 4, name: "Bandolera Capri", sku: "RB-CAP-04", main: 5, secondary: 0, min: 7, price: 139 },
  { id: 5, name: "Mochila Torino", sku: "RB-TOR-05", main: 18, secondary: 4, min: 6, price: 179 },
  { id: 6, name: "Tote Firenze", sku: "RB-FIR-06", main: 2, secondary: 2, min: 6, price: 149 },
  { id: 7, name: "Cartera Verona", sku: "RB-VER-07", main: 12, secondary: 5, min: 5, price: 199 }
];

let sales = [
  { code: "RB-1048", date: "26/09/2026", client: "Boutique Magnolia", channel: "Mayorista", total: 756, status: "paid" },
  { code: "RB-1047", date: "26/09/2026", client: "Andrea Salazar", channel: "WhatsApp", total: 219, status: "ready" },
  { code: "RB-1046", date: "25/09/2026", client: "María Fernanda", channel: "Instagram", total: 318, status: "pending" },
  { code: "RB-1045", date: "25/09/2026", client: "Almacenes Lucero", channel: "Mayorista", total: 1248, status: "paid" },
  { code: "RB-1044", date: "24/09/2026", client: "Claudia Ríos", channel: "Tienda", total: 189, status: "paid" },
  { code: "RB-1043", date: "24/09/2026", client: "Patricia Vega", channel: "WhatsApp", total: 298, status: "cancelled" }
];

const dispatches = [
  { stage: "preparation", code: "RB-1048", client: "Boutique Magnolia", detail: "4 productos · Mayorista", time: "Hoy, 11:30", owner: "Producción" },
  { stage: "preparation", code: "RB-1050", client: "Rosa Mendoza", detail: "2 productos · WhatsApp", time: "Hoy, 16:00", owner: "Ventas" },
  { stage: "route", code: "RB-1047", client: "Andrea Salazar", detail: "Cartera Milano", time: "En camino", owner: "Carlos M." },
  { stage: "delivered", code: "RB-1045", client: "Almacenes Lucero", detail: "8 productos · Mayorista", time: "Ayer, 17:42", owner: "Carlos M." },
  { stage: "delivered", code: "RB-1044", client: "Claudia Ríos", detail: "Cartera Siena", time: "Ayer, 14:10", owner: "Carlos M." }
];

const statusText = { paid: "Pagado", pending: "Por confirmar", ready: "Listo para despacho", cancelled: "Cancelado" };
const money = value => `S/ ${Number(value).toLocaleString("es-PE")}`;

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

function initials(name) {
  return name.split(" ").slice(0, 2).map(word => word[0]).join("").toUpperCase();
}

function setView(viewName) {
  $$(".view").forEach(view => view.classList.toggle("active", view.id === `view-${viewName}`));
  $$('[data-view]').forEach(button => button.classList.toggle("active", button.dataset.view === viewName));
  $("#sidebar").classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function salesRows(items) {
  return items.map(sale => `
    <tr>
      <td><span class="order-code">${sale.code}</span></td>
      <td>${sale.date}</td>
      <td><div class="customer-cell"><span class="customer-avatar">${initials(sale.client)}</span><span><strong>${sale.client}</strong><small>${sale.channel}</small></span></div></td>
      <td>${sale.channel}</td>
      <td><strong>${money(sale.total)}</strong></td>
      <td><span class="badge ${sale.status}">${statusText[sale.status]}</span></td>
    </tr>`).join("");
}

function renderSales(filter = "") {
  const query = filter.trim().toLowerCase();
  const filtered = sales.filter(sale => `${sale.code} ${sale.client}`.toLowerCase().includes(query));
  $("#sales-table-body").innerHTML = salesRows(filtered);
  $("#recent-sales-body").innerHTML = sales.slice(0, 4).map(sale => `
    <tr>
      <td><span class="order-code">${sale.code}</span></td>
      <td><div class="customer-cell"><span class="customer-avatar">${initials(sale.client)}</span><span><strong>${sale.client}</strong><small>${sale.channel}</small></span></div></td>
      <td><strong>${money(sale.total)}</strong></td>
      <td><span class="badge ${sale.status}">${statusText[sale.status]}</span></td>
    </tr>`).join("");
}

function renderInventory(filter = "", onlyLow = false) {
  const query = filter.trim().toLowerCase();
  const filtered = products.filter(product => {
    const total = product.main + product.secondary;
    return `${product.name} ${product.sku}`.toLowerCase().includes(query) && (!onlyLow || total <= product.min);
  });
  $("#inventory-table-body").innerHTML = filtered.map(product => {
    const total = product.main + product.secondary;
    const isLow = total <= product.min;
    return `<tr>
      <td><div class="product-cell"><strong>${product.name}</strong><small>Precio: ${money(product.price)}</small></div></td>
      <td>${product.sku}</td><td>${product.main}</td><td>${product.secondary}</td>
      <td><span class="stock-number">${total}</span></td>
      <td><span class="badge ${isLow ? "low" : "available"}">${isLow ? "Stock bajo" : "Disponible"}</span></td>
    </tr>`;
  }).join("") || `<tr><td colspan="6">No se encontraron productos.</td></tr>`;
  $("#low-stock-count").textContent = `${products.filter(product => product.main + product.secondary <= product.min).length} productos`;
}

function renderDispatches() {
  const stages = [
    { id: "preparation", title: "Por preparar" },
    { id: "route", title: "En ruta" },
    { id: "delivered", title: "Entregados" }
  ];
  $("#dispatch-board").innerHTML = stages.map(stage => {
    const items = dispatches.filter(item => item.stage === stage.id);
    return `<section class="dispatch-column"><div class="dispatch-column-heading"><h2>${stage.title}</h2><span>${items.length}</span></div>${items.map(item => `
      <article class="dispatch-card"><div class="card-top"><h3>${item.code}</h3><time>${item.time}</time></div><p>${item.client}</p><small>${item.detail}</small><div class="dispatch-meta"><span>Responsable</span><strong>${item.owner}</strong></div></article>`).join("")}</section>`;
  }).join("");
}

function renderReports() {
  const chartData = [{ label: "Sem. 1", value: 3100 }, { label: "Sem. 2", value: 4250 }, { label: "Sem. 3", value: 4680 }, { label: "Sem. 4", value: 6390 }];
  const max = Math.max(...chartData.map(item => item.value));
  $("#sales-chart").innerHTML = chartData.map(item => {
    const height = Math.round(item.value / max * 88);
    return `<div class="bar-group" style="--bar-height:${height}%"><strong>${money(item.value)}</strong><i class="chart-bar" style="height:${height}%"></i><span>${item.label}</span></div>`;
  }).join("");
  const ranking = [{ name: "Bolso Roma", units: 31 }, { name: "Cartera Milano", units: 26 }, { name: "Mochila Torino", units: 21 }, { name: "Cartera Siena", units: 18 }];
  $("#product-ranking").innerHTML = ranking.map((item, index) => `<div class="rank-item"><span class="rank-number">${index + 1}</span><div><div class="rank-name">${item.name}</div><div class="rank-track"><i style="width:${item.units / ranking[0].units * 100}%"></i></div></div><span class="rank-value">${item.units} und.</span></div>`).join("");
}

function openSaleModal() {
  $("#sale-modal").hidden = false;
  $("#sale-client").focus();
  updateSaleTotal();
}

function closeSaleModal() {
  $("#sale-modal").hidden = true;
  $("#sale-form").reset();
  $("#sale-quantity").value = 1;
  updateSaleTotal();
}

function updateSaleTotal() {
  const product = products.find(item => item.id === Number($("#sale-product").value));
  const quantity = Math.max(1, Number($("#sale-quantity").value) || 1);
  $("#sale-total").textContent = product ? money(product.price * quantity) : "S/ 0";
}

let toastTimer;
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

function registerSale(event) {
  event.preventDefault();
  const client = $("#sale-client").value.trim();
  const product = products.find(item => item.id === Number($("#sale-product").value));
  const quantity = Math.max(1, Number($("#sale-quantity").value) || 1);
  const available = product.main + product.secondary;
  if (quantity > available) {
    showToast(`No hay stock suficiente. Disponible: ${available}.`);
    return;
  }
  const takenFromMain = Math.min(product.main, quantity);
  product.main -= takenFromMain;
  product.secondary -= quantity - takenFromMain;
  const nextCode = `RB-${1051 + sales.length - 6}`;
  sales.unshift({ code: nextCode, date: "26/09/2026", client, channel: $("#sale-channel").value, total: product.price * quantity, status: "pending" });
  renderSales();
  renderInventory();
  closeSaleModal();
  showToast(`${nextCode} registrado. El stock fue actualizado.`);
  setView("sales");
}

function exportInventory() {
  const headers = ["Producto", "Código", "Taller principal", "Taller alterno", "Disponible"];
  const rows = products.map(product => [product.name, product.sku, product.main, product.secondary, product.main + product.secondary]);
  const csv = [headers, ...rows].map(row => row.map(value => `"${String(value).replaceAll('"', '""')}"`).join(",")).join("\n");
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  link.download = "inventario-roma-bags.csv";
  link.click();
  URL.revokeObjectURL(link.href);
  showToast("Inventario exportado correctamente.");
}

function init() {
  $("#sale-product").innerHTML = `<option value="">Seleccionar producto</option>${products.map(product => `<option value="${product.id}">${product.name} · ${money(product.price)}</option>`).join("")}`;
  renderSales();
  renderInventory();
  renderDispatches();
  renderReports();

  $$('[data-view]').forEach(button => button.addEventListener("click", () => setView(button.dataset.view)));
  $$('[data-open-sale]').forEach(button => button.addEventListener("click", openSaleModal));
  $("#menu-button").addEventListener("click", () => $("#sidebar").classList.toggle("open"));
  $("#close-modal").addEventListener("click", closeSaleModal);
  $("#cancel-sale").addEventListener("click", closeSaleModal);
  $("#sale-modal").addEventListener("click", event => { if (event.target === $("#sale-modal")) closeSaleModal(); });
  $("#sale-product").addEventListener("change", updateSaleTotal);
  $("#sale-quantity").addEventListener("input", updateSaleTotal);
  $("#sale-form").addEventListener("submit", registerSale);
  $("#sales-search").addEventListener("input", event => renderSales(event.target.value));
  $("#inventory-search").addEventListener("input", event => renderInventory(event.target.value, $("#stock-filter").value === "low"));
  $("#stock-filter").addEventListener("change", event => renderInventory($("#inventory-search").value, event.target.value === "low"));
  $("#export-button").addEventListener("click", exportInventory);
  $("#quick-search").addEventListener("click", () => { setView("inventory"); setTimeout(() => $("#inventory-search").focus(), 50); });
  document.addEventListener("keydown", event => { if (event.key === "Escape" && !$("#sale-modal").hidden) closeSaleModal(); });
}

init();
