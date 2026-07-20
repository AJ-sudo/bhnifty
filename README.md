# Bhnifty

Premium fintech landing page for Bhnifty — a unified analytics console for Nifty / BankNifty
constituent traders. Built as a single-page React app.

## Tech stack

- [Vite](https://vitejs.dev/) 6
- [React](https://react.dev/) 18
- [Tailwind CSS](https://tailwindcss.com/) v4 (`@tailwindcss/vite`)

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build locally
```

## Structure

```
index.html                # app shell + Google Fonts + root div
src/
  main.jsx                # React entry
  App.jsx                 # composes the page + light/dark theme state
  index.css               # Tailwind v4 import + theme tokens (light/dark)
  components/
    Navbar.jsx            # sticky nav + theme toggle
    Hero.jsx              # hero section
    Features.jsx          # 12 feature cards
    SetupGuide.jsx        # "6 Simple Steps"
    Interfaces.jsx        # rates ledger + sector heatmap
    WhyChoose.jsx         # advantage cards
    About.jsx             # vision + offering cards
    Faq.jsx               # accordion (single-open)
    Contact.jsx           # contact form
    Footer.jsx            # footer
    Icon.jsx              # inline Lucide icon set
public/                   # logo + section imagery (SVG)
```

## Theming

Dark mode is the default. The theme is class-based (`<html class="dark">`); semantic color
tokens in `src/index.css` (`--color-bg-*`, `--color-text-*`) resolve to CSS variables that flip
between the `:root` (light) and `.dark` palettes.

## Deployment (Vercel)

Zero-config — Vercel detects the Vite framework preset. `vercel.json` pins the build command,
output directory, and an SPA rewrite so deep links resolve to `index.html`.
