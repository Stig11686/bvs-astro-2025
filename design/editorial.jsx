// editorial.jsx — Direction 1: Paper Editorial
// Newsreader serif display + Geist sans body. Claret-dominant.
// Generous whitespace, asymmetric editorial grid, italic moments.

const edStyles = {
  paper: '#f4ecd8',      // warmer cream specific to this direction
  paperTint: '#ebe2cb',
  ink: '#1a140a',
  ink2: 'rgba(26,20,10,0.65)',
  ink3: 'rgba(26,20,10,0.4)',
  rule: 'rgba(26,20,10,0.18)',
  ruleSoft: 'rgba(26,20,10,0.10)',
  serif: '"Newsreader", "Iowan Old Style", Georgia, serif',
  sans: '"Geist", ui-sans-serif, system-ui, sans-serif',
};

function EdShell({ page, setPage, children }) {
  return (
    <div style={{
      background: edStyles.paper,
      color: edStyles.ink,
      fontFamily: edStyles.sans,
      fontSize: 14,
      lineHeight: 1.55,
      width: '100%',
      minHeight: '100%',
      paddingBottom: 40,
    }}>
      <EdNav page={page} setPage={setPage} />
      {children}
      <EdFooter />
    </div>
  );
}

function EdNav({ page, setPage }) {
  const items = [
    { id: 'home', label: 'Work', subId: 'case' },     // visual label maps to case
    { id: 'services', label: 'Services' },
    { id: 'blog', label: 'Journal' },
    { id: 'home', label: 'Home' },
  ];
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      alignItems: 'baseline',
      padding: '28px 56px 24px',
      borderBottom: `1px solid ${edStyles.rule}`,
      gap: 24,
    }}>
      <div onClick={() => setPage('home')} style={{ cursor: 'pointer' }}>
        <div style={{
          fontFamily: edStyles.serif,
          fontSize: 24,
          fontWeight: 500,
          letterSpacing: '-0.01em',
          lineHeight: 1,
        }}>
          BVS<span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>Web</span>Design
        </div>
        <div style={{
          fontSize: 10.5,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: edStyles.ink3,
          marginTop: 6,
        }}>
          Yorkshire ·&nbsp; est. 2018
        </div>
      </div>

      <nav style={{ display: 'flex', gap: 28, alignItems: 'baseline' }}>
        {[
          ['home', 'Home'],
          ['services', 'Services'],
          ['case', 'Work'],
          ['blog', 'Journal'],
        ].map(([id, label]) => {
          const active = page === id;
          return (
            <a
              key={label}
              onClick={(e) => { e.preventDefault(); setPage(id); }}
              href="#"
              style={{
                fontFamily: edStyles.serif,
                fontSize: 17,
                fontStyle: 'italic',
                color: active ? 'var(--accent-a)' : edStyles.ink,
                textDecoration: 'none',
                borderBottom: active ? '1px solid var(--accent-a)' : '1px solid transparent',
                paddingBottom: 2,
                transition: 'all .15s',
              }}
              onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = 'var(--accent-a)'; }}
              onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = edStyles.ink; }}
            >
              {label}
            </a>
          );
        })}
        <a href="#" style={{
          marginLeft: 18,
          fontFamily: edStyles.sans,
          fontSize: 13,
          fontWeight: 500,
          color: edStyles.paper,
          background: edStyles.ink,
          padding: '10px 16px',
          borderRadius: 999,
          textDecoration: 'none',
        }}>Start a project →</a>
      </nav>
    </div>
  );
}

