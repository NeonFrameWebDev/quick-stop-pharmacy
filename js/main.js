/* Quick Stop Pharmacy - main.js
   Mobile nav drawer, footer year, reveal-on-scroll.
*/
"use strict";

(function initNav() {
  const ham = document.querySelector(".nav-hamburger");
  const drawer = document.getElementById("nav-drawer");
  if (!ham || !drawer) return;

  function close() {
    ham.setAttribute("aria-expanded", "false");
    ham.classList.remove("open");
    drawer.classList.remove("open");
  }

  ham.addEventListener("click", () => {
    const open = ham.getAttribute("aria-expanded") === "true";
    ham.setAttribute("aria-expanded", String(!open));
    ham.classList.toggle("open", !open);
    drawer.classList.toggle("open", !open);
  });

  drawer.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
})();

(function setYear() {
  document.querySelectorAll(".copyright-year").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
})();

(function reveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  items.forEach((el) => io.observe(el));
})();
