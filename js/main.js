/* ============================================================
   Erica Fajardo · REALTOR® — Interactions
   ============================================================ */
(function () {
  "use strict";

  const header = document.getElementById("siteHeader");
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("primaryNav");
  const body = document.body;

  /* ---------- Sticky header state ---------- */
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav toggle ---------- */
  const closeNav = () => {
    body.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
  };
  navToggle.addEventListener("click", () => {
    const open = body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", closeNav)
  );
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });

  /* ---------- Scroll reveal ---------- */
  const revealTargets = document.querySelectorAll(
    ".section-title, .about-copy, .about-media, .card, .why-list li, .stat, .contact-item, .contact-form-wrap"
  );
  revealTargets.forEach((el) => el.classList.add("reveal"));

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
    );
    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add("visible"));
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Contact form validation ---------- */
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");

  const setInvalid = (field, invalid) => {
    field.closest(".field").classList.toggle("invalid", invalid);
  };

  const validators = {
    name: (v) => v.trim().length >= 2,
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
    phone: (v) => v.trim() === "" || v.replace(/[^0-9]/g, "").length >= 7,
    message: (v) => v.trim().length >= 5,
  };

  if (form) {
    // live-clear errors on input
    ["name", "email", "phone", "message"].forEach((id) => {
      const el = document.getElementById(id);
      el.addEventListener("input", () => {
        if (validators[id](el.value)) setInvalid(el, false);
      });
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      note.textContent = "";
      note.className = "form-note";

      let ok = true;
      let firstInvalid = null;
      ["name", "email", "phone", "message"].forEach((id) => {
        const el = document.getElementById(id);
        const valid = validators[id](el.value);
        setInvalid(el, !valid);
        if (!valid) {
          ok = false;
          if (!firstInvalid) firstInvalid = el;
        }
      });

      if (!ok) {
        note.textContent = "Please fix the highlighted fields.";
        note.classList.add("error");
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Build a mailto so the message is delivered without a backend
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const interest = document.getElementById("interest").value;
      const message = document.getElementById("message").value.trim();

      const subject = encodeURIComponent(`New inquiry from ${name} (${interest})`);
      const bodyLines = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "—"}`,
        `Interested in: ${interest}`,
        "",
        message,
      ].join("\n");
      const mailto = `mailto:Ericafajardorealtor@gmail.com?subject=${subject}&body=${encodeURIComponent(bodyLines)}`;

      note.textContent = "Thank you! Opening your email app to send your message…";
      note.classList.add("success");
      window.location.href = mailto;

      setTimeout(() => {
        form.reset();
      }, 900);
    });
  }
})();
