---
name: optimize-image
description: Downloads an image from a URL, resizes it, and converts it to .webp, saving the result into this project's public/ folder for use with next/image. Use this skill whenever the user asks to "download this image", "add a photo to public/", "optimize image", "convert to webp", or references a stock photo URL (Pexels, Unsplash, Pixabay, etc.) that should be hosted locally instead of hotlinked. Also use it proactively before referencing any external image URL directly in site code — localize it with this skill first instead of hotlinking.
---

Downloads a source image, resizes it preserving aspect ratio, and encodes it as `.webp` into `public/`, so the site serves it locally instead of hotlinking an external CDN. Matches the existing convention in `app/_lib/menu-images.ts`, where images are referenced by root-relative path (e.g. `/images/menu-espresso.jpg`) and rendered via `next/image`.

## Invocation

```bash
bash .claude/skills/optimize-image/scripts/optimize-image.sh \
  --url "<source-image-url>" \
  --out "images/<descriptive-name>.webp" \
  --width <px> \
  --quality <0-100>
```

- `--out` is relative to `public/` (e.g. `images/about-team.webp` lands at `public/images/about-team.webp`). The destination directory is created automatically. The `.webp` extension is enforced regardless of what's passed.
- `--width` (default `1200`) is the longest-edge target in px; aspect ratio is always preserved, nothing is cropped.
- `--quality` (default `82`) is the cwebp quality factor.

## Width guidance

| Purpose | `--width` |
|---|---|
| Hero / full-bleed background | 1600–1920 |
| Card / thumbnail (e.g. grid images in `product-card.tsx`) | 800–1000 |
| General content / about-page photo | 1200 (default — omit `--width`) |

## After running it

Reference the output via its root-relative path (`/images/<name>.webp`) in code, the same way existing entries are wired up in `app/_lib/menu-images.ts`. Relay the script's printed summary (dimensions, file size) back to the user.

## If it fails because `cwebp` is missing

The script checks for `cwebp` up front and fails fast with `Install it with: brew install webp`. Surface that message to the user rather than running the install unprompted.

## Non-goals

One image per invocation, no cropping/aspect-ratio changes, no batch mode — loop this script once per URL for multiple images.
