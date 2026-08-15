// site-location.jsx — Location landing page template (York).
// Built from the existing design system: editorial type, claret/blue accent,
// .gutter sections, rule borders, dark slabs. New here: minimal line icons.

// ── York-specific content ───────────────────────────────────────────────────
const YORK_REASONS = [
  { icon: 'pin',    title: 'Local, and invested in it',  body: "I'm an hour up the A59 in Skipton — close enough to meet when it helps, and I know the high streets your customers actually walk down." },
  { icon: 'person', title: 'You work with me, directly', body: 'No account managers, no junior taking over after the pitch. The person you talk to is the person building your site.' },
  { icon: 'search', title: 'Built to be found in York',  body: 'Local SEO foundations, Google Business Profile guidance, and pages structured for the searches your customers in York are actually making.' },
  { icon: 'growth', title: 'Designed around enquiries',  body: "Every page has one clear next step. The goal isn't a website that looks nice — it's one that brings work in." },
  { icon: 'key',    title: 'A website you actually own',  body: "Hand-built on WordPress, with the keys handed to you. No proprietary builder holding your business hostage for a monthly fee." },
  { icon: 'shield', title: 'Looked after after launch',  body: "Security, updates, backups and a real person at the other end of the email — long after the site goes live." },
];

const YORK_CLIENTS = [
  { name: 'Maidens & Ravens',  sector: 'Bridal boutique · York',  note: 'Booked out six months of Saturdays.' },
  { name: 'MillieFox Cakes',   sector: 'Cake maker · York',       note: 'A site as distinctive as the bakes.' },
  { name: 'Little Green Weigh', sector: 'Zero-waste store · York', note: 'Refill shop, online and findable.' },
];

const YORK_FAQ = [
  { q: 'Do I need to be based in York to work with you?', a: "Not at all. I'm based in Skipton and work with businesses right across Yorkshire and the UK. York is close — I can meet in person when it helps — but most of a project runs over calls, screen-shares and email, so distance is rarely the thing that matters." },
  { q: 'Will my site actually rank for York searches?', a: "On-page local SEO is built into every project — proper page structure, location-relevant content, and guidance on your Google Business Profile. I'm honest about timelines: local ranking is earned over months, not switched on overnight, but the foundations go in from day one." },
  { q: 'How much does a website cost?', a: "Every project is quoted individually after a free call, because a one-page refresh and a full WooCommerce store aren't the same job. The difference from most quotes is that I'll give you a real number on the first call — not a vague range that balloons later." },
  { q: 'How long does it take?', a: "A typical small-business site runs around four to eight weeks from our first call to launch, depending on scope and how quickly content comes together. Rescues and migrations can move faster when something's already broken and needs sorting." },
  { q: 'What do you build on?', a: "WordPress, hand-built — no bloated page builders. It's reliable, it's everywhere, and crucially you own it and can edit it yourself. If something genuinely suits a different tool, I'll tell you honestly." },
  { q: 'What happens after the site goes live?', a: "You're not handed a site and waved off. Most clients stay on a care plan so security, updates, backups and small improvements are handled without them thinking about it. Some just take the build — that's fine too." },
];

// ── Minimal line icons (single-stroke, accent-coloured) ──────────────────────
function LineIcon({ name }) {
  const common = { width: 30, height: 30, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    pin:    <><path d="M12 21c4-4.2 6.5-7.4 6.5-10.5a6.5 6.5 0 1 0-13 0C5.5 13.6 8 16.8 12 21z" /><circle cx="12" cy="10.3" r="2.4" /></>,
    person: <><circle cx="12" cy="8" r="3.4" /><path d="M5.5 19.5a6.5 6.5 0 0 1 13 0" /></>,
    search: <><circle cx="10.5" cy="10.5" r="5.5" /><line x1="14.6" y1="14.6" x2="20" y2="20" /></>,
    growth: <><polyline points="4 16 9.5 10.5 13 14 20 6.5" /><polyline points="15 6.5 20 6.5 20 11.5" /></>,
    key:    <><rect x="5.5" y="11" width="13" height="8.5" rx="1.5" /><path d="M8.5 11V8.5a3.5 3.5 0 0 1 7 0V11" /></>,
    shield: <><path d="M12 3l7 2.6v5.1c0 4.7-3.1 7.8-7 9.3-3.9-1.5-7-4.6-7-9.3V5.6L12 3z" /><polyline points="9 11.5 11.3 13.8 15.2 9.5" /></>,
  };
  return <svg {...common} aria-hidden="true">{paths[name]}</svg>;
}

