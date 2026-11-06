(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };

  /* ── Footer year ── */
  $("#year").textContent = new Date().getFullYear();

  /* ── Mobile nav ── */
  const toggle = $(".nav-toggle");
  const links = $("#nav-links");
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    links.classList.toggle("open", !open);
  });
  links.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      toggle.setAttribute("aria-expanded", "false");
      links.classList.remove("open");
    }
  });

  /* ── Projects ── */
  const grid = $("#project-grid");
  const filters = $("#project-filters");
  const projects = [...PROJECTS].sort((a, b) => String(b.year).localeCompare(String(a.year)));

  function renderProjects(category) {
    grid.replaceChildren();
    projects
      .filter((p) => category === "All" || p.category === category)
      .forEach((p) => {
        const card = el("article", "card project");
        if (p.image) {
          const img = el("img", "project-img");
          img.src = p.image;
          img.alt = p.title;
          img.loading = "lazy";
          card.append(img);
        }
        const body = el("div", "project-body");
        const meta = el("div", "project-meta");
        meta.append(el("span", "mono", p.year), el("span", "mono", p.category));
        body.append(meta, el("h3", "project-title", p.title), el("p", "project-desc", p.description));
        if (p.tags?.length) {
          const tags = el("div", "tags");
          p.tags.forEach((t) => tags.append(el("span", "tag", t)));
          body.append(tags);
        }
        if (p.links?.length) {
          const l = el("div", "project-links");
          p.links.forEach(({ label, url }) => {
            const a = el("a", "link", label + " →");
            a.href = url;
            if (/^https?:/.test(url)) { a.target = "_blank"; a.rel = "noopener"; }
            l.append(a);
          });
          body.append(l);
        }
        card.append(body);
        grid.append(card);
      });
  }

  const categories = ["All", ...new Set(projects.map((p) => p.category).filter(Boolean))];
  if (categories.length > 2) {
    categories.forEach((c, i) => {
      const b = el("button", "chip" + (i === 0 ? " active" : ""), c);
      b.setAttribute("role", "tab");
      b.addEventListener("click", () => {
        filters.querySelectorAll(".chip").forEach((x) => x.classList.remove("active"));
        b.classList.add("active");
        renderProjects(c);
      });
      filters.append(b);
    });
  }
  renderProjects("All");

  /* ── Gallery + lightbox ── */
  const gallery = $("#gallery");
  const PHOTO_DIR = "assets/photos/";
  const fullSrc = (p) => PHOTO_DIR + p.file;
  const thumbSrc = (p) => PHOTO_DIR + "thumbs/" + p.file;
  const items = PHOTOS.map((photo, i) => {
    const btn = el("button", "gallery-item");
    btn.setAttribute("aria-label", `Open photo ${i + 1} of ${PHOTOS.length}`);
    const img = el("img");
    img.src = thumbSrc(photo);
    img.alt = `Photograph ${i + 1} by Joseph Morales`;
    img.loading = "lazy";
    img.decoding = "async";
    if (photo.w && photo.h) img.style.aspectRatio = `${photo.w} / ${photo.h}`;
    btn.append(img);
    btn.addEventListener("click", () => openLightbox(i));
    return { btn, col: photo.col, ratio: photo.w && photo.h ? photo.h / photo.w : 1.5 };
  });

  // Masonry: place each photo in the currently shortest column, so columns end evenly
  // and the order reads left-to-right.
  let colCount = 0;
  function layoutGallery() {
    const n = window.innerWidth < 860 ? 2 : 3;
    if (n === colCount) return;
    colCount = n;
    const cols = Array.from({ length: n }, () => el("div", "gallery-col"));
    const heights = new Array(n).fill(0);
    // Pinned photos (`col`) first, on desktop only; then the rest fill the shortest column.
    const pinned = n === 3 ? items.filter((it) => Number.isInteger(it.col) && it.col < n) : [];
    pinned.forEach(({ btn, col, ratio }) => { cols[col].append(btn); heights[col] += ratio; });
    items.filter((it) => !pinned.includes(it)).forEach(({ btn, ratio }) => {
      const k = heights.indexOf(Math.min(...heights));
      cols[k].append(btn);
      heights[k] += ratio;
    });
    gallery.replaceChildren(...cols);
  }
  layoutGallery();
  window.addEventListener("resize", layoutGallery);

  const lb = $("#lightbox");
  const lbImg = $(".lb-img", lb);
  let current = 0;
  let lastFocus = null;

  function show(i) {
    current = (i + PHOTOS.length) % PHOTOS.length;
    const p = PHOTOS[current];
    lbImg.src = fullSrc(p);
    // preload neighbours so arrowing through is instant
    [current - 1, current + 1].forEach((j) => {
      new Image().src = fullSrc(PHOTOS[(j + PHOTOS.length) % PHOTOS.length]);
    });
    lbImg.alt = `Photograph ${current + 1} by Joseph Morales`;
  }
  function openLightbox(i) {
    lastFocus = document.activeElement;
    show(i);
    lb.classList.add("open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    $(".lb-close", lb).focus();
  }
  function closeLightbox() {
    lb.classList.remove("open");
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    lastFocus?.focus();
  }
  $(".lb-close", lb).addEventListener("click", closeLightbox);
  $(".lb-prev", lb).addEventListener("click", () => show(current - 1));
  $(".lb-next", lb).addEventListener("click", () => show(current + 1));
  lb.addEventListener("click", (e) => { if (e.target === lb || e.target.classList.contains("lb-figure")) closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });
  // swipe on touch devices
  let touchX = null;
  lb.addEventListener("touchstart", (e) => { touchX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", (e) => {
    if (touchX == null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
    touchX = null;
  });

  /* ── Experience timeline ── */
  const timeline = $("#timeline");
  EXPERIENCE.forEach((x) => {
    const li = el("li", "tl-item");
    li.append(el("span", "tl-dates mono", x.dates));
    const body = el("div", "tl-body");
    body.append(el("h3", "tl-title", x.title), el("p", "tl-org", x.org));
    if (x.description) body.append(el("p", "tl-desc", x.description));
    if (x.tags?.length) {
      const tags = el("div", "tags");
      x.tags.forEach((t) => tags.append(el("span", "tag", t)));
      body.append(tags);
    }
    li.append(body);
    timeline.append(li);
  });

  /* ── Active nav link on scroll ── */
  const navAnchors = [...document.querySelectorAll(".nav-links a")];
  const sections = navAnchors.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navAnchors.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => io.observe(s));

  /* ── Nav shadow after scrolling ── */
  const nav = $(".nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
