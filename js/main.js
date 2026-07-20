/**
 * MEDIEVAL CANE CORSO — SITE BEHAVIOR
 * Nav, slideshow, lightbox, FAQ accordion, gallery filters,
 * content rendering from SITE_DATA, and the inquiry form.
 * Vanilla JS, no build step, no external runtime dependencies.
 */
(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const esc = (str) => String(str == null ? "" : str)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  /* ============================= NAV ============================= */
  function initNav() {
    const nav = $(".site-nav");
    if (!nav) return;
    const toggle = $(".nav-toggle");
    const links = $(".nav-links");

    function setCompact() {
      const compact = window.scrollY > 40;
      nav.classList.toggle("is-compact", compact);
    }
    setCompact();
    window.addEventListener("scroll", setCompact, { passive: true });

    if (toggle && links) {
      toggle.addEventListener("click", () => {
        const isOpen = links.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
        document.body.style.overflow = isOpen ? "hidden" : "";
      });
      function closeMenu() {
  links.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Open menu");
  document.body.style.overflow = "";
}

toggle.addEventListener("click", () => {
  toggle.setAttribute(
    "aria-label",
    links.classList.contains("is-open") ? "Close menu" : "Open menu"
  );
});

$$(".nav-links a").forEach((a) =>
  a.addEventListener("click", closeMenu)
);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && links.classList.contains("is-open")) {
    closeMenu();
    toggle.focus();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 980) closeMenu();
});
    }

    // Mark current page link
    const current = document.body.getAttribute("data-page");
    if (current) {
      $$(".nav-links a[data-nav]").forEach((a) => {
        if (a.getAttribute("data-nav") === current) a.setAttribute("aria-current", "page");
      });
    }
  }

  /* ============================ REVEAL ============================ */
  function initReveal() {
    const items = $$(".reveal");
    if (!items.length) return;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((el) => io.observe(el));
  }

  /* =========================== SLIDESHOW =========================== */
  function initSlideshow() {
    const root = $("[data-slideshow]");
    if (!root) return;
    const track = $(".slideshow-track", root);
    const slides = $$(".slide", root);
    const dotsWrap = $(".slideshow-dots", root);
    const prevBtn = $("[data-slide-prev]", root);
    const nextBtn = $("[data-slide-next]", root);
    const pauseBtn = $("[data-slide-pause]", root);
    if (!slides.length) return;

    let index = 0;
    let playing = !prefersReducedMotion;
    let timer = null;
    const INTERVAL = 5500;

    slides.forEach((s, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "slideshow-dot";
      dot.setAttribute("aria-label", "Go to slide " + (i + 1));
      dot.addEventListener("click", () => goTo(i, true));
      dotsWrap.appendChild(dot);
    });
    const dots = $$(".slideshow-dot", dotsWrap);

    function render() {
      slides.forEach((s, i) => s.classList.toggle("is-active", i === index));
      dots.forEach((d, i) => d.classList.toggle("is-active", i === index));
    }
    function goTo(i, userInitiated) {
      index = (i + slides.length) % slides.length;
      render();
      if (userInitiated) restart();
    }
    function next() { goTo(index + 1); }
    function prev() { goTo(index - 1); }
    function start() {
      if (!playing) return;
      stop();
      timer = setInterval(next, INTERVAL);
    }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    function restart() { stop(); start(); }

    prevBtn && prevBtn.addEventListener("click", () => goTo(index - 1, true));
    nextBtn && nextBtn.addEventListener("click", () => goTo(index + 1, true));

    if (pauseBtn) {
      pauseBtn.setAttribute("aria-pressed", String(!playing));
      pauseBtn.addEventListener("click", () => {
        playing = !playing;
        pauseBtn.setAttribute("aria-pressed", String(!playing));
        pauseBtn.innerHTML = playing
          ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>'
          : '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="6,4 20,12 6,20"/></svg>';
        playing ? start() : stop();
      });
    }

    // Pause on hover/focus for accessibility & control
    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", () => playing && start());
    root.addEventListener("focusin", stop);
    root.addEventListener("focusout", () => playing && start());

    // Touch swipe
    let touchStartX = null;
    track.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; stop(); }, { passive: true });
    track.addEventListener("touchend", (e) => {
      if (touchStartX == null) return;
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 40) { dx > 0 ? goTo(index - 1, true) : goTo(index + 1, true); }
      else if (playing) start();
      touchStartX = null;
    });

    render();
    start();
  }

  /* ============================ LIGHTBOX ============================ */
  let lightboxItems = [];
  let lightboxIndex = 0;

  function buildLightbox() {
    if ($("#lightbox")) return;
    const el = document.createElement("div");
    el.id = "lightbox";
    el.className = "lightbox";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-modal", "true");
    el.setAttribute("aria-label", "Image viewer");
    el.innerHTML = `
      <button type="button" class="lightbox-close" aria-label="Close image viewer">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>
      </button>
      <button type="button" class="lightbox-prev" aria-label="Previous image">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 6l-6 6 6 6"/></svg>
      </button>
      <button type="button" class="lightbox-next" aria-label="Next image">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg>
      </button>
      <figure class="lightbox-figure">
        <img src="" alt="">
        <figcaption class="lightbox-caption"></figcaption>
      </figure>`;
    document.body.appendChild(el);

    $(".lightbox-close", el).addEventListener("click", closeLightbox);
    el.addEventListener("click", (e) => { if (e.target === el) closeLightbox(); });
    $(".lightbox-prev", el).addEventListener("click", () => stepLightbox(-1));
    $(".lightbox-next", el).addEventListener("click", () => stepLightbox(1));
    document.addEventListener("keydown", (e) => {
      if (!el.classList.contains("is-open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") stepLightbox(-1);
      if (e.key === "ArrowRight") stepLightbox(1);
    });
  }

  function openLightbox(items, startIndex) {
    buildLightbox();
    lightboxItems = items;
    lightboxIndex = startIndex;
    renderLightbox();
    const el = $("#lightbox");
    el.classList.add("is-open");
    document.body.style.overflow = "hidden";
    $(".lightbox-close", el).focus();
  }
  function renderLightbox() {
    const el = $("#lightbox");
    const item = lightboxItems[lightboxIndex];
    const img = $("img", el);
    img.src = item.file;
    img.alt = item.alt || "";
    $(".lightbox-caption", el).textContent = item.alt || "";
  }
  function stepLightbox(dir) {
    lightboxIndex = (lightboxIndex + dir + lightboxItems.length) % lightboxItems.length;
    renderLightbox();
  }
  function closeLightbox() {
    const el = $("#lightbox");
    if (!el) return;
    el.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  /* ============================ GALLERY ============================ */
  function initGallery() {
    const grid = $("[data-gallery-grid]");
    if (!grid || typeof SITE_DATA === "undefined") return;

    const images = SITE_DATA.gallery;
    grid.innerHTML = images.map((img, i) => `
      <button type="button" class="gallery-item reveal" data-category="${img.category}" data-index="${i}" aria-label="View larger image: ${esc(img.alt)}">
        <img src="${img.file}" alt="${esc(img.alt)}" loading="lazy" width="600" height="600">
      </button>
    `).join("");

    $$(".gallery-item", grid).forEach((btn) => {
      btn.addEventListener("click", () => openLightbox(images, Number(btn.dataset.index)));
    });

    const filters = $$("[data-gallery-filter]");
    filters.forEach((btn) => {
      btn.addEventListener("click", () => {
        filters.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        const cat = btn.dataset.galleryFilter;
        $$(".gallery-item", grid).forEach((item) => {
          const show = cat === "all" || item.dataset.category === cat;
          item.classList.toggle("is-hidden", !show);
        });
      });
    });

    initReveal();
  }

  /* ============================ FAQ ============================ */
  function initFAQAccordion() {
    const list = $("[data-faq-list]");
    if (!list || typeof SITE_DATA === "undefined") return;

    list.innerHTML = limited(SITE_DATA.faqs, list).map((item, i) => `
      <div class="faq-item" data-faq-item>
        <h3 style="margin:0;">
          <button type="button" class="faq-question" aria-expanded="false" aria-controls="faq-answer-${i}" id="faq-q-${i}">
            <span>${esc(item.q)}</span>
            <span class="icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
            </span>
          </button>
        </h3>
        <div class="faq-answer" id="faq-answer-${i}" role="region" aria-labelledby="faq-q-${i}">
          <p>${esc(item.a)}</p>
        </div>
      </div>
    `).join("");

    $$("[data-faq-item]", list).forEach((item) => {
      const btn = $(".faq-question", item);
      const answer = $(".faq-answer", item);
      btn.addEventListener("click", () => {
        const isOpen = item.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", String(isOpen));
        answer.style.maxHeight = isOpen ? answer.scrollHeight + "px" : "0px";
      });
    });
  }

  /* ===================== DYNAMIC CONTENT RENDERERS ===================== */
  function limited(arr, wrap) {
    const n = wrap.dataset.limit ? parseInt(wrap.dataset.limit, 10) : arr.length;
    return arr.slice(0, n);
  }

  function renderDogCards() {
    const wrap = $("[data-dogs-grid]");
    if (!wrap || typeof SITE_DATA === "undefined") return;
    wrap.innerHTML = limited(SITE_DATA.dogs, wrap).map((dog) => `
      <a href="our-dogs.html#${dog.id}" class="card reveal">
        <div class="card-media">
          <img src="${dog.photos[0].file}" alt="${esc(dog.photos[0].alt)}" loading="lazy" width="600" height="750">
        </div>
        <div class="card-body">
          <span class="badge badge-planned">${esc(dog.role)}</span>
          <h3 style="margin-top:0.6rem;">${esc(dog.name)}</h3>
          <div class="card-meta">
            <span>${esc(dog.sex)}</span>
            ${dog.ageDisplay ? `<span>${esc(dog.ageDisplay)}</span>` : ""}
          </div>
        </div>
      </a>
    `).join("");
    initReveal();
  }

  function renderDogProfiles() {
    const wrap = $("[data-dog-profiles]");
    if (!wrap || typeof SITE_DATA === "undefined") return;
    wrap.innerHTML = SITE_DATA.dogs.map((dog, i) => `
      <article id="${dog.id}" class="split ${i % 2 ? "reverse" : ""}" style="padding: var(--space-6) 0; scroll-margin-top: 100px;">
        <div class="media-frame">
          <img src="${dog.photos[0].file}" alt="${esc(dog.photos[0].alt)}" loading="lazy" width="700" height="700" style="aspect-ratio:1/1;object-fit:cover;">
        </div>
        <div>
          <span class="badge badge-planned">${esc(dog.role)}</span>
          <h2 style="margin-top:0.7rem;">${esc(dog.name)}</h2>
          <div class="card-meta" style="margin-bottom:1rem;">
            <span>${esc(dog.sex)}</span>
            ${dog.ageDisplay ? `<span>${esc(dog.ageDisplay)}</span>` : ""}
            ${dog.registration ? `<span>${esc(dog.registration)}</span>` : ""}
            ${dog.litters ? `<span>${esc(dog.litters)}</span>` : ""}
          </div>
          ${dog.bio.map((p) => `<p>${esc(p)}</p>`).join("")}
          ${dog.healthTests && dog.healthTests.length ? `
            <h4 style="margin-top:1.5rem;">Health Testing</h4>
            <ul class="chip-list" style="margin-top:0.6rem;">
              ${dog.healthTests.map((t) => `<li class="chip">${esc(t.test)}: <strong>${esc(t.result)}</strong></li>`).join("")}
            </ul>
          ` : dog.healthNote ? `<div class="notice-box" style="margin-top:1.5rem;">${esc(dog.healthNote)}</div>` : ""}
          ${dog.photos.length > 1 ? `
            <div class="grid grid-3" style="margin-top:1.5rem; gap: 0.75rem;">
              ${dog.photos.slice(1).map((p) => `<img src="${p.file}" alt="${esc(p.alt)}" loading="lazy" style="border-radius:12px;aspect-ratio:1/1;object-fit:cover;">`).join("")}
            </div>
          ` : ""}
        </div>
      </article>
    `).join("");
  }

  function renderLitters() {
    const wrap = $("[data-litters]");
    if (!wrap || typeof SITE_DATA === "undefined") return;
    const badgeClass = {
      "Available": "badge-available",
      "Reserved": "badge-reserved",
      "Placement Pending": "badge-pending",
      "Planned Litter": "badge-planned",
      "Applications Open": "badge-open",
      "Applications Closed": "badge-closed"
    };
    if (!SITE_DATA.litters.length) {
      wrap.innerHTML = `<div class="notice-box">No litters are currently planned. Please check back soon or contact us to be added to our interest list.</div>`;
      return;
    }
    wrap.innerHTML = limited(SITE_DATA.litters, wrap).map((l) => `
      <div class="litter-card reveal">
        <div class="litter-card-media">
          <img src="${l.image}" alt="${esc(l.sire)} and ${esc(l.dam)}" loading="lazy">
        </div>
        <div class="litter-card-body">
          <span class="badge ${badgeClass[l.status] || "badge-planned"}">${esc(l.status)}</span>
          <h3 class="litter-pairing">${esc(l.sire)} &times; ${esc(l.dam)}</h3>
          <div class="card-meta"><span>${esc(l.expected)}</span></div>
          <p>${esc(l.description)}</p>
          ${l.startingPrice ? `<p class="litter-price">${esc(l.startingPrice)}</p>` : ""}
          <a href="application/?interest=litter" class="btn btn-primary btn-sm">Inquire About This Litter</a>
        </div>
      </div>
    `).join("");
    initReveal();
  }

  function renderAvailablePuppies() {
    const wrap = $("[data-available-puppies]");
    if (!wrap || typeof SITE_DATA === "undefined") return;
    if (!SITE_DATA.availablePuppies.length) {
      wrap.innerHTML = `
        <div class="notice-box">
          Our next litter is expected on September 7, 2026. Puppies are expected to be ready for their forever homes on November 2, 2026. <a href="application/">Contact us or complete a puppy application</a> to join our interest list.
        </div>`;
      return;
    }
  }

  function renderReviews() {
    const wrap = $("[data-reviews-grid]");
    if (!wrap || typeof SITE_DATA === "undefined") return;
    const r = SITE_DATA.reviews;
    wrap.innerHTML = limited(r.items, wrap).map((item) => `
      <div class="review-card reveal">
        <div class="review-stars" aria-label="${item.rating} out of 5 stars">${"★".repeat(item.rating)}${"☆".repeat(5 - item.rating)}</div>
        <p class="review-text">"${esc(item.text)}"</p>
        <div class="review-foot">
          <span class="name">${esc(item.name)}${item.isExcerpt ? " — excerpt" : ""}</span>
          <span>${esc(item.source)}${item.verified ? " · Verified" : ""}</span>
        </div>
        ${item.url ? `<a href="${esc(item.url)}" target="_blank" rel="noopener" class="review-google-link">View on Google →</a>` : ""}
      </div>
    `).join("");
    initReveal();

    if (r.googleReviewsUrl) {
      const existing = wrap.parentElement.querySelector(".reviews-more-link");
      if (existing) existing.remove();
      const moreWrap = document.createElement("div");
      moreWrap.className = "reviews-more-link text-center";
      moreWrap.style.marginTop = "2.5rem";
      moreWrap.innerHTML = `<a href="${esc(r.googleReviewsUrl)}" target="_blank" rel="noopener" class="btn btn-outline">Read More Reviews on Google</a>`;
      wrap.insertAdjacentElement("afterend", moreWrap);
    }
  }

  function renderRatingSummary() {
    const wrap = $("[data-rating-summary]");
    if (!wrap || typeof SITE_DATA === "undefined") return;
    const r = SITE_DATA.reviews;
    wrap.innerHTML = `
      <span class="big">${r.aggregateRating.toFixed(1)}</span>
      <div>
        <div class="review-stars" aria-hidden="true">${"★".repeat(Math.round(r.aggregateRating))}</div>
        <div style="font-size:0.85rem;color:var(--ink-muted);">${r.reviewCount} reviews on ${esc(r.source)}</div>
      </div>`;
  }

  function renderCertifications() {
    const wrap = $("[data-certs-grid]");
    if (!wrap || typeof SITE_DATA === "undefined") return;
    const dogGroups = limited(SITE_DATA.certifications, wrap);

    wrap.innerHTML = dogGroups.map((dog, i) => `
      <div class="cert-card reveal">
        <div class="cert-preview" style="${dog.photo ? "padding:0;" : ""}">
          ${dog.photo
            ? `<button type="button" class="cert-preview-btn" data-cert-index="${i}" aria-label="View larger photo of ${esc(dog.dogName)}">
                <img src="${dog.photo}" alt="${esc(dog.photoAlt || dog.dogName)}" loading="lazy" style="width:100%; height:100%; object-fit:cover;">
                <span class="cert-enlarge-hint" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                  Enlarge
                </span>
              </button>`
            : `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 15l2 2 4-4"/></svg>`
          }
        </div>
        <div class="cert-body">
          <h3>${esc(dog.dogName)}</h3>
          <div class="cert-test-list">
            ${dog.items.map((t) => `
              <div class="cert-test-item">
                <div class="cert-test-header">
                  <div>
                    ${t.category ? `<span class="eyebrow" style="margin-bottom:0.2rem;">${esc(t.category)}</span>` : ""}
                    <p class="cert-test-title">${esc(t.title)}</p>
                  </div>
                  ${t.result ? `<span class="cert-result">${esc(t.result)}</span>` : ""}
                </div>
                <p class="card-meta" style="margin:0.3rem 0;">${esc(t.issuer)}${t.dateOfReport ? " · " + esc(t.dateOfReport) : ""}</p>
                ${t.documentImage ? `
                  <button type="button" class="cert-document-btn" data-document-src="${esc(t.documentImage)}" data-document-alt="${esc(t.documentAlt || t.title)}" aria-label="Enlarge ${esc(t.title)} certificate">
                    <img src="${esc(t.documentImage)}" alt="${esc(t.documentAlt || t.title)}" loading="lazy">
                    <span class="cert-document-overlay" aria-hidden="true">View full certificate</span>
                  </button>
                ` : ""}
                <p style="font-size:0.92rem;color:var(--ink-muted);">${esc(t.explanation)}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `).join("");

    const photoGroups = dogGroups.filter((dog) => dog.photo);
    const lightboxItems = photoGroups.map((dog) => ({ file: dog.photo, alt: dog.photoAlt || dog.dogName }));
    $$(".cert-preview-btn", wrap).forEach((btn) => {
      const dog = dogGroups[Number(btn.dataset.certIndex)];
      const targetIndex = photoGroups.indexOf(dog);
      btn.addEventListener("click", () => openLightbox(lightboxItems, Math.max(targetIndex, 0)));
    });
    $$(".cert-document-btn", wrap).forEach((btn) => {
      btn.addEventListener("click", () => openLightbox([{
        file: btn.dataset.documentSrc,
        alt: btn.dataset.documentAlt || "Health certification document"
      }], 0));
    });
    initReveal();
  }

  function initSlideshowFromData() {
    const root = $("[data-slideshow-source]");
    if (!root || typeof SITE_DATA === "undefined") return;
    const track = $(".slideshow-track", root);
    track.innerHTML = SITE_DATA.slideshowImages.map((img, i) => `
      <div class="slide ${i === 0 ? "is-active" : ""}">
        <img src="${img.file}" alt="${esc(img.alt)}" loading="${i === 0 ? "eager" : "lazy"}">
        <div class="slide-caption">${esc(img.caption || "")}</div>
      </div>
    `).join("");
    initSlideshow();
  }

  function renderFooterYear() {
    $$("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });
  }

  function renderBusinessFields() {
    if (typeof SITE_DATA === "undefined") return;
    const b = SITE_DATA.business;
    $$("[data-biz-phone]").forEach((el) => { el.textContent = b.phone; });
    $$("[data-biz-phone-href]").forEach((el) => { el.href = b.phoneHref; });
    $$("[data-biz-email]").forEach((el) => { el.textContent = b.email; });
    $$("[data-biz-email-href]").forEach((el) => { el.href = "mailto:" + b.email; });
    $$("[data-biz-instagram]").forEach((el) => { el.href = b.instagramUrl; });
  }

  /* ============================ INQUIRY FORM ============================ */
  /**
   * FORM SUBMISSION — how to connect a real backend
   * ------------------------------------------------
   * This form is fully validated and functional client-side. To make it
   * deliver submissions, set FORM_ENDPOINT below to one of:
   *
   *   1) Formspree:   "https://formspree.io/f/xxxxxxx"   (no server needed)
   *   2) Your own serverless function / API route that forwards to email
   *      or a database (Supabase, Airtable, etc.)
   *
   * Never put private API keys or secrets in this file — this is
   * public, client-side code. Formspree's form endpoint ID is safe to
   * expose (it only accepts POSTs, it's not a secret key). If you build
   * a custom backend, keep any real secret keys server-side only and
   * call your own endpoint from here instead.
   *
   * See README.md for full setup instructions.
   */
  const FORM_ENDPOINT = "https://script.google.com/macros/s/AKfycbw6ad7SkrUe8vGvyqChb6dPBMEfs8F-FFLbEZ2R6jfR11t7f_a7QY1a1d8q0nhvZpx9Cg/exec"; // e.g. "https://formspree.io/f/xxxxxxx" — left blank until the breeder chooses a backend

  function initInquiryForm() {
    const form = $("#inquiry-form");
    if (!form) return;

    // Note: the status box lives as a sibling of the form (inside .form-panel),
    // not a descendant of it, so it must be queried unscoped rather than via `form`.
    const statusBox = $("[data-form-status]");
    const submitBtn = $("[data-form-submit]", form);

    // Show the "pets permitted" field only when renting is selected
    const rentField = $("[data-rent-field]", form);
    if (rentField) {
      $$('input[name="ownRent"]', form).forEach((radio) => {
        radio.addEventListener("change", () => {
          rentField.style.display = radio.value === "rent" && radio.checked ? "flex" : rentField.style.display;
          if (radio.value === "own" && radio.checked) rentField.style.display = "none";
        });
      });
    }

    // Pre-fill "interested in" based on ?interest= query param
    const params = new URLSearchParams(window.location.search);
    const interest = params.get("interest");
    if (interest) {
      const radio = form.querySelector(`input[name="interestType"][value="${interest === "litter" ? "future-litter" : interest}"]`);
      if (radio) radio.checked = true;
    }

    function showStatus(type, message) {
      statusBox.className = "form-status is-visible " + type;
      statusBox.innerHTML = message;
      statusBox.setAttribute("tabindex", "-1");
      statusBox.focus();
    }

    function validate() {
      let valid = true;
      $$("[required]", form).forEach((field) => {
        const wrapper = field.closest(".field") || field.closest(".field-group");
        let fieldValid = true;

        if (field.type === "checkbox") {
          fieldValid = field.checked;
        } else if (field.type === "radio") {
          const group = form.querySelectorAll(`input[name="${field.name}"]`);
          fieldValid = Array.from(group).some((r) => r.checked);
        } else if (field.type === "email") {
          fieldValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
        } else {
          fieldValid = field.value.trim().length > 0;
        }

        if (wrapper) wrapper.classList.toggle("has-error", !fieldValid);
        if (!fieldValid) valid = false;
      });
      return valid;
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      statusBox.className = "form-status";

      // Honeypot spam check — bots tend to fill every field
      const honeypot = $('input[name="company_website"]', form);
      if (honeypot && honeypot.value.trim() !== "") {
        // Silently drop — behave as if successful to not tip off the bot
        form.reset();
        showStatus("success", "Thank you for your inquiry. Your application has been received. The breeder will review your information and contact you regarding availability and the next steps.");
        return;
      }

      if (!validate()) {
        showStatus("error", "Please fill in all required fields highlighted below before submitting.");
        const firstError = $(".field.has-error, .field-group.has-error", form);
        if (firstError) firstError.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "center" });
        return;
      }

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="spinner" aria-hidden="true"></span> Submitting…';

      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());

      try {
        if (FORM_ENDPOINT) {
          const res = await fetch(FORM_ENDPOINT, {
            method: "POST",
            headers: { Accept: "application/json" },
            body: formData
          });
          if (!res.ok) throw new Error("Submission failed");
        } else {
          // No backend configured yet — log locally so the form is demonstrably functional
          // during development/testing. Replace with FORM_ENDPOINT above when ready.
          console.info("Inquiry form payload (no FORM_ENDPOINT configured yet):", payload);
          await new Promise((resolve) => setTimeout(resolve, 700));
        }

        form.reset();
        showStatus("success", "Thank you for your inquiry. Your application has been received. The breeder will review your information and contact you regarding availability and the next steps.");
      } catch (err) {
        showStatus("error", "Something went wrong sending your inquiry. Please try again, or reach us directly by phone at " + (typeof SITE_DATA !== "undefined" ? SITE_DATA.business.phone : "the number above") + ".");
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Submit Inquiry";
      }
    });

    // Live-clear error state as the user fixes fields
    form.addEventListener("input", (e) => {
      const wrapper = e.target.closest(".field");
      if (wrapper) wrapper.classList.remove("has-error");
    });
  }

  /* ============================ INIT ============================ */
  function safe(fn) {
    try { fn(); } catch (err) { console.error("[medieval-cane-corso] init error in " + fn.name + ":", err); }
  }

  document.addEventListener("DOMContentLoaded", () => {
    safe(initNav);
    safe(renderFooterYear);
    safe(renderBusinessFields);
    safe(initSlideshowFromData);
    safe(renderDogCards);
    safe(renderDogProfiles);
    safe(renderLitters);
    safe(renderAvailablePuppies);
    safe(renderReviews);
    safe(renderRatingSummary);
    safe(renderCertifications);
    safe(initGallery);
    safe(initFAQAccordion);
    safe(initInquiryForm);
    safe(initReveal);
  });
})();
