(function () {
  "use strict";

  var root = document.documentElement;

  var sides = {
    primary: {
      selector: ".md-sidebar--primary",
      key: "zensical-sidebar-primary",
      label: "navigation",
    },
    secondary: {
      selector: ".md-sidebar--secondary",
      key: "zensical-sidebar-secondary",
      label: "table of contents",
    },
  };

  var icons = {
    primary:
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-panel-left" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/></svg>',
    secondary:
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-panel-right" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/></svg>',
  };

  function readCollapsed(key) {
    try {
      return localStorage.getItem(key) === "collapsed";
    } catch (_) {
      return false;
    }
  }

  function writeCollapsed(key, collapsed) {
    try {
      localStorage.setItem(key, collapsed ? "collapsed" : "expanded");
    } catch (_) {
      /* Storage can be unavailable (private mode, disabled cookies). */
    }
  }

  function setCollapsed(side, collapsed) {
    var config = sides[side];
    var buttons = document.querySelectorAll(
      '[data-sidebar-toggle="' + side + '"]'
    );

    root.classList.toggle("sidebar-" + side + "-collapsed", collapsed);
    writeCollapsed(config.key, collapsed);

    buttons.forEach(function (button) {
      button.setAttribute("aria-expanded", String(!collapsed));
      button.setAttribute(
        "title",
        (collapsed ? "Show " : "Hide ") + config.label
      );
      button.setAttribute(
        "aria-label",
        (collapsed ? "Show " : "Hide ") + config.label
      );
    });
  }

  function toggle(side) {
    setCollapsed(
      side,
      !root.classList.contains("sidebar-" + side + "-collapsed")
    );
  }

  function createToggle(side) {
    var config = sides[side];
    var button = document.createElement("button");

    button.type = "button";
    button.className = "md-header__button md-icon sidebar-toggle";
    button.dataset.sidebarToggle = side;
    button.setAttribute("aria-controls", "md-sidebar-" + side);
    button.setAttribute("aria-expanded", "true");
    button.setAttribute("title", "Hide " + config.label);
    button.setAttribute("aria-label", "Hide " + config.label);
    button.innerHTML = icons[side];
    button.addEventListener("click", function () {
      toggle(side);
    });

    return button;
  }

  function refresh() {
    var header = document.querySelector(".md-header__inner");

    if (header) {
      Object.keys(sides).forEach(function (side) {
        var sidebar = document.querySelector(sides[side].selector);
        var existing = header.querySelector(
          '[data-sidebar-toggle="' + side + '"]'
        );

        if (sidebar && !sidebar.id) {
          sidebar.id = "md-sidebar-" + side;
        }

        if (!sidebar) {
          if (existing) {
            existing.remove();
          }
          return;
        }

        if (!existing) {
          var anchor =
            header.querySelector(".md-header__source") ||
            header.querySelector(".md-header__option") ||
            header.querySelector(".md-search");

          if (anchor) {
            header.insertBefore(createToggle(side), anchor);
          } else {
            header.appendChild(createToggle(side));
          }
        }
      });
    }

    Object.keys(sides).forEach(function (side) {
      if (document.querySelector(sides[side].selector)) {
        setCollapsed(side, readCollapsed(sides[side].key));
      }
    });
  }

  // Render once on the initial page load, even if document$ already emitted.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", refresh);
  } else {
    refresh();
  }

  // Re-render after instant navigation.
  if (typeof document$ !== "undefined") {
    document$.subscribe(refresh);
  }
})();