function EdFooter() {
  return (
    <div style={{
      marginTop: 56,
      padding: '32px 56px 8px',
      borderTop: `1px solid ${edStyles.rule}`,
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: 32,
      alignItems: 'start',
    }}>
      <div>
        <div style={{
          fontFamily: edStyles.serif, fontSize: 28, lineHeight: 1.05,
          letterSpacing: '-0.01em',
        }}>
          Got a website that isn't <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>earning</span> its keep?
        </div>
        <div style={{ fontSize: 12.5, color: edStyles.ink2, marginTop: 14 }}>
          ben@bvswebdesign.co.uk &nbsp;·&nbsp; 01756 000 000
        </div>
      </div>
      {['Navigate', 'Services', 'Elsewhere'].map((h, i) => (
        <div key={h}>
          <div style={{
            fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase',
            color: edStyles.ink3, marginBottom: 10,
          }}>{h}</div>
          {(i === 0 ? ['Home', 'Services', 'Work', 'Journal', 'Contact']
            : i === 1 ? ['Website Design', 'Care plans', 'Growth plans', 'Audits']
            : ['Are.na', 'LinkedIn', 'Read.cv', 'Newsletter']).map(x => (
            <div key={x} style={{
              fontFamily: edStyles.serif, fontSize: 15, fontStyle: 'italic',
              lineHeight: 1.7,
            }}>{x}</div>
          ))}
        </div>
      ))}
      <div style={{
        gridColumn: '1 / -1', marginTop: 24, paddingTop: 18,
        borderTop: `1px solid ${edStyles.ruleSoft}`,
        display: 'flex', justifyContent: 'space-between',
        fontSize: 11, color: edStyles.ink3, letterSpacing: '0.04em',
      }}>
        <span>© 2026 BVSWebDesign · Skipton, North Yorkshire</span>
        <span>Built, naturally, in WordPress.</span>
      </div>
    </div>
  );
}

// ── HERO LAYOUTS ─────────────────────────────────────────────────────────────
// 3 hero variants the user can cycle via tweaks
function EdHeroA() {
  // Big italic statement, left-aligned, single column with side meta
  return (
    <section style={{ padding: '72px 56px 32px', position: 'relative' }}>
      <div style={{
        position: 'absolute', top: 76, right: 56,
        fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase',
        color: edStyles.ink3, textAlign: 'right', lineHeight: 1.7,
      }}>
        Vol. 8 · Issue 02<br/>
        Skipton — May 2026
      </div>
      <div style={{
        fontFamily: edStyles.serif,
        fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
        color: 'var(--accent-a)', fontWeight: 600,
      }}>— WordPress websites for Yorkshire</div>
      <h1 style={{
        fontFamily: edStyles.serif,
        fontWeight: 400,
        fontSize: 96,
        lineHeight: 0.95,
        letterSpacing: '-0.025em',
        margin: '20px 0 0',
        maxWidth: '14ch',
      }}>
        Websites that <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>earn</span> their keep,
        not just <span style={{ fontStyle: 'italic' }}>sit there</span> looking nice.
      </h1>
      <div style={{
        marginTop: 36, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56,
      }}>
        <p style={{ fontFamily: edStyles.serif, fontSize: 19, lineHeight: 1.5, color: edStyles.ink2, margin: 0, maxWidth: '38ch' }}>
          For Yorkshire businesses tired of a “nice” website that does nothing.
          I design and build WordPress sites that turn visitors into <em style={{ color: edStyles.ink }}>real enquiries</em> — and stay that way long after launch.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
          <a href="#" style={btnSolid}>Book a free 30-min call →</a>
          <a href="#" style={btnGhost}>See selected work</a>
          <div style={{ fontSize: 11.5, color: edStyles.ink3, marginTop: 10 }}>
            Currently booking for <strong style={{ color: edStyles.ink }}>September 2026</strong>.
          </div>
        </div>
      </div>
    </section>
  );
}

