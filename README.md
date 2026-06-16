# MailPrism Documentation

The user documentation for **[MailPrism](https://mailprism.ai)** — AI-powered email
automation for Gmail. Published at **[docs.mailprism.ai](https://docs.mailprism.ai)**.

Built with [Docusaurus](https://docusaurus.io/).

## Develop

```bash
npm install
npm start
```

Starts a local dev server at `http://localhost:3000` with live reload.

## Build

```bash
npm run build      # outputs static site to ./build
npm run serve      # preview the production build locally
```

## Project layout

```
docs/            # the documentation content (Markdown / MDX)
src/css/         # design system — tokens, glass nav, readability (custom.css)
src/components/  # custom React components (Home landing)
static/img/      # brand assets — logo, favicon, social card
sidebars.ts      # left-nav structure
DESIGN.md        # the design system / style guide
```

## Design system

Tokens mirror the MailPrism product (`app/globals.css`) so the docs feel like a
natural extension of the app. The full style guide — color, type, spacing,
glassmorphism, and the accessibility/readability rules these docs are written
against — lives in [`DESIGN.md`](./DESIGN.md).
