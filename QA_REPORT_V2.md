# Inertia Landing Page - QA Report v2

**Reviewer:** Elena, Principal QA Engineer
**Date:** 2026-02-27
**Comparison:** Live site (localhost:3000) vs Figma designs (Pag1A, Page1B)
**Tech stack:** Next.js 16.1, React 19, Tailwind CSS v4, DM Serif Display + Inter fonts

---

## Overall Verdict

**PASS with minor issues.** The rebuild is a strong, faithful reproduction of the Figma design. All 15 page sections are present, correctly ordered, and structurally accurate. Color palette, typography hierarchy, layout grid, and content are consistent with the source design. Three issues were identified - one medium-severity gap regarding missing decorative illustrations, and two low-severity items.

---

## Section Match Table

| # | Section | Figma | Live | Verdict | Notes |
|---|---------|-------|------|---------|-------|
| 1 | **Navbar** | "inertia" logo + 2 outlined pills + green CTA | Matches | MATCH | Sticky behavior, correct pill styles, "Join our waitlist ->" arrow present |
| 2 | **Hero title** | Giant "Inertia" display text, cream bg | Matches | MATCH | Fluid clamp sizing (5rem-16rem), serif display font, correct color |
| 3 | **Hero subtitle** | "The financial tool that adapts to you" | Matches | MATCH | Muted text color, correct positioning left-aligned below title |
| 4 | **Statement section** | Woman portrait (right) + "Your money doesn't need perfection..." (left) | Matches | MATCH | Image crop, text weight, two-column layout all correct |
| 5 | **Clarity heading** | "Inertia brings clarity to _money decisions._" + decorative curve | Matches | MATCH | Italic emphasis on "money decisions", subtle SVG curve below |
| 6 | **Value prop** | Couple photo (right) + "We help you make a few money decisions each day" | Matches | MATCH | Layout, imagery, text all aligned |
| 7 | **Habits pills** | "that adapt to your habits" + needs/goals/plans/life pills + explainer | Matches | MATCH | All 4 pill tags present, centered layout, sub-text matches |
| 8 | **Feature: Patterns** | "80" circle + "Understands your patterns" + transaction card (Blackheart Brewery $12.50) | Matches | MATCH | Stat indicator, card UI, text content all correct |
| 9 | **Feature: Highlights** | "3" circle + "Highlights what matters" + subscription card ($47/mo, Could save $24) | Matches | MATCH | Alternating layout (card left, text right) correct |
| 10 | **Feature: Follow through** | "2x" circle + "Helps you follow through" + goal progress card (Emergency fund $2,400) | Matches | MATCH | Card UI and stat badge correct |
| 11 | **Relationship section** | Dark green bg, "What's your relationship with money?" + decorative illustrations | Partial | **MISMATCH** | Text/layout correct but **decorative wavy-line illustrations are missing** (see Bug #1) |
| 12 | **Steadiness** | "Less reacting. More steadiness." + 3 stat cards (Steady / $340 left / Tomorrow) | Matches | MATCH | Card labels (SPENDING PULSE, THIS WEEK, NEXT DECISION) and values correct |
| 13 | **Waitlist** | "Join the waitlist" + email input + green button | Matches | MATCH | Input placeholder, button label, layout all correct |
| 14 | **Why Inertia Works** | 3 columns (01/02/03) with titles + descriptions | Matches | MATCH | Numbered circle indicators, all copy matches |
| 15 | **Different Approach** | 3 cards (Pattern first / Decisions / Progress) | Matches | MATCH | Card styling, titles, body copy all accurate |
| 16 | **FAQ** | "Things we'd ask too" + 5 accordion items | Matches | MATCH | All 5 questions present with expand icons |
| 17 | **Priorities footer** | Green wave + "What feels most important..." + 4 pills + "Step 1" text | Matches | MATCH | Organic wave SVG shape, pill labels, step text all correct |
| 18 | **Footer bar** | "inertia" logo + copyright | Matches | MATCH | Left logo, right copyright "2026 Inertia. All rights reserved." |

**Score: 17/18 sections match (94%)**

---

## Bug List

### BUG-001: Missing decorative illustrations in "Relationship" section
- **Severity:** MEDIUM
- **Section:** "What's your relationship with money?" (green banner)
- **Expected (Figma):** The dark green section includes organic, hand-drawn-style wavy line decorations/illustrations that add visual texture and personality to the section.
- **Actual (Live):** The section renders as a plain `bg-forest` (#1A3A2A) block with centered text only. No decorative SVG elements, illustrations, or background artwork.
- **File:** `src/components/Relationship.tsx`
- **Impact:** Reduces the visual richness and branded feel of a key emotional section. The Figma design uses these decorations to break up the density of the green block.
- **Fix:** Add inline SVG decorative elements (wavy organic lines) matching the Figma illustrations, likely as absolutely-positioned elements within the section container.

### BUG-002: Next.js dev badge visible in viewport
- **Severity:** LOW
- **Section:** Global (bottom-left corner)
- **Expected:** No third-party UI overlays
- **Actual:** A small circular "N" badge (Next.js development indicator) floats in the bottom-left corner on every viewport scroll position.
- **Impact:** Non-issue in production (auto-removed in prod builds), but note for staging/demo environments.
- **Fix:** Confirmed auto-removed in production builds. No action needed unless deploying dev build for client review.

### BUG-003: Hero font verification needed
- **Severity:** LOW
- **Section:** Hero "Inertia" title
- **Expected (Figma):** Display font specified in Figma's design tokens
- **Actual (Live):** Uses DM Serif Display (400 weight) via Google Fonts
- **Details:** The live implementation uses DM Serif Display which is a Didone-style serif. The Figma hero text also appears to be a serif display font with similar proportions. Visual comparison suggests a close match, but the exact Figma font spec should be cross-referenced to confirm it is DM Serif Display and not an alternative (e.g., Fraunces, Playfair Display, Source Serif).
- **Impact:** If fonts differ, the entire typographic hierarchy shifts. Headings across all sections use `font-display`.
- **Fix:** Confirm exact font name from Figma's text style panel. If different, update `layout.tsx` font import and CSS variable.

---

## Priority Fixes

### P1 - Must fix before client review
1. **Add decorative illustrations to the Relationship section** (BUG-001) - This is the only section where content is visibly missing. Export the wavy-line SVG assets from the Figma file and integrate them as positioned background elements in `Relationship.tsx`.

### P2 - Should fix before launch
2. **Verify hero font against Figma spec** (BUG-003) - Pull the exact font-family name from Figma's design tokens. If it differs from DM Serif Display, swap the Google Font import in `layout.tsx`.

### P3 - Nice to have
3. **Dev badge cleanup** (BUG-002) - Only relevant if sharing dev/staging URL with stakeholders. Use `next build && next start` for demo sessions.

---

## Summary

The rebuild is well-executed. Layout, content, colors, typography scale, component hierarchy, and interactive elements (FAQ accordion, waitlist form, nav pills) all faithfully reproduce the Figma. The single substantive gap is the missing decorative artwork in the green relationship section. Once that is addressed and the font is confirmed, this page is ready for client sign-off.
