---
title: "Home - Creative Agency"
metaDescription: "This is a example description"

# Override Default Content of `/sections/services-section.md`
# Uncomment key values that you wan to override
servicesSection:
  enable: true
  # sectionDirection: "horizontal" # horizontal | vertical
  title: ""

  options:
    layout: "grid" # accordion | grid
    appearance: "dark" # dark | light - applicable only if layout is "grid"
    limit: 3 # false / number
    column: 3 # 1 / 2 / 3 - applicable only if layout is "grid"
    iconPlacement: "top" # top / right - applicable only if layout is "grid"

# Override Default Content of `/sections/portfolio-section.md`
# Uncomment key values that you wan to override
portfolioSection:
  enable: true
  title: "Discover Our <br /> Selected Projects"

  options:
    layout: "full-width" # masonry | grid | full-width | slider
    appearance: "dark" # dark | light
    limit: 4

  button:
    # Refer to the `sharedButton` schema in `src/sections.schema.ts` for all available configuration options (e.g., enable, label, url, hoverEffect, variant, icon, tag, rel, class, target, etc.)
    enable: true
    label: "View all projects"
    url: "/portfolio/"
    # hoverEffect: "" # Optional: text-flip | creative-fill | magnetic | magnetic-text-flip
    # variant: "" # Optional: fill | outline | text | circle
    # rel: "" # Optional
    # target: "" # Optional

# Override Default Content of `/sections/blog-section.md`
# Uncomment key values that you wan to override
blogSection:
  enable: true # Control the visibility of this section across all pages where it is used
  title: "Check Out My Latest Articles"

  options:
    # layout: "grid" # grid | overlay | horizontal
    appearance: "dark" # dark | light
    limit: 3

# Override Default Content of `/sections/clients.md`
# Uncomment key values that you wan to override
clientsSection:
  enable: true # Control the visibility of this section across all pages where it is used
  title: ""

  list:
    - alt: "example alt text"
      src: "/images/clients/1-light.svg"
    - alt: "example alt text"
      src: "/images/clients/2-light.svg"
    - alt: "example alt text"
      src: "/images/clients/3-light.svg"
    - alt: "example alt text"
      src: "/images/clients/4-light.svg"
    - alt: "example alt text"
      src: "/images/clients/5-light.svg"
    - alt: "example alt text"
      src: "/images/clients/6-light.svg"
    - alt: "example alt text"
      src: "/images/clients/1-light.svg"
    - alt: "example alt text"
      src: "/images/clients/2-light.svg"

  options:
    appearance: "dark" # light / dark
    columnsPerRow: 4 # 4 / 6 (default - 4)
---