// ── FAQ accordion ────────────────────────────────────────────────────────────
function LocationFAQ() {
  const [open, setOpen] = useState(0);
  return (
    <div style={{ borderTop: '1px solid var(--rule)' }}>
      {YORK_FAQ.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} style={{ borderBottom: '1px solid var(--rule)' }}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              style={{
                width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 22, alignItems: 'baseline',
                padding: '24px 0', textAlign: 'left', color: 'var(--ink)',
              }}
            >
              <span className="serif" style={{ fontStyle: 'italic', fontSize: 19, color: 'var(--accent-a)' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="serif" style={{ fontSize: 26, fontWeight: 400, letterSpacing: '-0.015em', lineHeight: 1.18 }}>
                {f.q}
              </span>
              <span className="serif" style={{
                fontSize: 26, color: 'var(--accent-a)', lineHeight: 1,
                transition: 'transform .25s', transform: isOpen ? 'rotate(45deg)' : 'none',
                display: 'inline-block',
              }}>+</span>
            </button>
            <div style={{
              display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr',
              transition: 'grid-template-rows .3s ease',
            }}>
              <div style={{ overflow: 'hidden' }}>
                <p className="serif" style={{
                  fontSize: 18, lineHeight: 1.6, color: 'var(--ink-2)',
                  margin: 0, paddingLeft: 44, paddingBottom: 26, maxWidth: '74ch',
                }}>{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Services grid card (colour change on hover) ──────────────────────────────
function ServiceTile({ s, i, setPage }) {
  const [hover, setHover] = useState(false);
  return (
    <a href="#"
      onClick={(e) => { e.preventDefault(); setPage(s.id); }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column', minHeight: 230,
        padding: '30px 32px 28px', textDecoration: 'none',
        borderRight: i % 2 === 0 ? '1px solid var(--rule)' : 'none',
        borderBottom: i < 2 ? '1px solid var(--rule)' : 'none',
        background: hover ? 'var(--accent-a)' : 'transparent',
        color: hover ? 'var(--dark-paper)' : 'var(--ink)',
        transition: 'background .25s, color .25s',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span className="mono" style={{
          fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
          color: hover ? 'rgba(255,255,255,0.7)' : 'var(--ink-3)',
        }}>0{i + 1}</span>
        <span className="serif" style={{ fontStyle: 'italic', fontSize: 22, color: hover ? 'var(--dark-paper)' : 'var(--accent-a)' }}>→</span>
      </div>
      <h3 className="serif" style={{ fontSize: 30, fontWeight: 400, letterSpacing: '-0.015em', lineHeight: 1.08, margin: '18px 0 12px' }}>
        {s.title}
      </h3>
      <p style={{
        fontSize: 14.5, lineHeight: 1.6, margin: 0, maxWidth: '40ch',
        color: hover ? 'rgba(255,255,255,0.85)' : 'var(--ink-2)',
      }}>{s.desc}</p>
    </a>
  );
}

// ── LOCATION PAGE (York) ──────────────────────────────────────────────────────
function LocationPage({ setPage }) {
  return (
    <>
      {/* 1 · HERO */}
      <section className="gutter" style={{ padding: '60px 56px 44px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56, alignItems: 'stretch' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Eyebrow>WordPress web design · York, North Yorkshire</Eyebrow>
            <h1 className="serif" style={{
              fontWeight: 400, fontSize: 72, lineHeight: 0.98, letterSpacing: '-0.025em',
              margin: '18px 0 0',
            }}>
              Websites that get <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>York businesses</span> more enquiries, more bookings, and <span style={{ fontStyle: 'italic' }}>found on Google</span>.
            </h1>
            <p className="serif" style={{ fontSize: 20, lineHeight: 1.5, color: 'var(--ink-2)', margin: '24px 0 0', maxWidth: '48ch' }}>
              From the Shambles to the suburbs — WordPress websites for York service businesses, built around the one thing that matters: bringing customers in.
            </p>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginTop: 32, flexWrap: 'wrap' }}>
              <CTA kind="solid" to={LINKS.audit}>Book a Website Review →</CTA>
              <CTA kind="ghost" page="contact" setPage={setPage}>Send a Message</CTA>
            </div>
          </div>
          <div className="ph" style={{ minHeight: 460 }}>⌐ York — hero image (Minster / Shambles)</div>
        </div>
      </section>

      {/* 2 · RESULTS FOR YORK + ELIZABETH QUOTE */}
      <section className="gutter" style={{ padding: '44px 56px', borderTop: '1px solid var(--rule)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 56, alignItems: 'center' }}>
          <div>
            <Eyebrow>Results for York businesses</Eyebrow>
            <h2 className="serif" style={{ fontSize: 46, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.04, margin: '14px 0 18px' }}>
              A site that works while you're <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>busy serving customers</span>.
            </h2>
            <p className="serif" style={{ fontSize: 19, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0, maxWidth: '50ch' }}>
              The best websites do their job quietly — taking enquiries and bookings at midnight while you're closed, on a Saturday while you're flat out, and on a phone while your customer's stood on Stonegate deciding where to go.
            </p>
          </div>

          {/* Pull quote — Elizabeth Matfin */}
          <figure style={{ margin: 0, border: '1px solid var(--rule)', background: 'var(--paper-2)', padding: '34px 38px 30px' }}>
            <div className="serif" style={{ fontSize: 64, lineHeight: 0.6, color: 'var(--accent-a)', height: 30 }}>“</div>
            <blockquote className="serif" style={{ margin: '6px 0 0', fontSize: 25, lineHeight: 1.38, letterSpacing: '-0.01em', color: 'var(--ink)' }}>
              We're booked up on Saturdays for <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>six months solid</span> — the booking form on the website really works for us. The brides find us, book themselves in, and turn up.
            </blockquote>
            <figcaption style={{ marginTop: 22, display: 'flex', alignItems: 'center', gap: 14 }}>
              <div className="ph" style={{ width: 48, height: 48, flex: '0 0 48px', borderRadius: '50%', fontSize: 8, padding: 4 }}>Elizabeth M.</div>
              <div>
                <div className="serif" style={{ fontSize: 18, letterSpacing: '-0.01em' }}>Elizabeth Matfin</div>
                <div className="label" style={{ marginTop: 4 }}>Maidens &amp; Ravens Bridal Boutique, York</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 3 · WHY YORK BUSINESSES WORK WITH ME (icons) */}
      <section className="gutter" style={{ padding: '52px 56px', borderTop: '1px solid var(--rule)' }}>
        <h2 className="serif" style={{ fontSize: 48, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1, marginBottom: 32 }}>
          Why York businesses <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>work with me</span>.
        </h2>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          borderTop: '1px solid var(--rule)', borderLeft: '1px solid var(--rule)',
        }}>
          {YORK_REASONS.map((r) => (
            <div key={r.title} style={{
              padding: '30px 32px 32px',
              borderRight: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)',
            }}>
              <div style={{ color: 'var(--accent-a)', marginBottom: 18 }}><LineIcon name={r.icon} /></div>
              <h3 className="serif" style={{ fontSize: 24, fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1.12, marginBottom: 10 }}>{r.title}</h3>
              <p style={{ fontSize: 14.5, color: 'var(--ink-2)', lineHeight: 1.6, margin: 0, maxWidth: '38ch' }}>{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4 · WHO I WORK WITH IN YORK */}
      <section className="gutter" style={{ padding: '52px 56px', borderTop: '1px solid var(--rule)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 48, alignItems: 'start' }}>
          <div>
            <Eyebrow>Who I work with in York</Eyebrow>
            <h2 className="serif" style={{ fontSize: 40, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.04, margin: '14px 0 0' }}>
              A <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>growing</span> list of York names.
            </h2>
            <p className="serif" style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--ink-2)', margin: '18px 0 0', maxWidth: '40ch' }}>
              A bridal boutique, a cake maker and a zero-waste shop, so far — independent York businesses where the website has to earn its keep. The full portfolio runs wider, across Yorkshire and the UK.
            </p>
            <a href="#" className="underlink" style={{ display: 'inline-block', marginTop: 22 }}
              onClick={(e) => { e.preventDefault(); setPage('portfolio'); }}>
              See the full portfolio →
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
            {YORK_CLIENTS.map((c) => (
              <div key={c.name} style={{ border: '1px solid var(--rule)', display: 'flex', flexDirection: 'column' }}>
                <div className="ph" style={{ height: 150 }}>⌐ {c.name}</div>
                <div style={{ padding: '16px 18px 18px', borderTop: '1px solid var(--rule)' }}>
                  <div className="label">{c.sector}</div>
                  <h3 className="serif" style={{ fontSize: 21, fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1.12, margin: '7px 0 6px' }}>{c.name}</h3>
                  <p className="serif" style={{ fontStyle: 'italic', fontSize: 14, color: 'var(--accent-a)', margin: 0 }}>{c.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 · SUCCESS STORY — results stand out */}
      <section className="gutter" style={{ padding: '56px 56px', borderTop: '1px solid var(--rule)', background: 'var(--paper-2)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 56, alignItems: 'center', marginBottom: 40 }}>
          <div>
            <Eyebrow>York success story</Eyebrow>
            <h2 className="serif" style={{ fontSize: 46, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.04, margin: '14px 0 0' }}>
              Maidens &amp; Ravens, <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>York</span>.
            </h2>
          </div>
          <p className="serif" style={{ fontSize: 20, lineHeight: 1.55, color: 'var(--ink-2)', margin: 0, maxWidth: '56ch' }}>
            A distinctive bridal boutique in York with a WooCommerce site built to match. When a TikTok went viral at over 200,000 views and the site buckled under the rush, it was back up the same day — and the bookings haven't stopped since.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: '1px solid var(--rule)', background: 'var(--paper)' }}>
          {[
            ['6 months', 'of Saturdays booked solid through the website'],
            ['30', 'Google reviews earned in the first three months'],
            ['200k+', 'TikTok views the site handled — back up same day'],
          ].map(([v, l], i) => (
            <div key={l} style={{ padding: '34px 32px 30px', borderRight: i < 2 ? '1px solid var(--rule)' : 'none' }}>
              <div className="serif" style={{ fontSize: 80, fontStyle: 'italic', lineHeight: 0.9, color: 'var(--accent-a)', letterSpacing: '-0.02em' }}>{v}</div>
              <div className="serif" style={{ fontSize: 17, lineHeight: 1.4, marginTop: 16, color: 'var(--ink-2)', maxWidth: '26ch' }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 6 · FULL TESTIMONIAL — dark slab */}
      <section className="dark gutter" style={{ padding: '64px 56px' }}>
        <Eyebrow>Word from York</Eyebrow>
        <blockquote className="serif" style={{
          fontStyle: 'italic', fontSize: 38, lineHeight: 1.3, letterSpacing: '-0.012em',
          margin: '22px 0 0', maxWidth: '32ch',
        }}>
          <span style={{ color: 'var(--accent-a)' }}>“</span>{T_ABOUT.quote}<span style={{ color: 'var(--accent-a)' }}>”</span>
        </blockquote>
        <div style={{ marginTop: 26, display: 'flex', alignItems: 'center', gap: 14 }}>
          <div className="ph" style={{ width: 52, height: 52, flex: '0 0 52px', borderRadius: '50%', fontSize: 8, padding: 4, color: 'rgba(255,255,255,0.6)', borderColor: 'rgba(255,255,255,0.2)' }}>Elizabeth M.</div>
          <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)' }}>
            <strong style={{ color: 'var(--dark-paper)' }}>{T_ABOUT.name}</strong> · {T_ABOUT.role}
          </div>
        </div>
      </section>

      {/* 7 · HOW I WORK — visual timeline */}
      <section className="gutter" style={{ padding: '56px 56px', borderTop: '1px solid var(--rule)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, gap: 24, flexWrap: 'wrap' }}>
          <div>
            <Eyebrow>How I work</Eyebrow>
            <h2 className="serif" style={{ fontSize: 46, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.02, marginTop: 14 }}>
              Five steps, <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>no surprises</span>.
            </h2>
          </div>
          <p className="serif" style={{ fontSize: 18, fontStyle: 'italic', color: 'var(--ink-3)', maxWidth: '34ch', margin: 0 }}>
            From a first conversation to a site that's launched, trained and looked after.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, borderTop: '2px solid var(--ink)' }}>
          {DESIGN_PROCESS.map(([n, t, d], i) => (
            <div key={n} style={{
              position: 'relative', padding: '28px 22px 8px',
              borderRight: i < 4 ? '1px solid var(--rule)' : 'none',
            }}>
              <div style={{
                position: 'absolute', top: -7, left: 22,
                width: 12, height: 12, borderRadius: '50%',
                background: 'var(--accent-a)', border: '2px solid var(--paper)',
              }} />
              <div className="serif" style={{ fontSize: 52, fontStyle: 'italic', lineHeight: 0.9, color: 'var(--accent-a)', letterSpacing: '-0.02em' }}>{n}</div>
              <h3 className="serif" style={{ fontSize: 22, fontWeight: 400, letterSpacing: '-0.01em', margin: '16px 0 8px' }}>{t}</h3>
              <p style={{ fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.55, margin: 0 }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8 · FAQ */}
      <section className="gutter" style={{ padding: '56px 56px', borderTop: '1px solid var(--rule)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.4fr', gap: 48, alignItems: 'start' }}>
          <div>
            <Eyebrow>Common questions</Eyebrow>
            <h2 className="serif" style={{ fontSize: 44, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.02, marginTop: 14 }}>
              The things York <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>owners ask</span>.
            </h2>
            <p className="serif" style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-2)', margin: '18px 0 0', maxWidth: '34ch' }}>
              Still not sure? A free website review answers most of it in half an hour.
            </p>
            <div style={{ marginTop: 22 }}>
              <CTA kind="solid" to={LINKS.audit}>Book a Website Review →</CTA>
            </div>
          </div>
          <LocationFAQ />
        </div>
      </section>

      {/* 9 · SERVICES GRID — colour change on hover */}
      <section className="gutter" style={{ padding: '56px 56px', borderTop: '1px solid var(--rule)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 28, flexWrap: 'wrap', gap: 16 }}>
          <h2 className="serif" style={{ fontSize: 48, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1 }}>
            How I can <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>help</span>.
          </h2>
          <span className="label">Pick where you are right now</span>
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
          border: '1px solid var(--rule)',
        }}>
          {SERVICES_NAV.map((s, i) => (
            <ServiceTile key={s.id} s={s} i={i} setPage={setPage} />
          ))}
        </div>
      </section>
    </>
  );
}

Object.assign(window, { LocationPage });
