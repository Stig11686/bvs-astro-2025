/* @ds-bundle: {"format":4,"namespace":"BVSWebDesignDesignSystem_0a428c","components":[{"name":"BlogCard","sourcePath":"components/cards/BlogCard.jsx"},{"name":"HelpCard","sourcePath":"components/cards/HelpCard.jsx"},{"name":"NumberedRow","sourcePath":"components/cards/NumberedRow.jsx"},{"name":"PortfolioCard","sourcePath":"components/cards/PortfolioCard.jsx"},{"name":"ReviewCard","sourcePath":"components/cards/ReviewCard.jsx"},{"name":"StatCard","sourcePath":"components/cards/StatCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Label","sourcePath":"components/core/Label.jsx"},{"name":"Placeholder","sourcePath":"components/core/Placeholder.jsx"},{"name":"StarRow","sourcePath":"components/core/StarRow.jsx"},{"name":"UnderLink","sourcePath":"components/core/UnderLink.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"FilterBar","sourcePath":"components/navigation/FilterBar.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"TopNav","sourcePath":"components/navigation/TopNav.jsx"},{"name":"DarkCTA","sourcePath":"components/sections/DarkCTA.jsx"},{"name":"PhotoHero","sourcePath":"components/sections/PhotoHero.jsx"},{"name":"ReviewsCarousel","sourcePath":"components/sections/ReviewsCarousel.jsx"}],"sourceHashes":{"components/cards/BlogCard.jsx":"da8185ddd970","components/cards/HelpCard.jsx":"8abb38116112","components/cards/NumberedRow.jsx":"e6b5805c282a","components/cards/PortfolioCard.jsx":"691e5fc00be8","components/cards/ReviewCard.jsx":"a0cdd238c683","components/cards/StatCard.jsx":"0a65407b4b49","components/core/Button.jsx":"0924c284c4a3","components/core/Eyebrow.jsx":"74e65e03112c","components/core/Label.jsx":"b495fee63b01","components/core/Placeholder.jsx":"d188844fee8f","components/core/StarRow.jsx":"dfa8445c69e1","components/core/UnderLink.jsx":"0992c64480ee","components/core/Wordmark.jsx":"1d93c36cab37","components/forms/TextField.jsx":"42115c9ec4e7","components/navigation/FilterBar.jsx":"05a79578e93a","components/navigation/Footer.jsx":"e1feb016f8ae","components/navigation/TopNav.jsx":"afc250250b61","components/sections/DarkCTA.jsx":"069947736fdb","components/sections/PhotoHero.jsx":"38a6d0799ab1","components/sections/ReviewsCarousel.jsx":"b6ad6d2a867c","ui_kits/website/HomeScreens.jsx":"8d008ce95803","ui_kits/website/MiscScreens.jsx":"48f95b9f6bf3","ui_kits/website/ServiceScreens.jsx":"0347239873c1","ui_kits/website/data.jsx":"18c730fdd8c0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BVSWebDesignDesignSystem_0a428c = window.BVSWebDesignDesignSystem_0a428c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/BlogCard.jsx
try { (() => {
function BlogCard({
  cat,
  date,
  read,
  title,
  excerpt,
  image,
  href = '#',
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    className: "bvs-card bvs-card--link",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      ...style
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: 180,
      objectFit: 'cover',
      borderRadius: 12,
      marginBottom: 8
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    className: "bvs-label",
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--ink)',
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bvs-dot"
  }), cat), /*#__PURE__*/React.createElement("span", null, date), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, read, " read")), /*#__PURE__*/React.createElement("h3", {
    className: "bvs-display",
    style: {
      fontSize: 23,
      lineHeight: 1.25,
      letterSpacing: '-0.46px',
      margin: '4px 0 0'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--slate)',
      lineHeight: 1.5,
      letterSpacing: '-0.32px',
      margin: 0
    }
  }, excerpt));
}
Object.assign(__ds_scope, { BlogCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/BlogCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/HelpCard.jsx
try { (() => {
function HelpCard({
  index,
  title,
  body,
  href = '#',
  onClick
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    className: "bvs-card bvs-card--link",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bvs-label"
  }, String(index).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      background: 'var(--cream)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 14
    }
  }, "\u2192")), /*#__PURE__*/React.createElement("h3", {
    className: "bvs-display",
    style: {
      fontSize: 23,
      lineHeight: 1.25,
      letterSpacing: '-0.46px',
      margin: '12px 0 0'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--slate)',
      lineHeight: 1.5,
      letterSpacing: '-0.32px',
      margin: 0
    }
  }, body));
}
Object.assign(__ds_scope, { HelpCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/HelpCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/NumberedRow.jsx
try { (() => {
function NumberedRow({
  n,
  title,
  body,
  variant = 'wide'
}) {
  const num = /*#__PURE__*/React.createElement("div", {
    className: "bvs-display",
    style: {
      fontSize: 23,
      letterSpacing: '-0.46px',
      color: 'var(--accent-a)',
      minWidth: 32
    }
  }, n);
  if (variant === 'stacked') return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: 18,
      padding: '18px 0',
      borderBottom: '1px solid var(--rule-soft)'
    }
  }, num, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 600,
      letterSpacing: '-0.34px'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'var(--slate)',
      lineHeight: 1.5,
      marginTop: 4
    }
  }, body)));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '48px 1fr 2fr',
      gap: 24,
      alignItems: 'baseline',
      padding: '22px 0',
      borderBottom: '1px solid var(--rule-soft)'
    }
  }, num, /*#__PURE__*/React.createElement("h3", {
    className: "bvs-display",
    style: {
      fontSize: 23,
      letterSpacing: '-0.46px',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--slate)',
      lineHeight: 1.5,
      letterSpacing: '-0.32px',
      margin: 0
    }
  }, body));
}
Object.assign(__ds_scope, { NumberedRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/NumberedRow.jsx", error: String((e && e.message) || e) }); }

// components/cards/StatCard.jsx
try { (() => {
function StatCard({
  value,
  label,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "bvs-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bvs-display",
    style: {
      fontSize: 56,
      lineHeight: 1,
      letterSpacing: '-1.1px',
      color: 'var(--ink)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '-0.32px',
      marginTop: 14
    }
  }, label), sub ? /*#__PURE__*/React.createElement("div", {
    className: "bvs-label",
    style: {
      marginTop: 6,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bvs-dot"
  }), sub) : null);
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  kind = 'solid',
  size,
  href,
  onClick,
  disabled,
  type = 'button',
  target,
  children,
  style
}) {
  const cls = 'bvs-btn bvs-btn--' + kind + (size === 'lg' ? ' bvs-btn--lg' : '');
  if (href) return /*#__PURE__*/React.createElement("a", {
    className: cls,
    href: href,
    target: target,
    rel: target === '_blank' ? 'noopener' : undefined,
    onClick: onClick,
    style: style
  }, children);
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    className: cls,
    onClick: onClick,
    disabled: disabled,
    style: style
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '-0.28px',
      lineHeight: 1.2,
      color: 'var(--text-body, var(--ink))',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bvs-dot"
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Label.jsx
try { (() => {
function Label({
  accent,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "bvs-label",
    style: {
      ...(accent ? {
        color: 'var(--accent-a)',
        fontWeight: 500
      } : null),
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Label.jsx", error: String((e && e.message) || e) }); }

// components/core/Placeholder.jsx
try { (() => {
function Placeholder({
  label,
  height = 200,
  src,
  alt,
  radius = 20,
  badge,
  style
}) {
  const box = {
    height,
    position: 'relative',
    borderRadius: radius,
    overflow: 'hidden',
    ...style
  };
  const tag = badge ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '-0.26px',
      background: '#fff',
      color: 'var(--ink)',
      padding: '6px 12px',
      borderRadius: 9999,
      boxShadow: 'var(--shadow-xl)'
    }
  }, badge.accent ? /*#__PURE__*/React.createElement("span", {
    className: "bvs-dot"
  }) : null, badge.text) : null;
  if (src) return /*#__PURE__*/React.createElement("div", {
    style: box
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt || label || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'top',
      display: 'block'
    }
  }), tag);
  return /*#__PURE__*/React.createElement("div", {
    className: "bvs-ph",
    style: box
  }, label, tag);
}
Object.assign(__ds_scope, { Placeholder });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Placeholder.jsx", error: String((e && e.message) || e) }); }

// components/cards/PortfolioCard.jsx
try { (() => {
function PortfolioCard({
  client,
  sector,
  stat,
  image,
  comingSoon,
  size = 'compact',
  href = '#',
  onClick
}) {
  const big = size === 'large';
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    className: "bvs-card bvs-card--link",
    style: {
      padding: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Placeholder, {
    src: image,
    label: client,
    height: big ? 340 : 200,
    radius: 12,
    badge: comingSoon ? {
      text: 'Coming soon'
    } : null
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: big ? '20px 12px 12px' : '16px 8px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bvs-label"
  }, sector), /*#__PURE__*/React.createElement("h3", {
    className: "bvs-display",
    style: {
      fontSize: big ? 28 : 21,
      lineHeight: 1.25,
      letterSpacing: big ? '-0.56px' : '-0.42px',
      margin: '6px 0 10px'
    }
  }, client), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '-0.28px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bvs-dot"
  }), stat)));
}
Object.assign(__ds_scope, { PortfolioCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PortfolioCard.jsx", error: String((e && e.message) || e) }); }

// components/core/StarRow.jsx
try { (() => {
function StarRow({
  n = 5,
  color,
  size = 15
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-label": n + ' out of 5 stars',
    style: {
      display: 'flex',
      gap: 2,
      color: color || 'var(--accent-a)',
      fontSize: size,
      letterSpacing: 1
    }
  }, Array.from({
    length: n
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, "\u2605")));
}
Object.assign(__ds_scope, { StarRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StarRow.jsx", error: String((e && e.message) || e) }); }

// components/cards/ReviewCard.jsx
try { (() => {
function ReviewCard({
  quote,
  name,
  role,
  photo,
  photoLabel,
  shape = 'face',
  stars = 5,
  style
}) {
  const r = shape === 'face' ? '50%' : 8;
  return /*#__PURE__*/React.createElement("figure", {
    className: "bvs-card",
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      minWidth: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StarRow, {
    n: stars
  }), /*#__PURE__*/React.createElement("blockquote", {
    className: "bvs-display",
    style: {
      margin: 0,
      fontSize: 19,
      lineHeight: 1.45,
      letterSpacing: '-0.38px',
      flex: 1
    }
  }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      paddingTop: 20,
      borderTop: '1px solid var(--rule-soft)'
    }
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: name,
    style: {
      width: 44,
      height: 44,
      flex: '0 0 44px',
      borderRadius: r,
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    className: "bvs-ph",
    style: {
      width: 44,
      height: 44,
      flex: '0 0 44px',
      borderRadius: r,
      fontSize: 9,
      padding: 2
    }
  }, (photoLabel || name).slice(0, 2)), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      letterSpacing: '-0.3px'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    className: "bvs-label",
    style: {
      marginTop: 3,
      lineHeight: 1.35
    }
  }, role))));
}
Object.assign(__ds_scope, { ReviewCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ReviewCard.jsx", error: String((e && e.message) || e) }); }

// components/core/UnderLink.jsx
try { (() => {
function UnderLink({
  href = '#',
  onClick,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: "bvs-underlink",
    href: href,
    onClick: onClick,
    style: style
  }, children);
}
Object.assign(__ds_scope, { UnderLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/UnderLink.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
function Wordmark({
  size = 26,
  color,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    className: "bvs-display",
    style: {
      cursor: onClick ? 'pointer' : undefined,
      fontSize: size,
      lineHeight: 1,
      color: color || 'inherit',
      ...style
    }
  }, "BVS", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent-a)'
    }
  }, "Web"), "Design");
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextField({
  label,
  type = 'text',
  multiline,
  rows = 5,
  placeholder,
  value,
  onChange,
  name,
  invalid,
  hint
}) {
  const common = {
    className: 'bvs-field',
    placeholder,
    value,
    onChange,
    name,
    'aria-invalid': invalid ? 'true' : undefined
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block'
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '-0.28px',
      color: 'var(--ink)'
    }
  }, label) : null, multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows
  }, common, {
    style: {
      resize: 'vertical'
    }
  })) : /*#__PURE__*/React.createElement("input", _extends({
    type: type
  }, common)), hint ? /*#__PURE__*/React.createElement("span", {
    className: "bvs-label",
    style: {
      display: 'block',
      marginTop: 6,
      color: invalid ? 'var(--claret)' : undefined
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/FilterBar.jsx
try { (() => {
function FilterBar({
  items = [],
  active,
  onChange
}) {
  const cur = active ?? items[0]?.label;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.label,
    type: "button",
    className: "bvs-chip",
    "aria-pressed": cur === it.label ? 'true' : 'false',
    onClick: () => onChange && onChange(it.label)
  }, it.label, it.count != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.55
    }
  }, it.count) : null)));
}
Object.assign(__ds_scope, { FilterBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/FilterBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer({
  columns = [],
  email = 'hello@bvswebdesign.co.uk',
  blurb = 'WordPress websites for service businesses — built in Skipton, working across Yorkshire and the UK.',
  onNavigate,
  legal = ['© 2026 BVS Web Design · Skipton, North Yorkshire', 'Built in Astro · WordPress where it earns its keep']
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--cream)',
      paddingTop: 58,
      paddingBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bvs-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr ' + columns.map(() => '1fr').join(' '),
      gap: 32,
      alignItems: 'start',
      paddingTop: 40,
      borderTop: '1px solid var(--fog)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 28,
    onClick: () => onNavigate && onNavigate('home')
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: '-0.32px',
      color: 'var(--slate)',
      margin: '14px 0 0',
      maxWidth: '36ch'
    }
  }, blurb), /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + email,
    className: "bvs-underlink",
    style: {
      display: 'inline-block',
      marginTop: 16
    }
  }, email)), columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.heading
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: '-0.28px',
      marginBottom: 12
    }
  }, c.heading), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href || '#',
    target: l.href ? '_blank' : undefined,
    onClick: e => {
      if (!l.href) {
        e.preventDefault();
        onNavigate && l.id && onNavigate(l.id);
      }
    },
    className: "bvs-navlink",
    style: {
      display: 'block',
      padding: '5px 0',
      fontWeight: 400,
      color: 'var(--iron)'
    }
  }, l.label))))), /*#__PURE__*/React.createElement("div", {
    className: "bvs-label",
    style: {
      marginTop: 40,
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, legal.map(x => /*#__PURE__*/React.createElement("span", {
    key: x
  }, x)))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopNav.jsx
try { (() => {
const {
  useState,
  useRef
} = React;
const DEFAULT_ITEMS = [{
  id: 'home',
  label: 'Home'
}, {
  id: 'about',
  label: 'About'
}, {
  id: 'services',
  label: 'Services'
}, {
  id: 'portfolio',
  label: 'Portfolio'
}, {
  id: 'blog',
  label: 'Blog'
}, {
  id: 'contact',
  label: 'Contact'
}];
function TopNav({
  active = 'home',
  items = DEFAULT_ITEMS,
  services = [],
  onNavigate,
  cta = {
    label: 'Start a Project →',
    href: '#'
  },
  secondary,
  sticky = true
}) {
  const [open, setOpen] = useState(false);
  const t = useRef(null);
  const go = id => e => {
    e.preventDefault();
    setOpen(false);
    onNavigate && onNavigate(id);
  };
  const svcIds = services.map(s => s.id);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: sticky ? 'sticky' : 'relative',
      top: 0,
      zIndex: 50,
      background: 'color-mix(in srgb, var(--cream) 90%, transparent)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bvs-wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      alignItems: 'center',
      gap: 24,
      paddingTop: 18,
      paddingBottom: 18
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    onClick: () => onNavigate && onNavigate('home')
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 18,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, items.map(it => {
    const isActive = active === it.id || it.id === 'services' && svcIds.includes(active);
    if (it.id === 'services' && services.length) return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      style: {
        position: 'relative'
      },
      onMouseEnter: () => {
        clearTimeout(t.current);
        setOpen(true);
      },
      onMouseLeave: () => {
        t.current = setTimeout(() => setOpen(false), 120);
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      className: "bvs-navlink",
      "aria-current": isActive ? 'page' : undefined,
      onClick: go(services[0].id)
    }, it.label, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        transition: 'transform .2s',
        transform: open ? 'rotate(180deg)' : 'none',
        display: 'inline-block'
      }
    }, "\u25BE")), open ? /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 'calc(100% + 10px)',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 380,
        background: '#fff',
        borderRadius: 20,
        boxShadow: 'var(--shadow-xl)',
        padding: 8,
        zIndex: 60
      }
    }, services.map(s => /*#__PURE__*/React.createElement("a", {
      key: s.id,
      href: "#",
      onClick: go(s.id),
      className: "bvs-menurow",
      "aria-current": active === s.id ? 'page' : undefined
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        fontWeight: 600,
        letterSpacing: '-0.32px',
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, s.title, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--accent-a)'
      }
    }, "\u2192")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--slate)',
        lineHeight: 1.45,
        marginTop: 4,
        letterSpacing: '-0.28px'
      }
    }, s.desc)))) : null);
    return /*#__PURE__*/React.createElement("a", {
      key: it.id,
      href: "#",
      className: "bvs-navlink",
      "aria-current": isActive ? 'page' : undefined,
      onClick: go(it.id)
    }, it.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, secondary ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    kind: "ghost",
    href: secondary.href,
    target: secondary.target,
    onClick: secondary.onClick
  }, secondary.label) : null, cta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    kind: "solid",
    href: cta.href,
    target: cta.target,
    onClick: cta.onClick
  }, cta.label) : null)));
}
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopNav.jsx", error: String((e && e.message) || e) }); }

