// Site interactions, ported from the Claude Design prototype (design/v2.js).
// Every feature checks its element exists, so one script serves every page.
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/site.config";

gsap.registerPlugin(ScrollTrigger);

const $ = <T extends Element = HTMLElement>(s: string, c: ParentNode = document) => c.querySelector<T>(s as any) as T | null;
const $$ = <T extends Element = HTMLElement>(s: string, c: ParentNode = document) => [...c.querySelectorAll<T>(s as any)] as T[];
const B = document.body;
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const fine = matchMedia("(pointer:fine)").matches;
const motion = !reduce;

// Rolling button labels
for (const l of $$(".lbl")) {
  const t = l.textContent ?? "";
  l.innerHTML = `<span class="roll"><span data-t="${t.replace(/"/g, "&quot;")}">${t}</span></span>`;
}
const setLabel = (el: Element | null, text: string) => {
  const r = el?.querySelector<HTMLElement>(".roll>span");
  if (r) { r.textContent = text; r.dataset.t = text; }
};

// Reveal on scroll
const pend = new Set($$(".rv,#checks li"));
const reveal = (el: HTMLElement) => {
  if (el.classList.contains("in")) return;
  el.classList.add("in");
  el.dispatchEvent(new Event("inview"));
  pend.delete(el);
};
const io = new IntersectionObserver(
  (es) => es.forEach((e) => { if (e.isIntersecting) { reveal(e.target as HTMLElement); io.unobserve(e.target); } }),
  { threshold: 0.18 },
);
pend.forEach((el) => io.observe(el));
const chk = () => pend.forEach((el) => {
  const r = el.getBoundingClientRect();
  if (r.top < innerHeight * 0.9 && r.bottom > 0) reveal(el);
});
addEventListener("scroll", chk, { passive: true });
setTimeout(chk, 400);
$$("#checks li").forEach((li, i) => { const p = $<SVGPathElement>("path", li); if (p) p.style.transitionDelay = 0.2 + i * 0.15 + "s"; });

// Header: solid after scrolling, hides on the way down
const hdr = $("#hdr");
let lastY = 0;
const onScroll = () => {
  const y = scrollY;
  hdr?.classList.toggle("solid", y > 30);
  B.classList.toggle("at-top", y < innerHeight * 0.7);
  if (!B.classList.contains("menu-open")) hdr?.classList.toggle("hide", y > lastY && y > 400);
  lastY = y;
};
addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Menu
const mbtn = $<HTMLButtonElement>("#mbtn");
const menu = $("#menu");
const mlinks = $$<HTMLAnchorElement>(".mlist a");
function setMenu(open: boolean) {
  B.classList.toggle("menu-open", open);
  mbtn?.setAttribute("aria-expanded", String(open));
  if (menu) menu.inert = !open;
  setLabel($("#mlbl"), open ? "Close" : "Menu");
  mlinks.forEach((a, i) => (a.style.transitionDelay = open ? 0.16 + i * 0.045 + "s" : "0s"));
  if (open) setTimeout(() => mlinks[0]?.focus({ preventScroll: true }), 400);
}
if (mbtn) mbtn.onclick = () => setMenu(!B.classList.contains("menu-open"));
$("#scrim")?.addEventListener("click", () => setMenu(false));
mlinks.forEach((a) => a.addEventListener("click", () => setMenu(false)));
addEventListener("keydown", (e) => {
  if (e.key === "Escape" && B.classList.contains("menu-open")) { setMenu(false); mbtn?.focus(); }
});

// Marquee bands. Words come from data-items="One|Two|Three" on .bands
const defaults = ["Website Design", "Website Rescue", "Care Plans", "Free Audits", "Made in Yorkshire"];
$$(".mq").forEach((m, k) => {
  const bs = m.closest<HTMLElement>(".bands");
  const words = bs?.dataset.items ? bs.dataset.items.split("|") : defaults;
  const its = words.map((t, i) => [t, i % 2] as const);
  const seq = (k ? its : [...its].reverse())
    .map(([t, e]) => `<span>${e ? `<em>${t}</em>` : t}<b class="t"><i></i><i></i></b></span>`)
    .join("");
  m.innerHTML = seq + seq + seq + seq;
});
if (motion && $(".mq")) {
  let vel = 0;
  const mqs = $$(".mq").map((el) => ({ el, x: 0, dir: +(el.dataset.dir ?? 1) }));
  ScrollTrigger.create({ onUpdate: (s) => { vel = s.getVelocity() / 140; } });
  gsap.ticker.add(() => {
    vel *= 0.92;
    mqs.forEach((o) => {
      const w = o.el.scrollWidth / 4;
      o.x -= (1.1 + Math.abs(vel)) * o.dir * (vel < -0.5 ? -1 : 1);
      if (o.x < -w) o.x += w;
      if (o.x > 0) o.x -= w;
      o.el.style.transform = `translateX(${o.x}px)`;
    });
  });
}

