---
enable: true # Control the visibility of this section across all pages where it is used
backgroundImage: "/images/video-background.jpg"

button:
  # Refer to the `sharedButton` schema in `src/sections.schema.ts` for all available configuration options (e.g., enable, label, url, hoverEffect, variant, icon, tag, rel, class, target, etc.)
  enable: true
  label: "Play video"
  url: "/"
  tag: "button"
  # hoverEffect: "" # Optional: text-flip | creative-fill | magnetic | magnetic-text-flip
  # variant: "" # Optional: fill | outline | text | circle

video:
  src: "bTqVqk7FSmY" # Locally hosted video path (ex: /videos/test-video.mp4), or a YouTube/Vimeo video ID (ex: youtube id - LXb3EKWsInQ, vimeo id - 1003013057)
  type: "" # If video is stored locally in `public/videos`, set to video file type (e.g., "video/mp4")
  provider: "youtube" # Options: "youtube", "vimeo", or "html5"
  poster: "/images/video-thumbnail.jpg" # Path to thumbnail image for the video
  autoplay: true # Set to true to autoplay; false for manual start (default: false)
  id: "about-company-video"
---
