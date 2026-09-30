// site-support.jsx — Website Care Plans (/services/website-support/) — copy deck v3

const CARE_LADDER = [
  ['Essentials', 'I keep it running'],
  ['Active', 'I keep it right'],
  ['Growth', 'I keep it improving'],
];

const CARE_PLANS = [
  {
    name: 'Essentials',
    annual: '£350 a year',
    note: 'two months free',
    monthly: 'or £35 a month',
    you: 'your website does a small job, does it well, and you want it kept safe without thinking about it.',
    features: ['Managed WordPress hosting', 'Weekly off-site backups', 'Core, theme and plugin updates', 'Uptime monitoring', '1 hour of edits a month', 'Email support'],
    not: 'your business changes through the year and the site has to keep up. Look at Active.',
  },
  {
    name: 'Active',
    featured: true,
    annual: '£990 a year',
    note: 'two months free',
    monthly: 'or £99 a month',
    you: 'your business changes through the year, your website has to keep up, and you would rather send it to someone than wrestle with it yourself.',
    features: ['Everything in Essentials', '2 hours of edits a month, usually same day', 'Monthly accuracy check with a written summary', 'Same-day priority fixes', 'Security hardening and malware scans', 'Quarterly performance check'],
    not: 'you want the site growing enquiries month on month. That is Growth.',
  },
  {
    name: 'Growth',
    annual: '£2,490 a year',
    note: 'two months free',
    monthly: 'or £249 a month',
    you: 'your website is a main source of enquiries and you want more of them.',
    features: ['Everything in Active', 'Monthly review of your search and traffic data', 'One improvement chosen, built and shipped each month', 'A written report: what changed, what moved, what is next', 'Quarterly review of the quarter\u2019s work'],
    not: 'your site gets under about 500 visits a month. There is not enough data to tell a real improvement from a fluke, and I would rather sell you Active plus a one-off piece of work to fix the traffic first.',
    setup: 'Setup: £195 one-off to establish tracking and a baseline. Waived if I built the site.',
  },
];

const CARE_COVERED = [
  ['Hosting that is managed.', 'Your site sits on fast, secure WordPress hosting I look after directly. No separate hosting bill to chase, no support desk in another time zone.'],
  ['Updates, checked before they go live.', 'WordPress core, your theme and your plugins all need regular updating. Skip it and you get broken layouts, security holes, or a site that stops loading. I apply updates and check nothing breaks afterwards.'],
  ['Backups you will not need to think about.', 'Weekly off-site backups, so if the worst happens your site comes back rather than a month of lost work.'],
  ['Security and monitoring.', 'Uptime monitoring on every plan, with hardening and malware scans on Active and Growth. You hear from me if something is wrong, usually before you have noticed.'],
  ['You send it, I post it.', 'Ever tried adding a photo to your own site and hit a wall? Wrong size, wrong format, will not upload, comes out stretched. On Active and Growth that is my job. Send me the photos and the words and I will get them live, at the right size and looking as they should.'],
];

const CARE_FAQ = [
  { q: 'Which plan do most businesses start on?', a: 'Active. It suits any business that changes through the year, which is most of them. Essentials suits sites doing a smaller, steadier job. Growth suits businesses ready to put real work into the site every month.' },
  { q: 'What is the difference between Active and Growth?', a: 'On Active you decide what changes and I make it happen, plus I check the site monthly for anything that has gone out of date. On Growth I look at your data, decide what should change, build it, and report on what it did.' },
  { q: 'What do I actually receive on Growth?', a: 'A report each month naming what I changed, what the numbers did, and what I am working on next. Plus the change itself, built and live.' },
  { q: 'How much does website maintenance cost?', a: 'Plans start at £35 a month, or £350 for the year. The right one depends on how much you lean on your site. A site doing a small job needs less than one bringing in daily enquiries.' },
  { q: 'Can I move between plans?', a: 'Yes, any month. Most people start on Essentials or Active and move up when the site starts mattering more to the business.' },
  { q: 'Why is there a setup fee on Growth?', a: 'Improvements only mean something if you can measure them, and on most sites I take over the tracking has gaps. Month one is spent fixing that and recording where you are starting from. If I built the site, that work is done and there is no fee.' },
  { q: 'Do I have to commit to a year?', a: 'No. Every plan runs month to month if you prefer. The annual option exists because it is cheaper for you, and because Growth needs time to show what it is doing.' },
  { q: 'Do I need a care plan for a WordPress site?', a: 'Yes. WordPress and its plugins release security patches constantly, and a site left un-updated for months is the most common way small business sites get hacked or break.' },
  { q: 'Do you only work with Yorkshire businesses?', a: 'I am based in Skipton and work with businesses across Yorkshire, but care plans are handled remotely so location is not a barrier. Plenty of clients I have never met in person, and their sites are looked after just the same.' },
];

