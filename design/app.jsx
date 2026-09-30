// app.jsx — wires the design canvas, the tweaks panel and the three directions.
// Each artboard holds its own page state (Home/Services/Blog/Case) so the user
// can navigate inside one direction without disturbing the others.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentDominance": "claret",
  "heroVariant": "A",
  "globalPage": "home"
}/*EDITMODE-END*/;

function ArtboardForDirection({ direction, defaultPage, heroVariant, globalPage }) {
  // globalPage acts as a "set all to" override from the tweaks panel.
  // The artboard still keeps its own local nav state so users can drill in.
  const [page, setPage] = useArtboardNav(defaultPage);
  const lastGlobalRef = useRef(globalPage);

  useEffect(() => {
    if (globalPage && globalPage !== lastGlobalRef.current) {
      setPage(globalPage);
      lastGlobalRef.current = globalPage;
    }
  }, [globalPage]);

  const Direction =
    direction === 'editorial' ? window.EditorialDirection :
    direction === 'press'     ? window.PressDirection :
                                window.WorkshopDirection;

  return <Direction page={page} setPage={setPage} heroVariant={heroVariant} />;
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply accent dominance globally via data-attribute on <html>.
  useEffect(() => {
    document.documentElement.dataset.accent =
      t.accentDominance === 'blue' ? 'blue-dominant' : '';
  }, [t.accentDominance]);

  const ABW = 1280;
  const ABH = 2400;

  const directions = [
    {
      id: 'editorial',
      title: 'Paper Editorial',
      subtitle: 'Newsreader serif + Geist sans · asymmetric editorial grid · claret accents in italic.',
    },
    {
      id: 'press',
      title: 'Yorkshire Press',
      subtitle: 'JetBrains Mono + IBM Plex · grid lines, framed numerals, classified-ad density.',
    },
    {
      id: 'workshop',
      title: 'Workshop',
      subtitle: 'Bricolage Grotesque + Spectral · oversized friendly statements, label chips, rounded cards.',
    },
  ];

  const pages = [
    { id: 'home',     label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'blog',     label: 'Blog' },
    { id: 'case',     label: 'Case study' },
  ];

  return (
    <>
      <DesignCanvas
        title="BVSWebDesign — Three directions"
        subtitle="A small Skipton studio building WordPress sites for Yorkshire businesses. Claret + blue, used sparingly on warm cream paper. Use the Tweaks panel (top-right) to swap accent dominance, cycle hero layouts, or jump every artboard to the same page."
      >
        {directions.map((d) => (
          <DCSection key={d.id} id={d.id} title={d.title} subtitle={d.subtitle}>
            {pages.map((p) => (
              <DCArtboard
                key={d.id + p.id}
                id={d.id + '-' + p.id}
                label={`${d.title} · ${p.label}`}
                width={ABW}
                height={ABH}
              >
                <ArtboardForDirection
                  direction={d.id}
                  defaultPage={p.id}
                  heroVariant={t.heroVariant}
                  globalPage={t.globalPage}
                />
              </DCArtboard>
            ))}
          </DCSection>
        ))}
      </DesignCanvas>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Accent dominance" />
        <TweakRadio
          label="Lead colour"
          value={t.accentDominance}
          options={[
            { value: 'claret', label: 'Claret' },
            { value: 'blue',   label: 'Blue' },
          ]}
          onChange={(v) => setTweak('accentDominance', v)}
        />

        <TweakSection label="Hero layout" />
        <TweakRadio
          label="Home hero"
          value={t.heroVariant}
          options={[
            { value: 'A', label: 'A' },
            { value: 'B', label: 'B' },
            { value: 'C', label: 'C' },
          ]}
          onChange={(v) => setTweak('heroVariant', v)}
        />

        <TweakSection label="Show everywhere" />
        <TweakSelect
          label="Page"
          value={t.globalPage}
          options={[
            { value: 'home',     label: 'Home' },
            { value: 'services', label: 'Services' },
            { value: 'blog',     label: 'Blog' },
            { value: 'case',     label: 'Case study' },
          ]}
          onChange={(v) => setTweak('globalPage', v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
