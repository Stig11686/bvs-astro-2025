// workshop.jsx — Direction 3: Workshop
// Bricolage Grotesque display + Spectral serif body. Claret + blue used together.
// Oversized expressive statements, label chips, friendly craft feel.

const wsStyles = {
  paper: '#f3ecd6',       // warmer, slightly more saturated cream
  paperHi: '#fbf7e9',
  paperShade: '#e8dec3',
  ink: '#181208',
  ink2: '#3d3220',
  ink3: 'rgba(24,18,8,0.55)',
  ruleSoft: 'rgba(24,18,8,0.10)',
  display: '"Bricolage Grotesque", ui-sans-serif, system-ui, sans-serif',
  serif: '"Spectral", "Iowan Old Style", Georgia, serif',
};

const wsChip = (variant = 'a') => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  fontFamily: wsStyles.display,
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: '0.005em',
  padding: '5px 12px',
  borderRadius: 999,
  background: variant === 'a' ? 'var(--accent-a)' : variant === 'b' ? 'var(--accent-b)' : wsStyles.ink,
  color: wsStyles.paperHi,
});

const wsChipOutline = {
  display: 'inline-flex', alignItems: 'center', gap: 6,
  fontFamily: wsStyles.display, fontSize: 12, fontWeight: 600,
  padding: '4px 11px', borderRadius: 999,
  border: `1px solid ${wsStyles.ink}`, color: wsStyles.ink,
  background: 'transparent',
};

function WsShell({ page, setPage, children }) {
  return (
    <div style={{
      background: wsStyles.paper,
      color: wsStyles.ink,
      fontFamily: wsStyles.serif,
      fontSize: 15,
      lineHeight: 1.55,
      width: '100%',
      minHeight: '100%',
    }}>
      <WsNav page={page} setPage={setPage} />
      {children}
      <WsFooter />
    </div>
  );
}

function WsNav({ page, setPage }) {
  return (
    <header style={{
      padding: '22px 48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 5,
      background: `${wsStyles.paper}f0`,
      backdropFilter: 'blur(6px)',
    }}>
      <div onClick={() => setPage('home')} style={{
        cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12,
      }}>
        {/* Mark */}
        <div style={{
          width: 36, height: 36, borderRadius: 12,
          background: 'var(--accent-a)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: wsStyles.paperHi,
          fontFamily: wsStyles.display, fontWeight: 700,
          fontSize: 18, fontStyle: 'italic',
          letterSpacing: '-0.04em',
        }}>b.</div>
        <div>
          <div style={{
            fontFamily: wsStyles.display, fontWeight: 700, fontSize: 18,
            lineHeight: 1, letterSpacing: '-0.02em',
          }}>BVSWebDesign</div>
          <div style={{
            fontFamily: wsStyles.display, fontSize: 11, fontWeight: 500,
            color: wsStyles.ink3, marginTop: 2,
          }}>The Skipton workshop</div>
        </div>
      </div>

      <nav style={{
        display: 'flex', gap: 4, alignItems: 'center',
        background: wsStyles.paperHi,
        border: `1px solid ${wsStyles.ruleSoft}`,
        padding: 4,
        borderRadius: 999,
      }}>
        {[
          ['home', 'Home'],
          ['services', 'Services'],
          ['case', 'Work'],
          ['blog', 'Field notes'],
          ['home', 'About'],
        ].map(([id, label], i) => {
          const active = page === id && i !== 4;
          return (
            <a
              key={label + i}
              href="#"
              onClick={(e) => { e.preventDefault(); setPage(id); }}
              style={{
                fontFamily: wsStyles.display,
                fontSize: 14,
                fontWeight: 500,
                padding: '8px 16px',
                color: active ? wsStyles.paperHi : wsStyles.ink,
                background: active ? wsStyles.ink : 'transparent',
                borderRadius: 999,
                textDecoration: 'none',
                transition: 'all .15s',
              }}
              onMouseEnter={(e) => {
                if (!active) e.currentTarget.style.background = wsStyles.paperShade;
              }}
              onMouseLeave={(e) => {
                if (!active) e.currentTarget.style.background = 'transparent';
              }}
            >{label}</a>
          );
        })}
      </nav>

      <a href="#" style={{
        ...wsBtnAccent,
      }}>Start a project →</a>
    </header>
  );
}

const wsBtnAccent = {
  display: 'inline-flex', alignItems: 'center', gap: 8,
  fontFamily: wsStyles.display, fontSize: 14, fontWeight: 600,
  background: 'var(--accent-b)', color: wsStyles.paperHi,
  padding: '11px 18px', borderRadius: 999, textDecoration: 'none',
  border: `1px solid var(--accent-b)`,
  letterSpacing: '-0.005em',
};
const wsBtnInk = {
  ...wsBtnAccent,
  background: wsStyles.ink, borderColor: wsStyles.ink,
};
const wsBtnGhost = {
  display: 'inline-flex', alignItems: 'center', gap: 8,
  fontFamily: wsStyles.display, fontSize: 14, fontWeight: 600,
  background: 'transparent', color: wsStyles.ink,
  padding: '10px 17px', borderRadius: 999, textDecoration: 'none',
  border: `1px solid ${wsStyles.ink}`,
};

