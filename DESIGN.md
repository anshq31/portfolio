---
name: Ansh Sharma Portfolio
description: An Android and Java engineering portfolio presented as a clear system map.
colors:
  primary-pine: "#315b49"
  deep-pine: "#203e32"
  brass: "#80652d"
  ink: "#1c2923"
  muted-ink: "#536158"
  quiet-ink: "#69766d"
  paper: "#f4f2ea"
  raised-paper: "#fbfaf6"
  soft-paper: "#eaece4"
  rule: "#d7dbd1"
  strong-rule: "#bac3b8"
  native-block: "#34443c"
  brass-block: "#d7c99d"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Manrope, Segoe UI, sans-serif"
    fontSize: "clamp(4.5rem, 8vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "-0.075em"
  headline:
    fontFamily: "Manrope, Segoe UI, sans-serif"
    fontSize: "clamp(2.4rem, 5vw, 3.7rem)"
    fontWeight: 650
    lineHeight: 1
    letterSpacing: "-0.065em"
  title:
    fontFamily: "Manrope, Segoe UI, sans-serif"
    fontSize: "24px"
    fontWeight: 700
    letterSpacing: "-0.05em"
  body:
    fontFamily: "Manrope, Segoe UI, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "DM Mono, Consolas, monospace"
    fontSize: "9px"
    fontWeight: 400
    letterSpacing: "0.05em"
components:
  button-primary:
    backgroundColor: "{colors.primary-pine}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    padding: "0 17px"
    height: "46px"
  project-tag:
    backgroundColor: "{colors.soft-paper}"
    textColor: "{colors.primary-pine}"
    typography: "{typography.label}"
    padding: "4px 7px"
---

# Design System: Ansh Sharma Portfolio

## Overview

**Creative North Star: "The System Ledger"**

The portfolio treats engineering as a connected set of decisions. Warm paper and deep ink keep the reading experience calm, while the hero's four-part flow map makes the Android, Spring Boot, native integration, and data layers visible at a glance. Project details and evidence stay in the foreground; the diagram frames the work instead of impersonating a person or product screenshot.

The page uses solid fields, thin rules, and compact technical labels to give the work an editorial structure. The map and small material markers assemble and separate as visitors scroll. Every text block stays readable in each state, and reduced-motion preferences leave the geometry stable.

**Key Characteristics:**
- Warm paper surfaces, deep ink, muted pine, and brass.
- Manrope for reading and DM Mono for dates, categories, technologies, and measured facts.
- A labeled architecture map in place of portrait or avatar artwork.
- Flat panels, square material blocks, thin rules, and restrained scroll motion.

## Colors

The palette pairs a light paper field with dark ink and two restrained accents. Pine identifies the main action and mobile work; brass marks measured details and system joins. Darker pine anchors the contact surface, while the map uses distinct solid blocks for native integration and data.

### Primary
- **Muted Pine**: Primary actions, Android references, and the map's mobile layer.
- **Deep Pine**: The contact close and its high-contrast action.

### Secondary
- **Aged Brass**: Dates, small data markers, and system-map joins.

### Neutral
- **Deep Ink**: Headings and primary copy.
- **Muted Ink / Quiet Ink**: Supporting copy and low-priority labels.
- **Warm Paper / Raised Paper / Soft Paper**: Page, project, and tag surfaces.
- **Rules**: Fine separators and map boundaries.
- **Map Surfaces**: A dark green native-integration block, a warm brass data block, and white text on dark fields.

### Named Rules
**The Solid Fields Rule.** Separate information with solid color fields and thin rules; avoid neon, gradients, and decorative blur.

## Typography

**Display Font:** Manrope (with Segoe UI, sans-serif fallback)
**Body Font:** Manrope (with Segoe UI, sans-serif fallback)
**Label/Mono Font:** DM Mono (with Consolas, monospace fallback)

