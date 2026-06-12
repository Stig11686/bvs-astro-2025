// press.jsx — Direction 2: Yorkshire Press
// JetBrains Mono uppercase + IBM Plex Sans. Blue-dominant.
// Grid lines, framed numerals, print-poster density.

const prStyles = {
  paper: '#f1ebd9',
  paperHi: '#fbf8ee',
  paperShade: '#e6dec8',
  ink: '#0e0c08',
  ink2: '#3a3327',
  ink3: 'rgba(14,12,8,0.55)',
  rule: 'rgba(14,12,8,0.85)',
  ruleSoft: 'rgba(14,12,8,0.18)',
  mono: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
  sans: '"IBM Plex Sans", ui-sans-serif, system-ui, sans-serif',
};

const prMono = (size = 11) => ({
  fontFamily: prStyles.mono,
  fontSize: size,
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
});

function PrShell({ page, setPage, children }) {
  return (
    <div style={{
      background: prStyles.paper,
      color: prStyles.ink,
      fontFamily: prStyles.sans,
      fontSize: 14,
      lineHeight: 1.5,
      width: '100%',
      minHeight: '100%',
      paddingBottom: 0,
    }}>
      {/* Top rule with crawl */}
      <div style={{
        ...prMono(10.5),
        borderBottom: `1.5px solid ${prStyles.rule}`,
        padding: '8px 0',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 0,
        color: prStyles.ink2,
      }}>
        {[
          ['Skipton', 'BD23 1AA'],
          ['v.8.02', 'Press Edition'],
          ['EST.', 'MMXVIII'],
          ['WordPress', '↗ since 2018'],
        ].map(([a, b], i) => (
          <div key={i} style={{
            padding: '0 20px',
            borderLeft: i === 0 ? 'none' : `1px solid ${prStyles.ruleSoft}`,
            display: 'flex', justifyContent: 'space-between',
          }}>
            <span>{a}</span><span style={{ color: 'var(--accent-a)' }}>{b}</span>
          </div>
        ))}
      </div>

      <PrNav page={page} setPage={setPage} />
      {children}
      <PrFooter />
    </div>
  );
}

function PrNav({ page, setPage }) {
  return (
    <header style={{
      padding: '24px 40px',
      borderBottom: `1.5px solid ${prStyles.rule}`,
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      alignItems: 'center',
      gap: 32,
    }}>
      <div onClick={() => setPage('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'baseline', gap: 10 }}>
        <span style={{
          fontFamily: prStyles.mono, fontSize: 22, fontWeight: 700,
          letterSpacing: '-0.02em', textTransform: 'uppercase',
        }}>
          BVS<span style={{ color: 'var(--accent-a)' }}>/</span>WEBDESIGN
        </span>
        <span style={{ ...prMono(10), color: prStyles.ink3 }}>— a small studio</span>
      </div>

      <nav style={{ display: 'flex', justifyContent: 'center', gap: 0, ...prMono(11.5), fontWeight: 500 }}>
        {[
          ['home', 'INDEX'],
          ['services', 'SERVICES'],
          ['case', 'WORK'],
          ['blog', 'PRESS'],
          ['home', 'ABOUT'],
        ].map(([id, label], i, arr) => {
          const active = page === id && i !== 4;
          return (
            <a
              key={label + i}
              href="#"
              onClick={(e) => { e.preventDefault(); setPage(id); }}
              style={{
                padding: '10px 18px',
                color: active ? prStyles.paper : prStyles.ink,
                background: active ? prStyles.ink : 'transparent',
                textDecoration: 'none',
                borderRight: i < arr.length - 1 ? `1px solid ${prStyles.ruleSoft}` : 'none',
                transition: 'all .12s',
              }}
              onMouseEnter={(e) => { if (!active) { e.currentTarget.style.color = 'var(--accent-a)'; } }}
              onMouseLeave={(e) => { if (!active) { e.currentTarget.style.color = prStyles.ink; } }}
            >
              {label}
            </a>
          );
        })}
      </nav>

      <a href="#" style={{
        ...prMono(11.5), fontWeight: 600,
        background: 'var(--accent-a)', color: prStyles.paperHi,
        padding: '12px 18px', textDecoration: 'none',
        display: 'inline-flex', alignItems: 'center', gap: 8,
      }}>
        START PROJECT <span style={{ fontSize: 14 }}>→</span>
      </a>
    </header>
  );
}

function PrFooter() {
  return (
    <footer style={{
      borderTop: `1.5px solid ${prStyles.rule}`,
      padding: '32px 40px',
      background: prStyles.paperShade,
    }}>
      <div style={{
        fontFamily: prStyles.mono,
        fontSize: 84,
        lineHeight: 0.92,
        letterSpacing: '-0.04em',
        fontWeight: 700,
        textTransform: 'uppercase',
      }}>
        LET'S BUILD<br/>
        <span style={{ color: 'var(--accent-a)' }}>SOMETHING</span> THAT WORKS.
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: 0,
        marginTop: 36,
        borderTop: `1px solid ${prStyles.rule}`,
      }}>
        {[
          ['§ CONTACT', ['ben@bvswebdesign.co.uk', '01756 000 000', 'Skipton, N. Yorks.']],
          ['§ SERVICES', ['Website Design', 'Care Plans', 'Growth Plans']],
          ['§ SITE', ['Index', 'Services', 'Work', 'Press']],
          ['§ SOCIAL', ['Are.na', 'LinkedIn', 'Read.cv']],
          ['§ STATUS', ['Booking Sept ‘26', '2 slots left']],
        ].map(([h, items]) => (
          <div key={h} style={{
            padding: '18px 18px 0',
            borderRight: `1px solid ${prStyles.ruleSoft}`,
          }}>
            <div style={{ ...prMono(10), color: 'var(--accent-a)', fontWeight: 600, marginBottom: 10 }}>{h}</div>
            {items.map((it) => (
              <div key={it} style={{ fontFamily: prStyles.sans, fontSize: 13, lineHeight: 1.7 }}>{it}</div>
            ))}
          </div>
        ))}
      </div>
      <div style={{
        ...prMono(10),
        marginTop: 28, paddingTop: 14, borderTop: `1px solid ${prStyles.ruleSoft}`,
        display: 'flex', justifyContent: 'space-between', color: prStyles.ink3,
      }}>
        <span>© BVSWEBDESIGN MMXXVI</span>
        <span>SET IN JETBRAINS MONO &amp; IBM PLEX</span>
        <span>HAND-BUILT · NO TEMPLATES</span>
      </div>
    </footer>
  );
}

