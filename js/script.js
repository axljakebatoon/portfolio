/* ==========================================================================
   Axl Jake M. Batoon — Portfolio
   Minimal vanilla JS: mobile nav toggle + active-link highlighting.
   The page still works without this file (anchors jump to sections).
   ========================================================================== */

(function () {
  "use strict";

  var DESKTOP_BREAKPOINT = 720;

  var toggle = document.getElementById("nav-toggle");
  var menu = document.getElementById("nav-menu");
  var links = menu ? Array.prototype.slice.call(menu.querySelectorAll("a")) : [];

  /* --- Mobile navigation ------------------------------------------------- */
  function closeMenu() {
    if (!menu) return;
    menu.classList.remove("is-open");
    if (toggle) {
      toggle.setAttribute("aria-expanded", "false");
    }
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && menu.classList.contains("is-open")) {
        closeMenu();
        toggle.focus();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= DESKTOP_BREAKPOINT) {
        closeMenu();
      }
    });
  }

  /* --- Active section highlight ----------------------------------------- */
  var sections = document.querySelectorAll("main section[id]");
  var supportsObserver = "IntersectionObserver" in window;

  if (supportsObserver && sections.length && links.length) {
    var linkById = {};
    links.forEach(function (link) {
      var id = link.getAttribute("href").slice(1);
      linkById[id] = link;
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (link) {
            link.classList.remove("is-active");
          });
          var active = linkById[entry.target.id];
          if (active) {
            active.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    Array.prototype.forEach.call(sections, function (section) {
      observer.observe(section);
    });
  }

  /* --- Footer year ------------------------------------------------------- */
  var year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