// components/sections/DarkCTA.jsx
try { (() => {
function DarkCTA({
  eyebrow = 'Currently booking · 2 project slots left this year',
  heading,
  body,
  primary = {
    label: 'Start a Project →',
    href: '#'
  },
  secondary = {
    label: 'Send a Message'
  }
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "bvs-wrap",
    style: {
      paddingTop: 32,
      paddingBottom: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bvs-dark",
    style: {
      borderRadius: 20,
      padding: '74px 58px 58px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "bvs-display",
    style: {
      fontSize: 69,
      lineHeight: 1.1,
      letterSpacing: '-1.38px',
      margin: '22px 0 32px',
      maxWidth: '16ch'
    }
  }, heading), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 54,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.4,
      letterSpacing: '-0.38px',
      color: 'rgba(255,255,255,0.78)',
      maxWidth: '48ch',
      margin: 0
    }
  }, body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end',
      flexWrap: 'wrap'
    }
  }, secondary ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    kind: "ghost-dark",
    size: "lg",
    href: secondary.href,
    onClick: secondary.onClick
  }, secondary.label) : null, primary ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    kind: "light",
    size: "lg",
    href: primary.href,
    target: primary.target,
    onClick: primary.onClick
  }, primary.label) : null))));
}
Object.assign(__ds_scope, { DarkCTA });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/DarkCTA.jsx", error: String((e && e.message) || e) }); }

