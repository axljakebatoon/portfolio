# Axl Jake M. Batoon — Portfolio

A single-page, responsive personal portfolio built with plain **HTML, CSS, and
JavaScript** (no framework, no build step).

## Sections
Home · About · Skills · Projects · Contact — connected by anchor navigation.

## Preview locally
From the project root (the folder containing `index.html`):

```powershell
python -m http.server 5500
```

Then open <http://localhost:5500> in a browser.

You can also just open `index.html` directly, or use the **Live Preview** VS Code
extension.

## Structure
```
index.html          # the single-page site
css/style.css       # all styles (theme variables in :root)
js/script.js        # mobile nav toggle + active-link highlight
images/             # photos and project screenshots
assets/             # downloadable files (e.g. resume.pdf)
projects/2-player-pvp/  # playable 2-player game demo
projects/TastyTutors/   # multi-page recipe website demo
```

## Status
Three real projects are featured (ShadowSwitch, 2-Player PVP Arcade, TastyTutors),
each with a screenshot, description, and working link.

## Publish
Planned host: **GitHub Pages** (repo `portfolio`, `main` branch, `/(root)`).