function WsFooter() {
  return (
    <footer style={{
      marginTop: 64,
      padding: '48px 48px 24px',
      background: wsStyles.ink,
      color: wsStyles.paperHi,
      borderRadius: '32px 32px 0 0',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 36, alignItems: 'start' }}>
        <div>
          <span style={wsChip('a')}>● Open for September 2026</span>
          <h2 style={{
            fontFamily: wsStyles.display, fontWeight: 600,
            fontSize: 56, lineHeight: 0.95, letterSpacing: '-0.03em',
            margin: '20px 0 14px',
          }}>
            Got an idea<br/>
            <span style={{ fontStyle: 'italic', color: 'var(--accent-b)' }}>worth</span> building?
          </h2>
          <p style={{ fontFamily: wsStyles.serif, fontSize: 15, lineHeight: 1.55, opacity: 0.7, maxWidth: '36ch', margin: '0 0 18px' }}>
            One call. No deck. Tell me what's broken, what's working, and where you want to be by Christmas.
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            <a href="#" style={{
              ...wsBtnAccent,
              background: 'var(--accent-a)', borderColor: 'var(--accent-a)',
            }}>Book a 30-min call →</a>
            <a href="#" style={{
              ...wsBtnGhost,
              color: wsStyles.paperHi, borderColor: 'rgba(255,255,255,0.3)',
            }}>ben@bvswebdesign.co.uk</a>
          </div>
        </div>
        {[
          ['Studio', ['Home', 'Services', 'Work', 'Field notes', 'About']],
          ['Services', ['Website Design', 'Care Plans', 'Growth Plans', 'Audits']],
          ['Elsewhere', ['Are.na', 'LinkedIn', 'Read.cv', 'Substack']],
        ].map(([h, items]) => (
          <div key={h}>
            <div style={{
              fontFamily: wsStyles.display, fontSize: 11, fontWeight: 600,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.5)', marginBottom: 12,
            }}>{h}</div>
            {items.map(x => (
              <div key={x} style={{ fontFamily: wsStyles.display, fontSize: 14, lineHeight: 2, opacity: 0.9 }}>{x}</div>
            ))}
          </div>
        ))}
      </div>
      <div style={{
        marginTop: 36, paddingTop: 18,
        borderTop: '1px solid rgba(255,255,255,0.12)',
        display: 'flex', justifyContent: 'space-between',
        fontFamily: wsStyles.display, fontSize: 12, color: 'rgba(255,255,255,0.5)',
      }}>
        <span>© 2026 BVSWebDesign · Skipton, North Yorkshire</span>
        <span>Made by a human · hosted on Hetzner · brewed on PG Tips</span>
      </div>
    </footer>
  );
}

