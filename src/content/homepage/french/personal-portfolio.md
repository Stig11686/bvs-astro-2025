---
title: "Accueil - Agence Créative"
metaDescription: "Ceci est une description d'exemple"

# Remplace le contenu par défaut de `/sections/services-section.md`
# Décommentez les clés que vous souhaitez remplacer
servicesSection:
  enable: true
  # sectionDirection: "horizontal" # horizontal | vertical
  title: ""

  options:
    layout: "grid" # accordion | grid
    appearance: "dark" # dark | light - applicable uniquement si layout est "grid"
    limit: 3 # false / number
    column: 3 # 1 / 2 / 3 - applicable uniquement si layout est "grid"
    iconPlacement: "top" # top / right - applicable uniquement si layout est "grid"

# Remplace le contenu par défaut de `/sections/portfolio-section.md`
# Décommentez les clés que vous souhaitez remplacer
portfolioSection:
  enable: true
  title: "Découvrez nos projets <br /> Sélectionnés"

  options:
    layout: "full-width" # masonry | grid | full-width | slider
    appearance: "dark" # dark | light
    limit: 4

  button:
    # Refer to the `sharedButton` schema in `src/sections.schema.ts` for all available configuration options (e.g., enable, label, url, hoverEffect, variant, icon, tag, rel, class, target, etc.)
    enable: true
    label: "Voir tous les projets"
    url: "/portfolio/"
    # hoverEffect: "" # Optional: text-flip | creative-fill | magnetic | magnetic-text-flip
    # variant: "" # Optional: fill | outline | text | circle
    # rel: "" # Optional
    # target: "" # Optional

# Remplace le contenu par défaut de `/sections/blog-section.md`
# Décommentez les clés que vous souhaitez remplacer
blogSection:
  enable: true # Contrôle la visibilité de cette section sur toutes les pages où elle est utilisée
  title: "Consultez mes derniers articles"

  options:
    # layout: "grid" # grid | overlay | horizontal
    appearance: "dark" # dark | light
    limit: 3

# Remplace le contenu par défaut de `/sections/clients.md`
# Décommentez les clés que vous souhaitez remplacer
clientsSection:
  enable: true # Contrôle la visibilité de cette section sur toutes les pages où elle est utilisée
  title: ""

  list:
    - alt: "texte alternatif exemple"
      src: "/images/clients/1-light.svg"
    - alt: "texte alternatif exemple"
      src: "/images/clients/2-light.svg"
    - alt: "texte alternatif exemple"
      src: "/images/clients/3-light.svg"
    - alt: "texte alternatif exemple"
      src: "/images/clients/4-light.svg"
    - alt: "texte alternatif exemple"
      src: "/images/clients/5-light.svg"
    - alt: "texte alternatif exemple"
      src: "/images/clients/6-light.svg"
    - alt: "texte alternatif exemple"
      src: "/images/clients/1-light.svg"
    - alt: "texte alternatif exemple"
      src: "/images/clients/2-light.svg"

  options:
    appearance: "dark" # light / dark
    columnsPerRow: 4 # 4 / 6 (par défaut - 4)
---
