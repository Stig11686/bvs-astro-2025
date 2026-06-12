// site-ui.jsx — shell + shared components.
// TopNav (with Services dropdown), per-page CTA, DarkCTA, Footer, helpers.

// ── small helpers ─────────────────────────────────────────────────────────────
function Label({ accent, children, style }) {
  return <div className={'label' + (accent ? ' label--accent' : '')} style={style}>{children}</div>;
}

// Section eyebrow used across pages
function Eyebrow({ children }) {
  return <Label accent>— {children}</Label>;
}

// External CTA (TidyCal etc.) opens in new tab; internal navigates the SPA.
function CTA({ kind = 'solid', to, page, setPage, children, style }) {
  const cls = 'btn btn--' + kind;
  if (page) {
    return (
      <a href="#" className={cls} style={style}
         onClick={(e) => { e.preventDefault(); setPage(page); }}>{children}</a>
    );
  }
  return <a href={to} className={cls} style={style} target="_blank" rel="noopener">{children}</a>;
}

// ── Top navigation ────────────────────────────────────────────────────────────
function TopNav({ page, setPage }) {
  const [openServices, setOpenServices] = useState(false);
  const closeTimer = useRef(null);

  const open = () => { clearTimeout(closeTimer.current); setOpenServices(true); };
  const close = () => { closeTimer.current = setTimeout(() => setOpenServices(false), 120); };

  const isServices = ['design', 'rescue', 'support', 'audit'].includes(page);

  const navItem = (id, label, active) => (
    <a key={label} href="#"
      onClick={(e) => { e.preventDefault(); setPage(id); }}
      className="serif"
      style={{
        fontSize: 17, fontStyle: 'italic',
        color: active ? 'var(--accent-a)' : 'var(--ink)',
        textDecoration: 'none',
        borderBottom: '1px solid ' + (active ? 'var(--accent-a)' : 'transparent'),
        paddingBottom: 2, transition: 'color .15s, border-color .15s',
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = 'var(--accent-a)'; }}
      onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = 'var(--ink)'; }}
    >{label}</a>
  );

  // CTA rules from §1.3
  let cta = null;
  if (page === 'audit') {
    cta = <CTA kind="solid" to={LINKS.audit} style={{ marginLeft: 8 }}>Book a Free Audit →</CTA>;
  } else if (page !== 'contact') {
    cta = <CTA kind="solid" to={LINKS.start} style={{ marginLeft: 8 }}>Start a Project →</CTA>;
  }

  return (
    <header
      className="gutter"
      style={{
        display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center',
        paddingTop: 22, paddingBottom: 20,
        borderBottom: '1px solid var(--rule)',
        background: 'color-mix(in srgb, var(--paper) 88%, transparent)',
        backdropFilter: 'blur(8px)',
        position: 'sticky', top: 0, zIndex: 50,
      }}
    >
      <div onClick={() => setPage('home')} style={{ cursor: 'pointer' }}>
        <div className="serif" style={{ fontSize: 23, fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1 }}>
          BVS<span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>Web</span>Design
        </div>
        <div className="label" style={{ marginTop: 5 }}>Skipton · WordPress · since 2018</div>
      </div>

      <nav style={{ display: 'flex', gap: 26, alignItems: 'center' }}>
        {navItem('home', 'Home', page === 'home')}
        {navItem('about', 'About', page === 'about')}

        {/* Services dropdown */}
        <div style={{ position: 'relative' }} onMouseEnter={open} onMouseLeave={close}>
          <a href="#" className="serif"
            onClick={(e) => { e.preventDefault(); setPage('design'); }}
            style={{
              fontSize: 17, fontStyle: 'italic',
              color: isServices ? 'var(--accent-a)' : 'var(--ink)',
              textDecoration: 'none',
              borderBottom: '1px solid ' + (isServices ? 'var(--accent-a)' : 'transparent'),
              paddingBottom: 2, whiteSpace: 'nowrap',
              display: 'inline-flex', alignItems: 'center', gap: 6,
            }}>
            Services
            <span style={{
              fontSize: 11, transition: 'transform .2s',
              transform: openServices ? 'rotate(180deg)' : 'none',
              display: 'inline-block',
            }}>▾</span>
          </a>

          {openServices && (
            <div style={{
              position: 'absolute', top: 'calc(100% + 14px)', right: 0,
              width: 380, background: 'var(--paper)',
              border: '1px solid var(--rule)',
              boxShadow: '0 24px 60px rgba(0,0,0,0.16)',
              padding: 8, zIndex: 60,
            }}>
              {SERVICES_NAV.map((s) => {
                const active = page === s.id;
                return (
                  <a key={s.id} href="#"
                    onClick={(e) => { e.preventDefault(); setOpenServices(false); setPage(s.id); }}
                    style={{
                      display: 'block', padding: '14px 16px', textDecoration: 'none',
                      color: 'var(--ink)', borderRadius: 2,
                      background: active ? 'var(--paper-2)' : 'transparent',
                      transition: 'background .12s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'var(--paper-2)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = active ? 'var(--paper-2)' : 'transparent'}
                  >
                    <div className="serif" style={{ fontSize: 19, letterSpacing: '-0.01em', display: 'flex', alignItems: 'baseline', gap: 8 }}>
                      {s.title}
                      <span style={{ color: 'var(--accent-a)', fontStyle: 'italic', fontSize: 14 }}>→</span>
                    </div>
                    <div style={{ fontSize: 12.5, color: 'var(--ink-2)', lineHeight: 1.5, marginTop: 4 }}>{s.desc}</div>
                  </a>
                );
              })}
            </div>
          )}
        </div>

        {navItem('portfolio', 'Portfolio', page === 'portfolio' || page === 'case')}
        {navItem('blog', 'Blog', page === 'blog')}
        {navItem('contact', 'Contact', page === 'contact')}
        {cta}
      </nav>
    </header>
  );
}

