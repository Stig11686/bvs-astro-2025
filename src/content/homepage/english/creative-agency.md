---
title: "Home - Creative Agency"
metaDescription: "This is a example description"

# Override Default Content of `/sections/call-to-action.md`
# Uncomment key values that you wan to override
ctaSection:
  enable: true # Control the visibility of this section across all pages where it is used
  title: "Let's Create Something Great"
  description: |
    We shift you from today’s reality to tomorrow’s potential, ensuring

  # button:
  #   # Refer to the `sharedButton` schema in `src/sections.schema.ts` for all available configuration options (e.g., enable, label, url, hoverEffect, variant, icon, tag, rel, class, target, etc.)
  #   enable: true
  #   label: "Let’s Talk with us"
  #   url: "/contact/"
  #   # hoverEffect: "" # Optional: text-flip | creative-fill | magnetic | magnetic-text-flip
  #   # variant: "" # Optional: fill | outline | text | circle
  #   # rel: "" # Optional
  #   # target: "" # Optional

  options:
    appearance: "accent" # Options: "light" | "accent"
    centeredContent: true

# Override Default Content of `/sections/services-section.md`
# Uncomment key values that you wan to override
servicesSection:
  enable: true
  # sectionDirection: "horizontal" # horizontal | vertical
  # title: "What We Can Do for Our Clients"

  options:
    layout: "grid" # accordion | grid
    limit: 3 # false / number
    column: 3 # 1 / 2 / 3 - applicable only if layout is "grid"
    iconPlacement: "top" # top / right - applicable only if layout is "grid"

# Override Default Content of `/sections/projects-section.md`
# Uncomment key values that you wan to override
portfolioSection:
  enable: true
  title: "Discover Our <br /> Selected Projects"

  options:
    layout: "slider" # masonry | grid | full-width | slider
    limit: false

  # button:
  #   # Refer to the `sharedButton` schema in `src/sections.schema.ts` for all available configuration options (e.g., enable, label, url, hoverEffect, variant, icon, tag, rel, class, target, etc.)
  #   enable: true
  #   label: "Let’s Talk with us"
  #   url: "/contact/"
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