// Statement: words light up as you scroll
const st = $("#stmt");
if (st) {
  (function wrapWords(node: Node) {
    [...node.childNodes].forEach((n) => {
      if (n.nodeType === 3) {
        const f = document.createDocumentFragment();
        (n.textContent ?? "").split(/(\s+)/).forEach((t) => {
          if (!t) return;
          if (/^\s+$/.test(t)) f.appendChild(document.createTextNode(t));
          else { const s = document.createElement("span"); s.className = "wd"; s.textContent = t; f.appendChild(s); }
        });
        (n as ChildNode).replaceWith(f);
      } else wrapWords(n);
    });
  })(st);
  $$(".it", st).forEach((e) => $$(".wd", e).forEach((w) => w.classList.add("itw")));
  const wds = $$(".wd", st);
  if (motion) {
    ScrollTrigger.create({
      trigger: st, start: "top 80%", end: "bottom 45%", scrub: true,
      onUpdate: (s) => {
        const n = Math.round(s.progress * wds.length);
        wds.forEach((w, i) => {
          const on = i < n;
          w.classList.toggle("lit", on);
          if (w.classList.contains("itw")) w.style.color = on ? "var(--acc)" : "";
        });
      },
    });
  } else wds.forEach((w) => { w.classList.add("lit"); if (w.classList.contains("itw")) w.style.color = "var(--acc)"; });
}