const CARE_STAGES = [
  'My site does a small job. I want it kept safe and off my plate',
  'My business changes through the year and the site has to keep up',
  'My site is a main source of enquiries and I want more of them',
  'Not sure yet. Tell me which one fits',
];

// ── shared bits ───────────────────────────────────────────────────────────────
const careH2 = { fontSize: 44, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.04 };
const careBody = { fontSize: 19, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0 };

function CareFAQ() {
  const [open, setOpen] = useState(0);
  return (
    <div style={{ borderTop: '1px solid var(--rule)' }}>
      {CARE_FAQ.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} style={{ borderBottom: '1px solid var(--rule)' }}>
            <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
              width: '100%', background: 'none', border: 'none', cursor: 'pointer',
              display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 22, alignItems: 'baseline',
              padding: '22px 0', textAlign: 'left', color: 'var(--ink)',
            }}>
              <span className="serif" style={{ fontStyle: 'italic', fontSize: 18, color: 'var(--accent-a)' }}>{String(i + 1).padStart(2, '0')}</span>
              <span className="serif" style={{ fontSize: 25, fontWeight: 400, letterSpacing: '-0.015em', lineHeight: 1.18 }}>{f.q}</span>
              <span className="serif" style={{ fontSize: 26, color: 'var(--accent-a)', lineHeight: 1, transition: 'transform .25s', transform: isOpen ? 'rotate(45deg)' : 'none', display: 'inline-block' }}>+</span>
            </button>
            <div style={{ display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr', transition: 'grid-template-rows .3s ease' }}>
              <div style={{ overflow: 'hidden' }}>
                <p className="serif" style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0, paddingLeft: 44, paddingBottom: 24, maxWidth: '74ch' }}>{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function scrollToEnquiry(e) {
  e.preventDefault();
  const el = document.getElementById('care-enquiry');
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.pageYOffset - 24;
  const before = window.pageYOffset;
  window.scrollTo({ top, behavior: 'smooth' });
  setTimeout(() => { if (Math.abs(window.pageYOffset - before) < 2) window.scrollTo(0, top); }, 120);
}

function CareEnquiryForm() {
  const [sent, setSent] = useState(false);
  const field = {
    width: '100%', background: 'var(--paper)', border: '1px solid var(--rule)',
    padding: '13px 14px', fontFamily: 'Geist', fontSize: 15, color: 'var(--ink)', outline: 'none',
  };
  if (sent) {
    return (
      <div style={{ border: '1px solid var(--rule)', background: 'var(--paper)', padding: '34px 34px 36px' }}>
        <div className="label label--accent">Message sent</div>
        <p className="serif" style={{ ...careBody, color: 'var(--ink)', marginTop: 14 }}>Thanks, that's with me. I'll read it properly and come back to you within one working day with a straight answer on which plan fits.</p>
      </div>
    );
  }
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      style={{ display: 'flex', flexDirection: 'column', gap: 16, border: '1px solid var(--rule)', background: 'var(--paper)', padding: '30px 32px 32px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {[['Your name', 'text'], ['Email address', 'email']].map(([l, type]) => (
          <label key={l} style={{ display: 'block' }}>
            <span className="label" style={{ display: 'block', marginBottom: 7 }}>{l}</span>
            <input type={type} required style={field} />
          </label>
        ))}
      </div>
      <label style={{ display: 'block' }}>
        <span className="label" style={{ display: 'block', marginBottom: 7 }}>Your website</span>
        <input type="text" style={field} placeholder="yourbusiness.co.uk, or leave blank if there isn't one yet" />
      </label>
      <label style={{ display: 'block' }}>
        <span className="label" style={{ display: 'block', marginBottom: 7 }}>Where's your business at?</span>
        <select defaultValue="" required style={{ ...field, appearance: 'none', cursor: 'pointer', backgroundImage: 'linear-gradient(45deg,transparent 50%,var(--ink-3) 50%),linear-gradient(135deg,var(--ink-3) 50%,transparent 50%)', backgroundPosition: 'calc(100% - 19px) 21px, calc(100% - 14px) 21px', backgroundSize: '5px 5px, 5px 5px', backgroundRepeat: 'no-repeat' }}>
          <option value="" disabled>Pick the one that sounds most like you</option>
          {CARE_STAGES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </label>
      <label style={{ display: 'block' }}>
        <span className="label" style={{ display: 'block', marginBottom: 7 }}>Anything else worth knowing?</span>
        <textarea rows={5} style={{ ...field, resize: 'vertical', fontFamily: 'Geist' }}
          placeholder="Who looks after the site now, what keeps going wrong, what you'd like it to do." />
      </label>
      <button type="submit" className="btn btn--accent" style={{ alignSelf: 'flex-start', marginTop: 4 }}>Send a Message →</button>
      <p className="label" style={{ marginTop: 2 }}>No sales sequence. One reply, from me.</p>
    </form>
  );
}

