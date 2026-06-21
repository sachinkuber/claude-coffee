#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat >&2 <<'EOF'
Usage: optimize-image.sh --url <URL> --out <path.webp> [--width <px>] [--quality <0-100>]

  --url       Source image URL (required)
  --out       Destination path. If relative, resolved against <repo>/public/.
              If absolute, used as-is. Extension is normalized to .webp. (required)
  --width     Target max edge in px, aspect ratio preserved. Default: 1200
  --quality   cwebp quality factor 0-100. Default: 82
EOF
  exit 1
}

URL=""
OUT=""
WIDTH=1200
QUALITY=82

while [[ $# -gt 0 ]]; do
  case "$1" in
    --url) URL="$2"; shift 2 ;;
    --out) OUT="$2"; shift 2 ;;
    --width) WIDTH="$2"; shift 2 ;;
    --quality) QUALITY="$2"; shift 2 ;;
    *) echo "Unknown argument: $1" >&2; usage ;;
  esac
done

[[ -n "$URL" && -n "$OUT" ]] || usage

# Repo root = 4 levels up from this script's directory
# (.claude/skills/optimize-image/scripts -> repo root)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../../../.." && pwd)"

# Normalize extension to .webp (no-op if OUT already had no extension)
OUT="${OUT%.*}.webp"

if [[ "$OUT" = /* ]]; then
  DEST_PATH="$OUT"
else
  DEST_PATH="$REPO_ROOT/public/$OUT"
fi

mkdir -p "$(dirname "$DEST_PATH")"

if ! command -v cwebp >/dev/null 2>&1; then
  echo "Error: 'cwebp' is not installed (required to encode webp output)." >&2
  echo "Install it with: brew install webp" >&2
  exit 1
fi

TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

RAW="$TMP_DIR/source.bin"
INTERMEDIATE="$TMP_DIR/resized.png"

if ! curl -fsSL --max-time 30 \
  -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36" \
  -o "$RAW" "$URL"; then
  echo "Error: failed to download $URL" >&2
  exit 1
fi

FILE_TYPE="$(file -b "$RAW")"
case "$FILE_TYPE" in
  *JPEG*|*PNG*|*GIF*|*TIFF*|*"Web/P"*|*bitmap*) ;;
  *)
    echo "Error: downloaded content is not a recognizable image (file says: $FILE_TYPE)" >&2
    exit 1
    ;;
esac

if ! sips -Z "$WIDTH" "$RAW" --out "$INTERMEDIATE" --setProperty format png >/dev/null; then
  echo "Error: sips failed to resize image" >&2
  exit 1
fi

if [[ -f "$DEST_PATH" ]]; then
  echo "Note: overwriting existing file at $DEST_PATH"
fi

if ! cwebp -quiet -q "$QUALITY" "$INTERMEDIATE" -o "$DEST_PATH"; then
  echo "Error: cwebp failed to encode webp" >&2
  exit 1
fi

DIMS="$(sips -g pixelWidth -g pixelHeight "$DEST_PATH" | tail -2 | awk '{print $2}' | paste -sd x -)"
SIZE="$(du -h "$DEST_PATH" | awk '{print $1}')"

echo "Saved: $DEST_PATH"
echo "Dimensions: $DIMS"
echo "File size: $SIZE"
