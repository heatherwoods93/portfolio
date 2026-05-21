# Design System Foundation

## Design Direction

The portfolio foundation uses a warm off-white background, dark charcoal text,
deep green-charcoal contrast areas, muted olive accents, soft neutral borders,
and warm card surfaces. The goal is polished and calm rather than loud or
trend-heavy.

Typography uses system sans-serif fonts for body text and a system serif stack
for headings. This keeps the site fast and dependable while leaving room to add
a more distinctive type system later.

## CSS File Organization

`src/App.css` is the single import point for the design system files:

1. `styles/reset.css`
2. `styles/variables.css`
3. `styles/base.css`
4. `styles/components.css`

`reset.css` normalizes browser defaults. `variables.css` owns design tokens.
`base.css` defines global element behavior, typography roles, and reusable
layout primitives such as `.page`, `.section`, `.section__inner`,
`.content-grid`, and `.card-grid`. `components.css` contains semantic interface
classes such as the hero, site header, system panel, buttons, cards, tags,
style guide patterns, and directional links.

There is intentionally no `utilities.css`.

## Naming Philosophy

Class names should describe the role an element plays in the interface. Use
semantic section and component classes, then add BEM-like child elements where
they make the relationship easier to read:

- `.section`
- `.section__heading`
- `.card`
- `.card__content`
- `.card__title`

Modifiers are welcome when they describe a meaningful variant:

- `.section--dark`
- `.button--primary`
- `.button--secondary`
- `.button--light`

Avoid generic utility classes unless they are truly necessary and broadly useful.
The default should be readable, traceable CSS that maps directly to the design.

## Why Semantic Base Classes

This project is small, custom, and content-led. Semantic/base classes make it
easy to understand why a style exists and where it is used. They also keep React
markup quiet, which matters for a portfolio that will evolve through real
sections, case studies, writing, and visual work.

Utility-heavy CSS can be fast for composition, but it often pushes too much
design intent into markup. This foundation borrows Client-First ideas of clear
naming and reusable structure without turning every spacing, alignment, and
text treatment into a class.

Base classes are reusable foundations that describe stable page roles:
sections, containers, repeated grids, and typography roles. Semantic component
classes describe specific interface patterns: `.hero`, `.system-panel`,
`.card`, `.site-header`, and `.style-guide`.

Typography role classes such as `.text-display`, `.text-heading`, and
`.text-body` are allowed because they describe reusable content hierarchy. The
project still avoids utility-heavy spacing and layout classes such as margin
shortcuts, one-off alignment helpers, or Tailwind-like composition classes.

## Using The System For Future Sections

Future portfolio sections should start with `.section` and `.section__inner`.
Use `.section__heading`, `.section__eyebrow`, `.section__title`, and
`.section__description` for consistent section introductions.

Use `.content-grid` when a section has two primary columns, and `.card-grid`
when showing repeated items. Use `.card` and its child classes for project,
writing, service, or proof-point blocks. Use `.tag-list` and `.tag` for concise
metadata.

Layout primitives now live in `base.css`. More specific interface patterns
belong in `components.css`.

When a new pattern appears more than once, add it as a semantic component or
layout class in the closest design-system file. Keep one-off styling close to
the specific section only after it is clear the pattern is not reusable.

## Style Guide Page

`src/pages/StyleGuide.jsx` is the working reference page for this foundation. It
shows typography, color tokens, buttons, links, cards, tags, section structures,
and portfolio-specific content patterns.

Use it while building the portfolio to check whether a new section can be
composed from the existing system before adding new CSS. If a pattern needs to
be reused, add a semantic layout or component class to the appropriate CSS file.

The style guide is not a full component library. It is a practical reference for
the current site language, meant to evolve alongside the portfolio.