**Character:** Manrope carries the portfolio's direct editorial voice. DM Mono is limited to metadata, technologies, dates, and measured details where its fixed-width numerals help scanning.

### Hierarchy
- **Display**: The large name in the hero.
- **Headline**: Section titles.
- **Title**: Project and experience names.
- **Body**: Summary, project evidence, and supporting copy; the hero summary is constrained to a readable measure.
- **Label**: Dates, category names, résumé format notes, and technology tags.

### Named Rules
**The Measured Label Rule.** Use monospace for code, dates, categories, technologies, and measurements; use Manrope for prose and headings.

## Layout

The content container caps at 1160px with 32px side gutters on wide screens. The sticky header is 76px tall on desktop and 68px on narrow screens. The hero pairs the introduction with the system map in two columns, then stacks the map below the copy at 760px and below. At 980px the content narrows to a 760px reading column; at 760px the work, project, skill, and contact layouts become single-column. The project field uses two equal columns on wider screens and one column on mobile. Work entries align dates on a narrow rail beside the role and evidence.

Sections keep a clear title-and-summary row, then use rules and repeated row spacing instead of nested panels. The project map and content sections share a 1160px alignment edge.

## Elevation & Depth

Surfaces stay flat: no panel or card shadows are used. The system creates depth with adjacent paper tones, solid green and brass blocks, and fine borders. The footer changes to deep pine as a clear end point; it does not use blur or glass.

### Named Rules
**The Flat Surface Rule.** Use tonal surfaces and borders for separation; do not add ornamental shadows or blur to panels.

## Shapes

Panels, buttons, map nodes, tags, and project cells use square corners. The status marker is circular and the scrollbar thumb is pill-shaped; those small browser-level details do not change the square form language. Map wiring is drawn as thin straight SVG paths between rectangular nodes. Accent fragments are small rectangles that rotate or shift during scroll motion.

## Components

### Buttons
- **Shape:** Square corners, a solid fill, and a thin border.
- **Primary:** Pine fill with white text; 46px height and 17px horizontal padding.
- **Hover / Focus:** Hover shifts the fill to deep pine and lifts by 2px. Keyboard focus uses a visible 2px brass outline with 4px offset.
- **Text action:** The secondary contact action stays unfilled and uses ink text.

### Chips
- **Style:** Technology tags use a soft paper fill, pine text, and compact DM Mono labels. Project-status tags use a fine rule and no pill shape.

### Cards / Containers
- **Corner Style:** Square.
- **Background:** Project cells use raised paper; the shared grid rule supplies their separation.
- **Shadow Strategy:** Flat; no shadows.
- **Border:** One-pixel rules around the project field and map, with thin separators between cells.
- **Internal Padding:** Project cells use 25–27px desktop padding and 20–22px mobile padding.

### Navigation
The header stays sticky on a solid paper background with a bottom rule. The wordmark uses a compact AS mark; section links are quiet until hover. The résumé shortcut appears on wider screens and drops away on mobile.

### System Map
The hero map is the signature component: four technology blocks connect Android, Spring Boot, native integration, and PostgreSQL. Scroll assembly moves the blocks and small fragments into alignment as the map enters view, then separates them as it leaves. Reduced-motion mode keeps nodes in a stable, readable arrangement and removes fragment motion.

### Named Rules
**The Assembly Rule.** Move map geometry and small section markers only; keep all copy visible, and hold the map still when reduced motion is preferred.

## Do's and Don'ts

### Do:
- **Do** use the paper, ink, pine, and brass roles from the frontmatter for new surfaces.
- **Do** use Manrope for reading and DM Mono only for technical labels and measured context.
- **Do** keep the system map factual and the text readable while its parts move.
- **Do** honor reduced-motion preferences with a stable arrangement.

### Don't:
- **Don't** add a portrait or avatar graphic; the user chose an engineering diagram instead.
- **Don't** use neon colors, gradients, or decorative blur.
- **Don't** use rounded cards or ornamental shadows; the page's surfaces are flat and square.