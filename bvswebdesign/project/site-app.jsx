// site-app.jsx — routing, tweaks, per-page meta + dark CTA wiring.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "background": "stone",
  "accent": "claret",
  "display": "newsreader"
}/*EDITMODE-END*/;

// Per-page dark CTA content + which TidyCal link it points to.
const CTA_CONFIG = {
  home:    { heading: <>Ready to get more from your <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>website</span>?</>, body: "Whether you know exactly what you need or you're not sure where to start — let's have a conversation.", primary: 'start' },
  about:   { heading: <>Ready to talk about your <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>project</span>?</>, body: "Tell me what you're trying to achieve and I'll tell you honestly whether — and how — I can help.", primary: 'start' },
  design:  { heading: <>Let's build something that <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>earns</span> its keep.</>, body: "Start with a free 30-minute call. No deck, no questionnaire — just a proper conversation about your business.", primary: 'start' },
  rescue:  { heading: <>Stuck? Let's get you <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>back in control</span>.</>, body: "You don't need it all figured out. Tell me what's going on and I'll tell you what's possible.", primary: 'start' },
  support: { heading: <>Hand the worry <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>over</span>.</>, body: "Security, updates, backups and a real person at the other end of the email. Let's get your site looked after.", primary: 'start' },
  audit:   { heading: <>Find out what your site <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>is and isn't</span> doing.</>, body: "A free, no-obligation audit. Around 30 minutes of your time, and the findings are yours to keep.", primary: 'audit' },
  portfolio:{ heading: <>Want results like <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>these</span>?</>, body: "Whether you know exactly what you need or you're not sure where to start — let's have a conversation.", primary: 'start' },
  case:    { heading: <>Want results like <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>these</span>?</>, body: "Whether you know exactly what you need or you're not sure where to start — let's have a conversation.", primary: 'start' },
  blog:    { heading: <>Ready to get more from your <span style={{ fontStyle: 'italic', color: 'var(--accent-a)' }}>website</span>?</>, body: "Whether you know exactly what you need or you're not sure where to start — let's have a conversation.", primary: 'start' },
};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [page, setPage] = useState('home');

  useEffect(() => {
    document.documentElement.dataset.bg = t.background;
    document.documentElement.dataset.accent = t.accent;
    // 'newsreader' is the CSS default (no data-display attribute)
    if (t.display && t.display !== 'newsreader') {
      document.documentElement.dataset.display = t.display;
    } else {
      delete document.documentElement.dataset.display;
    }
  }, [t.background, t.accent, t.display]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    document.title = META[page] || META.home;
  }, [page]);

  const cta = CTA_CONFIG[page]; // null on contact (no dark CTA before footer)

  return (
    <>
      <TopNav page={page} setPage={setPage} />
      <main>
        {page === 'home'      && <HomePage setPage={setPage} />}
        {page === 'about'     && <AboutPage setPage={setPage} />}
        {page === 'design'    && <DesignPage setPage={setPage} />}
        {page === 'rescue'    && <RescuePage setPage={setPage} />}
        {page === 'support'   && <SupportPage setPage={setPage} />}
        {page === 'audit'     && <AuditPage setPage={setPage} />}
        {page === 'portfolio' && <PortfolioPage setPage={setPage} />}
        {page === 'case'      && <CasePage setPage={setPage} />}
        {page === 'blog'      && <BlogPage setPage={setPage} />}
        {page === 'contact'   && <ContactPage setPage={setPage} />}
      </main>

      {cta && (
        <DarkCTA setPage={setPage} heading={cta.heading} body={cta.body} primary={cta.primary} />
      )}
      <Footer setPage={setPage} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Jump to page" />
        <TweakSelect
          label="Page"
          value={page}
          options={[
            { value: 'home',      label: 'Home' },
            { value: 'about',     label: 'About' },
            { value: 'design',    label: 'Website Design' },
            { value: 'rescue',    label: 'Website Rescue' },
            { value: 'support',   label: 'Website Support' },
            { value: 'audit',     label: 'Website Audit' },
            { value: 'portfolio', label: 'Portfolio' },
            { value: 'case',      label: 'Case study' },
            { value: 'blog',      label: 'Blog' },
            { value: 'contact',   label: 'Contact' },
          ]}
          onChange={(v) => setPage(v)}
        />

        <TweakSection label="Headline font" />
        <TweakSelect
          label="Display"
          value={t.display}
          options={[
            { value: 'newsreader', label: 'Newsreader · editorial' },
            { value: 'instrument', label: 'Instrument Serif · elegant' },
            { value: 'dmserif',    label: 'DM Serif · dramatic' },
            { value: 'cormorant',  label: 'Cormorant · refined' },
            { value: 'bricolage',  label: 'Bricolage · modern sans' },
          ]}
          onChange={(v) => setTweak('display', v)}
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

        <TweakSection label="Background mood" />
        <TweakRadio
          label="Paper"
          value={t.background}
          options={[
            { value: 'stone',     label: 'Stone' },
            { value: 'cool',      label: 'Cool' },
            { value: 'white',     label: 'White' },
            { value: 'newsprint', label: 'News' },
          ]}
          onChange={(v) => setTweak('background', v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
