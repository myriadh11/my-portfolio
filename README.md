# Riyadh al kendi — Portfolio (static site, no build)

Plain HTML/CSS/JS. Nothing to install.

## Preview
Double-click `index.html`.

## Edit content (desktop admin)
1. Open `admin/index.html` in **Chrome or Edge**.
2. Click **Open project folder** and choose this folder (the one containing `index.html`).
3. Edit projects (Drive links, thumbnails, order, Published/Draft, Featured), clients (name, link, picture), settings (email, WhatsApp, Instagram, stats).
4. Click **Save** → it rewrites `site-data.js` and puts images in `img/`.
5. Upload to GitHub (GitHub Desktop: Commit → Push). The site updates in ~1 minute.

Other browsers: Save downloads `site-data.js`; replace the one in this folder yourself.

## Publish on GitHub Pages
1. Create a repo and upload everything in this folder (except nothing is secret).
2. Settings → Pages → Source: **Deploy from a branch** → `main` / `(root)`.
3. Site: `https://USERNAME.github.io/REPO/`. Custom domain: set it in the same page.
The `admin/` folder is public too but harmless: it can only change files on *your* computer.

## Google Drive videos
Share as *Anyone with the link — Viewer*, paste `https://drive.google.com/file/d/FILE_ID/view` in the admin. The video opens in a pop-up player; Google may still block playback (private file, quota).

## Notes
- `site-data.js` is public: no secrets inside.
- Keep this folder in Git — it is your backup.
- The 6 sample projects are placeholders: delete them in the admin and add your own.
- Stats stay hidden until you fill real numbers.
