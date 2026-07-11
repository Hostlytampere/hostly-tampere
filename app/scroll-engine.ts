/**
 * Sivuston koko interaktiivisuus, ~2 kt inline-skriptinä.
 *
 * MIKSI NÄIN: yksikään komponentti ei ole "use client" -komponentti, joten
 * React ei lähetä lainkaan JS:ää selaimeen. Sivu on puhdasta HTML:ää + CSS:ää.
 * Tämä skripti vain laukaisee CSS-animaatiot ja hoitaa lomakkeen.
 *
 * Seuraukset:
 *  - Lighthouse-suorituskyky pysyy 100:ssa
 *  - sivu toimii täysin ilman JS:ää (.no-js näyttää kaiken heti)
 *  - staattinen HTML on sellaisenaan esikatseltavissa
 *
 * Kaikki liike kytkeytyy pois jos käyttäjä on asettanut
 * prefers-reduced-motion: reduce.
 */
export const scrollEngine = /* js */ `
(function () {
  /* .js-luokka on jo lisätty <head>:ssä. */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 1. Scroll reveal ---------- */
  var revealTargets = document.querySelectorAll("[data-reveal], .line-mask, .arch-draw");

  /* Kaaren viivan pituus dasharrayta varten */
  document.querySelectorAll(".arch-draw path").forEach(function (p) {
    try { p.style.setProperty("--len", p.getTotalLength()); } catch (e) {}
  });

  if (reduce || !("IntersectionObserver" in window)) {
    revealTargets.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.08 });

    revealTargets.forEach(function (el) { io.observe(el); });

    /* Hero näkyy heti — ei odoteta scrollausta */
    requestAnimationFrame(function () {
      document.querySelectorAll("#top [data-reveal], #top .line-mask").forEach(function (el) {
        el.classList.add("in");
      });
    });
  }

  /* ---------- 2. Navin tila ---------- */
  var body = document.body;
  function onScrollNav() {
    body.setAttribute("data-scrolled", window.scrollY > 24 ? "true" : "false");
  }

  /* ---------- 3. Parallaksi (elementtikohtainen, ei globaali scrollY) ---------- */
  var parallaxEls = reduce ? [] : Array.prototype.slice.call(document.querySelectorAll(".parallax"));
  function updateParallax() {
    var vh = window.innerHeight;
    for (var i = 0; i < parallaxEls.length; i++) {
      var el = parallaxEls[i];
      var rect = el.getBoundingClientRect();
      if (rect.bottom < -vh || rect.top > vh * 2) continue;
      var delta = rect.top + rect.height / 2 - vh / 2;
      el.style.setProperty("--sy", String(Math.round(delta)));
    }
  }

  /* ---------- 4. Prosessin aikajana ---------- */
  var timeline = document.getElementById("timeline");
  var fill = timeline && timeline.querySelector(".timeline-fill");
  var nodes = timeline ? Array.prototype.slice.call(timeline.querySelectorAll("[data-node]")) : [];

  function updateTimeline() {
    if (!timeline || !fill) return;
    var rect = timeline.getBoundingClientRect();
    /* Viiva täyttyy sitä mukaa kun osio ohittaa viewportin keskikohdan */
    var anchor = window.innerHeight * 0.55;
    var progress = (anchor - rect.top) / rect.height;
    progress = Math.max(0, Math.min(1, progress));
    timeline.style.setProperty("--progress", String(progress));

    var fillY = rect.top + rect.height * progress;
    for (var i = 0; i < nodes.length; i++) {
      var nRect = nodes[i].getBoundingClientRect();
      var active = fillY >= nRect.top + nRect.height / 2;
      nodes[i].setAttribute("data-active", active ? "true" : "false");
    }
  }

  /* ---------- 5. Yksi rAF-silmukka kaikelle scroll-työlle ---------- */
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      onScrollNav();
      updateParallax();
      updateTimeline();
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  onScroll();

  /* ---------- 6. Mobiilivalikko ---------- */
  var menuBtn = document.getElementById("menu-button");
  var menu = document.getElementById("mobile-menu");
  if (menuBtn && menu) {
    var setMenu = function (open) {
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) {
        menu.hidden = false;
        requestAnimationFrame(function () { menu.setAttribute("data-open", "true"); });
      } else {
        menu.setAttribute("data-open", "false");
        setTimeout(function () { if (menu.getAttribute("data-open") !== "true") menu.hidden = true; }, 500);
      }
    };
    menuBtn.addEventListener("click", function () {
      setMenu(menuBtn.getAttribute("aria-expanded") !== "true");
    });
    menu.addEventListener("click", function (e) {
      if (e.target && e.target.tagName === "A") setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMenu(false);
    });
  }

  /* ---------- 7. Lomake ---------- */
  var form = document.getElementById("contact-form");
  var statusBox = document.getElementById("form-status");
  if (form && statusBox) {
    var titleEl = document.getElementById("status-title");
    var bodyEl = document.getElementById("status-body");
    var iconEl = document.getElementById("status-icon");
    var btn = document.getElementById("submit-button");
    var label = form.querySelector("[data-submit-label]");
    var labelIdle = label ? label.textContent : "";
    var COPY = window.__HOSTLY_FORM__ || {};

    var CHECK = '<svg viewBox="0 0 20 20" fill="none" width="20" height="20"><path d="M4 10.5 8 14.5 16 5.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    var WARN = '<svg viewBox="0 0 20 20" fill="none" width="20" height="20"><path d="M10 6v5m0 3h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.6"/></svg>';

    var show = function (state, title, bodyHtml, icon) {
      statusBox.setAttribute("data-state", state);
      if (titleEl) titleEl.textContent = title;
      if (bodyEl) bodyEl.innerHTML = bodyHtml;
      if (iconEl) iconEl.innerHTML = icon;
    };

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      /* Ei access keytä → kerro se rehellisesti, älä teeskentele lähettäväsi. */
      if (form.getAttribute("data-key-missing") === "true") {
        var mail = form.getAttribute("data-fallback-email") || "";
        show(
          "error",
          COPY.errorTitle || "Lähetys ei onnistunut.",
          "Lomake-endpointia ei ole vielä kytketty. Lisää NEXT_PUBLIC_WEB3FORMS_KEY tiedostoon .env.local. Sillä välin: " +
            '<a class="link-underline text-petrol" href="mailto:' + mail + '">' + mail + "</a>",
          WARN
        );
        return;
      }

      if (btn) btn.disabled = true;
      if (label && COPY.submitting) label.textContent = COPY.submitting;

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
      })
        .then(function (res) { return res.json(); })
        .then(function (data) {
          if (data && data.success) {
            form.setAttribute("data-sent", "true");
            show("success", COPY.successTitle || "Kiitos.", COPY.successBody || "", CHECK);
          } else {
            throw new Error("web3forms");
          }
        })
        .catch(function () {
          var mail = form.getAttribute("data-fallback-email") || "";
          show(
            "error",
            COPY.errorTitle || "Lähetys ei onnistunut.",
            (COPY.errorBody || "Kokeile uudelleen tai lähetä sähköpostia osoitteeseen") +
              ' <a class="link-underline text-petrol" href="mailto:' + mail + '">' + mail + "</a>",
            WARN
          );
          setTimeout(function () {
            statusBox.setAttribute("data-state", "idle");
            if (btn) btn.disabled = false;
            if (label) label.textContent = labelIdle;
          }, 5000);
        });
    });
  }
})();
`;