// Homepage hero intro
const squig = $<SVGPathElement>("#squig");
if (squig) {
  const L = squig.getTotalLength();
  squig.style.strokeDasharray = String(L);
  squig.style.strokeDashoffset = String(L);
  if (motion) {
    const tl = gsap.timeline({ delay: 0.15 });
    tl.from(".hero .ln>span", { yPercent: 110, duration: 1, ease: "power4.out", stagger: 0.1 })
      .to(squig, { strokeDashoffset: 0, duration: 0.8, ease: "power2.out" }, "-=.3")
      .from(".hero-side>*:not(.lede)", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out", stagger: 0.08 }, "-=.7")
      .from(".collage .stk", { scale: 0, opacity: 0, duration: 0.9, ease: "back.out(1.8)", stagger: 0.12 }, "-=1.1")
      .from(".hero .bgshape", { scaleY: 0, transformOrigin: "bottom", duration: 1.2, ease: "power4.out", stagger: 0.1 }, 0);
    setTimeout(() => { if (tl.progress() < 1) tl.progress(1); }, 3200);
    $$("[data-par]").forEach((el) =>
      gsap.to(el, { y: +(el.dataset.par ?? 0) * 3, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } }),
    );
    gsap.to("#collage", { y: -120, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
  } else squig.style.strokeDashoffset = "0";
}
// Inner page hero intro
if (motion && $(".ph-hero")) {
  gsap.from(".ph-hero .ln>span", { yPercent: 110, duration: 1, ease: "power4.out", stagger: 0.08, delay: 0.1 });
  gsap.from(".ph-hero .ph-in>*:not(h1):not(.lede)", { y: 26, opacity: 0, duration: 0.8, ease: "power3.out", stagger: 0.08, delay: 0.45 });
  gsap.from(".ph-hero .bgshape", { scaleY: 0, transformOrigin: "bottom", duration: 1.2, ease: "power4.out", stagger: 0.1 });
}

// Draggable stickers in the homepage hero
$$(".stk").forEach((el) => {
  let sx = 0, sy = 0, ox = 0, oy = 0, drag = false, moved = false;
  el.addEventListener("pointerdown", (e) => {
    drag = true; moved = false; sx = e.clientX - ox; sy = e.clientY - oy;
    el.setPointerCapture(e.pointerId); el.style.zIndex = "10"; el.style.transition = "none";
  });
  el.addEventListener("pointermove", (e) => {
    if (!drag) return;
    ox = e.clientX - sx; oy = e.clientY - sy;
    if (Math.abs(ox) + Math.abs(oy) > 4) moved = true;
    el.style.translate = `${ox}px ${oy}px`;
  });
  const up = () => { if (!drag) return; drag = false; el.classList.remove("wob"); void el.offsetWidth; el.classList.add("wob"); };
  el.addEventListener("pointerup", up);
  el.addEventListener("pointercancel", up);
  el.addEventListener("click", (e) => { if (moved) { e.preventDefault(); moved = false; } });
  el.addEventListener("dragstart", (e) => e.preventDefault());
});

// Stacked "which one sounds like you" cards
if (motion) {
  const cards = $$(".pc");
  cards.forEach((c, i) => {
    if (i === cards.length - 1) return;
    gsap.to(c, {
      scale: 0.93, filter: "brightness(.82)", ease: "none",
      scrollTrigger: { trigger: cards[i + 1], start: "top bottom", end: "top " + (110 + (i + 1) * 26) + "px", scrub: true },
    });
  });
}
// "That's me" buttons pre-fill the contact form
$$<HTMLElement>("[data-pick]").forEach((a) =>
  a.addEventListener("click", () => {
    const sel = $<HTMLSelectElement>("#why");
    if (!sel) return;
    const opt = $$<HTMLOptionElement>("option", sel).find((o) => o.dataset.key === a.dataset.pick);
    if (opt) sel.selectedIndex = opt.index;
    const w = $("#selWrap");
    if (w) { w.classList.remove("flash"); void w.offsetWidth; w.classList.add("flash"); }
  }),
);

// Horizontal work track (desktop)
const track = $("#track");
if (motion && track) {
  ScrollTrigger.matchMedia({
    "(min-width: 1001px)": () => {
      const d = () => Math.max(0, track.scrollWidth - innerWidth);
      gsap.to(track, {
        x: () => -d(), ease: "none",
        scrollTrigger: { trigger: "#work", start: "top top", end: () => "+=" + d(), pin: true, scrub: 0.8, invalidateOnRefresh: true, anticipatePin: 1 },
      });
    },
  });
}

// Audit "scan" animation
$("#scan")?.addEventListener("inview", () => {
  const u = "yourbusiness.co.uk", el = $("#surl");
  if (el) {
    let i = 0; el.textContent = "";
    const t = setInterval(() => { el.textContent = u.slice(0, ++i); if (i >= u.length) clearInterval(t); }, 60);
  }
  const sc = 64, rfg = $<SVGCircleElement>("#rfg"), rn = $("#rn");
  if (rfg) rfg.style.strokeDashoffset = String(377 - (377 * sc) / 100);
  let n = 0;
  const s = setInterval(() => { n += 2; if (rn) rn.textContent = String(Math.min(n, sc)); if (n >= sc) clearInterval(s); }, 30);
});

// Review deck
const deck = $("#deck");
if (deck) {
  const qcs = $$(".qc", deck);
  const pose = [{ r: -2, y: 0, s: 1 }, { r: 5, y: 14, s: 0.96 }, { r: -7, y: 26, s: 0.92 }];
  const layout = (anim: boolean) => qcs.forEach((c, k) => {
    const p = pose[Math.min(k, 2)];
    c.style.zIndex = String(10 - k);
    c.style.transition = anim ? "transform .6s cubic-bezier(.34,1.56,.64,1)" : "none";
    c.style.transform = `translate(0px,${p.y}px) rotate(${p.r}deg) scale(${p.s})`;
  });
  layout(false);
  const throwTop = (dir = 1) => {
    const c = qcs[0];
    c.style.transition = "transform .45s cubic-bezier(.4,0,.2,1)";
    c.style.transform = `translate(${dir * 120}%,-40px) rotate(${dir * 22}deg)`;
    setTimeout(() => { qcs.push(qcs.shift()!); c.style.zIndex = "0"; layout(true); }, 380);
  };
  const back = () => {
    const c = qcs.pop()!; qcs.unshift(c);
    c.style.transition = "none"; c.style.transform = "translate(-120%,-40px) rotate(-22deg)"; c.style.zIndex = "11";
    void c.offsetWidth; layout(true);
  };
  const next = $<HTMLButtonElement>("#dnext"), prev = $<HTMLButtonElement>("#dprev");
  if (next) next.onclick = () => throwTop(1);
  if (prev) prev.onclick = back;
  deck.addEventListener("pointerdown", (e) => {
    const c = qcs[0];
    if (!c.contains(e.target as Node)) return;
    const sx = e.clientX; let dx = 0;
    c.setPointerCapture(e.pointerId); c.style.transition = "none";
    const mv = (ev: PointerEvent) => { dx = ev.clientX - sx; c.style.transform = `translate(${dx}px,0) rotate(${-2 + dx / 18}deg)`; };
    const up = () => {
      c.removeEventListener("pointermove", mv); c.removeEventListener("pointerup", up);
      if (Math.abs(dx) > 110) throwTop(Math.sign(dx)); else if (Math.abs(dx) < 4) throwTop(1); else layout(true);
    };
    c.addEventListener("pointermove", mv); c.addEventListener("pointerup", up);
  });
}

// Blog rows: floating preview image follows the cursor
const bf = $("#bfloat");
const bimgs = bf ? $$(".bfi", bf) : [];
let bx = 0, by = 0, tx = 0, ty = 0;
$$(".brow").forEach((r) => {
  r.addEventListener("mouseenter", () => { bf?.classList.add("on"); bimgs.forEach((im, i) => im.classList.toggle("on", String(i) === r.dataset.img)); });
  r.addEventListener("mouseleave", () => bf?.classList.remove("on"));
});

// Custom cursor + magnetic buttons
const cur = $("#cur"), ring = $("#cring"), lab = $("#clab");
let mx = -100, my = -100, rx = -100, ry = -100;
B.classList.toggle("cur-on", fine && motion);
addEventListener("pointermove", (e) => { mx = e.clientX; my = e.clientY; tx = mx; ty = my; });
if (fine && motion) {
  (function loop() {
    rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
    if (cur) cur.style.transform = `translate(${mx}px,${my}px)`;
    if (ring) ring.style.transform = `translate(${rx}px,${ry}px)`;
    if (bf) {
      const nbx = bx + (tx - bx) * 0.12;
      const rot = Math.max(-12, Math.min(12, (nbx - bx) * 0.6));
      bx = nbx; by += (ty - by) * 0.12;
      bf.style.transform = `translate(${bx + 30}px,${by - 120}px) rotate(${rot}deg)`;
    }
    requestAnimationFrame(loop);
  })();
  document.addEventListener("pointerover", (e) => {
    const t = e.target as Element;
    const l = t.closest<HTMLElement>("[data-cursor]");
    const a = t.closest("a,button,select,input,textarea");
    ring?.classList.toggle("lab", !!l);
    ring?.classList.toggle("hov", !l && !!a);
    if (l && lab) lab.textContent = l.dataset.cursor ?? "";
  });
  $$(".mag").forEach((m) => {
    m.addEventListener("pointermove", (e) => {
      const r = m.getBoundingClientRect();
      m.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.22}px,${(e.clientY - r.top - r.height / 2) * 0.3}px)`;
    });
    m.addEventListener("pointerleave", () => (m.style.transform = ""));
  });
}

// Confetti on successful form send
function burst(el: Element) {
  if (!motion) return;
  const r = el.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
  const cols = ["#6a1a2c", "#16365a", "#d06a80", "#6ba6dd", "#fff"];
  for (let i = 0; i < 28; i++) {
    const s = document.createElement("i");
    s.className = "cf"; s.style.left = cx + "px"; s.style.top = cy + "px"; s.style.background = cols[i % cols.length];
    document.body.appendChild(s);
    const a = Math.random() * Math.PI * 2, d = 80 + Math.random() * 160;
    s.animate(
      [
        { transform: "translate(-50%,-50%) skewX(-12deg) rotate(0)", opacity: 1 },
        { transform: `translate(${Math.cos(a) * d}px,${Math.sin(a) * d - 60}px) skewX(-12deg) rotate(${Math.random() * 540}deg)`, opacity: 1, offset: 0.6 },
        { transform: `translate(${Math.cos(a) * d * 1.2}px,${Math.sin(a) * d + 120}px) skewX(-12deg) rotate(${Math.random() * 720}deg)`, opacity: 0 },
      ],
      { duration: 1300 + Math.random() * 500, easing: "cubic-bezier(.2,.8,.3,1)" },
    ).onfinish = () => s.remove();
  }
}

// Forms. Enquiries go to the CRM with the same fields the old site sent:
// name, email, website, service_type, message, privacy_agreed.
// Extra details (business, phone, situation) are added to the message.
// Google Analytics events. Nothing is sent unless the visitor accepted analytics
// (Consent Mode handles that). In GA, mark generate_lead as a key event.
const trackEvent = (name: string, params: Record<string, string> = {}) =>
  (window as any).gtag?.("event", name, { page_path: location.pathname, ...params });
const formName = (form: HTMLFormElement) =>
  form.dataset.track ||
  (form.classList.contains("aform") ? "audit_quick_form"
    : location.pathname === "/" ? "contact_form_home"
    : location.pathname.startsWith("/services/website-support") ? "care_plan_enquiry"
    : "contact_form");

document.addEventListener("click", (e) => {
  const a = (e.target as Element).closest<HTMLAnchorElement>("a[href]");
  if (!a) return;
  const href = a.getAttribute("href") ?? "";
  const text = ((a.querySelector(".lbl, h3") ?? a).textContent ?? "").replace(/[→↓↗]/g, "").replace(/\s+/g, " ").trim().slice(0, 80);
  if (href.includes("tidycal.com")) trackEvent("book_call_click", { link_text: text, link_url: href });
  else if (href.startsWith("mailto:")) trackEvent("email_click", { link_text: text });
  else if (a.matches(".btn, .hdr-cta, .tlink, .xcard, .wend")) trackEvent("cta_click", { link_text: text, link_url: href });
});

const val = (f: HTMLFormElement, n: string) => ((f.elements.namedItem(n) as HTMLInputElement | null)?.value ?? "").trim();
const withScheme = (u: string) => (!u || /^https?:\/\//i.test(u) ? u : `https://${u}`);

async function post(url: string, data: Record<string, string>) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || json.success === false) throw new Error(json.message || "Request failed");
  return json;
}

$$<HTMLFormElement>("form[data-enquiry]").forEach((form) =>
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = $<HTMLButtonElement>("button[type=submit]", form);
    if (val(form, "company_url")) return; // spam trap
    const sel = form.elements.namedItem("service_type") as HTMLSelectElement | null;
    const situation = sel && sel.selectedIndex > 0 ? sel.options[sel.selectedIndex].text : "";
    const extra = [
      situation && `Situation: ${situation}`,
      val(form, "business") && `Business: ${val(form, "business")}`,
      val(form, "phone") && `Phone: ${val(form, "phone")}`,
    ].filter(Boolean).join("\n");
    const message = [extra, val(form, "message")].filter(Boolean).join("\n\n") || situation;
    form.classList.remove("fail", "done");
    if (btn) btn.disabled = true;
    try {
      await post(site.enquiryEndpoint, {
        name: val(form, "name"),
        email: val(form, "email"),
        website: withScheme(val(form, "website")),
        service_type: sel?.value || form.dataset.service || "not_sure",
        message: message || "Enquiry from the website",
        privacy_agreed: "Agreed",
      });
      form.classList.add("done");
      trackEvent("generate_lead", { form_name: formName(form), service_type: sel?.value || form.dataset.service || "not_sure" });
      setLabel(btn, "Sent ✓");
      if (btn) burst(btn);
      form.reset();
    } catch {
      form.classList.add("fail");
      if (btn) btn.disabled = false;
    }
  }),
);

// Solicitor audit form: separate CRM endpoint, then the thank-you page
$$<HTMLFormElement>("form[data-audit-request]").forEach((form) =>
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = $<HTMLButtonElement>("button[type=submit]", form);
    if (val(form, "company_url")) return;
    form.classList.remove("fail");
    if (btn) btn.disabled = true;
    const data = {
      name: val(form, "name"),
      firm_name: val(form, "firm_name"),
      website_url: withScheme(val(form, "website_url")),
      email: val(form, "email"),
      phone: val(form, "phone"),
    };
    try {
      const result = await post(site.auditEndpoint, data);
      trackEvent("generate_lead", { form_name: "solicitor_audit" });
      const first = data.name.split(" ")[0];
      location.href = result.redirect || `/solicitor-audit-thank-you/?name=${encodeURIComponent(first)}`;
    } catch {
      form.classList.add("fail");
      if (btn) btn.disabled = false;
    }
  }),
);

