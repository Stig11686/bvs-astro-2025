// site-home.jsx — Home (§2.1) + About (§2.2)

// ── HOME ──────────────────────────────────────────────────────────────────────
function HomePage({ setPage }) {
  return (
    <>
      {/* HERO */}
      <section className="gutter" style={{ padding: '64px 56px 44px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.55fr 1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <Eyebrow>WordPress web design · Skipton, Yorkshire &amp; the UK</Eyebrow>
            <h1 className="serif" style={{
              fontWeight: 400, fontSize: 76, lineHeight: 0.98, letterSpacing: '-0.025em',
              margin: '18px 0 0',
            }}>
              Websites that get service businesses <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>more enquiries</span>, more bookings, and <span style={{ fontStyle: 'italic' }}>found on Google</span>.
            </h1>
            <p className="serif" style={{ fontSize: 21, lineHeight: 1.5, color: 'var(--ink-2)', margin: '24px 0 0', maxWidth: '46ch' }}>
              WordPress web design — based in Skipton, working across Yorkshire and the UK.
            </p>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginTop: 30 }}>
              <CTA kind="solid" to={LINKS.start}>Start a Project →</CTA>
              <a href="#work" className="underlink"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}>See my work</a>
            </div>
          </div>
          <div className="ph" style={{ height: 440 }}>⌐ Steve — headshot</div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <section className="gutter" style={{ padding: '0 56px 8px' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          border: '1px solid var(--rule)',
        }}>
          {PROOF_STATS.map((s, i, arr) => (
            <StatCard key={s.sub} {...s} border={i < arr.length - 1} />
          ))}
        </div>
      </section>

      {/* I CAN HELP IF... */}
      <section className="gutter" style={{ padding: '56px 56px' }}>
        <h2 className="serif" style={{ fontSize: 48, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1, marginBottom: 32 }}>
          I can help if<span style={{ color: 'var(--accent-a)' }}>…</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, borderTop: '1px solid var(--rule)', borderLeft: '1px solid var(--rule)' }}>
          {HELP_CARDS.map((c, i) => (
            <a key={c.title} href="#"
              onClick={(e) => { e.preventDefault(); setPage(c.target); }}
              style={{
                display: 'block', padding: '32px 36px',
                borderRight: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)',
                textDecoration: 'none', color: 'var(--ink)',
                transition: 'background .15s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--paper-2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <span className="serif" style={{ fontStyle: 'italic', fontSize: 20, color: 'var(--accent-a)' }}>0{i + 1}</span>
                <span className="serif" style={{ fontStyle: 'italic', fontSize: 16, color: 'var(--accent-a)' }}>→</span>
              </div>
              <h3 className="serif" style={{ fontSize: 27, fontWeight: 400, letterSpacing: '-0.015em', lineHeight: 1.1, margin: '12px 0 12px', maxWidth: '20ch' }}>{c.title}</h3>
              <p style={{ fontSize: 14.5, color: 'var(--ink-2)', lineHeight: 1.6, margin: 0, maxWidth: '46ch' }}>{c.body}</p>
            </a>
          ))}
        </div>
      </section>

      {/* ABOUT / HOW I WORK */}
      <section className="gutter" style={{ padding: '8px 56px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 48, alignItems: 'start' }}>
          <div>
            <Eyebrow>About</Eyebrow>
            <h2 className="serif" style={{ fontSize: 46, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.02, marginTop: 14 }}>
              Results, not just <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>redesigns</span>.
            </h2>
          </div>
          <div>
            <p className="serif" style={{ fontSize: 20, lineHeight: 1.55, color: 'var(--ink-2)', margin: 0, maxWidth: '60ch' }}>
              I'm Steve. I design and build WordPress websites for service businesses — and I care about what happens after launch, not just how it looks on handover day.
            </p>
            <p className="serif" style={{ fontSize: 20, lineHeight: 1.55, color: 'var(--ink-2)', margin: '20px 0 0', maxWidth: '60ch' }}>
              Every project starts with understanding your business: who your customers are, what they need to see before they get in touch, and what's actually stopping them right now. The design comes after that, not before it.
            </p>
            <a href="#" className="underlink" style={{ display: 'inline-block', marginTop: 22 }}
              onClick={(e) => { e.preventDefault(); setPage('about'); }}>
              More about how I work →
            </a>
          </div>
        </div>
      </section>

      {/* PORTFOLIO STRIP */}
      <section id="work" className="gutter" style={{ padding: '52px 56px', borderTop: '1px solid var(--rule)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 28 }}>
          <h2 className="serif" style={{ fontSize: 48, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1 }}>Recent work</h2>
          <a href="#" className="btn btn--ghost" onClick={(e) => { e.preventDefault(); setPage('portfolio'); }}>View all projects →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
          {PORTFOLIO.map((p) => (
            <a key={p.slug} href="#"
              onClick={(e) => { e.preventDefault(); setPage(p.target); }}
              style={{ textDecoration: 'none', color: 'var(--ink)', display: 'block' }}>
              <div className="ph" style={{ height: 200, position: 'relative' }}>
                ⌐ {p.client}
                {p.placeholder && (
                  <div className="mono" style={{
                    position: 'absolute', top: 12, left: 12,
                    fontSize: 9.5, letterSpacing: '0.08em', textTransform: 'uppercase',
                    background: 'var(--ink)', color: 'var(--paper)', padding: '4px 8px',
                  }}>Coming soon</div>
                )}
              </div>
              <div className="label" style={{ marginTop: 14 }}>{p.sector}</div>
              <h3 className="serif" style={{ fontSize: 21, fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1.15, margin: '6px 0 6px' }}>{p.client}</h3>
              <div style={{ fontSize: 13, color: 'var(--accent-a)' }}>{p.stat}</div>
            </a>
          ))}
        </div>
      </section>

      {/* REVIEWS CAROUSEL */}
      <ReviewsCarousel />
    </>
  );
}

// ── Reviews carousel ───────────────────────────────────────────────────────────
function StarRow({ n = 5, color }) {
  return (
    <div aria-label={n + ' out of 5 stars'} style={{ display: 'flex', gap: 3, color: color || 'var(--accent-a)', fontSize: 15, letterSpacing: 2 }}>
      {Array.from({ length: n }).map((_, i) => <span key={i}>★</span>)}
    </div>
  );
}

function ReviewCard({ r }) {
  const isFace = r.shape === 'face';
  return (
    <figure style={{
      margin: 0, flex: '0 0 calc((100% - 48px) / 3)', minWidth: 0,
      display: 'flex', flexDirection: 'column', gap: 18,
      background: 'var(--paper)', border: '1px solid var(--rule)',
      padding: '28px 28px 26px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div className="ph" style={{
          width: 56, height: 56, flex: '0 0 56px',
          borderRadius: isFace ? '50%' : 8,
          fontSize: 8.5, letterSpacing: '0.04em', padding: 4, lineHeight: 1.2,
        }}>{r.photo}</div>
        <div style={{ minWidth: 0 }}>
          <div className="serif" style={{ fontSize: 19, letterSpacing: '-0.01em', lineHeight: 1.1 }}>{r.name}</div>
          <div className="label" style={{ marginTop: 5, lineHeight: 1.35 }}>{r.role}</div>
        </div>
      </div>
      <StarRow n={r.stars} />
      <blockquote className="serif" style={{
        margin: 0, fontSize: 19, lineHeight: 1.5, color: 'var(--ink-2)', flex: 1,
      }}>
        <span style={{ color: 'var(--accent-a)' }}>“</span>{r.quote}<span style={{ color: 'var(--accent-a)' }}>”</span>
      </blockquote>
    </figure>
  );
}

function ReviewsCarousel() {
  const perView = 3;
  const pages = Math.ceil(REVIEWS.length / perView);
  const [page, setPage] = useState(0);
  const go = (d) => setPage((p) => (p + d + pages) % pages);

  const navBtn = {
    width: 44, height: 44, borderRadius: '50%',
    border: '1px solid var(--ink)', background: 'transparent', color: 'var(--ink)',
    cursor: 'pointer', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'background .15s, color .15s', flex: '0 0 44px',
  };

  return (
    <section className="gutter" style={{ padding: '56px 56px 64px', borderTop: '1px solid var(--rule)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, gap: 24 }}>
        <div>
          <Eyebrow>Reviews</Eyebrow>
          <h2 className="serif" style={{ fontSize: 48, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.05, marginTop: 14 }}>
            What clients <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>actually say</span>.
          </h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href="#" className="label" style={{ color: 'var(--accent-a)', textDecoration: 'none' }}
            onClick={(e) => e.preventDefault()}>★ 5.0 on Google · 40+ reviews</a>
          <div style={{ display: 'flex', gap: 8 }}>
            <button aria-label="Previous reviews" style={navBtn} onClick={() => go(-1)}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--paper)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink)'; }}>←</button>
            <button aria-label="Next reviews" style={navBtn} onClick={() => go(1)}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--paper)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink)'; }}>→</button>
          </div>
        </div>
      </div>

      {/* Track */}
      <div style={{ overflow: 'hidden' }}>
        <div style={{
          display: 'flex', gap: 24,
          transform: `translateX(calc(-${page} * (100% + 24px)))`,
          transition: 'transform .45s cubic-bezier(.4,.0,.2,1)',
        }}>
          {Array.from({ length: pages }).map((_, pi) => (
            <div key={pi} style={{ flex: '0 0 100%', display: 'flex', gap: 24, minWidth: 0 }}>
              {REVIEWS.slice(pi * perView, pi * perView + perView).map((r, i) => (
                <ReviewCard key={pi + '-' + i} r={r} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 30 }}>
        {Array.from({ length: pages }).map((_, i) => (
          <button key={i} aria-label={'Go to review page ' + (i + 1)} onClick={() => setPage(i)}
            style={{
              width: page === i ? 26 : 9, height: 9, borderRadius: 999, border: 'none', padding: 0,
              background: page === i ? 'var(--accent-a)' : 'var(--rule)', cursor: 'pointer',
              transition: 'width .25s, background .25s',
            }} />
        ))}
      </div>
    </section>
  );
}

// ── ABOUT ─────────────────────────────────────────────────────────────────────
function AboutPage({ setPage }) {
  const results = [
    ['Ilkley Dental Care', 'went from a broken contact form and zero web enquiries to 30+ enquiries per month after a full rebuild.'],
    ['Rebecca Rennolds Permanent Beauty', 'built from scratch with no existing website; now generates 3–4k visits per month and ranks strongly for local search terms.'],
    ['Maidens & Ravens Bridal Boutique', 'launched a distinctive WooCommerce site and gained 30 Google reviews in the first three months.'],
  ];
  return (
    <>
      <section className="gutter" style={{ padding: '64px 56px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <Eyebrow>About Steve Marks</Eyebrow>
            <h1 className="serif" style={{
              fontWeight: 400, fontSize: 64, lineHeight: 1.02, letterSpacing: '-0.022em',
              margin: '16px 0 0',
            }}>
              I build websites that <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>work</span>. Then I stick around to make sure they <span style={{ fontStyle: 'italic' }}>keep working</span>.
            </h1>
          </div>
          <div className="ph" style={{ height: 420 }}>⌐ Steve — headshot</div>
        </div>
        <div style={{ marginTop: 36, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, maxWidth: 1100 }}>
          <p className="serif" style={{ fontSize: 19, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0 }}>
            I'm Steve — a freelance web designer and developer based in Skipton, North Yorkshire. I work with service businesses across Yorkshire and the UK to build WordPress websites that generate real enquiries, not just compliments.
          </p>
          <p className="serif" style={{ fontSize: 19, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0 }}>
            What I care about is what happens after launch. Anyone can build something that looks good in a browser. The question is whether it's actually bringing customers in six months later — and whether there's someone you can call when something goes wrong.
          </p>
        </div>
      </section>

      {/* How a project works */}
      <section className="gutter" style={{ padding: '40px 56px', borderTop: '1px solid var(--rule)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 48 }}>
          <h2 className="serif" style={{ fontSize: 40, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.05 }}>
            How a <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>project</span> works
          </h2>
          <div>
            <p className="serif" style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0, maxWidth: '62ch' }}>
              Every project starts with a conversation about your business — not your colour scheme. I want to understand who your customers are, what they need to see before they get in touch, and what's currently getting in the way.
            </p>
            <p className="serif" style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--ink-2)', margin: '18px 0 0', maxWidth: '62ch' }}>
              From there I handle everything: strategy, copy guidance, design, build, and launch. Once the site is live, most of my clients stay on a support plan so I'm looking after security, updates, and ongoing improvements without them having to think about it. Some just want the build — that's fine too.
            </p>
            <p className="serif" style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--ink)', margin: '18px 0 0', maxWidth: '62ch' }}>
              Either way, you work directly with me throughout. <em style={{ color: 'var(--accent-a)' }}>No account managers, no handoffs to a junior.</em>
            </p>
          </div>
        </div>
      </section>

      {/* What that looks like in practice */}
      <section className="gutter" style={{ padding: '40px 56px', borderTop: '1px solid var(--rule)' }}>
        <h2 className="serif" style={{ fontSize: 40, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 28 }}>
          What that looks like <span style={{ fontStyle: 'italic' }}>in practice</span>
        </h2>
        <div style={{ borderTop: '1px solid var(--rule)' }}>
          {results.map(([client, body]) => (
            <div key={client} style={{
              display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 32,
              padding: '24px 0', borderBottom: '1px solid var(--rule-soft)',
            }}>
              <h3 className="serif" style={{ fontSize: 24, fontWeight: 400, letterSpacing: '-0.01em', color: 'var(--accent-a)' }}>{client}</h3>
              <p className="serif" style={{ fontSize: 19, lineHeight: 1.5, color: 'var(--ink-2)', margin: 0, maxWidth: '60ch' }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial — dark slab */}
      <section className="dark gutter" style={{ padding: '64px 56px' }}>
        <Eyebrow>Word from a client</Eyebrow>
        <blockquote className="serif" style={{
          fontStyle: 'italic', fontSize: 38, lineHeight: 1.28, letterSpacing: '-0.012em',
          margin: '22px 0 0', maxWidth: '34ch',
        }}>
          <span style={{ color: 'var(--accent-a)' }}>“</span>{T_ABOUT.quote}<span style={{ color: 'var(--accent-a)' }}>”</span>
        </blockquote>
        <div style={{ marginTop: 24, fontSize: 14, color: 'rgba(255,255,255,0.65)' }}>
          <strong style={{ color: 'var(--dark-paper)' }}>{T_ABOUT.name}</strong> · {T_ABOUT.role}
        </div>
      </section>
    </>
  );
}

Object.assign(window, { HomePage, AboutPage, ReviewsCarousel, ReviewCard, StarRow });