// components/sections/PhotoHero.jsx
try { (() => {
function PhotoHero({
  image,
  eyebrow,
  heading,
  sub,
  actions,
  height = 640
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "bvs-wrap",
    style: {
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bvs-dark",
    style: {
      position: 'relative',
      borderRadius: 20,
      overflow: 'hidden',
      minHeight: height,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--graphite)'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(23,23,23,0.35) 0%, rgba(23,23,23,0.62) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      textAlign: 'center',
      padding: '72px 40px',
      maxWidth: 980,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow) : null, /*#__PURE__*/React.createElement("h1", {
    className: "bvs-display",
    style: {
      fontSize: 69,
      lineHeight: 1.1,
      letterSpacing: '-1.38px',
      margin: '22px 0 0',
      color: '#fff'
    }
  }, heading, /*#__PURE__*/React.createElement("span", {
    className: "bvs-period"
  }, ".")), sub ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.4,
      letterSpacing: '-0.38px',
      color: 'rgba(255,255,255,0.9)',
      margin: '20px 0 0',
      maxWidth: '48ch'
    }
  }, sub) : null, actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 32,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, actions) : null)));
}
Object.assign(__ds_scope, { PhotoHero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/PhotoHero.jsx", error: String((e && e.message) || e) }); }

// components/sections/ReviewsCarousel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function ReviewsCarousel({
  reviews = [],
  perView = 3,
  heading,
  eyebrow = 'Reviews',
  ratingText = '★ 5.0 on Google · 40+ reviews'
}) {
  const pages = Math.max(1, Math.ceil(reviews.length / perView));
  const [page, setPage] = useState(0);
  const go = d => setPage(p => (p + d + pages) % pages);
  const gap = 24;
  return /*#__PURE__*/React.createElement("section", {
    className: "bvs-wrap",
    style: {
      paddingTop: 54,
      paddingBottom: 54
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 32,
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "bvs-display",
    style: {
      fontSize: 28,
      lineHeight: 1.4,
      letterSpacing: '-0.56px',
      margin: '14px 0 0'
    }
  }, heading || /*#__PURE__*/React.createElement(React.Fragment, null, "What clients ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent-a)'
    }
  }, "actually say")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '-0.28px'
    }
  }, ratingText), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Previous reviews",
    className: "bvs-roundbtn bvs-roundbtn--light",
    onClick: () => go(-1)
  }, "\u2190"), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Next reviews",
    className: "bvs-roundbtn",
    onClick: () => go(1)
  }, "\u2192")))), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      margin: '-24px',
      padding: '24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap,
      transform: 'translateX(calc(-' + page + ' * (100% + ' + gap + 'px)))',
      transition: 'transform .45s cubic-bezier(.4,0,.2,1)'
    }
  }, Array.from({
    length: pages
  }).map((_, pi) => /*#__PURE__*/React.createElement("div", {
    key: pi,
    style: {
      flex: '0 0 100%',
      display: 'flex',
      gap,
      minWidth: 0
    }
  }, reviews.slice(pi * perView, pi * perView + perView).map((r, i) => /*#__PURE__*/React.createElement(__ds_scope.ReviewCard, _extends({
    key: i
  }, r, {
    style: {
      flex: '0 0 calc((100% - ' + gap * (perView - 1) + 'px) / ' + perView + ')'
    }
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 8,
      marginTop: 24
    }
  }, Array.from({
    length: pages
  }).map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    "aria-label": 'Go to review page ' + (i + 1),
    onClick: () => setPage(i),
    style: {
      width: page === i ? 24 : 8,
      height: 8,
      borderRadius: 9999,
      border: 'none',
      padding: 0,
      background: page === i ? 'var(--accent-a)' : 'var(--fog)',
      cursor: 'pointer',
      transition: 'width .25s, background .25s'
    }
  }))));
}
Object.assign(__ds_scope, { ReviewsCarousel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/ReviewsCarousel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(() => {
  const {
    Button,
    UnderLink,
    Eyebrow,
    Placeholder,
    StatCard,
    HelpCard,
    PortfolioCard,
    ReviewsCarousel
  } = window.DS;
  const PhotoHero = window.DS.PhotoHero || function FallbackHero({
    image,
    eyebrow,
    heading,
    sub,
    actions
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: "bvs-wrap",
      style: {
        paddingTop: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bvs-dark",
      style: {
        position: 'relative',
        borderRadius: 20,
        overflow: 'hidden',
        minHeight: 640,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, image ? /*#__PURE__*/React.createElement("img", {
      src: image,
      alt: "",
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    }) : null, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(23,23,23,0.35), rgba(23,23,23,0.62))'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        textAlign: 'center',
        padding: '72px 40px',
        maxWidth: 980,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    }, eyebrow ? /*#__PURE__*/React.createElement(Eyebrow, null, eyebrow) : null, /*#__PURE__*/React.createElement("h1", {
      className: "bvs-display",
      style: {
        fontSize: 69,
        lineHeight: 1.1,
        letterSpacing: '-1.38px',
        margin: '22px 0 0',
        color: '#fff'
      }
    }, heading, /*#__PURE__*/React.createElement("span", {
      className: "bvs-period"
    }, ".")), sub ? /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 19,
        lineHeight: 1.4,
        color: 'rgba(255,255,255,0.9)',
        margin: '20px 0 0'
      }
    }, sub) : null, actions ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        marginTop: 32
      }
    }, actions) : null)));
  };
  const Acc = ({
    children
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent-a)'
    }
  }, children);
  const nav = (setPage, id) => e => {
    e && e.preventDefault();
    setPage(id);
  };
  const Wrap = ({
    children,
    style,
    id
  }) => /*#__PURE__*/React.createElement("section", {
    id: id,
    className: "bvs-wrap",
    style: {
      paddingTop: 54,
      paddingBottom: 0,
      ...style
    }
  }, children);
  const H1 = ({
    children,
    style
  }) => /*#__PURE__*/React.createElement("h1", {
    className: "bvs-display",
    style: {
      fontSize: 69,
      lineHeight: 1.1,
      letterSpacing: '-1.38px',
      margin: '20px 0 0',
      ...style
    }
  }, children);
  const H2 = ({
    children,
    style
  }) => /*#__PURE__*/React.createElement("h2", {
    className: "bvs-display",
    style: {
      fontSize: 28,
      lineHeight: 1.4,
      letterSpacing: '-0.56px',
      margin: 0,
      ...style
    }
  }, children);
  const Body = ({
    children,
    style
  }) => /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: '-0.32px',
      color: 'var(--iron)',
      margin: 0,
      maxWidth: '60ch',
      ...style
    }
  }, children);
  const Lede = ({
    children,
    style
  }) => /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.4,
      letterSpacing: '-0.38px',
      color: 'var(--iron)',
      margin: 0,
      maxWidth: '56ch',
      ...style
    }
  }, children);
  const PageHead = ({
    eyebrow,
    children,
    intro,
    cta,
    maxW = '18ch'
  }) => /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingTop: 72
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement(H1, {
    style: {
      maxWidth: maxW
    }
  }, children), intro ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, intro) : null, cta ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, cta) : null);
  function HomeScreen({
    setPage
  }) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PhotoHero, {
      image: "../../assets/photos/steve-1.jpg",
      eyebrow: "WordPress web design \xB7 Skipton, Yorkshire & the UK",
      heading: /*#__PURE__*/React.createElement(React.Fragment, null, "Websites that get service businesses ", /*#__PURE__*/React.createElement("span", {
        style: {
          fontStyle: 'italic'
        }
      }, "more enquiries"), ", more bookings, and found on Google"),
      sub: "WordPress web design \u2014 based in Skipton, working across Yorkshire and the UK.",
      actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        kind: "light",
        size: "lg",
        href: LINKS.start,
        target: "_blank"
      }, "Start a Project \u2192"), /*#__PURE__*/React.createElement(Button, {
        kind: "ghost-dark",
        size: "lg",
        onClick: nav(setPage, 'portfolio')
      }, "See my work"))
    }), /*#__PURE__*/React.createElement(Wrap, {
      style: {
        paddingTop: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 24
      }
    }, PROOF_STATS.map(s => /*#__PURE__*/React.createElement(StatCard, _extends({
      key: s.sub
    }, s))))), /*#__PURE__*/React.createElement(Wrap, {
      style: {
        paddingTop: 100
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 32,
        alignItems: 'end',
        marginBottom: 32
      }
    }, /*#__PURE__*/React.createElement(H2, null, "I can help if", /*#__PURE__*/React.createElement("span", {
      className: "bvs-period"
    }, "\u2026")), /*#__PURE__*/React.createElement(Body, null, "Four situations I see most often. Pick the one that sounds like yours.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 24
      }
    }, HELP_CARDS.map((c, i) => /*#__PURE__*/React.createElement(HelpCard, {
      key: c.title,
      index: i + 1,
      title: c.title,
      body: c.body,
      onClick: nav(setPage, c.target)
    })))), /*#__PURE__*/React.createElement(Wrap, {
      style: {
        paddingTop: 100
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '5fr 7fr',
        gap: 58,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Placeholder, {
      label: "Steve \u2014 headshot",
      height: 460
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "About"), /*#__PURE__*/React.createElement("h2", {
      className: "bvs-display",
      style: {
        fontSize: 44,
        lineHeight: 1.15,
        letterSpacing: '-0.88px',
        margin: '18px 0 24px'
      }
    }, "Results, not just ", /*#__PURE__*/React.createElement(Acc, null, "redesigns"), "."), /*#__PURE__*/React.createElement(Lede, null, "I'm Steve. I design and build WordPress websites for service businesses \u2014 and I care about what happens after launch, not just how it looks on handover day."), /*#__PURE__*/React.createElement(Body, {
      style: {
        marginTop: 16
      }
    }, "Every project starts with understanding your business: who your customers are, what they need to see before they get in touch, and what's actually stopping them right now. The design comes after that, not before it."), /*#__PURE__*/React.createElement(UnderLink, {
      onClick: nav(setPage, 'about'),
      style: {
        display: 'inline-block',
        marginTop: 24
      }
    }, "More about how I work \u2192")))), /*#__PURE__*/React.createElement(Wrap, {
      id: "work",
      style: {
        paddingTop: 100
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 32
      }
    }, /*#__PURE__*/React.createElement(H2, null, "Recent work"), /*#__PURE__*/React.createElement(Button, {
      kind: "outline",
      onClick: nav(setPage, 'portfolio')
    }, "View all projects \u2192")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 24
      }
    }, PORTFOLIO.map(p => /*#__PURE__*/React.createElement(PortfolioCard, _extends({
      key: p.client
    }, p, {
      onClick: nav(setPage, 'portfolio')
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 46
      }
    }, /*#__PURE__*/React.createElement(ReviewsCarousel, {
      reviews: REVIEWS
    })));
  }
  function AboutScreen() {
    const results = [['Ilkley Dental Care', 'went from a broken contact form and zero web enquiries to 30+ enquiries per month after a full rebuild.'], ['Rebecca Rennolds Permanent Beauty', 'built from scratch with no existing website; now generates 3–4k visits per month and ranks strongly for local search terms.'], ['Maidens & Ravens Bridal Boutique', 'launched a distinctive WooCommerce site and gained 30 Google reviews in the first three months.']];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Wrap, {
      style: {
        paddingTop: 72
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '7fr 5fr',
        gap: 58,
        alignItems: 'end'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "About Steve Marks"), /*#__PURE__*/React.createElement(H1, null, "I build websites that ", /*#__PURE__*/React.createElement(Acc, null, "work"), ". Then I stick around to make sure they keep working.")), /*#__PURE__*/React.createElement(Placeholder, {
      label: "Steve \u2014 headshot",
      height: 440
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 40,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 32
      }
    }, /*#__PURE__*/React.createElement(Lede, null, "I'm Steve \u2014 a freelance web designer and developer based in Skipton, North Yorkshire. I work with service businesses across Yorkshire and the UK to build WordPress websites that generate real enquiries, not just compliments."), /*#__PURE__*/React.createElement(Lede, null, "What I care about is what happens after launch. Anyone can build something that looks good in a browser. The question is whether it's actually bringing customers in six months later \u2014 and whether there's someone you can call when something goes wrong."))), /*#__PURE__*/React.createElement(Wrap, {
      style: {
        paddingTop: 100
      }
    }, /*#__PURE__*/React.createElement(H2, {
      style: {
        marginBottom: 24
      }
    }, "What that looks like ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontStyle: 'italic'
      }
    }, "in practice")), /*#__PURE__*/React.createElement("div", {
      className: "bvs-card",
      style: {
        padding: '8px 32px'
      }
    }, results.map(([c, b], i) => /*#__PURE__*/React.createElement("div", {
      key: c,
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: 32,
        padding: '24px 0',
        borderBottom: i < 2 ? '1px solid var(--rule-soft)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("h3", {
      className: "bvs-display",
      style: {
        fontSize: 23,
        letterSpacing: '-0.46px',
        margin: 0,
        display: 'flex',
        alignItems: 'baseline',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "bvs-dot",
      style: {
        transform: 'translateY(-3px)'
      }
    }), c), /*#__PURE__*/React.createElement(Body, null, b))))), /*#__PURE__*/React.createElement(Wrap, {
      style: {
        paddingTop: 32
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bvs-dark",
      style: {
        borderRadius: 20,
        padding: '72px 58px'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Word from a client"), /*#__PURE__*/React.createElement("blockquote", {
      className: "bvs-display",
      style: {
        fontSize: 34,
        lineHeight: 1.35,
        letterSpacing: '-0.68px',
        margin: '24px 0 0',
        maxWidth: '38ch'
      }
    }, "\u201CI have had poor experience in the past from other website designers \u2014 limited help, poor response times, and extortionate charging for small tasks. Steve is definitely the opposite of this and I have no plans to instruct anyone else any time soon.\u201D"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 28,
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/photos/elizabeth.jpg",
      alt: "",
      style: {
        width: 44,
        height: 44,
        borderRadius: '50%',
        objectFit: 'cover'
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 600
      }
    }, "Elizabeth Matfin"), /*#__PURE__*/React.createElement("div", {
      className: "bvs-label"
    }, "Maidens & Ravens Bridal Boutique, York"))))));
  }
  Object.assign(window, {
    HomeScreen,
    AboutScreen,
    Acc,
    nav,
    Wrap,
    H1,
    H2,
    Body,
    Lede,
    PageHead
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MiscScreens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(() => {
  const {
    Button,
    Eyebrow,
    Label,
    Placeholder,
    PortfolioCard,
    BlogCard,
    FilterBar,
    TextField
  } = window.DS;
  const IMG = ['../../assets/blog/wordpress-is-not-slow.jpg', '../../assets/blog/web-analytics.jpg', null, null];
  function PortfolioScreen() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "Recent work",
      intro: /*#__PURE__*/React.createElement(Lede, null, "Service businesses across Yorkshire and the UK \u2014 bridal, hospitality, dental, beauty and community organisations. A few of the more recent ones.")
    }, "A small portfolio, written up ", /*#__PURE__*/React.createElement(Acc, null, "honestly"), "."), /*#__PURE__*/React.createElement(Wrap, {
      style: {
        paddingTop: 58
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 24
      }
    }, PORTFOLIO.map(p => /*#__PURE__*/React.createElement(PortfolioCard, _extends({
      key: p.client,
      size: "large"
    }, p, {
      onClick: e => e.preventDefault()
    }))))));
  }
  function BlogScreen() {
    const [cat, setCat] = React.useState('All');
    const [hot, ...rest] = BLOG_POSTS;
    const list = cat === 'All' ? rest : BLOG_POSTS.filter(p => p.cat === cat);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "The Blog",
      intro: /*#__PURE__*/React.createElement(Lede, null, "Practical web design tips, WordPress advice, and hints for small business owners in Yorkshire and beyond.")
    }, "Tips, case studies & ", /*#__PURE__*/React.createElement(Acc, null, "insights"), "."), /*#__PURE__*/React.createElement(Wrap, {
      style: {
        paddingTop: 40
      }
    }, /*#__PURE__*/React.createElement(FilterBar, {
      items: [{
        label: 'All',
        count: 27
      }, {
        label: 'Trends',
        count: 8
      }, {
        label: 'Process',
        count: 6
      }, {
        label: 'Tips',
        count: 9
      }, {
        label: 'SEO',
        count: 4
      }],
      active: cat,
      onChange: setCat
    })), cat === 'All' ? /*#__PURE__*/React.createElement(Wrap, {
      style: {
        paddingTop: 32
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      className: "bvs-card bvs-card--link",
      style: {
        padding: 12,
        display: 'grid',
        gridTemplateColumns: '7fr 5fr',
        gap: 40,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Placeholder, {
      src: "../../assets/blog/confused-about-your-website.webp",
      height: 400,
      radius: 12,
      badge: {
        text: 'Latest',
        accent: true
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingRight: 28
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bvs-label",
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        color: 'var(--ink)',
        fontWeight: 500
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "bvs-dot"
    }), hot.cat), /*#__PURE__*/React.createElement("span", null, hot.date), /*#__PURE__*/React.createElement("span", null, hot.read, " read")), /*#__PURE__*/React.createElement("h2", {
      className: "bvs-display",
      style: {
        fontSize: 40,
        lineHeight: 1.2,
        letterSpacing: '-0.8px',
        margin: '16px 0 14px'
      }
    }, hot.title), /*#__PURE__*/React.createElement(Body, {
      style: {
        marginBottom: 24
      }
    }, hot.excerpt), /*#__PURE__*/React.createElement(Button, null, "Read the post \u2192")))) : null, /*#__PURE__*/React.createElement(Wrap, {
      style: {
        paddingTop: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 24
      }
    }, list.map((p, i) => /*#__PURE__*/React.createElement(BlogCard, _extends({
      key: p.title
    }, p, {
      image: cat === 'All' ? IMG[i] : null,
      onClick: e => e.preventDefault()
    }))))));
  }
  function ContactScreen() {
    const [sent, setSent] = React.useState(false);
    return /*#__PURE__*/React.createElement(Wrap, {
      style: {
        paddingTop: 72,
        paddingBottom: 40
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 58,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Contact"), /*#__PURE__*/React.createElement(H1, null, "Let's talk about ", /*#__PURE__*/React.createElement(Acc, null, "your project"), "."), /*#__PURE__*/React.createElement(Lede, {
      style: {
        marginTop: 24
      }
    }, "Whether you know exactly what you need or you're not sure where to start, get in touch. I'll get back to you within one working day."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 40
      }
    }, [['Email', 'hello@bvswebdesign.co.uk'], ['Based in', 'Skipton, North Yorkshire'], ['Working', 'across Yorkshire & the UK']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: 16,
        padding: '14px 0',
        borderTop: '1px solid var(--fog)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "bvs-label"
    }, k), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        fontWeight: 500,
        letterSpacing: '-0.32px'
      }
    }, v)))), /*#__PURE__*/React.createElement("div", {
      className: "bvs-card",
      style: {
        marginTop: 32
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bvs-display",
      style: {
        fontSize: 23,
        letterSpacing: '-0.46px'
      }
    }, "Prefer to just book a time?"), /*#__PURE__*/React.createElement(Body, {
      style: {
        color: 'var(--slate)',
        margin: '6px 0 20px'
      }
    }, "Grab a free 30-minute slot and we'll talk it through."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      href: LINKS.start,
      target: "_blank"
    }, "Start a Project \u2192"), /*#__PURE__*/React.createElement(Button, {
      kind: "outline",
      href: LINKS.audit,
      target: "_blank"
    }, "Book a Free Audit")))), /*#__PURE__*/React.createElement("div", {
      className: "bvs-card",
      style: {
        padding: 40
      }
    }, sent ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Message sent"), /*#__PURE__*/React.createElement(H2, {
      style: {
        marginTop: 14
      }
    }, "Thanks \u2014 I'll get back to you within one working day.")) : /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        setSent(true);
      },
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(TextField, {
      label: "Your name"
    }), /*#__PURE__*/React.createElement(TextField, {
      label: "Email address",
      type: "email"
    }), /*#__PURE__*/React.createElement(TextField, {
      label: "Business / website"
    }), /*#__PURE__*/React.createElement(TextField, {
      label: "What's going on?",
      multiline: true,
      placeholder: "A new site, a rescue, an audit, or just not sure yet \u2014 tell me what you can."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement(Button, {
      kind: "accent",
      size: "lg",
      type: "submit"
    }, "Send a Message \u2192"), /*#__PURE__*/React.createElement("span", {
      className: "bvs-label"
    }, "I'll get back to you within one working day."))))));
  }
  Object.assign(window, {
    PortfolioScreen,
    BlogScreen,
    ContactScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MiscScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServiceScreens.jsx
try { (() => {
(() => {
  const {
    Button,
    Eyebrow,
    Label,
    Placeholder,
    NumberedRow,
    UnderLink
  } = window.DS;
  function DesignScreen() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "Website Design",
      cta: /*#__PURE__*/React.createElement(Button, {
        size: "lg",
        href: LINKS.start,
        target: "_blank"
      }, "Start a Project \u2192"),
      intro: /*#__PURE__*/React.createElement(Lede, null, "A new WordPress website built around generating enquiries \u2014 not just looking good. I handle strategy, copy guidance, design, build and launch, then stay on to look after it.")
    }, "A website built around ", /*#__PURE__*/React.createElement(Acc, null, "enquiries"), ", not applause."), /*#__PURE__*/React.createElement(Wrap, {
      style: {
        paddingTop: 72
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bvs-card"
    }, /*#__PURE__*/React.createElement(H2, {
      style: {
        fontSize: 23,
        letterSpacing: '-0.46px',
        marginBottom: 12
      }
    }, "What's included"), DESIGN_INCLUDES.map((b, i) => /*#__PURE__*/React.createElement("div", {
      key: b,
      style: {
        fontSize: 16,
        letterSpacing: '-0.32px',
        lineHeight: 1.5,
        padding: '12px 0',
        borderBottom: i < DESIGN_INCLUDES.length - 1 ? '1px solid var(--rule-soft)' : 'none',
        display: 'flex',
        gap: 12,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--accent-a)'
      }
    }, "\u2713"), b))), /*#__PURE__*/React.createElement("div", {
      className: "bvs-card"
    }, /*#__PURE__*/React.createElement(H2, {
      style: {
        fontSize: 23,
        letterSpacing: '-0.46px',
        marginBottom: 4
      }
    }, "How it goes"), DESIGN_PROCESS.map(([n, t, d]) => /*#__PURE__*/React.createElement(NumberedRow, {
      key: n,
      variant: "stacked",
      n: n,
      title: t,
      body: d
    }))))), /*#__PURE__*/React.createElement(Wrap, {
      style: {
        paddingTop: 100
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: 32,
        alignItems: 'end',
        marginBottom: 32
      }
    }, /*#__PURE__*/React.createElement(H2, null, "Recently built"), /*#__PURE__*/React.createElement(Lede, null, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--ink)',
        fontWeight: 600
      }
    }, "Rebecca Rennolds Permanent Beauty"), " \u2014 built from scratch with no existing website; now generates 3\u20134k visits per month and ranks strongly for local search terms.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr',
        gap: 24
      }
    }, /*#__PURE__*/React.createElement(Placeholder, {
      src: "../../assets/portfolio/rebecca-rennolds.png",
      height: 320
    }), /*#__PURE__*/React.createElement(Placeholder, {
      label: "Mobile \u2014 services",
      height: 320
    }), /*#__PURE__*/React.createElement(Placeholder, {
      label: "Booking flow",
      height: 320
    }))));
  }
  function RescueScreen() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "Website Rescue",
      maxW: "20ch",
      cta: /*#__PURE__*/React.createElement(Button, {
        size: "lg",
        href: LINKS.start,
        target: "_blank"
      }, "Start a Project \u2192"),
      intro: /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 32
        }
      }, /*#__PURE__*/React.createElement(Lede, null, "A surprising number of small businesses are stuck with a website they can't access, can't update, or can't afford to keep \u2014 because of a developer who's gone quiet, a platform that's bleeding money, or someone who handed over a half-finished job and disappeared."), /*#__PURE__*/React.createElement(Lede, null, "I take those situations over and sort them out. You get a website that works, hosting you control, and a domain that's actually yours."))
    }, "Your website shouldn't be someone else's ", /*#__PURE__*/React.createElement(Acc, null, "hostage"), "."), /*#__PURE__*/React.createElement(Wrap, {
      style: {
        paddingTop: 100
      }
    }, /*#__PURE__*/React.createElement(H2, {
      style: {
        marginBottom: 32
      }
    }, "Sound ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontStyle: 'italic'
      }
    }, "familiar?")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 24
      }
    }, RESCUE_CARDS.map(c => /*#__PURE__*/React.createElement("div", {
      key: c.title,
      className: "bvs-card"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "bvs-display",
      style: {
        fontSize: 23,
        lineHeight: 1.25,
        letterSpacing: '-0.46px',
        margin: '0 0 12px'
      }
    }, c.title), /*#__PURE__*/React.createElement(Body, {
      style: {
        color: 'var(--slate)'
      }
    }, c.body))))));
  }
  function AuditScreen({
    setPage
  }) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "Free Website Audit",
      maxW: "22ch",
      cta: /*#__PURE__*/React.createElement(Button, {
        kind: "accent",
        size: "lg",
        href: LINKS.audit,
        target: "_blank"
      }, "Book Your Free Audit \u2192"),
      intro: /*#__PURE__*/React.createElement("div", {
        style: {
          maxWidth: '64ch',
          display: 'flex',
          flexDirection: 'column',
          gap: 14
        }
      }, /*#__PURE__*/React.createElement(Lede, null, "Most business owners have a nagging feeling their website could be doing more. They're just not sure what's wrong or where to start."), /*#__PURE__*/React.createElement(Lede, null, "A free audit gives you a clear answer. I'll look at your site properly \u2014 SEO, conversion, structure, speed, first impressions \u2014 and tell you exactly what's holding it back and what to fix first."), /*#__PURE__*/React.createElement(Lede, {
        style: {
          color: 'var(--ink)'
        }
      }, "There's no catch. This is how I start conversations with new clients. Some people take the findings away and fix things themselves. Others ask me to help. ", /*#__PURE__*/React.createElement("em", null, "Either way you leave with something useful.")))
    }, "Free website audit \u2014 find out exactly what your site ", /*#__PURE__*/React.createElement(Acc, null, "is"), " and isn't doing."), /*#__PURE__*/React.createElement(Wrap, {
      style: {
        paddingTop: 100
      }
    }, /*#__PURE__*/React.createElement(H2, {
      style: {
        marginBottom: 24
      }
    }, "What I ", /*#__PURE__*/React.createElement(Acc, null, "look at")), /*#__PURE__*/React.createElement("div", {
      className: "bvs-card",
      style: {
        padding: '4px 32px'
      }
    }, AUDIT_ITEMS.map((it, i) => /*#__PURE__*/React.createElement(NumberedRow, {
      key: it.title,
      n: '0' + (i + 1),
      title: it.title,
      body: it.body
    })))), /*#__PURE__*/React.createElement(Wrap, {
      style: {
        paddingTop: 32
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bvs-dark",
      style: {
        borderRadius: 20,
        padding: '58px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 54,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "What you get"), /*#__PURE__*/React.createElement("h2", {
      className: "bvs-display",
      style: {
        fontSize: 40,
        lineHeight: 1.2,
        letterSpacing: '-0.8px',
        margin: '18px 0 0'
      }
    }, "A plain-English video walkthrough \u2014 and a ", /*#__PURE__*/React.createElement(Acc, null, "priority list"), " that's yours to keep.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        lineHeight: 1.5,
        color: 'rgba(255,255,255,0.78)',
        margin: 0
      }
    }, "A video walkthrough of your site where I talk you through everything I've found \u2014 in plain English, no jargon. Plus a written priority list so you know exactly what to tackle first."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        lineHeight: 1.5,
        color: 'rgba(255,255,255,0.78)',
        margin: '14px 0 28px'
      }
    }, "The whole thing takes around 30 minutes of your time. The call is free. The findings are yours to keep."), /*#__PURE__*/React.createElement(Button, {
      kind: "light",
      size: "lg",
      href: LINKS.audit,
      target: "_blank"
    }, "Book Your Free Audit \u2192")))), /*#__PURE__*/React.createElement(Wrap, {
      style: {
        paddingTop: 100
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: 54,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(H2, null, "Real ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontStyle: 'italic'
      }
    }, "example")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Lede, {
      style: {
        maxWidth: '62ch'
      }
    }, "A dental practice came to me not knowing why their website wasn't generating enquiries despite reasonable traffic. The audit found a ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink)'
      }
    }, "broken contact form nobody knew about"), ", a phone number buried below the fold, and no clear call to action on any page. Issues they'd lived with for years \u2014 fixed in a few weeks. They now receive ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--accent-a)'
      }
    }, "30+ enquiries per month"), "."), /*#__PURE__*/React.createElement(UnderLink, {
      onClick: nav(setPage, 'portfolio'),
      style: {
        display: 'inline-block',
        marginTop: 22
      }
    }, "See the full Ilkley Dental Care project \u2192")))));
  }
  Object.assign(window, {
    DesignScreen,
    RescueScreen,
    AuditScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServiceScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.jsx
try { (() => {
// Content lifted from bvswebdesign/project/site-data.jsx (Stig11686/bvs-astro-2025)
const LINKS = {
  start: 'https://tidycal.com/bvswebdesign/start-a-project',
  audit: 'https://tidycal.com/bvswebdesign/30-minute-meeting'
};
const SERVICES_NAV = [{
  id: 'design',
  title: 'Website Design',
  desc: 'A new WordPress website built around generating enquiries — not just looking good.'
}, {
  id: 'rescue',
  title: 'Website Rescue',
  desc: 'Developer gone? Wrong platform? Locked out? I take it over and sort it out.'
}, {
  id: 'audit',
  title: 'Website Audit',
  desc: "Free audit of your website — find out exactly what's holding it back."
}];
const PROOF_STATS = [{
  value: '30+',
  label: 'Enquiries per month',
  sub: 'Ilkley Dental Care'
}, {
  value: '3–4k',
  label: 'Visits per month',
  sub: 'Rebecca Rennolds'
}, {
  value: '30',
  label: 'Google reviews in 3 months',
  sub: 'Maidens & Ravens'
}];
const HELP_CARDS = [{
  title: "Your site isn't bringing anything in",
  body: "You've got a website. Maybe it even looks decent. But the enquiries aren't coming and you're not sure why. I find what's holding it back and fix it.",
  target: 'audit'
}, {
  title: "You're paying too much for your current platform",
  body: 'Proprietary website builders and closed CMS platforms can cost hundreds — sometimes thousands — a year for no good reason. I move businesses onto WordPress and cut the ongoing cost significantly.',
  target: 'rescue'
}, {
  title: 'Your developer disappeared — or stopped caring',
  body: "It happens more than it should. If you've been left with a half-finished site, no access to your own files, or a developer who's stopped returning calls — I can take it over and sort it out.",
  target: 'rescue'
}, {
  title: "You're starting from scratch",
  body: "New business, new direction, or starting properly for the first time. I'll build something that works from day one — not just something that looks good in a browser.",
  target: 'design'
}];
const PORTFOLIO = [{
  client: 'The Yorkshire Unicorn',
  sector: 'Hospitality · Skipton',
  stat: 'Direct bookings from day one',
  image: '../../assets/portfolio/the-yorkshire-unicorn.png'
}, {
  client: 'Ilkley Dental Care',
  sector: 'Healthcare · Ilkley',
  stat: '30+ enquiries per month',
  image: '../../assets/portfolio/ilkley-dental-care.png'
}, {
  client: 'Maidens & Ravens Bridal Boutique',
  sector: 'Bridal · York',
  stat: '30 Google reviews in 3 months',
  image: '../../assets/portfolio/maidens-and-ravens.png'
}, {
  client: 'Antler Interiors',
  sector: 'Interiors',
  stat: 'Case study coming soon',
  image: '../../assets/portfolio/antler.png',
  comingSoon: true
}];
const AUDIT_ITEMS = [{
  title: 'First impressions',
  body: 'Does it pass the five-second test? Is it immediately clear what you do and who for?'
}, {
  title: 'SEO foundations',
  body: 'Are you showing up on Google for the right searches? Are there basic technical issues holding you back?'
}, {
  title: 'Conversion blockers',
  body: "Why aren't visitors getting in touch? What's getting in the way between landing on the page and picking up the phone?"
}, {
  title: 'Mobile experience',
  body: 'Over 60% of your visitors are on a phone. Does your site actually work for them?'
}, {
  title: 'Technical health',
  body: 'Speed, security, broken links, Core Web Vitals — the unglamorous stuff that quietly kills performance.'
}];
const RESCUE_CARDS = [{
  title: 'Developer gone quiet',
  body: "You've sent the emails. Maybe you've even called. Nothing. Your website is sitting on someone else's server, you don't have the login details, and you're not sure what you even own. I'll get you back in control."
}, {
  title: 'Locked out of your own site',
  body: "Some developers — intentionally or not — leave businesses with no access to their own domain, hosting, or files. I've helped businesses recover 30 years of content from a locked-down server. Whatever the situation, there's usually a way through."
}, {
  title: 'Wrong platform, wrong price',
  body: 'Proprietary website builders and closed CMS platforms charge a premium for the privilege of keeping you stuck. I move businesses onto WordPress — reducing ongoing costs and giving you something you actually own and can take anywhere.'
}];
const DESIGN_PROCESS = [['01', 'Free call', 'A proper conversation about your business — not your colour scheme.'], ['02', 'Discovery', 'Your customers, what they need to see, and what is getting in the way.'], ['03', 'Design', 'Figma drafts you can mark up, built around the path to enquiry.'], ['04', 'Build', 'Hand-built WordPress — no bloated page builders.'], ['05', 'Launch + care', 'Live, trained, and looked after long after handover.']];
const DESIGN_INCLUDES = ['Discovery & strategy session', 'Custom design in Figma', 'Hand-built WordPress (no page builders)', 'Copywriting guidance', 'On-page SEO foundations', 'Mobile-first, fast by default', 'Editor training video', '30 days of post-launch fixes'];
const BLOG_POSTS = [{
  cat: 'Trends',
  date: '14 May 2026',
  read: '6 min',
  title: 'Why “make it pop” is killing your small business website',
  excerpt: "Visual noise has a cost. Here's how restraint, hierarchy and one clear next action beats every bouncing slider on a Yorkshire high street."
}, {
  cat: 'Process',
  date: '02 May 2026',
  read: '4 min',
  title: 'The 7 questions I ask before quoting any WordPress build',
  excerpt: 'A short list that saves both of us months of rework, and lets me give you a real number on the first call rather than a fudged range.'
}, {
  cat: 'Tips',
  date: '21 Apr 2026',
  read: '5 min',
  title: 'Stop writing “Welcome to our website”',
  excerpt: 'Your homepage hero has about two seconds. Spend them on the thing the visitor is here for, not a polite hello to nobody in particular.'
}, {
  cat: 'SEO',
  date: '03 Apr 2026',
  read: '8 min',
  title: 'Local SEO for Yorkshire businesses, without the snake oil',
  excerpt: 'The unglamorous handful of things that actually move you up Google Maps in Skipton, Ilkley, Otley and York — done in a Tuesday afternoon.'
}, {
  cat: 'Process',
  date: '18 Mar 2026',
  read: '3 min',
  title: "Why I build in WordPress (and when I won't)",
  excerpt: "Not because it's trendy. Because you can edit the thing without phoning me at 9pm on a Sunday before a wedding fair."
}];
const REVIEWS = [{
  quote: 'My website crashed after a TikTok went viral with over 200,000 views. Steve looked at it immediately and got it back up and running straight away.',
  name: 'Elizabeth Matfin',
  role: 'Maidens & Ravens Bridal Boutique, York',
  photo: '../../assets/photos/elizabeth.jpg'
}, {
  quote: "I've had poor experiences with website designers before — limited help, slow responses, and charged a fortune for small tasks. Steve is the opposite. I've no plans to use anyone else.",
  name: 'Elizabeth Matfin',
  role: 'Maidens & Ravens Bridal Boutique, York',
  photo: '../../assets/photos/elizabeth.jpg'
}, {
  quote: 'Our contact form had been broken for two years and nobody had spotted it. Steve found it, rebuilt the site, and now we get more than thirty enquiries a month.',
  name: 'Ilkley Dental Care',
  role: 'Dental practice, Ilkley',
  photo: '../../assets/portfolio/ilkley-dental-care.png',
  shape: 'site'
}, {
  quote: "Steve built our website from scratch when we had nothing online at all. We're now getting three to four thousand visits a month and ranking for the searches that matter.",
  name: 'Rebecca Rennolds',
  role: 'Rebecca Rennolds Permanent Beauty',
  photo: '../../assets/photos/rebecca-rennolds.webp'
}, {
  quote: 'We were locked out of thirty years of club history by a previous developer. Steve got us a new site, recovered the content, and handed us full control of our own domain.',
  name: 'Ilkley Harriers',
  role: 'Running club, Ilkley',
  photoLabel: 'Ilkley Harriers'
}, {
  quote: "Calm, clear and genuinely helpful from start to finish. Steve made sure we owned everything ourselves so we'd never be stuck again.",
  name: 'Climate Action Silsden',
  role: 'Community organisation, Silsden',
  photo: '../../assets/portfolio/climate-action-silsden.webp',
  shape: 'site'
}];
const CTA_CONFIG = {
  home: {
    h: ['Ready to get more from your ', 'website', '?'],
    body: "Whether you know exactly what you need or you're not sure where to start — let's have a conversation.",
    primary: 'start'
  },
  about: {
    h: ['Ready to talk about your ', 'project', '?'],
    body: "Tell me what you're trying to achieve and I'll tell you honestly whether — and how — I can help.",
    primary: 'start'
  },
  design: {
    h: ["Let's build something that ", 'earns', ' its keep.'],
    body: 'Start with a free 30-minute call. No deck, no questionnaire — just a proper conversation about your business.',
    primary: 'start'
  },
  rescue: {
    h: ["Stuck? Let's get you ", 'back in control', '.'],
    body: "You don't need it all figured out. Tell me what's going on and I'll tell you what's possible.",
    primary: 'start'
  },
  audit: {
    h: ['Find out what your site ', "is and isn't", ' doing.'],
    body: 'A free, no-obligation audit. Around 30 minutes of your time, and the findings are yours to keep.',
    primary: 'audit'
  },
  portfolio: {
    h: ['Want results like ', 'these', '?'],
    body: "Whether you know exactly what you need or you're not sure where to start — let's have a conversation.",
    primary: 'start'
  },
  blog: {
    h: ['Ready to get more from your ', 'website', '?'],
    body: "Whether you know exactly what you need or you're not sure where to start — let's have a conversation.",
    primary: 'start'
  }
};
Object.assign(window, {
  LINKS,
  SERVICES_NAV,
  PROOF_STATS,
  HELP_CARDS,
  PORTFOLIO,
  AUDIT_ITEMS,
  RESCUE_CARDS,
  DESIGN_PROCESS,
  DESIGN_INCLUDES,
  BLOG_POSTS,
  REVIEWS,
  CTA_CONFIG
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BlogCard = __ds_scope.BlogCard;

__ds_ns.HelpCard = __ds_scope.HelpCard;

__ds_ns.NumberedRow = __ds_scope.NumberedRow;

__ds_ns.PortfolioCard = __ds_scope.PortfolioCard;

__ds_ns.ReviewCard = __ds_scope.ReviewCard;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.Placeholder = __ds_scope.Placeholder;

__ds_ns.StarRow = __ds_scope.StarRow;

__ds_ns.UnderLink = __ds_scope.UnderLink;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.FilterBar = __ds_scope.FilterBar;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.TopNav = __ds_scope.TopNav;

__ds_ns.DarkCTA = __ds_scope.DarkCTA;

__ds_ns.PhotoHero = __ds_scope.PhotoHero;

__ds_ns.ReviewsCarousel = __ds_scope.ReviewsCarousel;

})();