// MailerLite sign-up (From Pretty to Profitable)
$$<HTMLFormElement>("form[data-subscribe]").forEach((form) =>
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = $<HTMLButtonElement>("button[type=submit]", form);
    form.classList.remove("fail");
    if (btn) btn.disabled = true;
    try {
      await post("/.netlify/functions/subscribe", { firstName: val(form, "firstName"), email: val(form, "email") });
      form.classList.add("done");
      trackEvent("sign_up", { method: "newsletter" });
      setLabel(btn, "Subscribed ✓");
      if (btn) burst(btn);
    } catch {
      form.classList.add("fail");
      if (btn) btn.disabled = false;
    }
  }),
);

// Process line draws in
const pl = $<SVGPathElement>(".steps .line path");
if (pl) {
  const L2 = pl.getTotalLength();
  pl.style.strokeDasharray = String(L2);
  pl.style.strokeDashoffset = String(L2);
  if (motion) gsap.to(pl, { strokeDashoffset: 0, ease: "none", scrollTrigger: { trigger: ".steps", start: "top 80%", end: "bottom 60%", scrub: true } });
  else pl.style.strokeDashoffset = "0";
}

// Care plan monthly / yearly toggle
const pt = $(".pill-toggle");
if (pt) {
  const bs = $$<HTMLButtonElement>("button", pt), ind = $("i", pt);
  const put = (b: HTMLElement | null) => { if (!b || !ind) return; ind.style.width = b.offsetWidth + "px"; ind.style.transform = "translateX(" + (b.offsetLeft - 5) + "px)"; };
  bs.forEach((b) => b.addEventListener("click", () => {
    bs.forEach((x) => { x.classList.toggle("on", x === b); x.setAttribute("aria-pressed", String(x === b)); });
    put(b);
    const m = b.dataset.bill!;
    $$(".plan").forEach((p) => {
      const price = $(".price", p), alt = $(".alt", p);
      if (price) price.innerHTML = p.dataset[m] ?? "";
      if (alt) alt.textContent = p.dataset[m + "Alt"] ?? "";
    });
  }));
  const refresh = () => put($(".on", pt));
  refresh();
  requestAnimationFrame(refresh);
  document.fonts?.ready.then(refresh);
  addEventListener("resize", refresh);
}

