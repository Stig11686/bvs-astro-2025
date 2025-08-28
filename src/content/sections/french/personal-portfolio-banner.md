---
# Pour mettre à jour les informations de contact comme email, téléphone, adresse, etc., merci de modifier la table `settings.contactInfo` dans `src/config/config.toml`

enable: true # Contrôle la visibilité de cette section sur toutes les pages où elle est utilisée
# titleSize: "display-2" # Si votre titre est grand, utilisez une taille plus petite comme "display-3", "display-2" ou "display-1".
subtitle: "Bonjour, je suis Daniel Pickman"
title:
  - Senior
  - Graphiste
  - Designer

image: "/images/banner/portfolio-bg.png" # Une image de 2880x1620 pixels est recommandée, de préférence avec un fond transparent
description: "Nous sommes une agence digitale qui crée des expériences utilisateur immersives <br /> et engageantes"

button:
  # Refer to the `sharedButton` schema in `src/sections.schema.ts` for all available configuration options (e.g., enable, label, url, hoverEffect, variant, icon, tag, rel, class, target, etc.)
  enable: true
  label: "Travaillez avec moi"
  url: "/contact/"
  # hoverEffect: "" # Optional: text-flip | creative-fill | magnetic | magnetic-text-flip
  # variant: "" # Optional: fill | outline | text | circle
  # rel: "" # Optional
  # target: "" # Optional
---
