// refined.jsx — full-page editorial prototype
// Paper Editorial base · Press grid blog · Workshop dark sections.
// Single-file app with internal navigation between Home / Services / Blog / Case.

const { useState, useEffect, useRef } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "background": "stone",
  "accent": "claret",
  "heroVariant": "A"
}/*EDITMODE-END*/;

// ─────────────────────────────────────────────────────────────────────────────
// Shell — top nav + page render + dark CTA + dark footer
// ─────────────────────────────────────────────────────────────────────────────

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [page, setPage] = useState('home');

  // Apply tweaks to document root
  useEffect(() => {
    document.documentElement.dataset.bg = t.background;
    document.documentElement.dataset.accent = t.accent;
  }, [t.background, t.accent]);

  // Reset scroll on page change
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }); }, [page]);

  return (
    <>
      <TopNav page={page} setPage={setPage} />
      <main>
        {page === 'home'     && <HomePage heroVariant={t.heroVariant} setPage={setPage} />}
        {page === 'services' && <ServicesPage setPage={setPage} />}
        {page === 'blog'     && <BlogPage setPage={setPage} />}
        {page === 'case'     && <CasePage setPage={setPage} />}
      </main>
      <DarkCTA />
      <Footer setPage={setPage} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Background mood" />
        <TweakRadio
          label="Paper"
          value={t.background}
          options={[
            { value: 'stone',     label: 'Stone' },
            { value: 'cool',      label: 'Cool' },
            { value: 'white',     label: 'White' },
            { value: 'newsprint', label: 'Newsprint' },
          ]}
          onChange={(v) => setTweak('background', v)}
        />
        <TweakSection label="Accent dominance" />
        <TweakRadio
          label="Lead colour"
          value={t.accent}
          options={[
            { value: 'claret', label: 'Claret' },
            { value: 'blue',   label: 'Blue' },
          ]}
          onChange={(v) => setTweak('accent', v)}
        />
        <TweakSection label="Home hero layout" />
        <TweakRadio
          label="Variant"
          value={t.heroVariant}
          options={[
            { value: 'A', label: 'A' },
            { value: 'B', label: 'B' },
            { value: 'C', label: 'C' },
          ]}
          onChange={(v) => setTweak('heroVariant', v)}
        />
        <TweakSection label="Jump to page" />
        <TweakSelect
          label="Page"
          value={page}
          options={[
            { value: 'home',     label: 'Home' },
            { value: 'services', label: 'Services' },
            { value: 'blog',     label: 'Blog' },
            { value: 'case',     label: 'Case study' },
          ]}
          onChange={(v) => setPage(v)}
        />
      </TweaksPanel>
    </>
  );
}

function TopNav({ page, setPage }) {
  const items = [
    ['home',     'Home'],
    ['services', 'Services'],
    ['case',     'Work'],
    ['blog',     'Journal'],
  ];
  return (
    <header
      className="gutter"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        alignItems: 'baseline',
        paddingTop: 28, paddingBottom: 22,
        borderBottom: '1px solid var(--rule)',
        background: 'var(--paper)',
        position: 'sticky', top: 0, zIndex: 50,
      }}
    >
      <div onClick={() => setPage('home')} style={{ cursor: 'pointer' }}>
        <div className="serif" style={{ fontSize: 24, fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1 }}>
          BVS<span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>Web</span>Design
        </div>
        <div className="label" style={{ marginTop: 6 }}>
          Skipton · since 2018 · WordPress
        </div>
      </div>

      <nav style={{ display: 'flex', gap: 28, alignItems: 'baseline' }}>
        {items.map(([id, label]) => {
          const active = page === id;
          return (
            <a key={id} href="#"
              onClick={(e) => { e.preventDefault(); setPage(id); }}
              className="serif"
              style={{
                fontSize: 17, fontStyle: 'italic',
                color: active ? 'var(--accent-a)' : 'var(--ink)',
                textDecoration: 'none',
                borderBottom: '1px solid ' + (active ? 'var(--accent-a)' : 'transparent'),
                paddingBottom: 2, transition: 'all .15s',
              }}
              onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = 'var(--accent-a)'; }}
              onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = 'var(--ink)'; }}
            >{label}</a>
          );
        })}
        <a href="#" onClick={(e) => { e.preventDefault(); setPage('home'); }}
          className="btn btn--solid" style={{ marginLeft: 14 }}>
          Start a project →
        </a>
      </nav>
    </header>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HERO LAYOUTS
