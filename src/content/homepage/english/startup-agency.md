---
title: "Home - Startup Agency"
metaDescription: "This is a example description"

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
  title: "Discover Our <br /> Selected Projects"

  options:
    layout: "grid" # masonry | grid | full-width | slider
    limit: 4

  # button:
  #   # Refer to the `sharedButton` schema in `src/sections.schema.ts` for all available configuration options (e.g., enable, label, url, hoverEffect, variant, icon, tag, rel, class, target, etc.)
  #   enable: true
  #   label: "View all projects"
  #   url: "/portfolio/"
  #   # hoverEffect: "" # Optional: text-flip | creative-fill | magnetic | magnetic-text-flip
  #   # variant: "" # Optional: fill | outline | text | circle
  #   # rel: "" # Optional
  #   # target: "" # Optional

# Override Default Content of `/sections/pricing-section.md`
# Uncomment key values that you wan to override
pricingSection:
  enable: true
  title: "Best Pricing Plan"

  list:
    - enable: true
      name: "Personal"
      description: "We care about their success. For us real relationships feel real"
      price:
        prependValue: "$"
        value: "180"
        appendValue: "/mo"
      features:
        - WEB & MOBILE
        - FREE CUSTOM DOMAIN
        - BEST HOSTING EVER
        - OUTSTANDING SUPPORT
        - WEB DESIGN
      button:
        # Refer to the `sharedButton` schema in `src/sections.schema.ts` for all available configuration options (e.g., enable, label, url, hoverEffect, variant, icon, tag, rel, class, target, etc.)
        enable: true
        label: "CHOOSE THIS PLAN"
        url: "/startup-agency/#footer-with-contact"
        # hoverEffect: "" # Optional: text-flip | creative-fill | magnetic | magnetic-text-flip
        # variant: "" # Optional: fill | outline | text | circle
        # rel: "" # Optional
        # target: "" # Optional
    - enable: true
      name: "Startup"
      description: "We care about their success. For us real relationships feel real"
      price:
        prependValue: "$"
        value: "180"
        appendValue: "/mo"
      features:
        - WEB & MOBILE
        - FREE CUSTOM DOMAIN
        - BEST HOSTING EVER
        - OUTSTANDING SUPPORT
        - WEB DESIGN
      button:
        # Refer to the `sharedButton` schema in `src/sections.schema.ts` for all available configuration options (e.g., enable, label, url, hoverEffect, variant, icon, tag, rel, class, target, etc.)
        enable: true
        label: "CHOOSE THIS PLAN"
        url: "/startup-agency/#footer-with-contact"
        # hoverEffect: "" # Optional: text-flip | creative-fill | magnetic | magnetic-text-flip
        # variant: "" # Optional: fill | outline | text | circle
        # rel: "" # Optional
        # target: "" # Optional
    - enable: true
      name: "Corporate"
      description: "We care about their success. For us real relationships feel real"
      price:
        prependValue: "$"
        value: "180"
        appendValue: "/mo"
      features:
        - WEB & MOBILE
        - FREE CUSTOM DOMAIN
        - BEST HOSTING EVER
        - OUTSTANDING SUPPORT
        - WEB DESIGN
      button:
        # Refer to the `sharedButton` schema in `src/sections.schema.ts` for all available configuration options (e.g., enable, label, url, hoverEffect, variant, icon, tag, rel, class, target, etc.)
        enable: true
        label: "CHOOSE THIS PLAN"
        url: "/startup-agency/#footer-with-contact"
        # hoverEffect: "" # Optional: text-flip | creative-fill | magnetic | magnetic-text-flip
        # variant: "" # Optional: fill | outline | text | circle
        # rel: "" # Optional
        # target: "" # Optional
---
