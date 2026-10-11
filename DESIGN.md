---
version: alpha
name: Fatima Zahra Zaha Portfolio
description: A software engineering portfolio in deep teal, turquoise, mint white, coral and yellow.
colors:
  primary: "#1a535c"
  secondary: "#4ecdc4"
  surface: "#f7fff7"
  coral: "#ff6b6b"
  highlight: "#ffe66d"
omitted:
  - section: typography
    reason: Existing system sans-serif and monospace fonts are preserved.
  - section: rounded
    reason: Existing component radii are preserved.
  - section: spacing
    reason: Existing responsive spacing is preserved.
  - section: components
    reason: Components consume the shared runtime tokens described below.
---

# Portfolio Design System

## Overview

Brand portfolio for recruiters and engineering clients. The owner supplied the
five-color palette above. Preserve the existing layout, content and animation.
`src/index.css` owns runtime tokens; this document records the accepted identity.

## Colors

Deep teal is the primary button, link and navigation color. Turquoise is the
secondary accent, coral distinguishes categories and error feedback, and yellow
provides warm highlights. Mint white replaces pure white surfaces and button
foregrounds. Neutral shades derive a teal-tinted light/dark surface hierarchy.
Tailwind `primary`, `secondary`, `coral` and `peach` shade utilities consume the
central `@theme` definitions. `peach` is a retained utility name for yellow;
`dusty-rose` aliases coral for existing category consumers. Use pale tints for
dark-theme text and deeper shades for text on light surfaces. Secondary and warm
accent 600–950 shades are intentionally dark enough for readable foregrounds.
Green remains reserved for successful contact feedback.

## Typography

Preserve the existing system sans-serif headings and body text, with monospace
technical labels. No additional font downloads.

## Layout

Preserve existing responsive containers, spacing, navigation and section grids.
Navigation labels share one definition for desktop, mobile and section tracking.
“Beyond Code” links to the combined Languages and Interests section. The full
navigation appears at the XL breakpoint; narrower screens use the menu toggle
so the added item does not crowd the header.

## Elevation & Depth

Keep existing card shadows and borders. The About image remains undecorated.
Home retains its teal heading. All sections, from Home through Contact,
share one uninterrupted background in `portfolio-flow`, with
transparent section surfaces and no boundary lines. A viewport-sized sticky
pseudo-element carries turquoise, coral and yellow gradients through a slow
24-second alternating wave. It stays behind content and accepts no pointer
events. Reduced-motion preferences freeze the wave; forced-color mode removes
it. Section headings keep their palette underline. About keeps its summary and
specialty card accents; its image has no individual background or frame.

## Shapes

Preserve existing rounded cards, pill badges and circular profile image.

## Components

The heading underline and Home profile glow share `bg-brand`,
the blended turquoise–coral–yellow color field defined by
`--background-image-brand`. Overlapping radial patches replace ordered color
bands, giving badges and accents a fluid, mixed appearance.
The navbar uses the supplied `src/assets/portfolio_logo.png` at 36px with its
aspect ratio preserved. The browser tab uses `public/portfolio_logo.png`.
The favicon URL uses Vite's base path so it also works under `/portfolio/`.

Experience entries use distinct colors: HMD IMMO in teal, IMPELAB in turquoise,
LaunchPad in coral, Oriental Group in yellow, and VA Consulting in mint white.
Card tints, left borders, timeline markers and technology tags share each entry's
color. Detail-view tags retain the same assignment.

Technical skill pills share one style per category: Programming Languages teal,
Frontend & Mobile turquoise, Backend & Architecture coral, Databases yellow,
DevOps & Tools mint white, Testing & Quality pale teal, Software Design pale
turquoise, Methodologies pale yellow, and Soft Skills pale coral. Dark-theme
variants retain these category identities. Skill pills are informational labels.

Primary actions use teal with mint-white text. Turquoise gradients use darker
endpoints where they carry text. Focus rings use teal in light mode and turquoise
in dark mode. Selection uses yellow with deep teal text. Category badges use
dark text on pale surfaces, or pale text on dark translucent surfaces.
The About image retains its continuous five-second float and reduced-motion
support. Palette updates do not introduce new motion or image backgrounds.

## Do's and Don'ts

- Consume shared theme colors rather than new component-local hex values.
- Keep bright turquoise, coral and yellow out of small text on light surfaces.
- Preserve the image animation and the existing responsive layout.