function SupportPage({ setPage }) {
  return (
    <>
      {/* 1 · HERO */}
      <section className="gutter" style={{ padding: '64px 56px 40px' }}>
        <Eyebrow>Website Care Plans</Eyebrow>
        <h1 className="serif" style={{ fontWeight: 400, fontSize: 72, lineHeight: 0.99, letterSpacing: '-0.024em', margin: '16px 0 24px', maxWidth: '26ch' }}>
          Website care plans that keep your site <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>working, accurate and improving</span>.
        </h1>
        <p className="serif" style={{ ...careBody, fontSize: 20, maxWidth: '62ch' }}>
          One plan keeps your site safe, one keeps it accurate, one keeps it improving. All handled by a real person in Skipton, not a ticket queue.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
          <CTA kind="solid" to={LINKS.start}>Book a Quick Call →</CTA>
          <a href="#care-enquiry" className="btn btn--ghost" onClick={scrollToEnquiry}>Send a Message →</a>
        </div>
      </section>

      {/* 2 · THREE STAGES */}
      <section className="gutter" style={{ padding: '48px 56px', borderTop: '1px solid var(--rule)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: 56, alignItems: 'start' }}>
          <div>
            <h2 className="serif" style={careH2}>
              Three stages, and most businesses <span style={{ fontStyle: 'italic' }}>know which one</span> they're at.
            </h2>
            <div style={{ marginTop: 32, borderTop: '1px solid var(--rule)' }}>
              {CARE_LADDER.map(([name, promise], i) => (
                <div key={name} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 18, alignItems: 'baseline', padding: '16px 0', borderBottom: '1px solid var(--rule-soft)' }}>
                  <span className="serif" style={{ fontStyle: 'italic', fontSize: 19, color: 'var(--accent-a)' }}>{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <div className="serif" style={{ fontSize: 26, letterSpacing: '-0.015em' }}>{name}</div>
                    <div className="mono" style={{ fontSize: 12.5, letterSpacing: '0.04em', color: 'var(--ink-3)', marginTop: 4 }}>{promise}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gap: 18, maxWidth: '66ch' }}>
            <p className="serif" style={careBody}>A website needs different things at different points in a business, so website maintenance means different things too.</p>
            <p className="serif" style={careBody}>Some sites do a small job and do it well. The owner wants it safe, updated and off their plate, and that is the whole requirement.</p>
            <p className="serif" style={careBody}>Some sites carry the business. Prices change, services change, staff change, and the site has to keep up or it starts telling customers things that stopped being true months ago.</p>
            <p className="serif" style={careBody}>And some sites are a main source of enquiries. Those need work aimed at something specific every month, measured afterwards, so you know what your website responds to.</p>
            <p className="serif" style={{ ...careBody, color: 'var(--ink)' }}>Paying for the third when you need the first is waste. <em style={{ color: 'var(--accent-a)' }}>I would rather tell you that than sell it to you.</em></p>
          </div>
        </div>
      </section>

      {/* 3 · THE ESSENTIALS CASE */}
      <section className="gutter" style={{ padding: '48px 56px', borderTop: '1px solid var(--rule)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'end', marginBottom: 34 }}>
          <div>
            <Eyebrow>Essentials</Eyebrow>
            <h2 className="serif" style={{ ...careH2, marginTop: 14 }}>
              A site left alone does not <span style={{ fontStyle: 'italic' }}>stay still</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gap: 16 }}>
            <p className="serif" style={careBody}>Nothing about a neglected website looks urgent until the morning it stops working.</p>
            <p className="serif" style={careBody}>Plugins fall behind. Security gaps open up. The contact form quietly stops sending and you find out when a customer mentions they emailed twice.</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
          <div style={{ border: '1px solid var(--rule)', padding: '28px 30px 30px', background: 'var(--paper)' }}>
            <div className="label" style={{ marginBottom: 18 }}>Left to drift</div>
            {['Plugins fall out of date', 'Security gaps open up', 'The contact form stops sending', 'You find out when a customer says the site is down'].map((x) => (
              <div key={x} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '13px 0', borderTop: '1px solid var(--rule-soft)', fontSize: 16.5, color: 'var(--ink-2)', lineHeight: 1.4 }}>
                <span style={{ color: 'var(--ink-3)', fontSize: 18, lineHeight: 1.1, flex: '0 0 auto' }}>✕</span>
                <span>{x}</span>
              </div>
            ))}
          </div>
          <div className="dark" style={{ padding: '28px 30px 30px', border: '1px solid var(--dark-bg)' }}>
            <div className="label label--accent" style={{ marginBottom: 18 }}>On a care plan</div>
            {['Updates applied and tested before they break', 'Security monitored, hardened and patched', 'Forms checked, with an alert the moment one fails', 'You hear about it from me, usually already fixed'].map((x) => (
              <div key={x} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '13px 0', borderTop: '1px solid rgba(255,255,255,0.16)', fontSize: 16.5, color: 'var(--dark-paper)', lineHeight: 1.4 }}>
                <span style={{ color: 'var(--accent-a)', fontSize: 17, lineHeight: 1.2, flex: '0 0 auto' }}>✓</span>
                <span>{x}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="serif" style={{ fontSize: 22, lineHeight: 1.4, letterSpacing: '-0.01em', marginTop: 20, maxWidth: '62ch' }}>
          That is Essentials. You stop thinking about the site and <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>it carries on working</span>.
        </p>
      </section>

      {/* 4 · THE ACTIVE CASE */}
      <section className="gutter" style={{ padding: '48px 56px', borderTop: '1px solid var(--rule)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: 56, alignItems: 'start' }}>
          <div>
            <Eyebrow>Active</Eyebrow>
            <h2 className="serif" style={{ ...careH2, marginTop: 14 }}>
              The problem nobody <span style={{ fontStyle: 'italic' }}>logs a ticket for</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gap: 18, maxWidth: '66ch' }}>
            <p className="serif" style={careBody}>Your website was accurate the day it launched. Then you put your prices up in March, dropped a service, took on two new people and changed your hours over the summer.</p>
            <p className="serif" style={careBody}>None of that breaks anything. No error, no downtime, no alert. The site carries on telling customers what was true last year, and they believe it, because why would they not.</p>
            <p className="serif" style={{ ...careBody, color: 'var(--ink)' }}>That is what Active is for.</p>
            <p className="serif" style={careBody}>Send me changes as they happen and I put them live, usually the same day. No wrestling with image sizes, no fighting the page builder, no adding it to a list you never get to.</p>
            <p className="serif" style={careBody}>Then once a month I go through the site against reality. Forms tested end to end, key pages checked, contact details, opening hours, prices, services, staff, broken links. I fix what I can fix and send you a short note covering what I found, what I sorted, and the handful of things only you can answer.</p>
            <p className="serif" style={{ ...careBody, color: 'var(--ink)' }}>Most business owners know their site has drifted without having a list of what needs changing. <em style={{ color: 'var(--accent-a)' }}>Active hands you the list.</em></p>
          </div>
        </div>
      </section>

      {/* 5 · TESTIMONIAL */}
      <section className="dark gutter" style={{ padding: '64px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56, alignItems: 'start' }}>
          <Eyebrow>A real person</Eyebrow>
          <div>
            <blockquote className="serif" style={{ fontSize: 34, fontWeight: 400, lineHeight: 1.22, letterSpacing: '-0.018em', margin: 0, maxWidth: '34ch' }}>
              <span style={{ color: 'var(--accent-a)' }}>“</span>{T_ABOUT.quote}<span style={{ color: 'var(--accent-a)' }}>”</span>
            </blockquote>
            <div style={{ marginTop: 24, fontSize: 14, color: 'rgba(255,255,255,0.65)' }}>
              <strong style={{ color: 'var(--dark-paper)' }}>{T_ABOUT.name}</strong> · {T_ABOUT.role}
            </div>
          </div>
        </div>
      </section>

      {/* 6 · THE GROWTH CASE */}
      <section className="gutter" style={{ padding: '48px 56px', borderTop: '1px solid var(--rule)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: 56, alignItems: 'start' }}>
          <div>
            <Eyebrow>Growth</Eyebrow>
            <h2 className="serif" style={{ ...careH2, marginTop: 14 }}>
              What <span style={{ fontStyle: 'italic' }}>“improving the site”</span> means in practice
            </h2>
          </div>
          <div style={{ display: 'grid', gap: 18, maxWidth: '66ch' }}>
            <p className="serif" style={careBody}>Most website support stops at keeping the lights on. Useful, and it tells you nothing about whether your site brings in more work this year than last.</p>
            <p className="serif" style={{ ...careBody, color: 'var(--ink)' }}>On Growth, one thing changes every month.</p>
            <p className="serif" style={careBody}>I look at what people search to find you, which pages they land on, and where they leave. From that I pick the biggest single opportunity. I build that change, then check the following month what it did before choosing the next one.</p>
            <p className="serif" style={careBody}>At the end of each month you get a report naming three things: what I changed, what moved, and what I am doing next.</p>
            <p className="serif" style={careBody}>After a quarter you have three changes, three sets of numbers, and a view of what your website responds to. <em style={{ color: 'var(--accent-a)' }}>That is the part most business owners have not had before.</em></p>
            <div style={{ borderLeft: '2px solid var(--accent-a)', paddingLeft: 20, marginTop: 6 }}>
              <p className="serif" style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--ink-2)', margin: 0, fontStyle: 'italic' }}>
                Month one sets the baseline. On most sites the tracking has gaps, so I fix that first. Reporting starts in month two, once the numbers can be trusted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Boundary line */}
      <section className="gutter" style={{ padding: '30px 56px', borderTop: '1px solid var(--rule)', background: 'var(--paper-2)' }}>
        <p className="serif" style={{ fontSize: 24, lineHeight: 1.4, letterSpacing: '-0.012em', margin: 0, maxWidth: '80ch' }}>
          On <span style={{ fontStyle: 'italic' }}>Active</span>, you decide what changes and I make it happen. On <span style={{ fontStyle: 'italic' }}>Growth</span>, I look at the data, tell you what should change, <span style={{ color: 'var(--accent-a)' }}>and do it</span>.
        </p>
      </section>

      {/* 7 · PRICING CARDS */}
      <section className="gutter" style={{ padding: '40px 56px', borderTop: '1px solid var(--rule)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: '1px solid var(--rule)' }}>
          {CARE_PLANS.map((p, i, arr) => (
            <div key={p.name} style={{
              padding: '30px 30px 32px', display: 'flex', flexDirection: 'column',
              borderRight: i < arr.length - 1 ? '1px solid var(--rule)' : 'none',
              background: p.featured ? 'var(--paper-2)' : 'transparent', position: 'relative',
            }}>
              {p.featured && (
                <div className="mono" style={{ position: 'absolute', top: 0, right: 0, fontSize: 9.5, letterSpacing: '0.1em', textTransform: 'uppercase', background: 'var(--accent-a)', color: 'var(--dark-paper)', padding: '5px 10px' }}>Most popular</div>
              )}
              <h3 className="serif" style={{ fontSize: 27, fontWeight: 400, letterSpacing: '-0.01em' }}>{p.name}</h3>
              <div className="serif" style={{ fontSize: 38, fontStyle: 'italic', color: 'var(--accent-a)', lineHeight: 1.05, marginTop: 12 }}>{p.annual}</div>
              <div className="label label--accent" style={{ marginTop: 6 }}>{p.note}</div>
              <div className="serif" style={{ fontSize: 18, color: 'var(--ink-2)', marginTop: 8 }}>{p.monthly}</div>
              <p style={{ fontSize: 14.5, color: 'var(--ink-2)', lineHeight: 1.55, margin: '20px 0 18px' }}>
                <strong style={{ color: 'var(--ink)' }}>This is you if:</strong> {p.you}
              </p>
              <div style={{ borderTop: '1px solid var(--rule-soft)' }}>
                {p.features.map((f) => (
                  <div key={f} style={{ display: 'flex', gap: 10, padding: '9px 0', fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.45, borderBottom: '1px solid var(--rule-soft)' }}>
                    <span style={{ color: 'var(--accent-a)', flex: '0 0 auto' }}>✓</span>{f}
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 13.5, color: 'var(--ink-3)', lineHeight: 1.55, margin: '16px 0 0' }}>
                <strong style={{ color: 'var(--ink-2)' }}>Not for you if:</strong> {p.not}
              </p>
              {p.setup && (
                <p className="mono" style={{ fontSize: 11.5, lineHeight: 1.6, color: 'var(--ink-2)', margin: '14px 0 0', paddingTop: 14, borderTop: '1px solid var(--rule-soft)' }}>{p.setup}</p>
              )}
              <a href={LINKS.start} target="_blank" rel="noopener"
                className={'btn ' + (p.featured ? 'btn--accent' : 'btn--ghost')}
                style={{ marginTop: 22, width: '100%', justifyContent: 'center' }}>
                Choose {p.name} →
              </a>
            </div>
          ))}
        </div>
        <p className="serif" style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-2)', margin: '18px 0 0', maxWidth: '86ch' }}>
          Pay monthly and cancel any time, or pay for the year and take two months off. No lock-in either way. If you leave part way through a year, I refund the months you have not used.
        </p>
      </section>

      {/* 8 · PAYING FOR THE YEAR */}
      <section className="gutter" style={{ padding: '48px 56px', borderTop: '1px solid var(--rule)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: 56, alignItems: 'start' }}>
          <h2 className="serif" style={{ ...careH2, fontSize: 40 }}>
            Paying for <span style={{ fontStyle: 'italic' }}>the year</span>
          </h2>
          <div style={{ display: 'grid', gap: 18, maxWidth: '66ch' }}>
            <p className="serif" style={careBody}>Every plan runs month to month if you want it to. Pay for the year instead and you get two months free.</p>
            <p className="serif" style={careBody}>Annual makes most sense on Growth. One improvement a month needs three months before the numbers mean anything, and closer to nine before the effect compounds. Judging that work after six weeks tells you nothing.</p>
            <p className="serif" style={careBody}>So we review at six months. If it is not doing what you hoped, we change what I am working on, or you leave and I refund the months you have not used. <em style={{ color: 'var(--accent-a)' }}>Committing to a year should not mean being stuck for one.</em></p>
          </div>
        </div>
      </section>

      {/* 9 · WHAT EVERY PLAN COVERS */}
      <section className="gutter" style={{ padding: '48px 56px', borderTop: '1px solid var(--rule)' }}>
        <h2 className="serif" style={{ ...careH2, fontSize: 40, marginBottom: 24 }}>
          What <span style={{ fontStyle: 'italic' }}>every plan</span> covers
        </h2>
        <div style={{ borderTop: '1px solid var(--rule)' }}>
          {CARE_COVERED.map(([head, body], i) => (
            <div key={head} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr 2fr', gap: 28, alignItems: 'baseline', padding: '18px 0', borderBottom: '1px solid var(--rule-soft)' }}>
              <div className="serif" style={{ fontStyle: 'italic', fontSize: 19, color: 'var(--accent-a)' }}>0{i + 1}</div>
              <h3 className="serif" style={{ fontSize: 23, fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1.2 }}>{head}</h3>
              <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.6, margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 10 · FAQ */}
      <section className="gutter" style={{ padding: '48px 56px', borderTop: '1px solid var(--rule)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.4fr', gap: 48, alignItems: 'start' }}>
          <div>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="serif" style={{ ...careH2, fontSize: 40, marginTop: 14 }}>
              The things people <span style={{ fontStyle: 'italic' }}>ask first</span>
            </h2>
          </div>
          <CareFAQ />
        </div>
      </section>

      {/* 11 · NEED SOMETHING ELSE */}
      <section className="gutter" style={{ padding: '48px 56px', borderTop: '1px solid var(--rule)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'end', marginBottom: 30 }}>
          <div>
            <Eyebrow>Need something else?</Eyebrow>
            <h2 className="serif" style={{ ...careH2, fontSize: 40, marginTop: 14 }}>
              A care plan keeps a <span style={{ fontStyle: 'italic' }}>working</span> site working.
            </h2>
          </div>
          <p className="serif" style={careBody}>
            If that's not where you are right now, you probably need something else first — and I'd rather point you to the right thing than sell you the wrong one.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
          {[
            { tag: 'Website Rescue', target: 'rescue', head: "Your site's already broken, inherited, or your developer's vanished?", body: "That's a rescue job. I take it over, get you back in control of your own site, and sort out what's wrong." },
            { tag: 'Website Design', target: 'design', head: 'No site yet — or yours is well overdue a rebuild?', body: 'Start from the ground up with a new WordPress site built around getting enquiries, then keep it on a care plan afterwards.' },
          ].map((c) => (
            <a key={c.tag} href="#" onClick={(e) => { e.preventDefault(); setPage(c.target); }}
              style={{ display: 'flex', flexDirection: 'column', border: '1px solid var(--rule)', padding: '28px 30px 26px', textDecoration: 'none', color: 'var(--ink)', background: 'var(--paper)', transition: 'background .15s, transform .15s' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--paper-2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--paper)'; e.currentTarget.style.transform = 'none'; }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="label label--accent">{c.tag}</span>
                <span className="serif" style={{ fontStyle: 'italic', fontSize: 22, color: 'var(--accent-a)' }}>→</span>
              </div>
              <h3 className="serif" style={{ fontSize: 25, fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1.15, margin: '14px 0 10px' }}>{c.head}</h3>
              <p style={{ fontSize: 14.5, color: 'var(--ink-2)', lineHeight: 1.6, margin: 0 }}>{c.body}</p>
            </a>
          ))}
        </div>
      </section>
      {/* 12 · ENQUIRY FORM */}
      <section id="care-enquiry" className="gutter" style={{ padding: '48px 56px', borderTop: '1px solid var(--rule)', background: 'var(--paper-2)', scrollMarginTop: 90 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 56, alignItems: 'start' }}>
          <div>
            <Eyebrow>Enquire</Eyebrow>
            <h2 className="serif" style={{ ...careH2, fontSize: 40, marginTop: 14 }}>
              Tell me where your business is at, <span style={{ fontStyle: 'italic' }}>and I'll tell you which plan fits</span>.
            </h2>
            <p className="serif" style={{ ...careBody, marginTop: 18, maxWidth: '48ch' }}>
              You don't need to have picked a plan. Say where the site sits in your business and I'll come back with the honest answer, even when that answer is the cheaper one.
            </p>
            <div style={{ marginTop: 30, borderTop: '1px solid var(--rule)' }}>
              {[['Reply', 'within one working day'], ['Email', 'hello@bvswebdesign.co.uk'], ['Based in', 'Skipton, North Yorkshire']].map(([k, v]) => (
                <div key={k} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 16, padding: '13px 0', borderBottom: '1px solid var(--rule-soft)' }}>
                  <span className="label">{k}</span>
                  <span className="serif" style={{ fontSize: 17, fontStyle: 'italic' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
          <CareEnquiryForm />
        </div>
      </section>
    </>
  );
}

Object.assign(window, { SupportPage, CareFAQ, CareEnquiryForm, CARE_PLANS, CARE_FAQ, CARE_STAGES });