// ── Stat card (proof strip) ────────────────────────────────────────────────────
function StatCard({ value, label, sub, border }) {
  return (
    <div style={{
      padding: '28px 26px',
      borderRight: border ? '1px solid var(--rule)' : 'none',
    }}>
      <div className="serif" style={{ fontSize: 64, fontStyle: 'italic', lineHeight: 0.95, color: 'var(--accent-a)' }}>{value}</div>
      <div className="serif" style={{ fontSize: 19, marginTop: 12, letterSpacing: '-0.01em' }}>{label}</div>
      <div className="label" style={{ marginTop: 6 }}>{sub}</div>
    </div>
  );
}

// ── Dark CTA above footer (consistent across pages) ─────────────────────────────
function DarkCTA({ setPage, heading, body, primary }) {
  return (
    <section className="dark gutter" style={{ padding: '84px 56px 36px' }}>
      <Eyebrow>Currently booking · 2 project slots left this year</Eyebrow>
      <h2 className="serif" style={{
        fontWeight: 400, fontSize: 96, lineHeight: 0.94, letterSpacing: '-0.03em',
        margin: '20px 0 32px', maxWidth: '16ch',
      }}>
        {heading}
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 56, alignItems: 'end' }}>
        <p className="serif" style={{ fontSize: 21, lineHeight: 1.5, color: 'rgba(255,255,255,0.75)', maxWidth: '52ch' }}>
          {body}
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
          <CTA kind="accent" to={primary === 'audit' ? LINKS.audit : LINKS.start}>
            {primary === 'audit' ? 'Book a Free Audit →' : 'Start a Project →'}
          </CTA>
          <CTA kind="ghost-dark" page="contact" setPage={setPage}>Send a Message</CTA>
        </div>
      </div>
    </section>
  );
}

// ── Footer ──────────────────────────────────────────────────────────────────────
function Footer({ setPage }) {
  const col = (h, items) => (
    <div key={h}>
      <div className="label" style={{ marginBottom: 12, color: 'rgba(255,255,255,0.5)' }}>{h}</div>
      {items.map(([x, target, ext]) => (
        <a key={x} href={ext || '#'}
          target={ext ? '_blank' : undefined} rel={ext ? 'noopener' : undefined}
          onClick={(e) => { if (!ext) { e.preventDefault(); if (target) setPage(target); } }}
          className="serif" style={{
            display: 'block', fontSize: 16, fontStyle: 'italic', lineHeight: 1.85,
            color: 'var(--dark-paper)', textDecoration: 'none',
          }}>{x}</a>
      ))}
    </div>
  );
  return (
    <footer className="dark gutter" style={{ padding: '36px 56px 18px', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 36, alignItems: 'start' }}>
        <div onClick={() => setPage('home')} style={{ cursor: 'pointer' }}>
          <div className="serif" style={{ fontSize: 27, fontWeight: 500, letterSpacing: '-0.01em' }}>
            BVS<span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>Web</span>Design
          </div>
          <p className="serif" style={{ fontSize: 15, fontStyle: 'italic', marginTop: 10, color: 'rgba(255,255,255,0.6)', maxWidth: '34ch' }}>
            WordPress websites for service businesses — built in Skipton, working across Yorkshire and the UK.
          </p>
          <a href={LINKS.contact} onClick={(e) => { e.preventDefault(); setPage('contact'); }}
            className="serif" style={{ display: 'inline-block', marginTop: 14, fontSize: 15, color: 'var(--accent-a)', textDecoration: 'none', borderBottom: '1px solid var(--accent-a)' }}>
            hello@bvswebdesign.co.uk
          </a>
        </div>
        {col('Site', [['Home', 'home'], ['About', 'about'], ['Portfolio', 'portfolio'], ['Blog', 'blog'], ['Contact', 'contact']])}
        {col('Services', [['Website Design', 'design'], ['Website Rescue', 'rescue'], ['Support & Care', 'support'], ['Website Audit', 'audit']])}
        {col('Start', [['Start a Project', null, LINKS.start], ['Book a Free Audit', null, LINKS.audit]])}
      </div>
      <div className="mono" style={{
        marginTop: 32, paddingTop: 18, borderTop: '1px solid rgba(255,255,255,0.12)',
        display: 'flex', justifyContent: 'space-between',
        fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.04em',
      }}>
        <span>© 2026 BVS WEB DESIGN · SKIPTON, NORTH YORKSHIRE</span>
        <span>BUILT IN ASTRO · WORDPRESS WHERE IT EARNS ITS KEEP</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Label, Eyebrow, CTA, TopNav, StatCard, DarkCTA, Footer });