// ── HERO LAYOUTS ─────────────────────────────────────────────────────────────
function WsHeroA() {
  // Stacked playful display + asymmetric inline image
  return (
    <section style={{ padding: '40px 48px 32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
        <span style={wsChip('a')}>● Available for September 2026</span>
        <span style={wsChipOutline}>+ 2 slots left this year</span>
      </div>
      <h1 style={{
        fontFamily: wsStyles.display, fontWeight: 600,
        fontSize: 124, lineHeight: 0.88, letterSpacing: '-0.04em',
        margin: 0, fontVariationSettings: '"wdth" 75',
      }}>
        WordPress sites
        <br/>
        for <span style={{
          fontStyle: 'italic', color: 'var(--accent-a)',
          fontVariationSettings: '"wdth" 100',
        }}>Yorkshire</span> businesses
        <br/>
        that <span style={{ background: 'var(--accent-b)', color: wsStyles.paperHi, padding: '0 14px', borderRadius: 16 }}>actually</span> earn.
      </h1>
      <div style={{ marginTop: 36, display: 'grid', gridTemplateColumns: '5fr 4fr', gap: 48, alignItems: 'end' }}>
        <p style={{ fontFamily: wsStyles.serif, fontSize: 20, lineHeight: 1.5, margin: 0, maxWidth: '46ch', color: wsStyles.ink2 }}>
          A small Skipton studio building thoughtful, fast WordPress sites for bridal boutiques, dental practices, hospitality and tradespeople across the dales — and quietly making them more money for years afterwards.
        </p>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
          <a href="#" style={wsBtnInk}>Book a 30-min call →</a>
          <a href="#" style={wsBtnGhost}>See the work</a>
        </div>
      </div>
    </section>
  );
}

function WsHeroB() {
  // Title + diptych imagery
  return (
    <section style={{ padding: '32px 48px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <span style={wsChip('b')}>● A one-person studio</span>
        <span style={wsChipOutline}>est. 2018</span>
      </div>
      <h1 style={{
        fontFamily: wsStyles.display, fontWeight: 600,
        fontSize: 102, lineHeight: 0.92, letterSpacing: '-0.04em',
        margin: '0 0 28px', maxWidth: '14ch',
      }}>
        Honest websites,
        <br/>
        <span style={{
          fontStyle: 'italic', color: 'var(--accent-a)',
        }}>built once,</span>
        <br/>
        looked after <span style={{ color: 'var(--accent-b)' }}>for years.</span>
      </h1>
      <div style={{ display: 'grid', gridTemplateColumns: '5fr 4fr', gap: 24 }}>
        <Placeholder label="Yorkshire Unicorn — homepage" height={360} radius={20} />
        <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 24 }}>
          <Placeholder label="Maidens & Ravens — index" height={168} radius={20} />
          <Placeholder label="Ilkley Dental — booking" height={168} radius={20} />
        </div>
      </div>
      <div style={{ marginTop: 24, display: 'flex', gap: 12, alignItems: 'center' }}>
        <a href="#" style={wsBtnInk}>Start a project →</a>
        <a href="#" style={wsBtnGhost}>See all 38 sites</a>
        <span style={{ fontFamily: wsStyles.display, fontSize: 13, color: wsStyles.ink3, marginLeft: 'auto' }}>
          Avg. PageSpeed <strong style={{ color: 'var(--accent-a)' }}>96/100</strong> · since 2018
        </span>
      </div>
    </section>
  );
}

function WsHeroC() {
  // Chunky split panel hero with quote + headline
  return (
    <section style={{ padding: '32px 48px' }}>
      <div style={{
        background: wsStyles.paperHi,
        border: `1px solid ${wsStyles.ruleSoft}`,
        borderRadius: 28,
        padding: 6,
        display: 'grid', gridTemplateColumns: '6fr 4fr', gap: 6,
      }}>
        <div style={{
          padding: '40px 36px',
          background: wsStyles.paper,
          borderRadius: 22,
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          minHeight: 480,
        }}>
          <div>
            <span style={wsChip('a')}>● Skipton-based</span>
          </div>
          <div>
            <h1 style={{
              fontFamily: wsStyles.display, fontWeight: 600,
              fontSize: 84, lineHeight: 0.92, letterSpacing: '-0.035em',
              margin: '0 0 20px',
            }}>
              I build the kind of website
              <br/>
              <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>your customers</span> wish
              <br/>
              you already had.
            </h1>
            <p style={{ fontFamily: wsStyles.serif, fontSize: 18, lineHeight: 1.55, margin: 0, maxWidth: '40ch', color: wsStyles.ink2 }}>
              Strategy, design, copy and build under one roof. WordPress where it makes sense, custom where it doesn't.
            </p>
            <div style={{ marginTop: 22, display: 'flex', gap: 10 }}>
              <a href="#" style={wsBtnInk}>Book a 30-min call →</a>
              <a href="#" style={wsBtnGhost}>What I charge</a>
            </div>
          </div>
        </div>
        <div style={{
          background: 'var(--accent-a)',
          color: wsStyles.paperHi,
          borderRadius: 22,
          padding: '32px 28px',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}>
          <div>
            <div style={{ fontFamily: wsStyles.display, fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.8 }}>From a client</div>
            <blockquote style={{
              fontFamily: wsStyles.display, fontWeight: 500,
              fontSize: 30, lineHeight: 1.1, letterSpacing: '-0.02em',
              margin: '14px 0 0',
            }}>
              “We had a <em>nice</em> website that did absolutely nothing. Within six weeks of relaunch we were turning enquiries away.”
            </blockquote>
          </div>
          <div style={{ fontFamily: wsStyles.display, fontSize: 13, opacity: 0.85, marginTop: 24 }}>
            — Sarah Whitfield<br/>
            <span style={{ opacity: 0.7 }}>Owner, The Yorkshire Unicorn · Skipton</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── HOME ─────────────────────────────────────────────────────────────────────
function WsHome({ heroVariant = 'A' }) {
  const Hero = heroVariant === 'B' ? WsHeroB : heroVariant === 'C' ? WsHeroC : WsHeroA;
  return (
    <>
      <Hero />

      {/* Logo strip */}
      <section style={{ padding: '24px 48px', borderTop: `1px solid ${wsStyles.ruleSoft}`, borderBottom: `1px solid ${wsStyles.ruleSoft}` }}>
        <div style={{ display: 'flex', gap: 36, alignItems: 'center', fontFamily: wsStyles.display, color: wsStyles.ink3 }}>
          <span style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>Recent clients —</span>
          {['The Yorkshire Unicorn', 'Maidens & Ravens', 'Ilkley Dental Care', 'Settle Stone Works', 'Otley & Co.', 'Wharfedale Walks'].map((n) => (
            <span key={n} style={{ fontFamily: wsStyles.display, fontWeight: 500, fontSize: 18, letterSpacing: '-0.01em', color: wsStyles.ink2 }}>{n}</span>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section style={{ padding: '56px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 32, alignItems: 'baseline', marginBottom: 32 }}>
          <span style={wsChipOutline}>01 — Services</span>
          <h2 style={{
            fontFamily: wsStyles.display, fontWeight: 600,
            fontSize: 56, lineHeight: 0.95, letterSpacing: '-0.03em', margin: 0,
          }}>
            Three ways we can <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>work together.</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {SERVICES.map((s, i) => (
            <div key={s.no} style={{
              padding: 28,
              borderRadius: 24,
              background: i === 1 ? 'var(--accent-a)' : wsStyles.paperHi,
              color: i === 1 ? wsStyles.paperHi : wsStyles.ink,
              border: `1px solid ${i === 1 ? 'transparent' : wsStyles.ruleSoft}`,
              display: 'flex', flexDirection: 'column',
              minHeight: 320,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{
                  fontFamily: wsStyles.display, fontSize: 13, fontWeight: 600,
                  opacity: i === 1 ? 0.85 : 0.55,
                }}>{s.no}</span>
                <span style={{
                  ...wsChipOutline,
                  borderColor: i === 1 ? 'rgba(255,255,255,0.5)' : wsStyles.ink,
                  color: i === 1 ? wsStyles.paperHi : wsStyles.ink,
                }}>{s.tag}</span>
              </div>
              <h3 style={{
                fontFamily: wsStyles.display, fontWeight: 600,
                fontSize: 32, lineHeight: 1.02, letterSpacing: '-0.025em',
                margin: '24px 0 12px',
              }}>{s.title}</h3>
              <p style={{ fontFamily: wsStyles.serif, fontSize: 15, lineHeight: 1.55, margin: '0 0 18px', opacity: i === 1 ? 0.92 : 1, color: i === 1 ? wsStyles.paperHi : wsStyles.ink2 }}>{s.short}</p>
              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 6 }}>
                {s.bullets.slice(0, 3).map((b) => (
                  <div key={b} style={{ fontFamily: wsStyles.display, fontSize: 13, opacity: 0.8, display: 'flex', gap: 8 }}>
                    <span style={{ color: i === 1 ? wsStyles.paperHi : 'var(--accent-a)' }}>+</span>{b}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Selected work */}
      <section style={{ padding: '40px 48px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 28 }}>
          <div>
            <span style={wsChipOutline}>02 — Selected work</span>
            <h2 style={{
              fontFamily: wsStyles.display, fontWeight: 600,
              fontSize: 56, lineHeight: 0.95, letterSpacing: '-0.03em',
              margin: '14px 0 0',
            }}>
              A few of our <span style={{ fontStyle: 'italic', color: 'var(--accent-b)' }}>favourites.</span>
            </h2>
          </div>
          <a href="#" style={wsBtnGhost}>All 38 projects →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 18 }}>
          {/* Featured large */}
          <a href="#" style={{
            padding: 14, background: wsStyles.paperHi, borderRadius: 24,
            border: `1px solid ${wsStyles.ruleSoft}`,
            textDecoration: 'none', color: wsStyles.ink,
            display: 'flex', flexDirection: 'column',
          }}>
            <Placeholder label="Yorkshire Unicorn — hero" height={380} radius={14} />
            <div style={{ padding: '18px 8px 6px' }}>
              <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
                <span style={wsChip('a')}>Hospitality</span>
                <span style={wsChipOutline}>Skipton · 2025</span>
              </div>
              <h3 style={{ fontFamily: wsStyles.display, fontSize: 30, fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.05, margin: '0 0 6px' }}>
                The Yorkshire Unicorn — <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>62%</span> direct bookings, month one.
              </h3>
              <p style={{ fontSize: 14, color: wsStyles.ink2, lineHeight: 1.55, margin: 0 }}>
                Launched a brand-new venue with a site that out-converted established hotels on Booking.com.
              </p>
            </div>
          </a>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {CASES.slice(1).map((c, i) => (
              <a key={c.slug} href="#" style={{
                padding: 14, background: wsStyles.paperHi, borderRadius: 24,
                border: `1px solid ${wsStyles.ruleSoft}`,
                textDecoration: 'none', color: wsStyles.ink,
                display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 14,
              }}>
                <Placeholder label={c.client} height={170} radius={14} />
                <div style={{ padding: '6px 4px 0', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <span style={wsChip(i === 0 ? 'b' : 'a')}>{c.sector.split('·')[0].trim()}</span>
                  </div>
                  <h3 style={{ fontFamily: wsStyles.display, fontSize: 22, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '10px 0 4px' }}>{c.client}</h3>
                  <p style={{ fontSize: 13, color: wsStyles.ink2, lineHeight: 1.5, margin: 0 }}>{c.title}</p>
                  <div style={{ marginTop: 'auto', paddingTop: 8, fontFamily: wsStyles.display, fontSize: 13 }}>
                    <span style={{ color: 'var(--accent-a)', fontWeight: 700 }}>{c.metric1.value}</span> <span style={{ color: wsStyles.ink3 }}>{c.metric1.label}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Process strip */}
      <section style={{ padding: '40px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 32, alignItems: 'baseline', marginBottom: 24 }}>
          <span style={wsChipOutline}>03 — How we work</span>
          <h2 style={{
            fontFamily: wsStyles.display, fontWeight: 600,
            fontSize: 56, lineHeight: 0.95, letterSpacing: '-0.03em', margin: 0,
          }}>
            From kettle-on call to launch in <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>8–12 weeks.</span>
          </h2>
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12,
        }}>
          {[
            ['01', 'Free call', 'A proper chat. No deck.'],
            ['02', 'Discovery', 'Goals, audience, sitemap.'],
            ['03', 'Design', 'Figma drafts you can mark up.'],
            ['04', 'Build', 'Hand-built WordPress.'],
            ['05', 'Launch + care', 'And we keep going.'],
          ].map(([n, t, d], i) => (
            <div key={n} style={{
              padding: 22,
              borderRadius: 20,
              background: i % 2 === 0 ? wsStyles.paperHi : wsStyles.paperShade,
              border: `1px solid ${wsStyles.ruleSoft}`,
            }}>
              <div style={{ fontFamily: wsStyles.display, fontSize: 13, fontWeight: 600, color: 'var(--accent-a)' }}>{n}</div>
              <h3 style={{ fontFamily: wsStyles.display, fontSize: 22, fontWeight: 600, letterSpacing: '-0.02em', margin: '10px 0 6px' }}>{t}</h3>
              <p style={{ fontFamily: wsStyles.serif, fontSize: 13.5, color: wsStyles.ink2, lineHeight: 1.55, margin: 0 }}>{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

// ── SERVICES ─────────────────────────────────────────────────────────────────
function WsServices() {
  return (
    <>
      <section style={{ padding: '40px 48px 0' }}>
        <span style={wsChip('a')}>Services &amp; pricing · 2026</span>
        <h1 style={{
          fontFamily: wsStyles.display, fontWeight: 600,
          fontSize: 124, lineHeight: 0.88, letterSpacing: '-0.04em',
          margin: '16px 0 18px', maxWidth: '16ch',
        }}>
          Three services. <br/>
          <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>Honest prices.</span> <br/>
          <span style={{ color: 'var(--accent-b)' }}>No</span> nonsense.
        </h1>
        <p style={{ fontFamily: wsStyles.serif, fontSize: 19, lineHeight: 1.5, margin: 0, maxWidth: '54ch', color: wsStyles.ink2 }}>
          Most studios pad their site with twelve things they don't really deliver. Here are the three I do — properly, with prices on the website like a grown-up.
        </p>
      </section>

      {/* Service cards alternating */}
      <section style={{ padding: '48px 48px 24px', display: 'grid', gap: 18 }}>
        {SERVICES.map((s, i) => (
          <div key={s.no} style={{
            background: i === 1 ? 'var(--accent-b)' : wsStyles.paperHi,
            color: i === 1 ? wsStyles.paperHi : wsStyles.ink,
            borderRadius: 28,
            padding: '36px 40px',
            border: `1px solid ${i === 1 ? 'transparent' : wsStyles.ruleSoft}`,
            display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: 36,
            alignItems: 'start',
          }}>
            <div>
              <div style={{
                fontFamily: wsStyles.display, fontSize: 80, fontWeight: 600,
                lineHeight: 0.9, letterSpacing: '-0.04em',
                color: i === 1 ? wsStyles.paperHi : 'var(--accent-a)',
                fontStyle: 'italic',
              }}>{s.no}</div>
              <div style={{ fontFamily: wsStyles.display, fontSize: 13, fontWeight: 500, marginTop: 14, opacity: 0.8 }}>{s.tag}</div>
              {i === 1 && <div style={{
                ...wsChipOutline,
                borderColor: 'rgba(255,255,255,0.5)', color: wsStyles.paperHi,
                marginTop: 16,
              }}>★ Most booked</div>}
            </div>
            <div>
              <h2 style={{
                fontFamily: wsStyles.display, fontWeight: 600,
                fontSize: 52, lineHeight: 0.95, letterSpacing: '-0.03em',
                margin: '0 0 14px',
              }}>{s.title}</h2>
              <p style={{ fontFamily: wsStyles.serif, fontSize: 17, lineHeight: 1.55, margin: '0 0 20px', maxWidth: '46ch', opacity: i === 1 ? 0.95 : 1, color: i === 1 ? wsStyles.paperHi : wsStyles.ink2 }}>
                {s.short}
              </p>
              <a href="#" style={{
                ...wsBtnInk,
                background: i === 1 ? wsStyles.paperHi : wsStyles.ink,
                color: i === 1 ? wsStyles.ink : wsStyles.paperHi,
                borderColor: i === 1 ? wsStyles.paperHi : wsStyles.ink,
              }}>Enquire about {s.title.toLowerCase()} →</a>
            </div>
            <div>
              <div style={{
                fontFamily: wsStyles.display, fontSize: 11, fontWeight: 600,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                opacity: 0.6, marginBottom: 12,
              }}>Included</div>
              {s.bullets.map((b) => (
                <div key={b} style={{
                  display: 'flex', gap: 10, padding: '6px 0',
                  fontFamily: wsStyles.serif, fontSize: 14.5, lineHeight: 1.4,
                  borderBottom: `1px solid ${i === 1 ? 'rgba(255,255,255,0.15)' : wsStyles.ruleSoft}`,
                }}>
                  <span style={{
                    color: i === 1 ? wsStyles.paperHi : 'var(--accent-a)',
                    fontFamily: wsStyles.display, fontWeight: 700,
                  }}>+</span>{b}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* What you won't pay for */}
      <section style={{ padding: '24px 48px 0' }}>
        <div style={{
          background: wsStyles.ink, color: wsStyles.paperHi,
          borderRadius: 28, padding: '36px 40px',
          display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 32,
        }}>
          <div>
            <span style={{ ...wsChip('a'), background: 'var(--accent-a)' }}>● The fine print</span>
            <h2 style={{
              fontFamily: wsStyles.display, fontWeight: 600,
              fontSize: 48, lineHeight: 0.95, letterSpacing: '-0.03em',
              margin: '16px 0 0',
            }}>
              Things you <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>won't</span> pay extra for.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {[
              'Setting up your domain',
              'GDPR cookie banner',
              'Privacy &amp; T&amp;Cs templates',
              'Basic SEO meta + sitemap',
              'Training video for editing',
              '30 days of bug-fixes after launch',
            ].map((x) => (
              <div key={x} style={{
                fontFamily: wsStyles.display, fontSize: 14.5, display: 'flex', gap: 10,
                padding: '8px 0', borderTop: '1px solid rgba(255,255,255,0.12)',
              }} dangerouslySetInnerHTML={{ __html: `<span style="color:var(--accent-a)">✓</span> ${x}` }}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ── BLOG / FIELD NOTES ──────────────────────────────────────────────────────
function WsBlog() {
  const [hot, ...rest] = BLOG_POSTS;
  return (
    <>
      <section style={{ padding: '40px 48px 0' }}>
        <span style={wsChip('a')}>Field notes</span>
        <h1 style={{
          fontFamily: wsStyles.display, fontWeight: 600,
          fontSize: 124, lineHeight: 0.88, letterSpacing: '-0.04em',
          margin: '16px 0 18px',
        }}>
          Things I've learnt
          <br/>
          <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>building</span> sites for
          <br/>
          Yorkshire <span style={{ color: 'var(--accent-b)' }}>businesses.</span>
        </h1>
        <p style={{ fontFamily: wsStyles.serif, fontSize: 19, lineHeight: 1.5, margin: 0, maxWidth: '52ch', color: wsStyles.ink2 }}>
          Short essays on web design trends, plain-English SEO advice, and the unglamorous craft of making small business websites do their job.
        </p>
      </section>

      <section style={{ padding: '32px 48px 0' }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {[['All', 27], ['Trends', 8], ['Process', 6], ['Tips', 9], ['SEO', 4]].map(([t, n], i) => (
            <a key={t} href="#" style={{
              ...wsChipOutline,
              fontSize: 13,
              background: i === 0 ? wsStyles.ink : 'transparent',
              color: i === 0 ? wsStyles.paperHi : wsStyles.ink,
              borderColor: wsStyles.ink,
              textDecoration: 'none',
              padding: '8px 16px',
            }}>{t} <span style={{ opacity: 0.6, marginLeft: 4 }}>{n}</span></a>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section style={{ padding: '28px 48px 0' }}>
        <a href="#" style={{
          display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 6,
          background: wsStyles.paperHi, padding: 6, borderRadius: 28,
          border: `1px solid ${wsStyles.ruleSoft}`,
          textDecoration: 'none', color: wsStyles.ink,
        }}>
          <Placeholder label="Lead essay illustration" height={420} radius={22} />
          <div style={{ padding: '32px 30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', gap: 8 }}>
                <span style={wsChip('a')}>● {hot.cat}</span>
                <span style={wsChipOutline}>{hot.read} read · {hot.date}</span>
              </div>
              <h2 style={{
                fontFamily: wsStyles.display, fontWeight: 600,
                fontSize: 44, lineHeight: 1, letterSpacing: '-0.03em',
                margin: '22px 0 18px',
              }}>
                Why <em>“make it pop”</em> is killing your <span style={{ color: 'var(--accent-b)' }}>small business</span> website.
              </h2>
              <p style={{ fontFamily: wsStyles.serif, fontSize: 17, lineHeight: 1.55, margin: 0, color: wsStyles.ink2 }}>
                {hot.excerpt}
              </p>
            </div>
            <div style={{ marginTop: 28 }}>
              <span style={wsBtnInk}>Read the essay →</span>
            </div>
          </div>
        </a>
      </section>

      {/* Grid */}
      <section style={{ padding: '32px 48px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }}>
          {rest.map((p) => (
            <a key={p.title} href="#" style={{
              background: wsStyles.paperHi, padding: 22, borderRadius: 24,
              border: `1px solid ${wsStyles.ruleSoft}`,
              textDecoration: 'none', color: wsStyles.ink,
              display: 'flex', flexDirection: 'column', gap: 14,
              minHeight: 220,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={wsChip('b')}>● {p.cat}</span>
                <span style={{ fontFamily: wsStyles.display, fontSize: 12, color: wsStyles.ink3 }}>{p.date} · {p.read}</span>
              </div>
              <h3 style={{
                fontFamily: wsStyles.display, fontWeight: 600,
                fontSize: 26, lineHeight: 1.05, letterSpacing: '-0.025em',
                margin: 0,
              }}>{p.title}</h3>
              <p style={{ fontFamily: wsStyles.serif, fontSize: 14.5, lineHeight: 1.55, color: wsStyles.ink2, margin: 0, flex: 1 }}>
                {p.excerpt}
              </p>
              <div style={{ fontFamily: wsStyles.display, fontSize: 13, fontWeight: 600, color: 'var(--accent-a)' }}>Read →</div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

// ── CASE STUDY ──────────────────────────────────────────────────────────────
function WsCase() {
  const c = CASES[2];
  return (
    <>
      <section style={{ padding: '32px 48px 0' }}>
        <div style={{ display: 'flex', gap: 8 }}>
          <span style={wsChip('a')}>● Case study</span>
          <span style={wsChipOutline}>Healthcare · Ilkley · 2024</span>
        </div>
        <h1 style={{
          fontFamily: wsStyles.display, fontWeight: 600,
          fontSize: 96, lineHeight: 0.9, letterSpacing: '-0.04em',
          margin: '18px 0 22px',
        }}>
          Ilkley Dental Care —
          <br/>
          from a <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>broken</span> contact form
          <br/>
          to <span style={{ color: 'var(--accent-b)' }}>30+ enquiries</span> a month.
        </h1>
        <p style={{ fontFamily: wsStyles.serif, fontSize: 19, lineHeight: 1.55, margin: 0, maxWidth: '54ch', color: wsStyles.ink2 }}>
          A well-established practice with zero faith in their website. We rebuilt the lot — calmly, transparently — and watched the phone start ringing again.
        </p>
      </section>

      {/* Wide hero image with floating metric card */}
      <section style={{ padding: '32px 48px', position: 'relative' }}>
        <div style={{ position: 'relative' }}>
          <Placeholder label="Ilkley Dental Care — homepage" height={460} radius={22} />
          <div style={{
            position: 'absolute', right: 24, bottom: -32,
            background: 'var(--accent-a)', color: wsStyles.paperHi,
            borderRadius: 22, padding: '20px 24px', minWidth: 280,
            boxShadow: '0 18px 40px rgba(0,0,0,0.18)',
          }}>
            <div style={{ fontFamily: wsStyles.display, fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.85 }}>Bottom line</div>
            <div style={{ fontFamily: wsStyles.display, fontSize: 56, fontWeight: 600, letterSpacing: '-0.04em', lineHeight: 1, marginTop: 8 }}>30+ <span style={{ fontStyle: 'italic' }}>enquiries</span></div>
            <div style={{ fontFamily: wsStyles.display, fontSize: 13, opacity: 0.85, marginTop: 6 }}>per month, every month since launch</div>
          </div>
        </div>
      </section>

      {/* Meta + intro */}
      <section style={{ padding: '52px 48px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 36 }}>
          <div style={{
            background: wsStyles.paperHi, borderRadius: 22, padding: 24,
            border: `1px solid ${wsStyles.ruleSoft}`,
          }}>
            <div style={{ fontFamily: wsStyles.display, fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: wsStyles.ink3, marginBottom: 12 }}>Project</div>
            {[
              ['Client', 'Ilkley Dental Care'],
              ['Sector', 'Private &amp; NHS dentistry'],
              ['Location', 'Ilkley, W. Yorks'],
              ['Scope', 'Web, copy, booking'],
              ['Stack', 'WordPress + ACF'],
              ['Timeline', '6 weeks · Q3 2024'],
            ].map(([k, v]) => (
              <div key={k} style={{
                display: 'flex', justifyContent: 'space-between',
                padding: '8px 0', borderTop: `1px solid ${wsStyles.ruleSoft}`,
                fontFamily: wsStyles.display, fontSize: 13.5,
              }}>
                <span style={{ color: wsStyles.ink3 }}>{k}</span>
                <span dangerouslySetInnerHTML={{ __html: v }}/>
              </div>
            ))}
          </div>
          <div>
            <h2 style={{
              fontFamily: wsStyles.display, fontWeight: 600,
              fontSize: 40, lineHeight: 1, letterSpacing: '-0.03em',
              margin: '0 0 16px',
            }}>
              <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>The problem.</span>&nbsp;The site had been broken since 2021. Nobody noticed.
            </h2>
            <p style={{ fontFamily: wsStyles.serif, fontSize: 17, lineHeight: 1.6, color: wsStyles.ink2, margin: '0 0 16px', maxWidth: '60ch' }}>
              Dr. Thornton hadn't received a website enquiry in two years. He'd assumed the practice was “just a phone-call business”. We dug in and found the booking form had been silently failing since a 2021 plugin update.
            </p>
            <h2 style={{
              fontFamily: wsStyles.display, fontWeight: 600,
              fontSize: 30, lineHeight: 1.05, letterSpacing: '-0.025em',
              margin: '20px 0 12px',
            }}>
              <span style={{ fontStyle: 'italic', color: 'var(--accent-b)' }}>The approach.</span>&nbsp;Fix the basics. Then make it kind.
            </h2>
            <p style={{ fontFamily: wsStyles.serif, fontSize: 16, lineHeight: 1.6, color: wsStyles.ink2, margin: 0, maxWidth: '60ch' }}>
              We rebuilt on WordPress with a brief from scratch. Friendly, photographed-in-the-actual-surgery imagery. Real testimonials. A booking form that works on a phone — and an email alert when it doesn't, so it never silently breaks again.
            </p>
          </div>
        </div>
      </section>

      {/* Metric row */}
      <section style={{ padding: '24px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {[c.metric1, c.metric2, c.metric3].map((m, i) => (
            <div key={i} style={{
              padding: 28, borderRadius: 22,
              background: i === 1 ? 'var(--accent-b)' : wsStyles.paperHi,
              color: i === 1 ? wsStyles.paperHi : wsStyles.ink,
              border: `1px solid ${i === 1 ? 'transparent' : wsStyles.ruleSoft}`,
            }}>
              <div style={{ fontFamily: wsStyles.display, fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.7 }}>Result {i + 1}</div>
              <div style={{ fontFamily: wsStyles.display, fontSize: 72, fontWeight: 600, letterSpacing: '-0.04em', lineHeight: 1, margin: '12px 0 6px', color: i === 1 ? wsStyles.paperHi : 'var(--accent-a)' }}>{m.value}</div>
              <div style={{ fontFamily: wsStyles.display, fontSize: 14, opacity: 0.85 }}>{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section style={{ padding: '40px 48px' }}>
        <div style={{
          background: wsStyles.ink, color: wsStyles.paperHi,
          borderRadius: 28, padding: '44px 40px',
        }}>
          <blockquote style={{
            fontFamily: wsStyles.display, fontWeight: 500,
            fontSize: 44, lineHeight: 1.1, letterSpacing: '-0.025em',
            margin: 0, maxWidth: '20ch',
          }}>
            “The first web person who didn't make me feel stupid. <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>And the form actually emails us now.</span>”
          </blockquote>
          <div style={{ fontFamily: wsStyles.display, fontSize: 14, marginTop: 22, opacity: 0.7 }}>
            — Dr. James Thornton · Principal, Ilkley Dental Care
          </div>
        </div>
      </section>
    </>
  );
}

function WorkshopDirection({ page, setPage, heroVariant }) {
  return (
    <WsShell page={page} setPage={setPage}>
      {page === 'home' && <WsHome heroVariant={heroVariant} />}
      {page === 'services' && <WsServices />}
      {page === 'blog' && <WsBlog />}
      {page === 'case' && <WsCase />}
    </WsShell>
  );
}

window.WorkshopDirection = WorkshopDirection;
