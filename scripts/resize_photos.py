"""Make web-sized copies of photos.

Reads full-resolution originals from assets/photos/originals/ (git-ignored) and writes:
  assets/photos/<name>.jpg         2400px long edge — shown in the lightbox
  assets/photos/thumbs/<name>.jpg   900px long edge — shown in the grid
EXIF (camera info, GPS, etc.) is stripped; rotation and the color profile are kept.
Existing outputs are skipped unless --force is passed.

Usage:  python3 scripts/resize_photos.py [--force]
"""
import sys
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent / "assets" / "photos"
SRC, THUMBS = ROOT / "originals", ROOT / "thumbs"
SIZES = ((ROOT, 2400, 82), (THUMBS, 900, 78))
force = "--force" in sys.argv

THUMBS.mkdir(parents=True, exist_ok=True)
for f in sorted(p for p in SRC.iterdir() if p.suffix.lower() in {".jpg", ".jpeg", ".png", ".heic", ".tif", ".tiff"}):
    name = f.stem.lower() + ".jpg"
    if not force and all((d / name).exists() for d, _, _ in SIZES):
        continue
    try:
        im = ImageOps.exif_transpose(Image.open(f))
    except Exception as e:
        print(f"skip {f.name}: {e}")
        continue
    icc = im.info.get("icc_profile")
    im = im.convert("RGB")
    for out_dir, edge, quality in SIZES:
        c = im.copy()
        c.thumbnail((edge, edge), Image.LANCZOS)
        c.save(out_dir / name, "JPEG", quality=quality, optimize=True, progressive=True, icc_profile=icc)
    print(f"{f.name} -> {name}  ({im.width}x{im.height}, aspect {im.width}/{im.height})")
