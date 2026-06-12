// site-misc.jsx — Portfolio, Case study (Ilkley Dental Care), Blog, Contact

// ── PORTFOLIO ───────────────────────────────────────────────────────────────
function PortfolioPage({ setPage }) {
  return (
    <>
      <section className="gutter" style={{ padding: '64px 56px 28px' }}>
        <Eyebrow>Recent work</Eyebrow>
        <h1 className="serif" style={{
          fontWeight: 400, fontSize: 80, lineHeight: 0.98, letterSpacing: '-0.024em',
          margin: '16px 0 0', maxWidth: '18ch',
        }}>
          A small portfolio, written up <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>honestly</span>.
        </h1>
        <p className="serif" style={{ fontSize: 19, lineHeight: 1.5, color: 'var(--ink-2)', margin: '20px 0 0', maxWidth: '56ch' }}>
          Service businesses across Yorkshire and the UK — bridal, hospitality, dental, beauty and community organisations. A few of the more recent ones.
        </p>
      </section>

      <section style={{ borderTop: '1px solid var(--rule)', marginTop: 12 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
          {PORTFOLIO.map((p, i) => (
            <a key={p.slug} href="#"
              onClick={(e) => { e.preventDefault(); setPage(p.target); }}
              style={{
                display: 'block', padding: 24,
                borderRight: i % 2 === 0 ? '1px solid var(--rule)' : 'none',
                borderBottom: '1px solid var(--rule)',
                textDecoration: 'none', color: 'var(--ink)',
                transition: 'background .15s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--paper-2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <div className="ph" style={{ height: 320, position: 'relative' }}>
                ⌐ {p.client}
                {p.placeholder && (
                  <div className="mono" style={{
                    position: 'absolute', top: 14, left: 14,
                    fontSize: 9.5, letterSpacing: '0.08em', textTransform: 'uppercase',
                    background: 'var(--ink)', color: 'var(--paper)', padding: '5px 9px',
                  }}>Coming soon</div>
                )}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 16 }}>
                <span className="label">{p.sector}</span>
                <span className="label" style={{ color: 'var(--accent-a)' }}>{p.stat}</span>
              </div>
              <h3 className="serif" style={{ fontSize: 30, fontWeight: 400, letterSpacing: '-0.015em', lineHeight: 1.1, margin: '8px 0 0' }}>
                {p.client} <span style={{ fontStyle: 'italic', color: 'var(--accent-a)', fontSize: 18 }}>→</span>
              </h3>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

// ── CASE STUDY — Ilkley Dental Care (material drawn from brief, no invented stats)
function CasePage({ setPage }) {
  return (
    <>
      <section className="gutter" style={{ padding: '64px 56px 28px' }}>
        <Eyebrow>Case Study · 2024 · Healthcare · Ilkley</Eyebrow>
        <h1 className="serif" style={{
          fontWeight: 400, fontSize: 76, lineHeight: 0.98, letterSpacing: '-0.022em',
          margin: '16px 0 0', maxWidth: '22ch',
        }}>
          Ilkley Dental Care — from a <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>broken contact form</span> to 30+ enquiries a month.
        </h1>
        <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 36, alignItems: 'end' }}>
          <p className="serif" style={{ fontSize: 19, lineHeight: 1.5, color: 'var(--ink-2)', maxWidth: '50ch' }}>
            A well-established practice with reasonable traffic but no idea why the website never generated enquiries. The audit found problems they'd lived with for years.
          </p>
          {[['30+', 'enquiries per month, now'], ['2 yrs', 'the form had silently failed']].map(([v, l]) => (
            <div key={l} style={{ borderLeft: '1px solid var(--rule)', paddingLeft: 20 }}>
              <div className="serif" style={{ fontSize: 38, fontStyle: 'italic', lineHeight: 1, color: 'var(--accent-a)' }}>{v}</div>
              <div className="label" style={{ marginTop: 8 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="gutter" style={{ padding: '12px 56px 40px' }}>
        <div className="ph" style={{ height: 520 }}>⌐ Ilkley Dental Care — homepage</div>
      </section>

      {/* Body */}
      <section className="gutter" style={{ padding: '32px 56px', borderTop: '1px solid var(--rule)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: 48 }}>
          <aside>
            <Label style={{ marginBottom: 14 }}>Project</Label>
            {[
              ['Client', 'Ilkley Dental Care'],
              ['Sector', 'Private & NHS dentistry'],
              ['Location', 'Ilkley, West Yorkshire'],
              ['Scope', 'Audit, rebuild, copy, booking'],
              ['Built in', 'WordPress'],
              ['Looked after', 'Complete Care plan'],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, padding: '10px 0', borderTop: '1px solid var(--rule-soft)' }}>
                <span className="label">{k}</span>
                <span className="serif" style={{ fontStyle: 'italic', fontSize: 15 }}>{v}</span>
              </div>
            ))}
          </aside>
          <div>
            <h2 className="serif" style={{ fontSize: 34, fontWeight: 400, lineHeight: 1.12, letterSpacing: '-0.015em', margin: '0 0 16px' }}>
              <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>The problem.</span>&nbsp;
              The website wasn't generating enquiries despite reasonable traffic — and nobody knew why.
            </h2>
            <p className="serif" style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--ink-2)', margin: '0 0 24px', maxWidth: '60ch' }}>
              A free audit found a broken contact form nobody knew about, a phone number buried below the fold, and no clear call to action on any page. These were issues they'd lived with for years — quietly costing them new patients every single week.
            </p>
            <h3 className="serif" style={{ fontSize: 26, fontWeight: 400, letterSpacing: '-0.01em', margin: '28px 0 12px' }}>
              <em style={{ color: 'var(--accent-a)' }}>The approach.</em>
            </h3>
            <p className="serif" style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0, maxWidth: '60ch' }}>
              A full rebuild on WordPress: a clear, single call to action on every page, the phone number and booking link kept in view, and a contact form that works on a phone — with an email alert if it ever fails again, so it can never silently break. Fixed in a few weeks. The practice now receives 30+ enquiries per month.
            </p>
          </div>
        </div>
      </section>

      <section className="gutter" style={{ padding: '16px 56px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div className="ph" style={{ height: 340 }}>⌐ Booking — desktop</div>
          <div className="ph" style={{ height: 340 }}>⌐ Contact form — mobile</div>
        </div>
      </section>

      {/* Next */}
      <section className="gutter" style={{
        padding: '36px 56px', marginTop: 40, borderTop: '1px solid var(--rule)',
        background: 'var(--paper-2)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      }}>
        <div>
          <Label>Browse more →</Label>
          <h3 className="serif" style={{ fontSize: 30, fontWeight: 400, margin: '8px 0 0', letterSpacing: '-0.015em' }}>
            See the rest of the <em style={{ color: 'var(--accent-a)' }}>portfolio</em>.
          </h3>
        </div>
        <a href="#" className="btn btn--solid" onClick={(e) => { e.preventDefault(); setPage('portfolio'); }}>All projects →</a>
      </section>
    </>
  );
}

// ── BLOG (Press-style 2-column grid) ────────────────────────────────────────
function BlogPage({ setPage }) {
  const [hot, ...rest] = BLOG_POSTS;
  return (
    <>
      <section className="gutter" style={{ padding: '64px 56px 28px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', alignItems: 'end', gap: 32 }}>
          <div>
            <Eyebrow>The Blog</Eyebrow>
            <h1 className="serif" style={{
              fontWeight: 400, fontSize: 84, lineHeight: 0.98, letterSpacing: '-0.025em',
              margin: '12px 0 0',
            }}>
              Tips, case studies &amp; <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>insights</span>.
            </h1>
            <p className="serif" style={{ fontSize: 18, lineHeight: 1.5, color: 'var(--ink-2)', marginTop: 16, maxWidth: '52ch' }}>
              Practical web design tips, WordPress advice, and hints for small business owners in Yorkshire and beyond.
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="label">Issue</div>
            <div className="serif" style={{ fontSize: 64, fontStyle: 'italic', lineHeight: 1, color: 'var(--accent-a)' }}>№ 27</div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section style={{ display: 'flex', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', marginTop: 8 }}>
        {[['All', 27], ['Trends', 8], ['Process', 6], ['Tips', 9], ['SEO', 4]].map(([t, n], i, arr) => (
          <a key={t} href="#" onClick={(e) => e.preventDefault()} className="mono" style={{
            padding: '14px 22px', fontSize: 11.5, letterSpacing: '0.08em', fontWeight: 500, textTransform: 'uppercase',
            color: i === 0 ? 'var(--paper)' : 'var(--ink)', background: i === 0 ? 'var(--ink)' : 'transparent',
            textDecoration: 'none', borderRight: i < arr.length - 1 ? '1px solid var(--rule)' : 'none',
          }}>{t} <span style={{ opacity: 0.6, marginLeft: 4 }}>{n}</span></a>
        ))}
      </section>

      {/* Featured */}
      <section className="gutter" style={{ padding: '36px 56px', borderBottom: '1px solid var(--rule)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 44, alignItems: 'center' }}>
          <div className="ph" style={{ height: 400, position: 'relative' }}>
            ⌐ Lead essay illustration
            <div className="mono" style={{
              position: 'absolute', top: 16, left: 16, background: 'var(--accent-a)', color: 'var(--dark-paper)',
              fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 10px', fontWeight: 600,
            }}>Latest</div>
          </div>
          <div>
            <div style={{ display: 'flex', gap: 14 }} className="label">
              <span style={{ color: 'var(--accent-a)' }}>● {hot.cat}</span>
              <span>{hot.date}</span><span>{hot.read} read</span>
            </div>
            <h2 className="serif" style={{ fontSize: 46, fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.022em', margin: '14px 0 16px' }}>
              {hot.title}
            </h2>
            <p className="serif" style={{ fontSize: 18, lineHeight: 1.5, color: 'var(--ink-2)', margin: '0 0 20px', maxWidth: '46ch' }}>{hot.excerpt}</p>
            <a href="#" className="btn btn--solid" onClick={(e) => e.preventDefault()}>Read the post →</a>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section style={{ borderBottom: '1px solid var(--rule)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
          {rest.map((p, i) => (
            <a key={p.title} href="#" onClick={(e) => e.preventDefault()} style={{
              display: 'block', padding: '26px 28px',
              borderRight: i % 2 === 0 ? '1px solid var(--rule)' : 'none',
              borderTop: i > 1 ? '1px solid var(--rule)' : 'none',
              textDecoration: 'none', color: 'var(--ink)', transition: 'background .15s',
            }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--paper-2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
              <div className="label" style={{ display: 'flex', gap: 14 }}>
                <span style={{ color: 'var(--accent-a)' }}>● {p.cat}</span>
                <span>{p.date}</span><span style={{ marginLeft: 'auto' }}>{p.read} ↗</span>
              </div>
              <h3 className="serif" style={{ fontSize: 27, fontWeight: 400, lineHeight: 1.12, letterSpacing: '-0.015em', margin: '14px 0 10px' }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.6, margin: 0 }}>{p.excerpt}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

// ── CONTACT (§3.4) ──────────────────────────────────────────────────────────
function ContactPage({ setPage }) {
  const field = {
    width: '100%', background: 'var(--paper)', border: '1px solid var(--rule)',
    padding: '13px 14px', fontFamily: 'Geist', fontSize: 15, color: 'var(--ink)', outline: 'none',
  };
  return (
    <section className="gutter" style={{ padding: '64px 56px 64px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="serif" style={{ fontWeight: 400, fontSize: 64, lineHeight: 1, letterSpacing: '-0.022em', margin: '16px 0 0' }}>
            Let's talk about <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>your project</span>.
          </h1>
          <p className="serif" style={{ fontSize: 19, lineHeight: 1.55, color: 'var(--ink-2)', margin: '20px 0 0', maxWidth: '46ch' }}>
            Whether you know exactly what you need or you're not sure where to start, get in touch. I'll get back to you within one working day.
          </p>

          <div style={{ marginTop: 36, borderTop: '1px solid var(--rule)' }}>
            {[
              ['Email', 'hello@bvswebdesign.co.uk'],
              ['Based in', 'Skipton, North Yorkshire'],
              ['Working', 'across Yorkshire & the UK'],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 16, padding: '14px 0', borderBottom: '1px solid var(--rule-soft)' }}>
                <span className="label">{k}</span>
                <span className="serif" style={{ fontSize: 17, fontStyle: 'italic' }}>{v}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 28, padding: '22px 24px', border: '1px solid var(--rule)', background: 'var(--paper-2)' }}>
            <div className="serif" style={{ fontSize: 19, letterSpacing: '-0.01em' }}>Prefer to just book a time?</div>
            <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.5, margin: '6px 0 14px' }}>
              Grab a free 30-minute slot and we'll talk it through.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              <CTA kind="solid" to={LINKS.start}>Start a Project →</CTA>
              <CTA kind="ghost" to={LINKS.audit}>Book a Free Audit</CTA>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[['Your name', 'text'], ['Email address', 'email'], ['Business / website', 'text']].map(([l, type]) => (
            <label key={l} style={{ display: 'block' }}>
              <span className="label" style={{ display: 'block', marginBottom: 7 }}>{l}</span>
              <input type={type} style={field} />
            </label>
          ))}
          <label style={{ display: 'block' }}>
            <span className="label" style={{ display: 'block', marginBottom: 7 }}>What's going on?</span>
            <textarea rows={6} style={{ ...field, resize: 'vertical', fontFamily: 'Geist' }}
              placeholder="A new site, a rescue, an audit, or just not sure yet — tell me what you can." />
          </label>
          <button type="submit" className="btn btn--accent" style={{ alignSelf: 'flex-start', marginTop: 4 }}>
            Send a Message →
          </button>
          <p className="label" style={{ marginTop: 2 }}>I'll get back to you within one working day.</p>
        </form>
      </div>
    </section>
  );
}

Object.assign(window, { PortfolioPage, CasePage, BlogPage, ContactPage });
