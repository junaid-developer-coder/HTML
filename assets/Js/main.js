// main.js — small, framework-free helpers for the demo page.
// Safe to delete or replace entirely once you build your own page.

(function () {
  "use strict";

  // Keep the footer year current without a build step.
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Smooth-scroll fallback for browsers that ignore CSS scroll-behavior,
  // and to account for the sticky header height.
  document.addEventListener("click", function (event) {
    var link = event.target.closest('a[href^="#"]');
    if (!link) return;

    var id = link.getAttribute("href").slice(1);
    var target = id ? document.getElementById(id) : null;
    if (!target) return;

    event.preventDefault();
    var headerOffset = 72;
    var top = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top: top, behavior: "smooth" });
  });
})();
