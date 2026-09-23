/* ============================================================
   英雄图鉴页脚本（js/champions.js）
   ------------------------------------------------------------
   负责：读取 CHAMPIONS 数据渲染卡片、职业筛选、计数统计
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  renderFilters();
  renderChampions(CHAMPIONS);
});

/* 当前选中的职业筛选（null 表示全部） */
let activeClass = null;

/* 渲染顶部职业筛选按钮（含“全部”） */
function renderFilters() {
  const bar = document.getElementById("filter-bar");
  if (!bar) return;

  // 先放“全部”按钮
  const allBtn = buildFilterBtn(null, "全部");
  allBtn.classList.add("active");
  bar.appendChild(allBtn);

  // 依次生成 6 个职业按钮
  Object.entries(CLASS_NAMES).forEach(([key, label]) => {
    bar.appendChild(buildFilterBtn(key, label));
  });
}

/* 构建单个筛选按钮 */
function buildFilterBtn(key, label) {
  const btn = document.createElement("button");
  btn.className = "filter-btn";
  btn.type = "button";
  btn.textContent = label;
  // 为职业按钮附加对应色标，便于辨识
  if (key) {
    btn.dataset.cls = key;
    btn.style.setProperty("--cls", `var(--class-${key})`);
  }
  btn.addEventListener("click", () => onFilter(btn, key));
  return btn;
}

/* 处理筛选点击 */
function onFilter(btn, key) {
  activeClass = key;
  // 高亮当前激活按钮
  document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  // 按职责过滤并重新渲染
  const list = activeClass ? CHAMPIONS.filter((c) => c.cls === activeClass) : CHAMPIONS;
  renderChampions(list);
}

/* 渲染英雄卡片列表 */
function renderChampions(list) {
  const grid = document.getElementById("champion-grid");
  if (!grid) return;

  // 更新结果计数
  const counter = document.getElementById("champion-count");
  if (counter) counter.textContent = list.length;

  // 空结果提示
  if (!list.length) {
    grid.innerHTML = `<p class="empty">暂无该分类的英雄数据。</p>`;
    return;
  }

  grid.innerHTML = list.map((c) => championCard(c)).join("");
}

/* 生成单张英雄卡片 HTML */
function championCard(c) {
  const starStr = renderStars(c.stars);
  // 在卡片根元素上声明职业色变量（--cls），供头像背景与 hover 边框共同继承
  // 注意：动态渲染的卡片不加 scroll-in（其观察器在静态元素渲染时已初始化，会导致卡片不可见）
  return `
    <article class="champ-card" data-cls="${c.cls}" style="--cls: var(--class-${c.cls})">
      <div class="champ-card__media">
        <!-- 头像区：用中文名首字 + 职业色渐变，规避版权且风格统一 -->
        <span class="champ-card__initials">${c.name.slice(0, 1)}</span>
        <span class="champ-card__class">${CLASS_NAMES[c.cls]}</span>
        <span class="champ-card__stars">${starStr}</span>
      </div>
      <div class="champ-card__body">
        <h3>${c.name} <small>${c.en}</small></h3>
        <p>${c.desc}</p>
      </div>
    </article>`;
}

/* 将星级数字转为 ★ 字符串（空星用 ☆ 表示，直观展示参考星级） */
function renderStars(n) {
  const full = "★".repeat(n);
  const empty = "☆".repeat(Math.max(0, 6 - n));
  return `<span class="stars">${full}${empty}</span>`;
}