// site-services.jsx — Website Design, Website Rescue, Website Support, Website Audit

// ── helper: a page-top hero used by service pages ──────────────────────────────
function ServiceHero({ eyebrow, children, intro, cta, ctaTo, maxW = '18ch' }) {
  return (
    <section className="gutter" style={{ padding: '64px 56px 32px' }}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="serif" style={{
        fontWeight: 400, fontSize: 76, lineHeight: 0.98, letterSpacing: '-0.024em',
        margin: '16px 0 22px', maxWidth: maxW,
      }}>{children}</h1>
      {intro}
      {cta && <div style={{ marginTop: 28 }}><CTA kind="solid" to={ctaTo}>{cta}</CTA></div>}
    </section>
  );
}

// ── WEBSITE DESIGN (§2.6 — strong content kept, first-person) ───────────────────
function DesignPage({ setPage }) {
  return (
    <>
      <ServiceHero
        eyebrow="Website Design"
        cta="Start a Project →" ctaTo={LINKS.start}
        intro={
          <p className="serif" style={{ fontSize: 20, lineHeight: 1.5, color: 'var(--ink-2)', maxWidth: '58ch' }}>
            A new WordPress website built around generating enquiries — not just looking good. I handle strategy, copy guidance, design, build and launch, then stay on to look after it.
          </p>
        }
      >
        A website built around <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>enquiries</span>, not applause.
      </ServiceHero>

      {/* What's included + process */}
      <section className="gutter" style={{ padding: '36px 56px', borderTop: '1px solid var(--rule)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          <div>
            <Label style={{ marginBottom: 14 }}>What's included</Label>
            <div style={{ borderTop: '1px solid var(--rule)' }}>
              {DESIGN_INCLUDES.map((b) => (
                <div key={b} className="serif" style={{
                  fontSize: 18, fontStyle: 'italic', lineHeight: 1.5,
                  padding: '11px 0', borderBottom: '1px solid var(--rule-soft)',
                  display: 'flex', gap: 12,
                }}>
                  <span style={{ color: 'var(--accent-a)', fontStyle: 'normal' }}>—</span>{b}
                </div>
              ))}
            </div>
          </div>
          <div>
            <Label style={{ marginBottom: 14 }}>How it goes</Label>
            <div style={{ borderTop: '1px solid var(--rule)' }}>
              {DESIGN_PROCESS.map(([n, t, d]) => (
                <div key={n} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 20, padding: '16px 0', borderBottom: '1px solid var(--rule-soft)' }}>
                  <div className="serif" style={{ fontStyle: 'italic', fontSize: 24, color: 'var(--accent-a)' }}>{n}</div>
                  <div>
                    <div className="serif" style={{ fontSize: 22, letterSpacing: '-0.01em' }}>{t}</div>
                    <div style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.5, marginTop: 4 }}>{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Result band */}
      <section className="gutter" style={{ padding: '40px 56px', borderTop: '1px solid var(--rule)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 32, alignItems: 'center' }}>
          <h2 className="serif" style={{ fontSize: 36, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.05 }}>
            Recently built
          </h2>
          <p className="serif" style={{ fontSize: 19, lineHeight: 1.5, color: 'var(--ink-2)', margin: 0, maxWidth: '56ch' }}>
            <strong style={{ color: 'var(--ink)' }}>Rebecca Rennolds Permanent Beauty</strong> — built from scratch with no existing website; now generates <span style={{ color: 'var(--accent-a)' }}>3–4k visits per month</span> and ranks strongly for local search terms.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginTop: 28 }}>
          <div className="ph" style={{ height: 280 }}>⌐ Desktop — homepage</div>
          <div className="ph" style={{ height: 280 }}>⌐ Mobile — services</div>
          <div className="ph" style={{ height: 280 }}>⌐ Booking flow</div>
        </div>
      </section>
    </>
  );
}

// ── WEBSITE RESCUE (§2.3 — new) ─────────────────────────────────────────────────
function RescuePage({ setPage }) {
  return (
    <>
      <ServiceHero
        eyebrow="Website Rescue"
        maxW="20ch"
        cta="Start a Project →" ctaTo={LINKS.start}
        intro={
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, maxWidth: 1080 }}>
            <p className="serif" style={{ fontSize: 19, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0 }}>
              A surprising number of small businesses are stuck with a website they can't access, can't update, or can't afford to keep — because of a developer who's gone quiet, a platform that's bleeding money, or someone who handed over a half-finished job and disappeared.
            </p>
            <p className="serif" style={{ fontSize: 19, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0 }}>
              I take those situations over and sort them out. You get a website that works, hosting you control, and a domain that's actually yours.
            </p>
          </div>
        }
      >
        Your website shouldn't be someone else's <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>hostage</span>.
      </ServiceHero>

      {/* Sound familiar? */}
      <section className="gutter" style={{ padding: '40px 56px', borderTop: '1px solid var(--rule)' }}>
        <h2 className="serif" style={{ fontSize: 40, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 28 }}>
          Sound <span style={{ fontStyle: 'italic' }}>familiar?</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid var(--rule)' }}>
          {RESCUE_CARDS.map((c, i, arr) => (
            <div key={c.title} style={{
              padding: '24px 28px 24px 0',
              borderLeft: i === 0 ? 'none' : '1px solid var(--rule)',
              paddingLeft: i === 0 ? 0 : 28,
            }}>
              <h3 className="serif" style={{ fontSize: 25, fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1.1, marginBottom: 12 }}>
                <span style={{ color: 'var(--accent-a)' }}>·</span> {c.title}
              </h3>
              <p style={{ fontSize: 14.5, color: 'var(--ink-2)', lineHeight: 1.6, margin: 0 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent rescues — dark slab */}
      <section className="dark gutter" style={{ padding: '56px 56px' }}>
        <Eyebrow>Recent rescues</Eyebrow>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginTop: 24 }}>
          {RESCUE_STORIES.map((s) => (
            <div key={s.client} style={{ paddingTop: 22, borderTop: '1px solid rgba(255,255,255,0.18)' }}>
              <h3 className="serif" style={{ fontSize: 30, fontWeight: 400, letterSpacing: '-0.015em', marginBottom: 12 }}>
                {s.client}
              </h3>
              <p className="serif" style={{ fontSize: 17, lineHeight: 1.55, color: 'rgba(255,255,255,0.75)', margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
        <p className="serif" style={{ fontStyle: 'italic', fontSize: 15, color: 'rgba(255,255,255,0.55)', marginTop: 28, maxWidth: '70ch' }}>
          Jayne's Bridalwear case study coming soon — platform migration from a proprietary CMS, saving significant annual platform fees.
        </p>
      </section>

      {/* What happens when you get in touch */}
      <section className="gutter" style={{ padding: '48px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 48, alignItems: 'start' }}>
          <h2 className="serif" style={{ fontSize: 38, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.05 }}>
            What happens when you <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>get in touch</span>
          </h2>
          <div>
            <p className="serif" style={{ fontSize: 19, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0, maxWidth: '60ch' }}>
              You don't need to have everything figured out before contacting me. Most people in this situation don't know exactly what they have or what they're missing — that's part of the problem.
            </p>
            <p className="serif" style={{ fontSize: 19, lineHeight: 1.6, color: 'var(--ink-2)', margin: '18px 0 24px', maxWidth: '60ch' }}>
              Tell me what's going on and I'll tell you honestly what's possible, what it'll take, and whether I'm the right person to help.
            </p>
            <CTA kind="solid" to={LINKS.start}>Start a Project →</CTA>
          </div>
        </div>
      </section>
    </>
  );
}

// ── WEBSITE SUPPORT (§2.5 — kept, first-person, CTA fix) ────────────────────────
function SupportPage({ setPage }) {
  return (
    <>
      <ServiceHero
        eyebrow="Website Support & Care Plans"
        maxW="20ch"
        cta="Get Peace of Mind →" ctaTo={LINKS.start}
        intro={
          <p className="serif" style={{ fontSize: 20, lineHeight: 1.5, color: 'var(--ink-2)', maxWidth: '58ch' }}>
            Security, updates, backups and hosting — all handled, so your site keeps working while you focus on running your business. A real person at the other end of the email, not a ticket queue.
          </p>
        }
      >
        Looked after, so it keeps <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>earning</span>.
      </ServiceHero>

      {/* Plans */}
      <section className="gutter" style={{ padding: '36px 56px', borderTop: '1px solid var(--rule)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: '1px solid var(--rule)' }}>
          {SUPPORT_PLANS.map((p, i, arr) => (
            <div key={p.name} style={{
              padding: '30px 30px 32px',
              borderRight: i < arr.length - 1 ? '1px solid var(--rule)' : 'none',
              background: p.featured ? 'var(--paper-2)' : 'transparent',
              position: 'relative',
            }}>
              {p.featured && (
                <div className="mono" style={{
                  position: 'absolute', top: 0, right: 0,
                  fontSize: 9.5, letterSpacing: '0.1em', textTransform: 'uppercase',
                  background: 'var(--accent-a)', color: 'var(--dark-paper)', padding: '5px 10px',
                }}>Most popular</div>
              )}
              <h3 className="serif" style={{ fontSize: 27, fontWeight: 400, letterSpacing: '-0.01em' }}>{p.name}</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, margin: '10px 0 14px' }}>
                <span className="serif" style={{ fontSize: 48, fontStyle: 'italic', color: 'var(--accent-a)', lineHeight: 1 }}>{p.price}</span>
                <span className="label">{p.cadence}</span>
              </div>
              <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.55, margin: '0 0 18px', minHeight: 64 }}>{p.blurb}</p>
              <div style={{ borderTop: '1px solid var(--rule-soft)' }}>
                {p.features.map((f) => (
                  <div key={f} style={{ display: 'flex', gap: 10, padding: '8px 0', fontSize: 13.5, color: 'var(--ink-2)', borderBottom: '1px solid var(--rule-soft)' }}>
                    <span style={{ color: 'var(--accent-a)' }}>✓</span>{f}
                  </div>
                ))}
              </div>
              <a href={LINKS.start} target="_blank" rel="noopener"
                className={'btn ' + (p.featured ? 'btn--accent' : 'btn--ghost')}
                style={{ marginTop: 20, width: '100%', justifyContent: 'center' }}>
                Choose {p.name.split(' ')[0]} →
              </a>
            </div>
          ))}
        </div>
        <p className="label" style={{ marginTop: 16 }}>
          All plans are month-to-month · cancel any time · no setup fee for sites I've built
        </p>
      </section>
    </>
  );
}

// ── WEBSITE AUDIT (§2.4 — rewrite) ──────────────────────────────────────────────
function AuditPage({ setPage }) {
  return (
    <>
      <ServiceHero
        eyebrow="Free Website Audit"
        maxW="22ch"
        cta="Book Your Free Audit →" ctaTo={LINKS.audit}
        intro={
          <div style={{ maxWidth: '64ch' }}>
            <p className="serif" style={{ fontSize: 19, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0 }}>
              Most business owners have a nagging feeling their website could be doing more. They're just not sure what's wrong or where to start.
            </p>
            <p className="serif" style={{ fontSize: 19, lineHeight: 1.6, color: 'var(--ink-2)', margin: '16px 0 0' }}>
              A free audit gives you a clear answer. I'll look at your site properly — SEO, conversion, structure, speed, first impressions — and tell you exactly what's holding it back and what to fix first.
            </p>
            <p className="serif" style={{ fontSize: 19, lineHeight: 1.6, color: 'var(--ink)', margin: '16px 0 0' }}>
              There's no catch. This is how I start conversations with new clients. Some people take the findings away and fix things themselves. Others ask me to help. <em style={{ color: 'var(--accent-a)' }}>Either way you leave with something useful.</em>
            </p>
          </div>
        }
      >
        Free website audit — find out exactly what your site <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>is</span> and <span style={{ fontStyle: 'italic' }}>isn't</span> doing.
      </ServiceHero>

      {/* What I look at */}
      <section className="gutter" style={{ padding: '40px 56px', borderTop: '1px solid var(--rule)' }}>
        <h2 className="serif" style={{ fontSize: 40, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 24 }}>
          What I <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>look at</span>
        </h2>
        <div style={{ borderTop: '1px solid var(--rule)' }}>
          {AUDIT_ITEMS.map((it, i) => (
            <div key={it.title} style={{
              display: 'grid', gridTemplateColumns: 'auto 1fr 2fr', gap: 28, alignItems: 'baseline',
              padding: '18px 0', borderBottom: '1px solid var(--rule-soft)',
            }}>
              <div className="serif" style={{ fontStyle: 'italic', fontSize: 20, color: 'var(--accent-a)' }}>0{i + 1}</div>
              <h3 className="serif" style={{ fontSize: 24, fontWeight: 400, letterSpacing: '-0.01em' }}>{it.title}</h3>
              <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.55, margin: 0 }}>{it.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What you get — dark slab */}
      <section className="dark gutter" style={{ padding: '56px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <Eyebrow>What you get</Eyebrow>
            <h2 className="serif" style={{ fontWeight: 400, fontSize: 44, lineHeight: 1.05, letterSpacing: '-0.02em', margin: '14px 0 0' }}>
              A plain-English video walkthrough — and a <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>priority list</span> that's yours to keep.
            </h2>
          </div>
          <div>
            <p className="serif" style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,0.78)', margin: 0 }}>
              A video walkthrough of your site where I talk you through everything I've found — in plain English, no jargon. Plus a written priority list so you know exactly what to tackle first.
            </p>
            <p className="serif" style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,0.78)', margin: '16px 0 24px' }}>
              The whole thing takes around 30 minutes of your time. The call is free. The findings are yours to keep.
            </p>
            <CTA kind="accent" to={LINKS.audit}>Book Your Free Audit →</CTA>
          </div>
        </div>
      </section>

      {/* Real example */}
      <section className="gutter" style={{ padding: '48px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 48, alignItems: 'start' }}>
          <h2 className="serif" style={{ fontSize: 38, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.05 }}>
            Real <span style={{ fontStyle: 'italic' }}>example</span>
          </h2>
          <div>
            <p className="serif" style={{ fontSize: 20, lineHeight: 1.55, color: 'var(--ink-2)', margin: 0, maxWidth: '62ch' }}>
              A dental practice came to me not knowing why their website wasn't generating enquiries despite reasonable traffic. The audit found a <span style={{ color: 'var(--ink)' }}>broken contact form nobody knew about</span>, a phone number buried below the fold, and no clear call to action on any page. Issues they'd lived with for years — fixed in a few weeks. They now receive <span style={{ color: 'var(--accent-a)' }}>30+ enquiries per month</span>.
            </p>
            <a href="#" className="underlink" style={{ display: 'inline-block', marginTop: 22 }}
              onClick={(e) => { e.preventDefault(); setPage('case'); }}>
              See the full Ilkley Dental Care project →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { DesignPage, RescuePage, SupportPage, AuditPage });
