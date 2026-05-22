# Design System & CSS Philosophy

## Overview

This portfolio uses a lightweight, systems-minded CSS architecture focused on:

- clarity
- maintainability
- readable markup
- predictable inheritance
- reusable patterns
- low cognitive overhead

The goal is not to create a massive framework or utility system.

The goal is to create a calm, traceable frontend foundation that feels intentional and easy to work inside long-term.

This project intentionally avoids:
- utility-heavy CSS
- atomic class composition
- over-architected abstraction layers
- excessive class stacking
- overly fragmented file structures

The architecture should support thoughtful implementation, not create additional friction.

---

# Design Philosophy

## Strong Defaults Over Constant Overrides

The system relies heavily on contextual inheritance and environmental defaults.

Example:

```css
.section--dark {
  background: var(--color-dark);
  color: var(--color-text-light);
}
```

Text, links, and supporting elements inside the section should inherit naturally whenever possible.

The preferred approach is:

- establish good defaults
- inherit intentionally
- override only when necessary

Rather than:

- manually styling every element
- attaching color modifiers to every text class
- stacking multiple utility classes for basic presentation

---

# CSS Architecture

## File Structure

```txt
src/styles/
  system.css
  variables.css
  ui.css
  home.css
```

---

## system.css

Contains only reset/normalization behavior:

- box sizing
- margin reset
- media defaults
- reduced motion handling
- form inheritance

This file should remain minimal.

---

## variables.css

Contains design tokens only.

Examples:
- colors
- spacing scale
- typography variables
- border radius
- shadows
- transitions
- container widths

No component styling should live here.

---

## ui.css

Contains:
- global element styling
- foundational layout patterns
- typography roles
- reusable structural patterns
- shared interface patterns

Examples:

```css
.page
.section
.section--dark
.section__inner
.card-grid
.content-grid
.stack
.flow
```

Typography roles also live here:

```css
.text-display
.text-heading
.text-tagline
.text-body
.text-small
.button
.card
.tag
.link-arrow
```

These are not utility classes.

They represent reusable typographic roles used consistently throughout the system.

UI classes should define:
- rhythm
- spacing patterns
- typography systems
- structural defaults
- reusable interface defaults

The purpose of ui.css is to reduce repeated styling decisions and create consistency through strong foundational patterns.

---

## home.css

Contains homepage-specific composition and page-level styling.

Examples:

```css
.home
.hero
.site-header
.home__next
```

These classes define:
- homepage layout
- homepage-specific spacing
- the hero background image treatment
- future homepage section composition

Page files should remain relatively lightweight and focused. Future pages may
add files such as `work.css`, `about.css`, or `project.css` when their
composition is substantial enough to deserve a dedicated file.

---

## Anchor Comments

Long CSS files use Anchor Comments to make navigation easier in VS Code.

Examples:

```css
/* ANCHOR Typography */
/* ANCHOR Buttons */
/* ANCHOR Hero */
```

These anchors are labels for maintainability, not new architecture layers.

---

# Class Naming Philosophy

## Preferred Approach

Use:
- semantic classes
- meaningful structural classes
- contextual modifiers
- readable markup

Good examples:

```jsx
<section className="section section--dark">
<h1 className="text-display">
<p className="text-tagline is-muted">
<div className="hero">
```

---

## Avoid Excessive Class Stacking

Avoid patterns like:

```jsx
className="hero__eyebrow text-eyebrow text-eyebrow--light"
```

This creates:
- overlapping responsibilities
- noisy markup
- harder tracing
- unnecessary complexity

Instead:
- typography classes should define typography
- sections should define environmental defaults
- semantic classes should define structure/layout

---

# Modifier Philosophy

Modifiers are allowed when genuinely useful.

Examples:

```css
.is-light
.is-muted
.is-accent
.section--dark
.card--feature
```

However, modifiers should remain minimal.

The system should rely primarily on:
- inheritance
- contextual defaults
- reusable patterns

Not endless modifier combinations.

---

# Spacing Philosophy

Spacing should come primarily from:
- sections
- layout patterns
- card structures
- flow/rhythm systems

Preferred patterns:

```css
.section
.card
.stack
.flow
```

Avoid utility-heavy spacing systems like:

```css
.mt-lg
.pb-xl
.gap-md
.flex-center
```

The goal is consistent visual rhythm with minimal markup noise.

---

# Typography Philosophy

Typography is one of the most important parts of the portfolio system.

The visual tone should feel:
- calm
- editorial
- structured
- readable
- quietly technical

Typography classes represent reusable roles, not isolated styling fragments.

Example roles:

```css
.text-display
.text-heading
.text-tagline
.text-body
.text-small
```

These classes should define:
- font size
- weight
- line-height
- tracking
- transform behavior

Typography should remain consistent across sections unless there is a clear reason to diverge.

---

# Visual Direction

The portfolio should feel:

- modern editorial
- structured
- calm
- maintainable
- warm but professional
- implementation-focused

Key characteristics:
- warm off-white backgrounds
- dark charcoal/olive sections
- restrained accent colors
- soft shadows
- rounded surfaces
- generous spacing
- strong typography hierarchy

Avoid:
- flashy startup aesthetics
- overly trendy interactions
- aggressive gradients
- excessive motion
- loud “creative agency” styling

---

# Style Guide Philosophy

The style guide page exists as a working frontend reference.

It is intentionally:
- lightweight
- practical
- implementation-focused

It is not intended to become:
- a massive enterprise design system
- a hyper-abstract component framework
- a utility playground

Its purpose is to:
- maintain consistency
- document reusable patterns
- support future portfolio sections
- reduce implementation drift

---

# Overall Goal

The frontend system should feel:

- intentional
- calm
- scalable
- readable
- maintainable
- thoughtfully engineered

The architecture should support the work — not become the work.
