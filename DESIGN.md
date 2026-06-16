# MailPrism Docs — Design System & Style Guide

This is the source of truth for how the MailPrism documentation looks, reads, and
feels. Tokens mirror the MailPrism product (`MailPrism/app/globals.css`) so the docs
are a seamless extension of the app. Everything below is implemented in
[`src/css/custom.css`](./src/css/custom.css).

> **North star:** calm, high-legibility reading with vibrant *accents* — never
> vibrant everything. The brand is a prism: one beam of white light (a calm,
> neutral page) refracted into a spectrum (color used deliberately, with meaning).

---

## 1. Principles

1. **Readable first.** Tuned for neurodivergent readers (see §6). Generous line
   height, soft non-glare backgrounds, short chunks, strong hierarchy.
2. **Calm base, vibrant accents.** Backgrounds and text are quiet; the prism
   spectrum appears in small, meaningful doses (active states, callouts, the nav
   hairline, status pills).
3. **Color carries meaning, never meaning alone.** Every color cue is paired with
   text or an icon, for color-blind and low-vision readers.
4. **Motion is optional.** Subtle by default; fully removed under
   `prefers-reduced-motion`.
5. **Match the product.** Same palette, same glassmorphism, same type — so the
   jump from docs to app is invisible.

---

## 2. Color tokens

### Brand — purple → violet (the prism)

| Token | Hex | Use |
|-------|-----|-----|
| `--mp-purple-500` | `#667eea` | Primary brand |
| `--mp-purple-600` | `#5a67d8` | Hover / pressed |
| `--mp-violet-500` | `#764ba2` | Secondary brand |
| `--mp-gradient` | `linear-gradient(135deg,#667eea,#764ba2)` | Primary CTAs, hero, headings |

Full purple scale `50–900` and violet `500–600` are defined as tokens.

### The spectrum — accents

Drawn straight from the logo. Use for categorical accents, status, and small flourishes.

| Token | Hex |
|-------|-----|
| `--mp-spectrum-violet` | `#8b5cf6` |
| `--mp-spectrum-blue` | `#3b82f6` |
| `--mp-spectrum-cyan` | `#06b6d4` |
| `--mp-spectrum-green` | `#10b981` |
| `--mp-spectrum-yellow` | `#f59e0b` |
| `--mp-spectrum-orange` | `#f97316` |
| `--mp-spectrum-red` | `#ef4444` |

### Neutrals — cool blue-gray

`--mp-neutral-0 … --mp-neutral-1000` (`#ffffff` → `#102a43`). Text is
`--mp-neutral-1000` on light, `#f1f5fb` on dark — both exceed WCAG AA, most body
text hits AAA.

### Semantic

`--mp-success #16a34a` · `--mp-warning #d97706` · `--mp-danger #dc2626` · `--mp-info #2563eb`.

### Surfaces

| | Light | Dark |
|--|-------|------|
| Page background | `#f7f9fc` (soft, low-glare) | `#0c1020` (deep navy) |
| Card / surface | `#ffffff` | `#131a2e` |

We never use pure `#ffffff` as the page background — a soft off-white reduces glare
and visual fatigue.

---

## 3. Typography

- **UI & body:** Inter (self-hosted via `@fontsource-variable/inter`).
- **Code:** JetBrains Mono (`@fontsource/jetbrains-mono`).
- **Base size:** 16px UI; **body copy 17px** (`.markdown`) for comfortable reading.
- **Line height:** `1.78` body, `1.22` headings.
- **Measure:** Inter ships with `cv05` + `ss01` (single-story *a*, legible *l*).

| Element | Size | Weight |
|---------|------|--------|
| h1 | 2.6rem | 800, gradient |
| h2 | 1.9rem | 700, top rule + spacing |
| h3 | 1.4rem | 700 |
| body | 1.0625rem | 400 |

Headings use `-0.018em` tracking and `scroll-margin-top: 6rem` so anchor links land
below the glass nav.

---

## 4. Spacing, radius, shadow

- **Spacing:** 4px base scale (`0.25rem` increments), matching the product.
- **Radius:** `sm .375` · base `.625` · `md .875` · `lg 1.25` · `xl 1.75rem`. Generous,
  friendly corners.
- **Shadow:** soft, low-opacity, cool-tinted (`--mp-shadow`, `-md`, `-lg`), plus
  `--mp-shadow-brand` for primary buttons.

---

## 5. Signature elements

### Glassmorphism nav

The navbar is frosted glass — `backdrop-filter: saturate(180%) blur(16px)` over a
72%-opaque surface (62% on dark), finished with a thin **spectrum hairline** at the
bottom edge. This mirrors the product's own `--mp-glass-*` tokens.

### Helpers (usable in MDX)

- `.mp-gradient-text` — brand-gradient text fill.
- `.mp-spectrum-bar` — the 7-color divider.
- `.mp-pill--{violet,blue,green,amber,red,gray}` — status/label pills used for AI
  fields and thread states.

---

## 6. Accessibility & neurodivergent readability

These are requirements, not suggestions.

- **Chunk it.** Short paragraphs (2–4 sentences), frequent subheadings, lists and
  tables over dense prose. No walls of text.
- **One idea per section.** Predictable, repeating page shapes so structure is
  learnable.
- **Generous whitespace & line height** to reduce crowding and tracking errors.
- **High contrast**, soft (not white) backgrounds, no pure-black-on-pure-white.
- **Visible focus.** A 3px focus ring on every interactive element for keyboard use.
- **Don't rely on color.** Pair it with text/icons everywhere.
- **Calm motion.** Subtle, and disabled entirely under `prefers-reduced-motion`.
- **Plain language.** Active voice, concrete examples, define jargon on first use,
  no marketing fluff ("revolutionary," "game-changing").
- **Consistent navigation.** Stable sidebar groups; current location always shown.

---

## 7. Writing voice (from MailPrism brand)

- Clear, not clever. Confident, not arrogant. Helpful, not pushy.
- **Do:** active voice · be specific · lead with the benefit · show examples.
- **Don't:** unexplained jargon · overpromise · fluff · competitor bashing.
- **Never publish unverified specifics.** Prices, quotas, and limits live on the
  live pricing/billing pages — link to them rather than hardcoding numbers that go
  stale or wrong.
