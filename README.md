# Personal website

A static, single-page portfolio (plain HTML/CSS/JS, no build step), hosted on GitHub Pages.

## Editing content
- **Projects, photos, experience:** edit `js/data.js`.
- **Bio, hero text, contact links:** edit `index.html` (look for `EDIT:` comments).
- **Headshot:** save it as `assets/img/profile.jpg` (portrait, ~800×950).
- **Photos:**
  1. Put full-resolution originals in `assets/photos/originals/` (git-ignored, never uploaded).
  2. Run `python3 scripts/resize_photos.py` — writes a 2400px copy to `assets/photos/` and a
     900px thumbnail to `assets/photos/thumbs/`, stripping EXIF/GPS metadata. Needs Pillow
     (`pip3 install pillow`).
  3. Add `{ file: "img_1234.jpg", w: 2, h: 3 }` to `PHOTOS` in `js/data.js`
     (`w`/`h` = aspect ratio; the script prints it).

## Preview locally
    python3 -m http.server 8000   # then open http://localhost:8000

## Deploy to GitHub Pages
1. Create a repo named `<your-username>.github.io` on GitHub.
2. `git remote add origin git@github.com:<your-username>/<your-username>.github.io.git`
3. `git push -u origin main`
4. In the repo: Settings → Pages → Source: "Deploy from a branch", Branch: `main` / root.
The site appears at `https://<your-username>.github.io` within a minute or two.