// Accordions
$$(".acc").forEach((acc) =>
  $$(".acc-q", acc).forEach((q) => q.addEventListener("click", () => {
    const it = q.parentElement!, open = it.classList.contains("open");
    $$(".acc-i", acc).forEach((x) => { x.classList.remove("open"); $(".acc-q", x)?.setAttribute("aria-expanded", "false"); });
    if (!open) { it.classList.add("open"); q.setAttribute("aria-expanded", "true"); }
  })),
);

// Blog post: reading progress + contents highlight
const prog = $("#readbar"), art = $("#article");
if (prog && art) {
  const heads = $$("h2[id]", art), toc = $$(".toc a[href^='#']");
  addEventListener("scroll", () => {
    const r = art.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, -r.top / (r.height - innerHeight)));
    prog.style.transform = "scaleX(" + p + ")";
    let cur = 0;
    heads.forEach((h, i) => { if (h.getBoundingClientRect().top < innerHeight * 0.35) cur = i; });
    toc.forEach((a, i) => a.classList.toggle("on", i === cur));
  }, { passive: true });
}

// Blog index: category filter chips
$$<HTMLButtonElement>(".fchip[data-f]").forEach((c) => c.addEventListener("click", () => {
  $$(".fchip[data-f]").forEach((x) => { x.classList.toggle("on", x === c); x.setAttribute("aria-pressed", String(x === c)); });
  const f = c.dataset.f;
  $$(".bgrid2 .bcard").forEach((b) => (b.style.display = f === "all" || b.dataset.cat === f ? "" : "none"));
  ScrollTrigger.refresh();
}));

