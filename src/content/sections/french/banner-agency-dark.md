---
# Pour mettre à jour les informations de contact comme email, téléphone, adresse, etc., merci de modifier la table `settings.contactInfo` dans `src/config/config.toml`

enable: true # Contrôle la visibilité de cette section sur toutes les pages où elle est utilisée
titleSize: "display-2" # Si votre titre est plus grand, utilisez une taille de texte plus petite comme "display-3", "display-2" ou "display-1"
title:
  - Nous Créons
  - Des Choses
  - Créatives Tous

image: "/images/banner/agency-dark.jpg"
description: "Nous sommes une agence digitale qui crée des <br /> expériences utilisateur immersives et engageantes"

button:
  # Refer to the `sharedButton` schema in `src/sections.schema.ts` for all available configuration options (e.g., enable, label, url, hoverEffect, variant, icon, tag, rel, class, target, etc.)
  enable: true
  label: "VOIR NOS RÉALISATIONS"
  url: "/portfolio/"
  # hoverEffect: "" # Optional: text-flip | creative-fill | magnetic | magnetic-text-flip
  # variant: "" # Optional: fill | outline | text | circle
  # rel: "" # Optional
  # target: "" # Optional
---