function EdHeroB() {
  // Two-column: image left, headline right
  return (
    <section style={{ padding: '56px 56px 32px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '5fr 6fr', gap: 48, alignItems: 'end' }}>
        <Placeholder label="Skipton high-street photo" height={460} />
        <div>
          <div style={{
            fontFamily: edStyles.serif, fontSize: 11, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: 'var(--accent-a)', fontWeight: 600,
          }}>— A small studio. A short list of clients.</div>
          <h1 style={{
            fontFamily: edStyles.serif, fontWeight: 400, fontSize: 78,
            lineHeight: 0.98, letterSpacing: '-0.02em', margin: '14px 0 24px',
          }}>
            Plainly-spoken
            <br/><span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>websites</span>,
            <br/>quietly remarkable
            <br/><span style={{ fontStyle: 'italic' }}>results.</span>
          </h1>
          <p style={{ fontFamily: edStyles.serif, fontSize: 18, lineHeight: 1.5, color: edStyles.ink2, margin: '0 0 24px' }}>
            BVSWebDesign is a one-person WordPress studio in Skipton.
            I work with a handful of Yorkshire businesses a year — bridal, hospitality, dental, trades —
            on sites that actually pull their weight.
          </p>
          <a href="#" style={btnSolid}>Book a discovery call →</a>
        </div>
      </div>
    </section>
  );
}

function EdHeroC() {
  // Big number / by-the-numbers editorial
  return (
    <section style={{ padding: '64px 56px 32px' }}>
      <div style={{
        fontFamily: edStyles.serif, fontSize: 11, letterSpacing: '0.16em',
        textTransform: 'uppercase', color: 'var(--accent-a)', fontWeight: 600,
      }}>— By the numbers</div>
      <h1 style={{
        fontFamily: edStyles.serif, fontWeight: 400, fontSize: 86,
        lineHeight: 0.98, letterSpacing: '-0.022em', margin: '12px 0 28px',
        maxWidth: '18ch',
      }}>
        <span style={{ fontStyle: 'italic' }}>Six</span> years.
        &nbsp;<span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>Thirty-eight</span> small businesses.
        &nbsp;<span style={{ fontStyle: 'italic' }}>One</span> stubborn idea: a website should pay for itself.
      </h1>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
        borderTop: `1px solid ${edStyles.rule}`, borderBottom: `1px solid ${edStyles.rule}`,
        marginTop: 12,
      }}>
        {[
          ['38', 'websites shipped'],
          ['96%', 'avg PageSpeed'],
          ['£0', 'recurring agency fees'],
          ['1', 'designer · me'],
        ].map(([v, l], i, arr) => (
          <div key={l} style={{
            padding: '24px 20px',
            borderRight: i < arr.length - 1 ? `1px solid ${edStyles.rule}` : 'none',
          }}>
            <div style={{ fontFamily: edStyles.serif, fontSize: 56, fontStyle: 'italic', lineHeight: 1, color: 'var(--accent-a)' }}>{v}</div>
            <div style={{ fontSize: 11.5, letterSpacing: '0.06em', color: edStyles.ink2, textTransform: 'uppercase', marginTop: 8 }}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 26, display: 'flex', gap: 16, alignItems: 'center' }}>
        <a href="#" style={btnSolid}>Start a project →</a>
        <span style={{ fontSize: 13, color: edStyles.ink2 }}>or read the journal below ↓</span>
      </div>
    </section>
  );
}

const btnSolid = {
  display: 'inline-block',
  fontFamily: edStyles.sans, fontSize: 14, fontWeight: 500,
  background: edStyles.ink, color: edStyles.paper,
  padding: '14px 22px', borderRadius: 999, textDecoration: 'none',
  letterSpacing: '0.01em',
};
const btnGhost = {
  display: 'inline-block',
  fontFamily: edStyles.serif, fontStyle: 'italic',
  fontSize: 16, color: edStyles.ink, padding: '10px 0',
  textDecoration: 'underline', textDecorationColor: 'var(--accent-a)',
  textUnderlineOffset: 5, textDecorationThickness: 1,
};

// ── HOME PAGE ────────────────────────────────────────────────────────────────
function EdHome({ heroVariant = 'A' }) {
  const Hero = heroVariant === 'B' ? EdHeroB : heroVariant === 'C' ? EdHeroC : EdHeroA;
  return (
    <>
      <Hero />

      {/* Services teaser */}
      <section style={{ padding: '40px 56px', borderTop: `1px solid ${edStyles.rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: 32, alignItems: 'baseline' }}>
          <div style={{
            fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase',
            color: edStyles.ink3,
          }}>§ I. Services</div>
          <h2 style={{ fontFamily: edStyles.serif, fontSize: 38, fontWeight: 400, lineHeight: 1.1, margin: 0, letterSpacing: '-0.015em' }}>
            Three ways we can work together, depending on whether you need a <em>new site</em>, a <em>better one</em>, or <em>someone to look after the one you've got</em>.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', marginTop: 36 }}>
          {SERVICES.map((s, i) => (
            <div key={s.no} style={{
              padding: '24px 28px 24px 0',
              borderLeft: i === 0 ? 'none' : `1px solid ${edStyles.rule}`,
              paddingLeft: i === 0 ? 0 : 28,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontFamily: edStyles.serif, fontStyle: 'italic', fontSize: 22, color: 'var(--accent-a)' }}>{s.no}</span>
                <span style={{ fontSize: 11, color: edStyles.ink3, letterSpacing: '0.04em' }}>{s.tag}</span>
              </div>
              <h3 style={{ fontFamily: edStyles.serif, fontSize: 26, fontWeight: 400, margin: '8px 0 8px', letterSpacing: '-0.01em' }}>{s.title}</h3>
              <p style={{ fontSize: 13.5, color: edStyles.ink2, margin: 0, lineHeight: 1.6 }}>{s.short}</p>
              <a href="#" style={{ ...btnGhost, fontSize: 14, marginTop: 16, display: 'inline-block' }}>Read more</a>
            </div>
          ))}
        </div>
      </section>

      {/* Featured work */}
      <section style={{ padding: '48px 56px', borderTop: `1px solid ${edStyles.rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: 32, alignItems: 'baseline', marginBottom: 28 }}>
          <div style={{ fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: edStyles.ink3 }}>§ II. Selected work</div>
          <h2 style={{ fontFamily: edStyles.serif, fontSize: 38, fontWeight: 400, lineHeight: 1.1, margin: 0, letterSpacing: '-0.015em' }}>
            A small portfolio, written up <em>honestly</em>.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 32 }}>
          <div>
            <Placeholder label="Yorkshire Unicorn — hero" height={420} />
            <div style={{ marginTop: 16, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent-a)' }}>
              Featured · Hospitality · Skipton
            </div>
            <h3 style={{ fontFamily: edStyles.serif, fontSize: 32, fontWeight: 400, lineHeight: 1.1, margin: '6px 0 10px', letterSpacing: '-0.015em' }}>
              The Yorkshire Unicorn — <em style={{ color: 'var(--accent-a)' }}>62%</em> direct bookings, month one.
            </h3>
            <p style={{ fontSize: 14, color: edStyles.ink2, margin: 0, maxWidth: '60ch' }}>
              A new Skipton hospitality venue with no domain authority, going up against entrenched chains and OTAs. We built a site that converts on the first scroll.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {CASES.slice(1).map((c) => (
              <div key={c.slug} style={{ borderTop: `1px solid ${edStyles.rule}`, paddingTop: 18 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10.5, letterSpacing: '0.12em', textTransform: 'uppercase', color: edStyles.ink3 }}>
                  <span>{c.sector}</span><span>{c.year}</span>
                </div>
                <h4 style={{ fontFamily: edStyles.serif, fontSize: 22, fontWeight: 400, lineHeight: 1.18, margin: '6px 0 6px', letterSpacing: '-0.01em' }}>
                  {c.client} — <em style={{ color: 'var(--accent-a)' }}>{c.metric1.value}</em> {c.metric1.label.replace('of ','').replace(' / month',' a month')}.
                </h4>
                <a href="#" style={{ fontFamily: edStyles.serif, fontStyle: 'italic', fontSize: 14, color: edStyles.ink, textDecoration: 'none', borderBottom: '1px solid var(--accent-a)' }}>Read the case study →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials strip */}
      <section style={{ padding: '40px 56px', borderTop: `1px solid ${edStyles.rule}`, background: edStyles.paperTint }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} style={{ margin: 0 }}>
              <blockquote style={{ fontFamily: edStyles.serif, fontSize: 19, fontStyle: 'italic', lineHeight: 1.4, margin: 0, letterSpacing: '-0.005em' }}>
                <span style={{ color: 'var(--accent-a)' }}>“</span>{t.quote}<span style={{ color: 'var(--accent-a)' }}>”</span>
              </blockquote>
              <figcaption style={{ marginTop: 14, fontSize: 12, color: edStyles.ink2, letterSpacing: '0.04em' }}>
                <strong style={{ color: edStyles.ink, fontWeight: 600 }}>{t.name}</strong> — {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}

// ── SERVICES PAGE ────────────────────────────────────────────────────────────
function EdServices() {
  return (
    <>
      <section style={{ padding: '60px 56px 28px' }}>
        <div style={{
          fontFamily: edStyles.serif, fontSize: 11, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: 'var(--accent-a)', fontWeight: 600,
        }}>— Services & pricing</div>
        <h1 style={{
          fontFamily: edStyles.serif, fontWeight: 400, fontSize: 76,
          lineHeight: 1, letterSpacing: '-0.02em', margin: '14px 0 22px',
          maxWidth: '18ch',
        }}>
          Three services. <span style={{ fontStyle: 'italic' }}>No retainers</span> dressed up as anything else.
        </h1>
        <p style={{ fontFamily: edStyles.serif, fontSize: 19, lineHeight: 1.5, color: edStyles.ink2, margin: 0, maxWidth: '60ch' }}>
          Most studios pad their site with twelve services they don't actually deliver. Here are the three things I do — properly, in a Skipton barn office — and what each one costs you.
        </p>
      </section>

      {SERVICES.map((s, i) => (
        <section key={s.no} style={{ padding: '36px 56px', borderTop: `1px solid ${edStyles.rule}` }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 4fr 3fr', gap: 32, alignItems: 'start' }}>
            <div>
              <div style={{ fontFamily: edStyles.serif, fontSize: 56, fontStyle: 'italic', lineHeight: 1, color: 'var(--accent-a)' }}>{s.no}</div>
              <div style={{ fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: edStyles.ink3, marginTop: 12 }}>{s.tag}</div>
            </div>
            <div>
              <h2 style={{ fontFamily: edStyles.serif, fontSize: 40, fontWeight: 400, margin: 0, letterSpacing: '-0.015em', lineHeight: 1.05 }}>{s.title}</h2>
              <p style={{ fontFamily: edStyles.serif, fontSize: 19, lineHeight: 1.5, color: edStyles.ink2, margin: '14px 0 0', maxWidth: '50ch' }}>
                {s.short}
              </p>
              <a href="#" style={{ ...btnGhost, marginTop: 18, display: 'inline-block' }}>Read full scope →</a>
            </div>
            <div style={{ borderLeft: `1px solid ${edStyles.rule}`, paddingLeft: 24 }}>
              <div style={{ fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: edStyles.ink3, marginBottom: 10 }}>What's included</div>
              {s.bullets.map((b) => (
                <div key={b} style={{ fontFamily: edStyles.serif, fontSize: 16, fontStyle: 'italic', lineHeight: 1.6, color: edStyles.ink }}>
                  <span style={{ color: 'var(--accent-a)', marginRight: 8 }}>—</span>{b}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section style={{ padding: '48px 56px', borderTop: `1px solid ${edStyles.rule}` }}>
        <h2 style={{ fontFamily: edStyles.serif, fontSize: 40, fontWeight: 400, lineHeight: 1.05, margin: '0 0 22px', letterSpacing: '-0.015em' }}>
          A simple, <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>five-step</span> process.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, borderTop: `1px solid ${edStyles.rule}` }}>
          {[
            ['01', 'Free call', 'A 30-minute kettle-on chat.'],
            ['02', 'Discovery', 'Goals, audience, sitemap.'],
            ['03', 'Design', 'Figma drafts on a real laptop.'],
            ['04', 'Build', 'Hand-built WordPress.'],
            ['05', 'Launch', 'And then we keep going.'],
          ].map(([n, t, d], i, arr) => (
            <div key={n} style={{
              padding: '20px 16px 22px',
              borderRight: i < arr.length - 1 ? `1px solid ${edStyles.rule}` : 'none',
            }}>
              <div style={{ fontFamily: edStyles.serif, fontStyle: 'italic', fontSize: 18, color: 'var(--accent-a)' }}>{n}</div>
              <div style={{ fontFamily: edStyles.serif, fontSize: 22, fontWeight: 400, lineHeight: 1.1, margin: '6px 0 6px' }}>{t}</div>
              <div style={{ fontSize: 12.5, color: edStyles.ink2, lineHeight: 1.5 }}>{d}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

// ── BLOG / JOURNAL PAGE ──────────────────────────────────────────────────────
function EdBlog() {
  const [hot, ...rest] = BLOG_POSTS;
  return (
    <>
      <section style={{ padding: '60px 56px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'end' }}>
          <div>
            <div style={{
              fontFamily: edStyles.serif, fontSize: 11, letterSpacing: '0.16em',
              textTransform: 'uppercase', color: 'var(--accent-a)', fontWeight: 600,
            }}>— The Journal</div>
            <h1 style={{
              fontFamily: edStyles.serif, fontWeight: 400, fontSize: 88,
              lineHeight: 0.98, letterSpacing: '-0.025em', margin: '12px 0 0',
            }}>
              Notes on <span style={{ fontStyle: 'italic' }}>building</span>
              <br/>better small-business <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>websites</span>.
            </h1>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: edStyles.ink3 }}>Filter</div>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'flex-end', marginTop: 10, flexWrap: 'wrap' }}>
              {['All', 'Trends', 'Process', 'Tips', 'SEO'].map((t, i) => (
                <a key={t} href="#" style={{
                  fontFamily: edStyles.serif, fontStyle: 'italic', fontSize: 17,
                  color: i === 0 ? 'var(--accent-a)' : edStyles.ink,
                  textDecoration: 'none',
                  borderBottom: i === 0 ? '1px solid var(--accent-a)' : '1px solid transparent',
                  paddingBottom: 2,
                }}>{t}</a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section style={{ padding: '24px 56px 36px', borderTop: `1px solid ${edStyles.rule}`, marginTop: 18 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 40, alignItems: 'center' }}>
          <Placeholder label="Featured essay illustration" height={380} />
          <div>
            <div style={{ display: 'flex', gap: 14, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: edStyles.ink3 }}>
              <span style={{ color: 'var(--accent-a)' }}>● {hot.cat}</span>
              <span>{hot.date}</span>
              <span>{hot.read} read</span>
            </div>
            <h2 style={{ fontFamily: edStyles.serif, fontSize: 46, fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.02em', margin: '14px 0 14px' }}>
              {hot.title.includes('“') ? <>
                Why <em>“make it pop”</em><br/>is killing your small<br/>business website.
              </> : hot.title}
            </h2>
            <p style={{ fontFamily: edStyles.serif, fontSize: 18, lineHeight: 1.5, color: edStyles.ink2, margin: '0 0 18px', maxWidth: '46ch' }}>
              {hot.excerpt}
            </p>
            <a href="#" style={btnSolid}>Read the essay →</a>
          </div>
        </div>
      </section>

      {/* Archive */}
      <section style={{ padding: '12px 56px', borderTop: `1px solid ${edStyles.rule}` }}>
        <div style={{ fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: edStyles.ink3, padding: '20px 0 12px' }}>
          Archive · 27 essays
        </div>
        {rest.map((p) => (
          <a key={p.title} href="#" style={{
            display: 'grid', gridTemplateColumns: '110px 100px 1fr 110px',
            gap: 24, alignItems: 'baseline',
            padding: '18px 0', borderTop: `1px solid ${edStyles.ruleSoft}`,
            textDecoration: 'none', color: edStyles.ink,
          }}>
            <span style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent-a)' }}>● {p.cat}</span>
            <span style={{ fontSize: 12, color: edStyles.ink3, letterSpacing: '0.04em' }}>{p.date}</span>
            <h3 style={{ fontFamily: edStyles.serif, fontSize: 22, fontWeight: 400, margin: 0, letterSpacing: '-0.01em', lineHeight: 1.2 }}>
              {p.title}
            </h3>
            <span style={{ textAlign: 'right', fontSize: 12, color: edStyles.ink3 }}>{p.read} <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>→</span></span>
          </a>
        ))}
      </section>
    </>
  );
}

// ── CASE STUDY PAGE ──────────────────────────────────────────────────────────
function EdCase() {
  const c = CASES[0];
  return (
    <>
      <section style={{ padding: '60px 56px 24px' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent-a)', fontWeight: 600 }}>
          — Case Study · {c.year} · {c.sector}
        </div>
        <h1 style={{
          fontFamily: edStyles.serif, fontWeight: 400, fontSize: 78,
          lineHeight: 0.98, letterSpacing: '-0.022em', margin: '16px 0 0',
          maxWidth: '20ch',
        }}>
          {c.client} — <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>62% direct bookings</span> in month one.
        </h1>
        <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 32, alignItems: 'end' }}>
          <p style={{ fontFamily: edStyles.serif, fontSize: 19, lineHeight: 1.5, color: edStyles.ink2, margin: 0, maxWidth: '50ch' }}>
            A new Skipton hospitality venue had ten weeks to launch a site that could compete with hotels who'd had a decade on Booking.com. Here's how we built it.
          </p>
          {[c.metric1, c.metric2, c.metric3].map((m, i) => (
            <div key={i} style={{ borderLeft: `1px solid ${edStyles.rule}`, paddingLeft: 18 }}>
              <div style={{ fontFamily: edStyles.serif, fontSize: 32, fontStyle: 'italic', lineHeight: 1, color: 'var(--accent-a)' }}>{m.value}</div>
              <div style={{ fontSize: 11, color: edStyles.ink2, letterSpacing: '0.04em', marginTop: 8, textTransform: 'uppercase' }}>{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '12px 56px 36px' }}>
        <Placeholder label="Yorkshire Unicorn — homepage hero" height={520} />
      </section>

      {/* Sidebar / body editorial layout */}
      <section style={{ padding: '24px 56px', borderTop: `1px solid ${edStyles.rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: 40 }}>
          <aside>
            <div style={{ fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: edStyles.ink3, marginBottom: 12 }}>Project</div>
            {[
              ['Client', 'The Yorkshire Unicorn'],
              ['Sector', 'Independent hospitality'],
              ['Location', 'Skipton, North Yorkshire'],
              ['Scope', 'Brand, web, booking, copy'],
              ['Built in', 'WordPress + custom blocks'],
              ['Timeline', '10 weeks · Jan–Mar 2025'],
              ['Launched', '14 March 2025'],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, padding: '8px 0', borderTop: `1px solid ${edStyles.ruleSoft}` }}>
                <span style={{ fontSize: 11.5, color: edStyles.ink3, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{k}</span>
                <span style={{ fontFamily: edStyles.serif, fontStyle: 'italic', fontSize: 14, color: edStyles.ink }}>{v}</span>
              </div>
            ))}
          </aside>
          <div>
            <h2 style={{ fontFamily: edStyles.serif, fontSize: 34, fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.015em', margin: '0 0 14px' }}>
              <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>The brief.</span>&nbsp;
              Open in March. Be on page one of Google by April. Don't pay Booking.com a penny.
            </h2>
            <p style={{ fontFamily: edStyles.serif, fontSize: 18, lineHeight: 1.6, color: edStyles.ink2, margin: '0 0 20px', maxWidth: '60ch' }}>
              When Sarah took over the lease on a 17th-century inn off Skipton's high street, she had ten weeks, no booking system, and a domain her predecessor had let lapse. The previous site was a Wix template trapped on page four of Google.
            </p>
            <h3 style={{ fontFamily: edStyles.serif, fontSize: 24, fontWeight: 400, letterSpacing: '-0.01em', margin: '24px 0 10px' }}>
              <em style={{ color: 'var(--accent-a)' }}>The approach.</em>
            </h3>
            <p style={{ fontFamily: edStyles.serif, fontSize: 18, lineHeight: 1.6, color: edStyles.ink2, margin: 0, maxWidth: '60ch' }}>
              We started with the booking flow and worked backwards. Every page was designed to lead to a date picker in under three clicks, with rich local photography doing the emotional work. The whole site loads in 1.2 seconds on a Skipton 4G signal.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '12px 56px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <Placeholder label="Booking flow — desktop" height={320} />
          <Placeholder label="Mobile — rooms grid" height={320} />
        </div>
      </section>

      {/* Pull quote */}
      <section style={{ padding: '40px 56px', borderTop: `1px solid ${edStyles.rule}`, marginTop: 28 }}>
        <blockquote style={{
          fontFamily: edStyles.serif, fontStyle: 'italic',
          fontSize: 42, lineHeight: 1.15, letterSpacing: '-0.015em',
          margin: 0, maxWidth: '24ch',
        }}>
          <span style={{ color: 'var(--accent-a)' }}>“</span>
          We were full every weekend by Easter. The site paid for itself in <em style={{ fontStyle: 'normal', color: 'var(--accent-a)' }}>five weeks</em>.
          <span style={{ color: 'var(--accent-a)' }}>”</span>
        </blockquote>
        <div style={{ marginTop: 18, fontSize: 13, color: edStyles.ink2 }}>
          <strong style={{ color: edStyles.ink }}>Sarah Whitfield</strong> · Owner, The Yorkshire Unicorn
        </div>
      </section>

      {/* Next */}
      <section style={{ padding: '32px 56px', borderTop: `1px solid ${edStyles.rule}`, marginTop: 12, background: edStyles.paperTint }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div>
            <div style={{ fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: edStyles.ink3 }}>Next case study →</div>
            <h3 style={{ fontFamily: edStyles.serif, fontSize: 30, fontWeight: 400, margin: '8px 0 0', letterSpacing: '-0.015em' }}>
              Maidens &amp; Ravens — <em style={{ color: 'var(--accent-a)' }}>30 reviews</em> in 90 days.
            </h3>
          </div>
          <a href="#" style={btnSolid}>Read next →</a>
        </div>
      </section>
    </>
  );
}

function EditorialDirection({ page, setPage, heroVariant }) {
  return (
    <EdShell page={page} setPage={setPage}>
      {page === 'home' && <EdHome heroVariant={heroVariant} />}
      {page === 'services' && <EdServices />}
      {page === 'blog' && <EdBlog />}
      {page === 'case' && <EdCase />}
    </EdShell>
  );
}

window.EditorialDirection = EditorialDirection;
