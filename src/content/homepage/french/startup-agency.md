---
title: "Accueil - Startup Agency"
metaDescription: "Ceci est une description d'exemple"

# Override Default Content of `/sections/clients.md`
# Uncomment key values that you wan to override
clientsSection:
  enable: true # Control the visibility of this section across all pages where it is used
  # title: ""

  list:
    - alt: "example alt text"
      src: "/images/clients/1.svg"
    - alt: "example alt text"
      src: "/images/clients/2.svg"
    - alt: "example alt text"
      src: "/images/clients/3.svg"
    - alt: "example alt text"
      src: "/images/clients/4.svg"
    - alt: "example alt text"
      src: "/images/clients/5.svg"
    - alt: "example alt text"
      src: "/images/clients/6.svg"

  options:
    appearance: "light" # light / dark
    columnsPerRow: 6 # 4 / 6 (default - 4)

# Override Default Content of `/sections/services-section.md`
# Uncomment key values that you wan to override
servicesSection:
  enable: true
  # title: "What We Can Do for Our Clients"
  sectionDirection: "horizontal" # horizontal | vertical

  options:
    layout: "grid" # accordion | grid
    limit: 4 # false / number
    column: 1 # 1 / 2 / 3 - applicable only if layout is "grid"
    iconPlacement: "right" # top / right - applicable only if layout is "grid"

# Override Default Content of `/sections/projects-section.md`
# Uncomment key values that you wan to override
portfolioSection:
  enable: true
  title: "Découvrez nos projets <br /> Sélectionnés"

  options:
    layout: "grid" # masonry | grid | full-width | slider
    limit: 4

  # button:
  #   # Refer to the `sharedButton` schema in `src/sections.schema.ts` for all available configuration options (e.g., enable, label, url, hoverEffect, variant, icon, tag, rel, class, target, etc.)
  #   enable: true
  #   label: "Label"
  #   url: "/"
  #   # hoverEffect: "" # Optional: text-flip | creative-fill | magnetic | magnetic-text-flip
  #   # variant: "" # Optional: fill | outline | text | circle
  #   # rel: "" # Optional
  #   # target: "" # Optional

# Override Default Content of `/sections/pricing-section.md`
# Uncomment key values that you wan to override
pricingSection:
  enable: true
  title: "Meilleure Offre Tarifaire"

  list:
    - enable: true
      name: "Personnel"
      description: "Nous nous soucions de leur réussite. Pour nous, les relations authentiques comptent vraiment."
      price:
        prependValue: "$"
        value: "180"
        appendValue: "/mo"
      features:
        - WEB & MOBILE
        - NOM DE DOMAINE PERSONNALISÉ GRATUIT
        - MEILLEUR HÉBERGEMENT
        - SUPPORT EXCEPTIONNEL
        - CONCEPTION WEB
      button:
        # Refer to the `sharedButton` schema in `src/sections.schema.ts` for all available configuration options (e.g., enable, label, url, hoverEffect, variant, icon, tag, rel, class, target, etc.)
        enable: true
        label: "CHOISIR CE FORFAIT"
        url: "/startup-agency/#footer-with-contact"
        # hoverEffect: "" # Optional: text-flip | creative-fill | magnetic | magnetic-text-flip
        # variant: "" # Optional: fill | outline | text | circle
        # rel: "" # Optional
        # target: "" # Optional
    - enable: true
      name: "Startup"
      description: "Nous nous soucions de leur réussite. Pour nous, les relations authentiques comptent vraiment."
      price:
        prependValue: "$"
        value: "180"
        appendValue: "/mo"
      features:
        - WEB & MOBILE
        - NOM DE DOMAINE PERSONNALISÉ GRATUIT
        - MEILLEUR HÉBERGEMENT
        - SUPPORT EXCEPTIONNEL
        - CONCEPTION WEB
      button:
        # Refer to the `sharedButton` schema in `src/sections.schema.ts` for all available configuration options (e.g., enable, label, url, hoverEffect, variant, icon, tag, rel, class, target, etc.)
        enable: true
        label: "CHOISIR CE FORFAIT"
        url: "/startup-agency/#footer-with-contact"
        # hoverEffect: "" # Optional: text-flip | creative-fill | magnetic | magnetic-text-flip
        # variant: "" # Optional: fill | outline | text | circle
        # rel: "" # Optional
        # target: "" # Optional
    - enable: true
      name: "Entreprise"
      description: "Nous nous soucions de leur réussite. Pour nous, les relations authentiques comptent vraiment."
      price:
        prependValue: "$"
        value: "180"
        appendValue: "/mo"
      features:
        - WEB & MOBILE
        - NOM DE DOMAINE PERSONNALISÉ GRATUIT
        - MEILLEUR HÉBERGEMENT
        - SUPPORT EXCEPTIONNEL
        - CONCEPTION WEB
      button:
        # Refer to the `sharedButton` schema in `src/sections.schema.ts` for all available configuration options (e.g., enable, label, url, hoverEffect, variant, icon, tag, rel, class, target, etc.)
        enable: true
        label: "CHOISIR CE FORFAIT"
        url: "/startup-agency/#footer-with-contact"
        # hoverEffect: "" # Optional: text-flip | creative-fill | magnetic | magnetic-text-flip
        # variant: "" # Optional: fill | outline | text | circle
        # rel: "" # Optional
        # target: "" # Optional
---
