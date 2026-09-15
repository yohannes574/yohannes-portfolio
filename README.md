# Yohannes — Full-Stack Web Developer Portfolio

A premium dark, single-page portfolio built with **React + Vite + Tailwind CSS** (plain JavaScript, no backend). Designed around the reference spec in `reference.txt`: project-first, restrained animations, mobile-first, employer-friendly within 30 seconds.

## Getting started

```bash
npm install
npm run dev
```

## Contact form (no backend required)

The form works two ways:

1. **No setup (default):** submitting opens the visitor's email app with a prefilled message (mailto).
2. **Real emails (optional):** copy `.env.example` to `.env` and set:

```bash
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/yourformid
```

Formspree's free tier requires no server. Grab an endpoint at https://formspree.io after creating a form.

## Customizing content

All content lives in `src/data/`:

- `site.js` — name, title, email, phone, socials, availability flag
- `projects.js` — the four showcase projects (see `src/data/projects.js` for the shape)
- `skills.js` — technology groups
- `journey.js` — development journey milestones
- `services.js` — "What I Can Build" cards

Replace the placeholder images in `public/images/` with real screenshots and the portrait, and drop your résumé at `public/resume.pdf`.

## Build

```bash
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```
