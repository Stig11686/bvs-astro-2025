---
title: "Accueil - Agence Créative"
metaDescription: "Ceci est une description d'exemple"

# Override Default Content of `/sections/call-to-action.md`
# Uncomment key values that you wan to override
ctaSection:
  enable: true # Contrôle la visibilité de cette section sur toutes les pages où elle est utilisée
  title: "Créons quelque chose de grand"
  description: |
    Nous vous faisons passer de la réalité d'aujourd'hui au potentiel de demain, en assurant

  # button:
  #   # Refer to the `sharedButton` schema in `src/sections.schema.ts` for all available configuration options (e.g., enable, label, url, hoverEffect, variant, icon, tag, rel, class, target, etc.)
  #   enable: true
  #   label: "Label"
  #   url: "//"
  #   # hoverEffect: "" # Optional: text-flip | creative-fill | magnetic | magnetic-text-flip
  #   # variant: "" # Optional: fill | outline | text | circle
  #   # rel: "" # Optional
  #   # target: "" # Optional

  options:
    appearance: "accent" # Options: "light" | "accent"
    centeredContent: true

# Remplace le contenu par défaut de `/sections/services-section.md`
# Décommentez les clés que vous souhaitez remplacer
servicesSection:
  enable: true
  # sectionDirection: "horizontal" # horizontal | vertical
  # title: "Ce que nous pouvons faire pour nos clients"

  options:
    layout: "grid" # accordion | grid
    limit: 3 # false / number
    column: 3 # 1 / 2 / 3 - applicable only if layout is "grid"
    iconPlacement: "top" # top / right - applicable only if layout is "grid"

# Remplace le contenu par défaut de `/sections/projects-section.md`
# Décommentez les clés que vous souhaitez remplacer
portfolioSection:
  enable: true
  title: "Découvrez nos projets sélectionnés"

  options:
    layout: "slider" # masonry | grid | full-width | slider
    limit: false

  # button:
  #   # Refer to the `sharedButton` schema in `src/sections.schema.ts` for all available configuration options (e.g., enable, label, url, hoverEffect, variant, icon, tag, rel, class, target, etc.)
  #   enable: true
  #   label: "Label"
  #   url: "//"
  #   # hoverEffect: "" # Optional: text-flip | creative-fill | magnetic | magnetic-text-flip
  #   # variant: "" # Optional: fill | outline | text | circle
  #   # rel: "" # Optional
  #   # target: "" # Optional

# Override Default Content of `/sections/blog-section.md`
# Uncomment key values that you wan to override
blogSection:
  enable: true # Control the visibility of this section across all pages where it is used
  # title: "Read Our Articles and News"

  options:
    layout: "overlay" # grid | overlay | horizontal
    limit: 3
---