// ─────────────────────────────────────────────────────────────────────────────
function HeroA({ setPage }) {
  return (
    <section className="gutter" style={{ padding: '76px 56px 40px', position: 'relative' }}>
      <div style={{
        position: 'absolute', top: 84, right: 56, textAlign: 'right',
        lineHeight: 1.7,
      }} className="label">
        Vol. 8 · Issue 02<br/>Skipton — May 2026
      </div>
      <div className="label label--accent">— WordPress websites for Yorkshire</div>
      <h1 className="serif" style={{
        fontWeight: 400, fontSize: 104, lineHeight: 0.94, letterSpacing: '-0.025em',
        margin: '20px 0 0', maxWidth: '14ch',
      }}>
        Websites that <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>earn</span> their keep,
        not just <span style={{ fontStyle: 'italic' }}>sit there</span> looking nice.
      </h1>
      <div style={{
        marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56,
        alignItems: 'end',
      }}>
        <p className="serif" style={{ fontSize: 20, lineHeight: 1.5, color: 'var(--ink-2)', maxWidth: '40ch' }}>
          For Yorkshire businesses tired of a “nice” website that does nothing.
          I design and build WordPress sites that turn visitors into <em style={{ color: 'var(--ink)' }}>real enquiries</em> — and stay that way long after launch.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
          <a href="#" className="btn btn--solid" onClick={(e) => { e.preventDefault(); setPage('case'); }}>
            Book a free 30-min call →
          </a>
          <a href="#" className="underlink" onClick={(e) => { e.preventDefault(); setPage('case'); }}>
            See selected work
          </a>
          <div className="label" style={{ marginTop: 10, letterSpacing: '0.04em' }}>
            Currently booking for <strong style={{ color: 'var(--ink)' }}>September 2026</strong>.
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroB({ setPage }) {
  return (
    <section className="gutter" style={{ padding: '56px 56px 32px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '5fr 6fr', gap: 48, alignItems: 'end' }}>
        <div className="ph" style={{ height: 480 }}>⌐ Skipton high-street photo</div>
        <div>
          <div className="label label--accent">— A small studio. A short list of clients.</div>
          <h1 className="serif" style={{
            fontWeight: 400, fontSize: 84, lineHeight: 0.98, letterSpacing: '-0.02em',
            margin: '14px 0 24px',
          }}>
            Plainly-spoken
            <br/><span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>websites,</span>
            <br/>quietly remarkable
            <br/><span style={{ fontStyle: 'italic' }}>results.</span>
          </h1>
          <p className="serif" style={{ fontSize: 18, lineHeight: 1.5, color: 'var(--ink-2)', margin: '0 0 24px' }}>
            BVSWebDesign is a one-person WordPress studio in Skipton. I work with a handful of Yorkshire businesses a year — bridal, hospitality, dental, trades — on sites that actually pull their weight.
          </p>
          <a href="#" className="btn btn--solid" onClick={(e) => { e.preventDefault(); setPage('services'); }}>
            Book a discovery call →
          </a>
        </div>
      </div>
    </section>
  );
}

function HeroC({ setPage }) {
  const stats = [
    ['38', 'websites shipped'],
    ['96%', 'avg PageSpeed'],
    ['£0', 'recurring agency fees'],
    ['1', 'designer · me'],
  ];
  return (
    <section className="gutter" style={{ padding: '64px 56px 32px' }}>
      <div className="label label--accent">— By the numbers</div>
      <h1 className="serif" style={{
        fontWeight: 400, fontSize: 88, lineHeight: 0.98, letterSpacing: '-0.022em',
        margin: '12px 0 28px', maxWidth: '18ch',
      }}>
        <span style={{ fontStyle: 'italic' }}>Six</span> years.&nbsp;
        <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>Thirty-eight</span> small businesses.&nbsp;
        <span style={{ fontStyle: 'italic' }}>One</span> stubborn idea: a website should pay for itself.
      </h1>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)',
      }}>
        {stats.map(([v, l], i, arr) => (
          <div key={l} style={{
            padding: '26px 22px',
            borderRight: i < arr.length - 1 ? '1px solid var(--rule)' : 'none',
          }}>
            <div className="serif" style={{ fontSize: 60, fontStyle: 'italic', lineHeight: 1, color: 'var(--accent-a)' }}>{v}</div>
            <div className="label" style={{ marginTop: 10 }}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 28, display: 'flex', gap: 16, alignItems: 'center' }}>
        <a href="#" className="btn btn--solid" onClick={(e) => { e.preventDefault(); setPage('case'); }}>Start a project →</a>
        <span style={{ fontSize: 14, color: 'var(--ink-2)' }}>or read the journal below ↓</span>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HOME
// ─────────────────────────────────────────────────────────────────────────────
function HomePage({ heroVariant, setPage }) {
  const Hero = heroVariant === 'B' ? HeroB : heroVariant === 'C' ? HeroC : HeroA;
  return (
    <>
      <Hero setPage={setPage} />

      {/* Services teaser */}
      <section className="gutter" style={{ padding: '48px 56px', borderTop: '1px solid var(--rule)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: 32, alignItems: 'baseline' }}>
          <div className="label">§ I. Services</div>
          <h2 className="serif" style={{ fontSize: 40, fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.015em' }}>
            Three ways we can work together, depending on whether you need a <em>new site</em>, a <em>better one</em>, or <em>someone to look after the one you've got</em>.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', marginTop: 40 }}>
          {SERVICES.map((s, i) => (
            <div key={s.no} style={{
              padding: '24px 28px 24px 0',
              borderLeft: i === 0 ? 'none' : '1px solid var(--rule)',
              paddingLeft: i === 0 ? 0 : 28,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span className="serif" style={{ fontStyle: 'italic', fontSize: 24, color: 'var(--accent-a)' }}>{s.no}</span>
                <span className="label">{s.tag}</span>
              </div>
              <h3 className="serif" style={{ fontSize: 28, fontWeight: 400, margin: '10px 0 10px', letterSpacing: '-0.01em' }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.6 }}>{s.short}</p>
              <a href="#" className="underlink" style={{ fontSize: 14, marginTop: 18, display: 'inline-block' }}
                onClick={(e) => { e.preventDefault(); setPage('services'); }}>
                Read more
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Featured work — magazine style */}
      <section className="gutter" style={{ padding: '52px 56px', borderTop: '1px solid var(--rule)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: 32, alignItems: 'baseline', marginBottom: 32 }}>
          <div className="label">§ II. Selected work</div>
          <h2 className="serif" style={{ fontSize: 40, fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.015em' }}>
            A small portfolio, written up <em>honestly</em>.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 36 }}>
          <a href="#" onClick={(e) => { e.preventDefault(); setPage('case'); }} style={{ textDecoration: 'none', color: 'var(--ink)' }}>
            <div className="ph" style={{ height: 460 }}>⌐ Yorkshire Unicorn — hero</div>
            <div className="label label--accent" style={{ marginTop: 18 }}>
              Featured · Hospitality · Skipton
            </div>
            <h3 className="serif" style={{ fontSize: 34, fontWeight: 400, lineHeight: 1.1, margin: '8px 0 10px', letterSpacing: '-0.015em' }}>
              The Yorkshire Unicorn — <em style={{ color: 'var(--accent-a)' }}>62%</em> direct bookings, month one.
            </h3>
            <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.6, maxWidth: '60ch' }}>
              A new Skipton venue with no domain authority, going up against entrenched chains and OTAs. We built a site that converts on the first scroll.
            </p>
          </a>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {CASES.slice(1).map((c) => (
              <a key={c.slug} href="#" onClick={(e) => { e.preventDefault(); setPage('case'); }}
                style={{ borderTop: '1px solid var(--rule)', paddingTop: 20, textDecoration: 'none', color: 'var(--ink)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }} className="label">
                  <span>{c.sector}</span><span>{c.year}</span>
                </div>
                <h4 className="serif" style={{ fontSize: 24, fontWeight: 400, lineHeight: 1.18, margin: '8px 0 8px', letterSpacing: '-0.01em' }}>
                  {c.client} — <em style={{ color: 'var(--accent-a)' }}>{c.metric1.value}</em> {c.metric1.label.replace('of ','').replace(' / month', ' a month')}.
                </h4>
                <span className="underlink" style={{ fontSize: 14 }}>Read the case study →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Dark testimonials slab (Workshop influence) */}
      <section className="dark gutter" style={{ padding: '64px 56px' }}>
        <div className="label label--accent">— Word on the street</div>
        <h2 className="serif" style={{
          fontWeight: 400, fontSize: 56, lineHeight: 1.05,
          letterSpacing: '-0.02em', margin: '14px 0 36px', maxWidth: '22ch',
        }}>
          Three clients who paid me to make their <em style={{ color: 'var(--accent-a)' }}>previous</em> web person look bad.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 36 }}>
          {TESTIMONIALS.map((t, i) => (
            <figure key={t.name} style={{
              margin: 0, paddingTop: 22,
              borderTop: '1px solid rgba(255,255,255,0.18)',
            }}>
              <div className="label" style={{ marginBottom: 16, color: 'var(--accent-a)' }}>{String(i + 1).padStart(2, '0')} · ★★★★★</div>
              <blockquote className="serif" style={{ fontSize: 20, fontStyle: 'italic', lineHeight: 1.4, letterSpacing: '-0.005em' }}>
                <span style={{ color: 'var(--accent-a)' }}>“</span>{t.quote}<span style={{ color: 'var(--accent-a)' }}>”</span>
              </blockquote>
              <figcaption style={{ marginTop: 18, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>
                <strong style={{ color: 'var(--dark-paper)', fontWeight: 600 }}>{t.name}</strong> — {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Recent journal teaser */}
      <section className="gutter" style={{ padding: '52px 56px', borderTop: '1px solid var(--rule)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 32 }}>
          <div>
            <div className="label">§ III. From the journal</div>
            <h2 className="serif" style={{ fontSize: 40, fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.015em', marginTop: 8 }}>
              Recent <em>field notes</em>.
            </h2>
          </div>
          <a href="#" className="btn btn--ghost" onClick={(e) => { e.preventDefault(); setPage('blog'); }}>
            All 27 essays →
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {BLOG_POSTS.slice(0, 3).map((p, i, arr) => (
            <a key={p.title} href="#" onClick={(e) => { e.preventDefault(); setPage('blog'); }}
              style={{
                textDecoration: 'none', color: 'var(--ink)',
                padding: i === 0 ? '0 28px 0 0' : '0 28px',
                borderLeft: i === 0 ? 'none' : '1px solid var(--rule)',
              }}>
              <div style={{ display: 'flex', gap: 12 }} className="label">
                <span style={{ color: 'var(--accent-a)' }}>● {p.cat}</span>
                <span>{p.date}</span>
              </div>
              <h3 className="serif" style={{ fontSize: 22, fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.01em', margin: '12px 0 8px' }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.55 }}>{p.excerpt}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────────────────────────────────────
function ServicesPage({ setPage }) {
  return (
    <>
      <section className="gutter" style={{ padding: '64px 56px 32px' }}>
        <div className="label label--accent">— Services &amp; pricing</div>
        <h1 className="serif" style={{
          fontWeight: 400, fontSize: 82, lineHeight: 1, letterSpacing: '-0.02em',
          margin: '14px 0 22px', maxWidth: '18ch',
        }}>
          Three services. <span style={{ fontStyle: 'italic' }}>No retainers</span> dressed up as anything else.
        </h1>
        <p className="serif" style={{ fontSize: 19, lineHeight: 1.5, color: 'var(--ink-2)', maxWidth: '60ch' }}>
          Most studios pad their site with twelve services they don't actually deliver. Here are the three things I do — properly, in a Skipton barn office — and what each one costs you.
        </p>
      </section>

      {SERVICES.map((s) => (
        <section key={s.no} className="gutter" style={{ padding: '40px 56px', borderTop: '1px solid var(--rule)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 4fr 3fr', gap: 36, alignItems: 'start' }}>
            <div>
              <div className="serif" style={{ fontSize: 60, fontStyle: 'italic', lineHeight: 1, color: 'var(--accent-a)' }}>{s.no}</div>
              <div className="label" style={{ marginTop: 14 }}>{s.tag}</div>
            </div>
            <div>
              <h2 className="serif" style={{ fontSize: 44, fontWeight: 400, letterSpacing: '-0.015em', lineHeight: 1.05 }}>{s.title}</h2>
              <p className="serif" style={{ fontSize: 19, lineHeight: 1.5, color: 'var(--ink-2)', margin: '16px 0 0', maxWidth: '50ch' }}>
                {s.short}
              </p>
              <a href="#" className="underlink" style={{ marginTop: 20, display: 'inline-block' }}>Read full scope →</a>
            </div>
            <div style={{ borderLeft: '1px solid var(--rule)', paddingLeft: 28 }}>
              <div className="label" style={{ marginBottom: 12 }}>What's included</div>
              {s.bullets.map((b) => (
                <div key={b} className="serif" style={{ fontSize: 17, fontStyle: 'italic', lineHeight: 1.7, color: 'var(--ink)' }}>
                  <span style={{ color: 'var(--accent-a)', marginRight: 8 }}>—</span>{b}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Process strip */}
      <section className="gutter" style={{ padding: '52px 56px', borderTop: '1px solid var(--rule)' }}>
        <h2 className="serif" style={{ fontSize: 44, fontWeight: 400, lineHeight: 1.05, margin: '0 0 24px', letterSpacing: '-0.015em' }}>
          A simple, <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>five-step</span> process.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', borderTop: '1px solid var(--rule)' }}>
          {[
            ['01', 'Free call', 'A 30-minute kettle-on chat.'],
            ['02', 'Discovery', 'Goals, audience, sitemap.'],
            ['03', 'Design', 'Figma drafts on a real laptop.'],
            ['04', 'Build', 'Hand-built WordPress.'],
            ['05', 'Launch', 'And then we keep going.'],
          ].map(([n, t, d], i, arr) => (
            <div key={n} style={{
              padding: '22px 18px 24px',
              borderRight: i < arr.length - 1 ? '1px solid var(--rule)' : 'none',
            }}>
              <div className="serif" style={{ fontStyle: 'italic', fontSize: 20, color: 'var(--accent-a)' }}>{n}</div>
              <div className="serif" style={{ fontSize: 24, fontWeight: 400, lineHeight: 1.1, margin: '8px 0 8px' }}>{t}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.5 }}>{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What you won't pay for — dark slab */}
      <section className="dark gutter" style={{ padding: '52px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 48 }}>
          <div>
            <div className="label label--accent">— The fine print</div>
            <h2 className="serif" style={{
              fontWeight: 400, fontSize: 48, lineHeight: 1.02,
              letterSpacing: '-0.02em', margin: '14px 0 0',
            }}>
              Things you <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>won't</span> pay extra for.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
            {[
              'Setting up your domain',
              'GDPR cookie banner',
              'Privacy & T&Cs templates',
              'Basic SEO meta + sitemap',
              'Training video for editing',
              '30 days of bug-fixes after launch',
            ].map((x, i) => (
              <div key={x} className="serif" style={{
                fontSize: 17, fontStyle: 'italic',
                padding: '12px 16px 12px 0',
                borderTop: i < 2 ? '1px solid rgba(255,255,255,0.18)' : 'none',
                borderBottom: '1px solid rgba(255,255,255,0.18)',
                display: 'flex', gap: 12,
              }}>
                <span style={{ color: 'var(--accent-a)', fontStyle: 'normal' }}>✓</span>{x}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// BLOG — uses the Yorkshire Press 2-column grid
// ─────────────────────────────────────────────────────────────────────────────
function BlogPage({ setPage }) {
  const [hot, ...rest] = BLOG_POSTS;
  return (
    <>
      <section className="gutter" style={{ padding: '64px 56px 28px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', alignItems: 'end', gap: 32 }}>
          <div>
            <div className="label label--accent">— The Journal</div>
            <h1 className="serif" style={{
              fontWeight: 400, fontSize: 92, lineHeight: 0.98,
              letterSpacing: '-0.025em', margin: '12px 0 0',
            }}>
              Notes on <span style={{ fontStyle: 'italic' }}>building</span><br/>
              better small-business <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>websites</span>.
            </h1>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="label">Issue</div>
            <div className="serif" style={{ fontSize: 72, fontStyle: 'italic', lineHeight: 1, color: 'var(--accent-a)' }}>№ 27</div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section style={{
        display: 'flex', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)',
        marginTop: 8,
      }}>
        {[['All', 27], ['Trends', 8], ['Process', 6], ['Tips', 9], ['SEO', 4]].map(([t, n], i, arr) => (
          <a key={t} href="#" onClick={(e) => e.preventDefault()} className="mono" style={{
            padding: '14px 22px',
            fontSize: 11.5, letterSpacing: '0.08em', fontWeight: 500,
            textTransform: 'uppercase',
            color: i === 0 ? 'var(--paper)' : 'var(--ink)',
            background: i === 0 ? 'var(--ink)' : 'transparent',
            textDecoration: 'none',
            borderRight: i < arr.length - 1 ? '1px solid var(--rule)' : 'none',
          }}>
            {t} <span style={{ opacity: 0.6, marginLeft: 4 }}>{n}</span>
          </a>
        ))}
        <div style={{ flex: 1 }}/>
        <a href="#" className="mono" style={{
          padding: '14px 22px', fontSize: 11.5, letterSpacing: '0.08em',
          textTransform: 'uppercase', fontWeight: 500, color: 'var(--ink)', textDecoration: 'none',
          borderLeft: '1px solid var(--rule)',
        }}>Subscribe ↗</a>
      </section>

      {/* Featured */}
      <section className="gutter" style={{ padding: '36px 56px', borderBottom: '1px solid var(--rule)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 44, alignItems: 'center' }}>
          <div className="ph" style={{ height: 420, position: 'relative' }}>
            ⌐ Lead essay illustration
            <div className="mono" style={{
              position: 'absolute', top: 16, left: 16,
              background: 'var(--accent-a)', color: 'var(--dark-paper)',
              fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '6px 10px', fontWeight: 600,
            }}>Lead essay</div>
          </div>
          <div>
            <div style={{ display: 'flex', gap: 14 }} className="label">
              <span style={{ color: 'var(--accent-a)' }}>● {hot.cat}</span>
              <span>{hot.date}</span>
              <span>{hot.read} read</span>
            </div>
            <h2 className="serif" style={{
              fontSize: 50, fontWeight: 400, lineHeight: 1.04, letterSpacing: '-0.022em',
              margin: '14px 0 18px',
            }}>
              Why <em>“make it pop”</em><br/>is killing your<br/>small business website.
            </h2>
            <p className="serif" style={{ fontSize: 18, lineHeight: 1.5, color: 'var(--ink-2)', margin: '0 0 20px', maxWidth: '46ch' }}>
              {hot.excerpt}
            </p>
            <a href="#" className="btn btn--solid">Read the essay →</a>
          </div>
        </div>
      </section>

      {/* 2-column grid (Press influence) */}
      <section style={{ borderBottom: '1px solid var(--rule)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
          {rest.map((p, i) => (
            <a key={p.title} href="#" onClick={(e) => e.preventDefault()} style={{
              display: 'block',
              padding: '26px 28px',
              borderRight: i % 2 === 0 ? '1px solid var(--rule)' : 'none',
              borderTop: i > 1 ? '1px solid var(--rule)' : 'none',
              textDecoration: 'none', color: 'var(--ink)',
              transition: 'background .15s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'var(--paper-2)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <div className="label" style={{ display: 'flex', gap: 14 }}>
                <span style={{ color: 'var(--accent-a)' }}>● {p.cat}</span>
                <span>{p.date}</span>
                <span style={{ marginLeft: 'auto' }}>{p.read} ↗</span>
              </div>
              <h3 className="serif" style={{
                fontSize: 28, fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.015em',
                margin: '14px 0 10px',
              }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.6, margin: 0 }}>{p.excerpt}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Newsletter sign-up — dark slab */}
      <section className="dark gutter" style={{ padding: '52px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <div className="label label--accent">— Once a month</div>
            <h2 className="serif" style={{
              fontWeight: 400, fontSize: 48, lineHeight: 1.05, letterSpacing: '-0.02em',
              margin: '14px 0 12px',
            }}>
              One <em style={{ color: 'var(--accent-a)' }}>useful</em> email a month. Nothing else.
            </h2>
            <p className="serif" style={{ fontSize: 17, lineHeight: 1.5, color: 'rgba(255,255,255,0.7)', maxWidth: '44ch' }}>
              The best essay of the month, one client lesson, and one tool I've actually paid money for and kept. No popups, no funnels.
            </p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} style={{
            display: 'flex', gap: 8, borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: 12,
          }}>
            <input type="email" placeholder="your@email.com" style={{
              flex: 1, background: 'transparent', border: 'none', outline: 'none',
              fontFamily: 'Newsreader', fontStyle: 'italic', fontSize: 24,
              color: 'var(--dark-paper)', padding: '8px 0',
            }}/>
            <button type="submit" className="btn btn--accent">Subscribe →</button>
          </form>
        </div>
      </section>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CASE STUDY
// ─────────────────────────────────────────────────────────────────────────────
function CasePage({ setPage }) {
  const c = CASES[0];
  return (
    <>
      <section className="gutter" style={{ padding: '64px 56px 28px' }}>
        <div className="label label--accent">— Case Study · {c.year} · {c.sector}</div>
        <h1 className="serif" style={{
          fontWeight: 400, fontSize: 82, lineHeight: 0.98, letterSpacing: '-0.022em',
          margin: '16px 0 0', maxWidth: '20ch',
        }}>
          {c.client} — <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>62% direct bookings</span> in month one.
        </h1>
        <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 36, alignItems: 'end' }}>
          <p className="serif" style={{ fontSize: 19, lineHeight: 1.5, color: 'var(--ink-2)', maxWidth: '50ch' }}>
            A new Skipton hospitality venue had ten weeks to launch a site that could compete with hotels who'd had a decade on Booking.com. Here's how we built it.
          </p>
          {[c.metric1, c.metric2, c.metric3].map((m, i) => (
            <div key={i} style={{ borderLeft: '1px solid var(--rule)', paddingLeft: 20 }}>
              <div className="serif" style={{ fontSize: 34, fontStyle: 'italic', lineHeight: 1, color: 'var(--accent-a)' }}>{m.value}</div>
              <div className="label" style={{ marginTop: 8 }}>{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="gutter" style={{ padding: '12px 56px 40px' }}>
        <div className="ph" style={{ height: 540 }}>⌐ Yorkshire Unicorn — homepage hero</div>
      </section>

      {/* Body */}
      <section className="gutter" style={{ padding: '32px 56px', borderTop: '1px solid var(--rule)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: 48 }}>
          <aside>
            <div className="label" style={{ marginBottom: 14 }}>Project</div>
            {[
              ['Client', 'The Yorkshire Unicorn'],
              ['Sector', 'Independent hospitality'],
              ['Location', 'Skipton, North Yorkshire'],
              ['Scope', 'Brand, web, booking, copy'],
              ['Built in', 'WordPress + custom blocks'],
              ['Timeline', '10 weeks · Jan–Mar 2025'],
              ['Launched', '14 March 2025'],
            ].map(([k, v]) => (
              <div key={k} style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8,
                padding: '10px 0', borderTop: '1px solid var(--rule-soft)',
              }}>
                <span className="label">{k}</span>
                <span className="serif" style={{ fontStyle: 'italic', fontSize: 15 }}>{v}</span>
              </div>
            ))}
          </aside>
          <div>
            <h2 className="serif" style={{ fontSize: 36, fontWeight: 400, lineHeight: 1.12, letterSpacing: '-0.015em', margin: '0 0 16px' }}>
              <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>The brief.</span>&nbsp;
              Open in March. Be on page one of Google by April. Don't pay Booking.com a penny.
            </h2>
            <p className="serif" style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--ink-2)', margin: '0 0 24px', maxWidth: '60ch' }}>
              When Sarah took over the lease on a 17th-century inn off Skipton's high street, she had ten weeks, no booking system, and a domain her predecessor had let lapse. The previous site was a Wix template trapped on page four of Google.
            </p>
            <h3 className="serif" style={{ fontSize: 26, fontWeight: 400, letterSpacing: '-0.01em', margin: '28px 0 12px' }}>
              <em style={{ color: 'var(--accent-a)' }}>The approach.</em>
            </h3>
            <p className="serif" style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0, maxWidth: '60ch' }}>
              We started with the booking flow and worked backwards. Every page was designed to lead to a date picker in under three clicks, with rich local photography doing the emotional work. The whole site loads in 1.2 seconds on a Skipton 4G signal.
            </p>
          </div>
        </div>
      </section>

      <section className="gutter" style={{ padding: '16px 56px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div className="ph" style={{ height: 340 }}>⌐ Booking flow — desktop</div>
          <div className="ph" style={{ height: 340 }}>⌐ Mobile — rooms grid</div>
        </div>
      </section>

      {/* Big pull quote — dark slab (Workshop influence) */}
      <section className="dark gutter" style={{ padding: '64px 56px', marginTop: 48 }}>
        <div className="label label--accent">— Word from the client</div>
        <blockquote className="serif" style={{
          fontStyle: 'italic', fontSize: 56, lineHeight: 1.1, letterSpacing: '-0.018em',
          margin: '20px 0 0', maxWidth: '24ch',
        }}>
          <span style={{ color: 'var(--accent-a)' }}>“</span>
          We were full every weekend by Easter. The site paid for itself in <em style={{ fontStyle: 'normal', color: 'var(--accent-a)' }}>five weeks</em>.
          <span style={{ color: 'var(--accent-a)' }}>”</span>
        </blockquote>
        <div style={{ marginTop: 24, fontSize: 14, color: 'rgba(255,255,255,0.65)' }}>
          <strong style={{ color: 'var(--dark-paper)' }}>Sarah Whitfield</strong> · Owner, The Yorkshire Unicorn
        </div>
      </section>

      {/* Results detail */}
      <section className="gutter" style={{ padding: '52px 56px', borderTop: '1px solid var(--rule)' }}>
        <div className="label label--accent">— Results · 12 months</div>
        <h2 className="serif" style={{ fontSize: 44, fontWeight: 400, letterSpacing: '-0.015em', lineHeight: 1.05, margin: '14px 0 36px' }}>
          The numbers, twelve months on.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid var(--rule)' }}>
          {[
            ['£186K', 'in direct bookings, year one'],
            ['62%', 'direct (vs 8% industry avg)'],
            ['1.2s', 'time-to-interactive · mobile'],
            ['4.9★', '38 Google reviews · 92% 5-star'],
          ].map(([v, l], i, arr) => (
            <div key={l} style={{
              padding: '24px 22px',
              borderRight: i < arr.length - 1 ? '1px solid var(--rule)' : 'none',
            }}>
              <div className="serif" style={{ fontSize: 50, fontStyle: 'italic', lineHeight: 1, color: 'var(--accent-a)' }}>{v}</div>
              <div className="label" style={{ marginTop: 10 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Next case */}
      <section className="gutter" style={{
        padding: '36px 56px', borderTop: '1px solid var(--rule)',
        background: 'var(--paper-2)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      }}>
        <div>
          <div className="label">Next case study →</div>
          <h3 className="serif" style={{ fontSize: 32, fontWeight: 400, margin: '8px 0 0', letterSpacing: '-0.015em' }}>
            Maidens &amp; Ravens — <em style={{ color: 'var(--accent-a)' }}>30 reviews</em> in 90 days.
          </h3>
        </div>
        <a href="#" className="btn btn--solid" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0 }); }}>
          Read next →
        </a>
      </section>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Big dark CTA (above footer) — Workshop influence
// ─────────────────────────────────────────────────────────────────────────────
function DarkCTA() {
  return (
    <section className="dark gutter" style={{ padding: '88px 56px 32px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="label label--accent">— Currently booking September 2026 · 2 slots left</div>
      <h2 className="serif" style={{
        fontWeight: 400, fontSize: 112, lineHeight: 0.92, letterSpacing: '-0.03em',
        margin: '20px 0 32px', maxWidth: '14ch',
      }}>
        Got an idea <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>worth</span> building?
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 56, alignItems: 'end' }}>
        <p className="serif" style={{ fontSize: 22, lineHeight: 1.5, color: 'rgba(255,255,255,0.75)', maxWidth: '52ch' }}>
          One call. No deck. No “discovery questionnaire”. Just tell me what's broken, what's working, and where you want to be by Christmas — and we'll figure out the rest from there.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
          <a href="#" className="btn btn--accent">Book a 30-min call →</a>
          <a href="mailto:ben@bvswebdesign.co.uk" className="btn btn--ghost-dark">ben@bvswebdesign.co.uk</a>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Footer — also dark, continues the slab below the CTA
// ─────────────────────────────────────────────────────────────────────────────
function Footer({ setPage }) {
  return (
    <footer className="dark gutter" style={{
      padding: '36px 56px 16px',
      borderTop: '1px solid rgba(255,255,255,0.12)',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 36, alignItems: 'start' }}>
        <div onClick={() => setPage('home')} style={{ cursor: 'pointer' }}>
          <div className="serif" style={{ fontSize: 28, fontWeight: 500, letterSpacing: '-0.01em' }}>
            BVS<span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>Web</span>Design
          </div>
          <p className="serif" style={{ fontSize: 15, fontStyle: 'italic', marginTop: 10, color: 'rgba(255,255,255,0.6)', maxWidth: '32ch' }}>
            A one-person WordPress studio on the edge of the Dales.
          </p>
        </div>
        {[
          ['Navigate', [['Home', 'home'], ['Services', 'services'], ['Work', 'case'], ['Journal', 'blog']]],
          ['Services', [['Website Design', 'services'], ['Care plans', 'services'], ['Growth plans', 'services']]],
          ['Elsewhere', [['Are.na', null], ['LinkedIn', null], ['Read.cv', null], ['Newsletter', 'blog']]],
        ].map(([h, items]) => (
          <div key={h}>
            <div className="label" style={{ marginBottom: 12, color: 'rgba(255,255,255,0.5)' }}>{h}</div>
            {items.map(([x, target]) => (
              <a key={x} href="#" onClick={(e) => { e.preventDefault(); if (target) setPage(target); }}
                className="serif" style={{
                  display: 'block', fontSize: 16, fontStyle: 'italic', lineHeight: 1.8,
                  color: 'var(--dark-paper)', textDecoration: 'none',
                }}>{x}</a>
            ))}
          </div>
        ))}
      </div>
      <div style={{
        marginTop: 32, paddingTop: 18,
        borderTop: '1px solid rgba(255,255,255,0.12)',
        display: 'flex', justifyContent: 'space-between',
        fontSize: 11.5, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.04em',
      }} className="mono">
        <span>© 2026 BVSWEBDESIGN · SKIPTON, NORTH YORKSHIRE</span>
        <span>BUILT, NATURALLY, IN WORDPRESS</span>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