// Copy link
$$("[data-copy]").forEach((b) => b.addEventListener("click", () => {
  navigator.clipboard?.writeText(location.href);
  setLabel(b, "Link copied ✓");
}));

// Footer wordmark letters
const fb = $("#fbig");
if (fb) fb.innerHTML = [...(fb.textContent ?? "")].map((c) => `<span>${c}</span>`).join("");

// Cookie banner: analytics only runs after "Accept"
const cookie = $("#cookie");
if (cookie) {
  const stored = (() => { try { return localStorage.getItem("bvs-consent"); } catch { return "no-storage"; } })();
  if (!stored) cookie.classList.add("on");
  const decide = (yes: boolean) => {
    try { localStorage.setItem("bvs-consent", yes ? "yes" : "no"); } catch {}
    (window as any).gtag?.("consent", "update", { analytics_storage: yes ? "granted" : "denied" });
    cookie.classList.remove("on");
  };
  $("#cookie-yes")?.addEventListener("click", () => decide(true));
  $("#cookie-no")?.addEventListener("click", () => decide(false));
  $$(".cookie-open").forEach((b) => b.addEventListener("click", () => cookie.classList.add("on")));
}

// Safari/Firefox sometimes measure before fonts load
document.fonts?.ready.then(() => ScrollTrigger.refresh());