// ── HERO LAYOUTS ─────────────────────────────────────────────────────────────
function PrHeroA() {
  // Grid block hero: massive headline + 3-up info strip
  return (
    <section style={{ padding: '0', borderBottom: `1.5px solid ${prStyles.rule}` }}>
      {/* Top: huge headline */}
      <div style={{
        padding: '48px 40px 28px',
        borderBottom: `1px solid ${prStyles.ruleSoft}`,
        position: 'relative',
      }}>
        <div style={{ ...prMono(11), color: 'var(--accent-a)', fontWeight: 600 }}>§ 01 · MANIFESTO · 2026</div>
        <h1 style={{
          fontFamily: prStyles.mono,
          fontWeight: 700,
          fontSize: 120,
          lineHeight: 0.86,
          letterSpacing: '-0.045em',
          textTransform: 'uppercase',
          margin: '14px 0 0',
        }}>
          NICE LOOKING<br/>
          <span style={{ color: 'var(--accent-a)' }}>≠</span> <span style={{ background: prStyles.ink, color: prStyles.paper, padding: '0 6px' }}>EARNING</span><br/>
          ITS KEEP.
        </h1>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 1fr',
        gap: 0,
      }}>
        <div style={{ padding: '24px 28px', borderRight: `1px solid ${prStyles.ruleSoft}` }}>
          <div style={{ ...prMono(10), color: prStyles.ink3, marginBottom: 10 }}>§ INTRO</div>
          <p style={{ fontSize: 17, lineHeight: 1.5, margin: 0, maxWidth: '34ch' }}>
            For Yorkshire businesses tired of a “nice” website that does nothing.
            I design and build <strong>WordPress sites that turn visitors into real enquiries</strong>.
          </p>
        </div>
        <div style={{ padding: '24px 28px', borderRight: `1px solid ${prStyles.ruleSoft}` }}>
          <div style={{ ...prMono(10), color: prStyles.ink3, marginBottom: 10 }}>§ STATS</div>
          <div style={{ fontFamily: prStyles.mono, fontSize: 56, lineHeight: 0.95, color: 'var(--accent-a)', fontWeight: 700 }}>38</div>
          <div style={{ ...prMono(10), color: prStyles.ink3, marginTop: 4 }}>SITES SHIPPED · 2018→2026</div>
        </div>
        <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ ...prMono(10), color: prStyles.ink3 }}>§ BOOKING</div>
          <div>
            <div style={{ fontSize: 13, lineHeight: 1.5 }}>Currently booking for <strong style={{ color: 'var(--accent-a)' }}>September 2026</strong>. Two slots left.</div>
            <a href="#" style={prBtnSolid}>BOOK 30-MIN CALL →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrHeroB() {
  // Newspaper banner + asymmetric grid with image
  return (
    <section style={{ borderBottom: `1.5px solid ${prStyles.rule}` }}>
      <div style={{
        ...prMono(11), padding: '10px 40px',
        borderBottom: `1px solid ${prStyles.ruleSoft}`,
        display: 'flex', justifyContent: 'space-between',
        background: prStyles.paperHi,
      }}>
        <span>THE PRESS — VOL. VIII</span>
        <span style={{ color: 'var(--accent-a)' }}>ISSUE №02</span>
        <span>{'WEDNESDAY · 20 · MAY · MMXXVI'}</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
        <div style={{ padding: '40px 36px', borderRight: `1px solid ${prStyles.ruleSoft}` }}>
          <div style={{ ...prMono(11), color: 'var(--accent-a)', fontWeight: 600 }}>FRONT PAGE</div>
          <h1 style={{
            fontFamily: prStyles.mono, fontWeight: 700,
            fontSize: 78, lineHeight: 0.92, letterSpacing: '-0.035em',
            textTransform: 'uppercase', margin: '12px 0 22px',
          }}>
            WORD<span style={{ color: 'var(--accent-a)' }}>·</span>PRESS<br/>
            SITES, BUILT<br/>
            <span style={{ background: 'var(--accent-a)', color: prStyles.paperHi, padding: '0 6px' }}>IN&nbsp;YORKSHIRE</span>,<br/>
            FOR YORKSHIRE.
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.55, margin: '0 0 22px', maxWidth: '36ch' }}>
            A one-person Skipton studio. Strategy, design and build under one roof — and one set of bills. We work with a small list of clients each year and stay on as their care team after launch.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <a href="#" style={prBtnSolid}>BOOK A CALL →</a>
            <a href="#" style={prBtnGhost}>SEE THE WORK</a>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <Placeholder label="Studio table photo" height={520} />
          <div style={{
            position: 'absolute', left: 24, bottom: 24,
            background: prStyles.paperHi,
            border: `1.5px solid ${prStyles.rule}`,
            padding: '12px 16px',
            ...prMono(10.5), maxWidth: 260,
          }}>
            <div style={{ color: 'var(--accent-a)', fontWeight: 600, marginBottom: 4 }}>FIG. 01</div>
            <div style={{ fontFamily: prStyles.sans, fontSize: 12, lineHeight: 1.5, textTransform: 'none', letterSpacing: 0 }}>
              The studio. Hand-built oak table, two screens, one ageing kettle.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrHeroC() {
  // Hero as a giant contents/index
  return (
    <section style={{ borderBottom: `1.5px solid ${prStyles.rule}` }}>
      <div style={{ padding: '40px 40px 24px' }}>
        <div style={{ ...prMono(11), color: 'var(--accent-a)', fontWeight: 600 }}>§ TABLE OF CONTENTS</div>
        <h1 style={{
          fontFamily: prStyles.mono, fontWeight: 700,
          fontSize: 70, lineHeight: 0.95, letterSpacing: '-0.035em',
          textTransform: 'uppercase', margin: '10px 0 8px',
        }}>
          ONE STUDIO.<br/>
          <span style={{ color: 'var(--accent-a)' }}>THREE</span> THINGS WE DO<br/>
          <span style={{ textDecoration: 'underline', textDecorationThickness: 4, textUnderlineOffset: 8 }}>PROPERLY.</span>
        </h1>
      </div>
      <div style={{ borderTop: `1px solid ${prStyles.ruleSoft}`, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {SERVICES.map((s, i, arr) => (
          <div key={s.no} style={{
            padding: '24px 24px 22px',
            borderRight: i < arr.length - 1 ? `1px solid ${prStyles.ruleSoft}` : 'none',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontFamily: prStyles.mono, fontSize: 36, fontWeight: 700, color: 'var(--accent-a)' }}>§{s.no}</span>
              <span style={{ ...prMono(10), color: prStyles.ink3 }}>{s.tag}</span>
            </div>
            <h3 style={{
              fontFamily: prStyles.mono, fontWeight: 700, fontSize: 24,
              letterSpacing: '-0.015em', textTransform: 'uppercase',
              margin: '14px 0 6px',
            }}>{s.title}</h3>
            <p style={{ fontSize: 13.5, color: prStyles.ink2, lineHeight: 1.55, margin: 0 }}>{s.short}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const prBtnSolid = {
  display: 'inline-flex', alignItems: 'center', gap: 8,
  fontFamily: prStyles.mono, fontSize: 12, fontWeight: 600,
  letterSpacing: '0.04em', textTransform: 'uppercase',
  background: prStyles.ink, color: prStyles.paperHi,
  padding: '12px 18px', textDecoration: 'none',
};
const prBtnGhost = {
  display: 'inline-flex', alignItems: 'center', gap: 8,
  fontFamily: prStyles.mono, fontSize: 12, fontWeight: 600,
  letterSpacing: '0.04em', textTransform: 'uppercase',
  background: 'transparent', color: prStyles.ink,
  padding: '11px 18px', textDecoration: 'none',
  border: `1.5px solid ${prStyles.rule}`,
};
const prBtnAccent = {
  display: 'inline-flex', alignItems: 'center', gap: 8,
  fontFamily: prStyles.mono, fontSize: 12, fontWeight: 600,
  letterSpacing: '0.04em', textTransform: 'uppercase',
  background: 'var(--accent-a)', color: prStyles.paperHi,
  padding: '12px 18px', textDecoration: 'none',
};

// ── HOME ─────────────────────────────────────────────────────────────────────
function PrHome({ heroVariant = 'A' }) {
  const Hero = heroVariant === 'B' ? PrHeroB : heroVariant === 'C' ? PrHeroC : PrHeroA;
  return (
    <>
      <Hero />

      {/* What's wrong with most small business websites */}
      <section style={{ padding: '36px 40px', borderBottom: `1.5px solid ${prStyles.rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: 32, alignItems: 'baseline' }}>
          <div style={{ ...prMono(11), color: 'var(--accent-a)', fontWeight: 600 }}>§ 02 · PROBLEM</div>
          <h2 style={{
            fontFamily: prStyles.mono, fontWeight: 700, fontSize: 38,
            letterSpacing: '-0.025em', textTransform: 'uppercase', lineHeight: 1.02, margin: 0,
          }}>
            Most “nice” websites fail at <span style={{ color: 'var(--accent-a)' }}>three</span> dull-but-essential things.
          </h2>
        </div>
        <div style={{
          marginTop: 28,
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0, borderTop: `1px solid ${prStyles.rule}`,
        }}>
          {[
            ['01', 'They\'re slow', 'Bloated builder themes ship 4MB before a single image. We strip it back to ~120KB.'],
            ['02', 'They don\'t ask', 'No clear next action. No reason to call today. We design the path to enquiry, not just the look.'],
            ['03', 'Then they rot', 'Plugins go unpatched, brand drifts. Care plans keep your site working five years on.'],
          ].map(([n, t, d], i, arr) => (
            <div key={n} style={{
              padding: '24px 22px',
              borderRight: i < arr.length - 1 ? `1px solid ${prStyles.ruleSoft}` : 'none',
            }}>
              <div style={{ fontFamily: prStyles.mono, fontSize: 44, fontWeight: 700, color: 'var(--accent-a)', lineHeight: 1 }}>{n}</div>
              <h3 style={{ fontFamily: prStyles.mono, fontSize: 18, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-0.01em', margin: '14px 0 6px' }}>{t}</h3>
              <p style={{ fontSize: 13.5, color: prStyles.ink2, lineHeight: 1.6, margin: 0 }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured work */}
      <section style={{ padding: '36px 40px', borderBottom: `1.5px solid ${prStyles.rule}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 22 }}>
          <div>
            <div style={{ ...prMono(11), color: 'var(--accent-a)', fontWeight: 600 }}>§ 03 · WORK</div>
            <h2 style={{ fontFamily: prStyles.mono, fontWeight: 700, fontSize: 38, letterSpacing: '-0.025em', textTransform: 'uppercase', lineHeight: 1, margin: '8px 0 0' }}>
              Recent dispatches.
            </h2>
          </div>
          <a href="#" style={prBtnGhost}>VIEW ALL · 38 →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: `1.5px solid ${prStyles.rule}` }}>
          {CASES.map((c, i, arr) => (
            <a key={c.slug} href="#" style={{
              display: 'block', textDecoration: 'none', color: prStyles.ink,
              borderRight: i < arr.length - 1 ? `1px solid ${prStyles.rule}` : 'none',
              background: prStyles.paperHi,
            }}>
              <Placeholder label={`${c.client} · screen`} height={220} />
              <div style={{ padding: '16px 20px', borderTop: `1px solid ${prStyles.rule}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', ...prMono(10), color: prStyles.ink3 }}>
                  <span>№ 0{i + 1}</span><span>{c.year} · {c.sector.split('·')[0].trim()}</span>
                </div>
                <h3 style={{ fontFamily: prStyles.mono, fontSize: 20, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-0.01em', margin: '10px 0 8px', lineHeight: 1.05 }}>
                  {c.client}
                </h3>
                <p style={{ fontSize: 13, color: prStyles.ink2, lineHeight: 1.55, margin: 0 }}>{c.title}</p>
                <div style={{
                  marginTop: 14, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8,
                  paddingTop: 12, borderTop: `1px dashed ${prStyles.ruleSoft}`,
                }}>
                  {[c.metric1, c.metric2, c.metric3].map((m, j) => (
                    <div key={j}>
                      <div style={{ fontFamily: prStyles.mono, fontSize: 16, fontWeight: 700, color: 'var(--accent-a)' }}>{m.value}</div>
                      <div style={{ ...prMono(9), color: prStyles.ink3, marginTop: 2 }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Testimonials as classified ads */}
      <section style={{ padding: '36px 40px', borderBottom: `1.5px solid ${prStyles.rule}`, background: prStyles.paperHi }}>
        <div style={{ ...prMono(11), color: 'var(--accent-a)', fontWeight: 600 }}>§ 04 · TESTIMONIALS · CLASSIFIEDS</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, marginTop: 16, border: `1.5px solid ${prStyles.rule}` }}>
          {TESTIMONIALS.map((t, i, arr) => (
            <div key={t.name} style={{
              padding: '22px 22px',
              borderRight: i < arr.length - 1 ? `1px solid ${prStyles.rule}` : 'none',
            }}>
              <div style={{ ...prMono(10), color: 'var(--accent-a)', fontWeight: 600 }}>★★★★★ · 5 of 5</div>
              <blockquote style={{ fontFamily: prStyles.sans, fontSize: 16, lineHeight: 1.5, margin: '14px 0 14px', fontWeight: 500 }}>
                “{t.quote}”
              </blockquote>
              <div style={{ ...prMono(10), color: prStyles.ink3, display: 'flex', justifyContent: 'space-between', borderTop: `1px solid ${prStyles.ruleSoft}`, paddingTop: 10 }}>
                <span style={{ color: prStyles.ink }}>{t.name}</span>
                <span>{t.role.split(', ')[1] || t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

// ── SERVICES ────────────────────────────────────────────────────────────────
function PrServices() {
  return (
    <>
      <section style={{ padding: '48px 40px 24px', borderBottom: `1.5px solid ${prStyles.rule}` }}>
        <div style={{ ...prMono(11), color: 'var(--accent-a)', fontWeight: 600 }}>§ SERVICES &amp; FEES</div>
        <h1 style={{
          fontFamily: prStyles.mono, fontWeight: 700,
          fontSize: 96, lineHeight: 0.9, letterSpacing: '-0.04em',
          textTransform: 'uppercase', margin: '12px 0 12px',
        }}>
          THREE THINGS<br/>
          <span style={{ color: 'var(--accent-a)' }}>—</span> PROPERLY.<br/>
          NO MORE.
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.55, margin: 0, maxWidth: '60ch' }}>
          Most studios pad their site with twelve services they don't actually deliver. Here are the three I do — and what each costs you in 2026.
        </p>
      </section>

      {/* Big pricing table */}
      <section style={{ padding: 0, borderBottom: `1.5px solid ${prStyles.rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: 0 }}>
          {SERVICES.map((s, i, arr) => (
            <div key={s.no} style={{
              padding: '32px 28px',
              borderRight: i < arr.length - 1 ? `1px solid ${prStyles.rule}` : 'none',
              background: i === 1 ? prStyles.paperHi : 'transparent',
              position: 'relative',
            }}>
              {i === 1 && (
                <div style={{
                  position: 'absolute', top: -1, right: 20,
                  ...prMono(10), background: 'var(--accent-a)', color: prStyles.paperHi,
                  padding: '4px 10px', fontWeight: 600,
                }}>★ MOST BOOKED</div>
              )}
              <div style={{ ...prMono(11), color: 'var(--accent-a)', fontWeight: 600 }}>§ {s.no}</div>
              <h2 style={{
                fontFamily: prStyles.mono, fontWeight: 700, fontSize: 30,
                textTransform: 'uppercase', letterSpacing: '-0.02em',
                margin: '12px 0 4px', lineHeight: 1.05,
              }}>{s.title}</h2>
              <div style={{ fontFamily: prStyles.mono, fontSize: 22, fontWeight: 700, color: prStyles.ink2, marginBottom: 14 }}>{s.tag}</div>
              <p style={{ fontSize: 14, color: prStyles.ink2, lineHeight: 1.55, margin: '0 0 18px' }}>{s.short}</p>
              <div style={{ borderTop: `1px solid ${prStyles.ruleSoft}`, paddingTop: 14 }}>
                {s.bullets.map((b) => (
                  <div key={b} style={{
                    display: 'flex', alignItems: 'baseline', gap: 10,
                    padding: '6px 0', fontSize: 13.5,
                  }}>
                    <span style={{ color: 'var(--accent-a)', fontFamily: prStyles.mono }}>+</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
              <a href="#" style={{ ...(i === 1 ? prBtnAccent : prBtnSolid), marginTop: 18, width: '100%', justifyContent: 'center' }}>
                ENQUIRE →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '36px 40px', borderBottom: `1.5px solid ${prStyles.rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 40 }}>
          <div>
            <div style={{ ...prMono(11), color: 'var(--accent-a)', fontWeight: 600 }}>§ FAQ</div>
            <h2 style={{ fontFamily: prStyles.mono, fontWeight: 700, fontSize: 44, textTransform: 'uppercase', letterSpacing: '-0.03em', lineHeight: 0.95, margin: '12px 0 0' }}>
              QUESTIONS<br/>I HEAR A<br/><span style={{ color: 'var(--accent-a)' }}>LOT.</span>
            </h2>
          </div>
          <div>
            {[
              ['Q. Do you work outside Yorkshire?', 'Yes — currently five of my retainer clients are elsewhere in England. The “Yorkshire” bit is about the work ethic, not a postcode rule.'],
              ['Q. Is WordPress not… a bit old?', 'It powers 43% of the web. I build it properly, without page builders. It\'s old like a hammer is old.'],
              ['Q. Can I edit the site myself afterwards?', 'Yes — every site ships with a custom editor where you can swap text, swap photos, add pages. No HTML, no panic.'],
              ['Q. What if I just need a redesign of one page?', 'Then we don\'t need a project. Book a half-day audit (£480) and I\'ll write you the brief instead.'],
            ].map(([q, a]) => (
              <div key={q} style={{ padding: '16px 0', borderTop: `1px solid ${prStyles.ruleSoft}` }}>
                <h3 style={{ fontFamily: prStyles.mono, fontSize: 15, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-0.005em', margin: '0 0 6px' }}>{q}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: prStyles.ink2, margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ── BLOG ────────────────────────────────────────────────────────────────────
function PrBlog() {
  const [hot, ...rest] = BLOG_POSTS;
  return (
    <>
      <section style={{ padding: '40px 40px 28px', borderBottom: `1.5px solid ${prStyles.rule}`, background: prStyles.paperHi }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div>
            <div style={{ ...prMono(11), color: 'var(--accent-a)', fontWeight: 600 }}>§ THE PRESS</div>
            <h1 style={{
              fontFamily: prStyles.mono, fontWeight: 700,
              fontSize: 90, lineHeight: 0.9, letterSpacing: '-0.04em',
              textTransform: 'uppercase', margin: '10px 0 8px',
            }}>
              NOTES &amp; <span style={{ color: 'var(--accent-a)' }}>DISPATCHES</span><br/>
              ON BUILDING<br/>
              BETTER SITES.
            </h1>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ ...prMono(10), color: prStyles.ink3 }}>ISSUE</div>
            <div style={{ fontFamily: prStyles.mono, fontSize: 64, fontWeight: 700, lineHeight: 1, letterSpacing: '-0.04em' }}>№ 27</div>
          </div>
        </div>
      </section>

      {/* Sub-nav filters */}
      <section style={{ ...prMono(11), display: 'flex', borderBottom: `1.5px solid ${prStyles.rule}` }}>
        {['ALL · 27', 'TRENDS · 8', 'PROCESS · 6', 'TIPS · 9', 'SEO · 4'].map((t, i) => (
          <a key={t} href="#" style={{
            padding: '14px 22px',
            color: i === 0 ? prStyles.paperHi : prStyles.ink,
            background: i === 0 ? 'var(--accent-a)' : 'transparent',
            textDecoration: 'none', fontWeight: 600,
            borderRight: `1px solid ${prStyles.ruleSoft}`,
          }}>{t}</a>
        ))}
        <div style={{ flex: 1 }}/>
        <a href="#" style={{ padding: '14px 22px', textDecoration: 'none', color: prStyles.ink, fontWeight: 600 }}>SUBSCRIBE ↗</a>
      </section>

      {/* Featured */}
      <section style={{ padding: '32px 40px', borderBottom: `1.5px solid ${prStyles.rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <Placeholder label="Lead essay illustration" height={420} />
            <div style={{
              position: 'absolute', top: 16, left: 16,
              background: 'var(--accent-a)', color: prStyles.paperHi,
              ...prMono(10), padding: '6px 10px', fontWeight: 600,
            }}>LEAD ESSAY</div>
          </div>
          <div>
            <div style={{ ...prMono(10), display: 'flex', gap: 16, color: prStyles.ink3 }}>
              <span style={{ color: 'var(--accent-a)' }}>{hot.cat.toUpperCase()}</span>
              <span>{hot.date.toUpperCase()}</span>
              <span>{hot.read.toUpperCase()} READ</span>
            </div>
            <h2 style={{
              fontFamily: prStyles.mono, fontWeight: 700, fontSize: 44,
              textTransform: 'uppercase', letterSpacing: '-0.028em',
              lineHeight: 0.98, margin: '14px 0 18px',
            }}>
              WHY <span style={{ background: 'var(--accent-a)', color: prStyles.paperHi, padding: '0 4px' }}>“MAKE IT POP”</span> IS KILLING YOUR SMALL BUSINESS WEBSITE
            </h2>
            <p style={{ fontSize: 16, color: prStyles.ink2, lineHeight: 1.55, margin: '0 0 22px' }}>
              {hot.excerpt}
            </p>
            <a href="#" style={prBtnSolid}>READ ESSAY →</a>
          </div>
        </div>
      </section>

      {/* Archive grid */}
      <section style={{ padding: '0 0 0', borderBottom: `1.5px solid ${prStyles.rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
          {rest.map((p, i) => (
            <a key={p.title} href="#" style={{
              display: 'block', padding: '24px 28px',
              borderRight: i % 2 === 0 ? `1px solid ${prStyles.rule}` : 'none',
              borderTop: i > 1 ? `1px solid ${prStyles.rule}` : 'none',
              textDecoration: 'none', color: prStyles.ink,
            }}>
              <div style={{ ...prMono(10), color: prStyles.ink3, display: 'flex', gap: 12 }}>
                <span style={{ color: 'var(--accent-a)' }}>● {p.cat.toUpperCase()}</span>
                <span>{p.date}</span>
                <span style={{ marginLeft: 'auto' }}>{p.read} ↗</span>
              </div>
              <h3 style={{
                fontFamily: prStyles.mono, fontWeight: 700,
                fontSize: 22, textTransform: 'uppercase',
                letterSpacing: '-0.015em', lineHeight: 1.05,
                margin: '10px 0 8px',
              }}>{p.title}</h3>
              <p style={{ fontSize: 13.5, color: prStyles.ink2, lineHeight: 1.55, margin: 0 }}>{p.excerpt}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

// ── CASE STUDY ──────────────────────────────────────────────────────────────
function PrCase() {
  const c = CASES[1];
  return (
    <>
      <section style={{ padding: '36px 40px 24px' }}>
        <div style={{ ...prMono(11), color: 'var(--accent-a)', fontWeight: 600 }}>§ CASE №02 · {c.year} · {c.sector.toUpperCase()}</div>
        <h1 style={{
          fontFamily: prStyles.mono, fontWeight: 700,
          fontSize: 78, lineHeight: 0.9, letterSpacing: '-0.04em',
          textTransform: 'uppercase', margin: '10px 0 18px',
        }}>
          MAIDENS &amp;<br/>
          <span style={{ color: 'var(--accent-a)' }}>RAVENS</span> —<br/>
          30 REVIEWS,<br/>
          90 DAYS.
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.5, margin: 0, maxWidth: '54ch' }}>
          A bridal boutique in York selling alternative, vintage and indie-designer dresses needed a website as distinctive as their racks. We delivered one — and the Google reviews followed.
        </p>
      </section>

      {/* Project meta strip */}
      <section style={{
        borderTop: `1.5px solid ${prStyles.rule}`,
        borderBottom: `1.5px solid ${prStyles.rule}`,
        display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)',
      }}>
        {[
          ['CLIENT', 'Maidens & Ravens'],
          ['SECTOR', 'Bridal · Retail'],
          ['LOCATION', 'York, N. Yorks'],
          ['SCOPE', 'Web · CMS · Booking'],
          ['STACK', 'WordPress + ACF'],
          ['TIMELINE', '8 weeks · Q2 2024'],
        ].map(([k, v], i, arr) => (
          <div key={k} style={{
            padding: '18px 20px',
            borderRight: i < arr.length - 1 ? `1px solid ${prStyles.ruleSoft}` : 'none',
          }}>
            <div style={{ ...prMono(10), color: prStyles.ink3 }}>{k}</div>
            <div style={{ fontFamily: prStyles.mono, fontSize: 14, fontWeight: 700, marginTop: 6, letterSpacing: '-0.005em' }}>{v}</div>
          </div>
        ))}
      </section>

      {/* Big metric strip */}
      <section style={{ padding: '36px 40px', borderBottom: `1.5px solid ${prStyles.rule}` }}>
        <div style={{ ...prMono(11), color: 'var(--accent-a)', fontWeight: 600, marginBottom: 18 }}>§ RESULTS · FIRST 90 DAYS</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: `1.5px solid ${prStyles.rule}` }}>
          {[c.metric1, c.metric2, c.metric3].map((m, i, arr) => (
            <div key={i} style={{
              padding: '24px 24px',
              borderRight: i < arr.length - 1 ? `1px solid ${prStyles.rule}` : 'none',
              background: i === 1 ? prStyles.paperHi : 'transparent',
            }}>
              <div style={{ fontFamily: prStyles.mono, fontSize: 80, fontWeight: 700, lineHeight: 0.92, letterSpacing: '-0.04em', color: 'var(--accent-a)' }}>{m.value}</div>
              <div style={{ ...prMono(11), color: prStyles.ink2, marginTop: 8 }}>{m.label.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Body */}
      <section style={{ padding: '36px 40px', borderBottom: `1.5px solid ${prStyles.rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 40 }}>
          <div>
            <div style={{ ...prMono(11), color: 'var(--accent-a)', fontWeight: 600 }}>§ BRIEF</div>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: prStyles.ink2, marginTop: 8 }}>
              Aisha had built a six-figure boutique on Instagram alone but couldn't translate it to the website. Bookings were missed; the brand looked like every other bridal site.
            </p>
          </div>
          <div>
            <h2 style={{ fontFamily: prStyles.mono, fontSize: 28, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 12px' }}>
              <span style={{ color: 'var(--accent-a)' }}>The approach.</span> Stop trying to look like a bridal boutique. Look like Maidens &amp; Ravens.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: prStyles.ink2, margin: '0 0 18px' }}>
              We threw out blush pink and serif scripts. Instead: deep oxblood, ink, a slab-mono pairing, and editorial dress photography shot in their actual York shopfront. The booking form went from a 14-field disaster to four questions.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <Placeholder label="Dress index — desktop" height={220} />
              <Placeholder label="Booking — mobile" height={220} />
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section style={{ padding: '40px 40px', background: 'var(--accent-a)', color: prStyles.paperHi }}>
        <div style={{ ...prMono(10), opacity: 0.7, fontWeight: 600 }}>§ TESTIMONIAL</div>
        <blockquote style={{
          fontFamily: prStyles.mono, fontWeight: 700,
          fontSize: 38, textTransform: 'uppercase', letterSpacing: '-0.025em',
          lineHeight: 1, margin: '14px 0 14px',
        }}>
          “Ben listens, <br/>then quietly delivers. <br/>The site looks like us, <br/>sounds like us, <br/>and finally <span style={{ background: prStyles.paperHi, color: 'var(--accent-a)', padding: '0 6px' }}>works on a phone.</span>”
        </blockquote>
        <div style={{ ...prMono(11), opacity: 0.85 }}>— AISHA MARSDEN · FOUNDER, MAIDENS &amp; RAVENS</div>
      </section>
    </>
  );
}

function PressDirection({ page, setPage, heroVariant }) {
  return (
    <PrShell page={page} setPage={setPage}>
      {page === 'home' && <PrHome heroVariant={heroVariant} />}
      {page === 'services' && <PrServices />}
      {page === 'blog' && <PrBlog />}
      {page === 'case' && <PrCase />}
    </PrShell>
  );
}

window.PressDirection = PressDirection;
