/* ============================================================
   全局交互脚本（js/main.js）
   ------------------------------------------------------------
   负责：导航滚动加深、移动端汉堡菜单、滚动监听、通用初始化
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initNavToggle();
  initScrollReveal();
});

/* 1. 顶部导航：滚动后加深背景 */
function initHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 20);
  onScroll(); // 初始执行
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* 2. 移动端汉堡菜单：展开/收起导航 */
function initNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  // 点击汉堡按钮切换菜单
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.classList.toggle("open", open);
    // 菜单展开时禁止页面滚动
    document.body.style.overflow = open ? "hidden" : "";
  });

  // 点击任意链接后自动收起菜单
  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.classList.remove("open");
      document.body.style.overflow = "";
    });
  });
}

/* 3. 滚动进入视口淡入：为 .scroll-in 元素添加 .in-view */
function initScrollReveal() {
  const items = document.querySelectorAll(".scroll-in");
  if (!items.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target); // 进入一次后即停止监听，节省性能
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach((el) => io.observe(el));
}