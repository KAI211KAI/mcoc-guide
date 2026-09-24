/* ============================================================
   英雄详情页脚本（js/champion.js）
   ------------------------------------------------------------
   负责：根据 URL 参数 ?key=xxx 定位英雄，渲染详情视图
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  // 从地址栏读取 ?key=xxx 定位目标英雄
  const key = new URLSearchParams(window.location.search).get("key");
  const hero = CHAMPIONS.find((c) => c.key === key);
  const root = document.getElementById("champion-detail");
  if (!root) return;

  // 未找到英雄时给出友好提示与返回入口
  if (!hero) {
    document.title = "未找到英雄 · 漫威超级争霸战 MCOC";
    root.innerHTML = `
      <div class="detail-missing">
        <h2>未找到该英雄</h2>
        <p>请返回英雄图鉴重新选择。</p>
        <a class="btn btn-primary" href="champions.html">返回英雄图鉴</a>
      </div>`;
    return;
  }

  document.title = `${hero.name} · ${hero.en} · 漫威超级争霸战 MCOC`;
  root.innerHTML = detailView(hero);
});

/* 生成英雄详情视图 HTML */
function detailView(hero) {
  const cls = hero.cls;
  const meta = CLASS_DETAILS[cls] || {};
  const starStr = renderStars(hero.stars);

  // 同职业其它英雄（最多展示 6 位，供站内相互跳转）
  const related = CHAMPIONS
    .filter((c) => c.cls === cls && c.key !== hero.key)
    .slice(0, 6)
    .map((c) => `<a class="related-chip" href="champion.html?key=${c.key}">${c.name}</a>`)
    .join("");

  return `
    <a class="detail-back" href="champions.html">&larr; 返回英雄图鉴</a>

    <div class="detail-card" style="--cls: var(--class-${cls})">
      <div class="detail-media">
        <img class="detail-img" src="${hero.img}" alt="${hero.name}" onerror="this.style.display='none'">
        <span class="detail-media-class">${meta.label} ${meta.en}</span>
      </div>

      <div class="detail-info">
        <span class="eyebrow">Champion Spotlight</span>
        <h1 class="detail-name">${hero.name} <small>${hero.en}</small></h1>
        <div class="detail-stars">${starStr}</div>
        <p class="detail-desc">${hero.desc}</p>

        <div class="detail-meta">
          <div class="detail-meta-item"><span>职业</span><b>${meta.label} · ${meta.en}</b></div>
          <div class="detail-meta-item"><span>参考星级</span><b>${hero.stars} 星</b></div>
          <div class="detail-meta-item"><span>角色英文名</span><b>${hero.en}</b></div>
        </div>

        <div class="detail-block">
          <h3>职业定位 · ${meta.label}</h3>
          <p>${meta.tagline}。<strong>优势：</strong>${meta.advantage}</p>
          <p><strong>注意：</strong>${meta.disadvantage}</p>
        </div>

        <div class="detail-actions">
          <a class="btn btn-primary" href="champions.html">返回英雄图鉴</a>
          <a class="btn btn-ghost" href="${hero.link}" target="_blank" rel="noopener noreferrer">查看官网简介</a>
        </div>

        ${related ? `<div class="detail-related"><h4>同职业英雄</h4>${related}</div>` : ""}
      </div>
    </div>`;
}

/* 将星级数字转为 ★ 字符串（空星用 ☆ 表示） */
function renderStars(n) {
  const full = "★".repeat(n);
  const empty = "☆".repeat(Math.max(0, 6 - n));
  return `<span class="stars">${full}${empty}</span>`;
}