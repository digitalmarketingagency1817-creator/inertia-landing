# QA Report: Inertia Landing Page vs Figma Design

**Date:** 2026-02-27
**Reviewed by:** Elena, Principal QA Engineer
**Figma File:** `5Ezvr1pG5Ai4faX28FWngv` — Frame: "HMU - Homepage" (`286:58`)
**Live Site:** `http://localhost:3000`
**Viewport Tested:** 1200×829 (Desktop)

---

## Overall Verdict: FAIL — Needs Major Fixes

The built landing page **significantly deviates** from the Figma design across almost every dimension: theme, color palette, typography, content, layout, and section structure. While the build is a polished, functional page in its own right, it does not implement the approved Figma design. This appears to be either a parallel creative direction or an unapproved redesign.

---

## Section-by-Section Comparison

| Section | Figma Design | Built Page | Match? |
|---------|-------------|------------|--------|
| **Theme** | Light (`#EFF1F5` bg, dark text) | Dark (`#050507` bg, white text) | **NO** |
| **Brand** | "HMU Technologies" logo | "INERTIA" text logo | **NO** |
| **Primary Color** | Blue `#0070DC` | Indigo/Purple `#6366F1` | **NO** |
| **Heading Font** | Epilogue (SemiBold) | Inter | **NO** |
| **Body Font** | Gilroy (Medium) | Inter | **NO** |
| **Navbar** | About, Wishlist, English/USD, Account, Cart, Home, Shop, Blog, Contact, Search | Products, Categories, Deals, Reviews, Search, Cart(3), Sign In | **NO** |
| **Hero Headline** | "Empower Your Digital World" | "The Future of Tech, Delivered." | **NO** |
| **Hero Subtext** | "The technology you need to make your business successful." | "Discover premium electronics curated for enthusiasts..." | **NO** |
| **Hero CTA** | "Shop Now" (single blue button) | "Shop Bestsellers" + "Browse Categories" (two buttons) | **NO** |
| **Hero Visual** | Blue bg, product carousel (Dell XPS 15), "Months Favourite" card | Dark bg, single hero image, featured product overlay (ProSound Elite X1 $299) | **NO** |
| **Trust Bar** | Blue banner: "Dedicated Support", "Premium Service", "Cutting-Edge Products" | 4 icon cards: Free Shipping, 2-Year Warranty, Easy Returns, 24/7 Support | **Partial** |
| **Categories Title** | "Our Categories" | "Shop by Category" | **NO** |
| **Category Items** | 3 cards (Laptops, Printers, Monitors) | 6 image cards (Headphones, Laptops, Smartphones, Wearables, Cameras, Gaming) | **NO** |
| **Brand Logos** | Dell, Apple, Samsung, Microsoft, Philips, Lenovo, Asus, Sony, Broadcom, AMD | Not present | **MISSING** |
| **Industry Expertise** | "Your Industry, Our Expertise" section with Finance, Education, Public Sector, Government, Small Business | Not present | **MISSING** |
| **Bestsellers Title** | "Our Bestsellers" | "Bestselling Products" | **Partial** |
| **Product Cards** | 6 cards (Dell, Lenovo, monitors, Apple, ASUS) with heart icons, "Add to Cart" text buttons | 8 cards (ProSound, UltraBook, NexPhone, etc.) with badges, icon cart buttons | **NO** |
| **Promo Section** | Two blog cards ("Microchips: Small But Mighty", "Unleashing Your Laptop's Potential") with "Read More" | Countdown banner "Up to 40% Off Premium Audio" with "Shop the Sale" | **NO** |
| **Testimonials Title** | "Hear From Our Happy Customers" | "What Our Customers Say" | **Partial** |
| **Testimonial Content** | 4 cards, all from "Justin R" (placeholder), dated "23rd April - 8:13AM" | 6 cards with diverse real names (Sarah Mitchell, James Rodriguez, Emily Chen, etc.) with roles | **NO** |
| **Footer** | Multi-column category lists (Laptops, Printers, Monitors, Networking, Desktop, Software with subcategories), HMU logo, "Copyright 2023. Lorem Ipsum..." | Newsletter signup, INERTIA logo, social links, 4 columns (Shop, Company, Support, Legal), payment icons, "© 2026 Inertia" | **NO** |

---

## Bug List

### Critical Severity

| # | Bug | Description |
|---|-----|-------------|
| C1 | **Complete theme inversion** | Figma specifies a light theme (`#EFF1F5` background, `#212121` text). Built page uses a dark theme (`#050507` background, `#FFFFFF` text). This is a fundamental design direction mismatch. |
| C2 | **Wrong color palette** | Figma primary accent is blue `#0070DC`. Built site uses indigo/purple `#6366F1`. Every accent element is the wrong color. |
| C3 | **Wrong typography** | Figma specifies Epilogue (headings) and Gilroy (body). Built site uses Inter for everything. Font weights, sizes, and line heights also differ from spec. |
| C4 | **Brand identity mismatch** | Figma shows "HMU Technologies" with logo. Built site shows "INERTIA" text wordmark. If this is an intentional rebrand, the Figma file needs updating. |

### High Severity

| # | Bug | Description |
|---|-----|-------------|
| H1 | **Hero content completely different** | Headline, subtext, CTAs, and visual layout all differ from Figma. Figma: "Empower Your Digital World" + product carousel. Built: "The Future of Tech, Delivered." + single image with stats bar. |
| H2 | **Missing Brand Logos section** | Figma includes a row of 10 brand partner logos (Dell, Apple, Samsung, Microsoft, Philips, Lenovo, Asus, Sony, Broadcom, AMD). This entire section is absent from the build. |
| H3 | **Missing "Your Industry, Our Expertise" section** | Figma includes a full section with industry verticals (Finance, Education, Public Sector, Government, Small Business) with imagery and "Shop Now" CTA. Not implemented. |
| H4 | **Missing blog/article promo cards** | Figma has two blog promo cards ("Microchips: Small But Mighty", "Unleashing Your Laptop's Potential"). Build has a completely different countdown promo banner instead. |
| H5 | **Category section structure mismatch** | Figma shows 3 category cards (Laptops, Printers, Monitors) with item counts and "See More" links. Built site shows 6 different category cards with image backgrounds. |
| H6 | **Product cards show different products** | Figma products: DELL Inspiron, LENOVO ThinkBook, Dell Monitor, LG Monitor, Apple MacBook Air, ASUS Router. Built products: ProSound Elite X1, UltraBook Pro, NexPhone 16 Ultra, etc. (completely fictional/different product line). |
| H7 | **Footer structure completely different** | Figma footer has detailed category-subcategory lists. Built footer has newsletter signup, social links, simplified link columns, and payment icons — an entirely different information architecture. |

### Medium Severity

| # | Bug | Description |
|---|-----|-------------|
| M1 | **Navbar links don't match spec** | Figma: Home, Shop, Blog, Contact (+ About, Wishlist, Account). Built: Products, Categories, Deals, Reviews (+ Search, Cart, Sign In). Different navigation model. |
| M2 | **H2 heading size mismatch** | Figma H3 spec: 40px/52px. Built H2s render at 36px. Section headings are undersized by 4px. |
| M3 | **Testimonials use placeholder data in Figma** | Figma testimonials all show "Justin R" with identical timestamps — these are placeholders. Built site has proper diverse testimonials. The build is *better* here, but doesn't match spec. |
| M4 | **Trust/value proposition bar redesigned** | Figma has a blue horizontal banner with 3 items. Build has 4 separate icon cards on a dark background. Content and layout differ. |
| M5 | **Product card interaction patterns differ** | Figma has heart/wishlist icons + text "Add to Cart" buttons. Build has icon-only cart buttons + badge labels (Best Seller, New, Sale, Popular). No wishlist functionality. |

### Low Severity

| # | Bug | Description |
|---|-----|-------------|
| L1 | **"See All Products" vs "View All Products →"** | Minor label text difference on section header links. |
| L2 | **Copyright year** | Figma shows "Copyright 2023". Build shows "© 2026". (Build is correct for current year, Figma is outdated.) |
| L3 | **Hero stats not in Figma** | Build adds "50K+ Happy Customers", "4.9 Average Rating", "2K+ Products" stats that don't appear in the Figma design. These may be a positive addition, but they're not spec'd. |
| L4 | **Countdown timer not in Figma** | Build adds a live countdown timer on the promo banner. Not in the design spec. |
| L5 | **Newsletter signup not in Figma** | Footer newsletter subscription form ("Stay in the loop") is not in the Figma design. |

---

## Missing Sections (In Figma, Not Built)

1. **Brand Logos Bar** — Row of 10 technology brand partner logos
2. **"Your Industry, Our Expertise" Section** — Industry verticals (Finance, Education, Public Sector, Government, Small Business) with imagery, description, product count (1300+), and CTA
3. **Blog/Article Promo Cards** — Two editorial content cards with "Read More" CTAs
4. **"Months Favourite" Featured Product** — Dell XPS 15 featured highlight within hero
5. **Product Wishlist Icons** — Heart/favorite buttons on product cards

## Added Sections (Built, Not in Figma)

1. **Hero Stats Bar** — 50K+ customers, 4.9 rating, 2K+ products
2. **Featured Product Overlay** — ProSound Elite X1 $299 card in hero
3. **Countdown Timer Promo** — "Up to 40% Off Premium Audio" with live timer
4. **Newsletter Signup** — Email subscription in footer
5. **Social Media Links** — Twitter, Instagram, YouTube, TikTok
6. **Payment Method Icons** — Visa, MC, Amex, PayPal
7. **Product Badges** — Best Seller, New, Sale, Popular labels

---

## Color/Typography Discrepancies

### Colors

| Token | Figma | Built | Delta |
|-------|-------|-------|-------|
| Page Background | `#EFF1F5` (light gray) | `#050507` (near-black) | Inverted |
| Primary Accent | `#0070DC` (blue) | `#6366F1` (indigo) | Different hue |
| Text Primary | `#212121` (dark gray) | `#FFFFFF` (white) | Inverted |
| Text on Accent | `#FEFEFE` (white) | `#FFFFFF` (white) | Match |
| Card Background | `#FEFEFE` (white) | `#16161D` (dark gray) | Inverted |
| Border | `#212121` | `#27272A` | Similar tone, different theme |

### Typography

| Element | Figma | Built | Match? |
|---------|-------|-------|--------|
| H1 | Epilogue SemiBold 60px/72px | Inter 60px | Size matches, font wrong |
| H2/H3 | Epilogue SemiBold 40px/52px | Inter 36px | Font wrong, size off by 4px |
| H4 | Epilogue SemiBold 30px/40px | N/A | — |
| H6 | Epilogue SemiBold 20px/32px | Inter (various) | Font wrong |
| Paragraph | Gilroy Medium 20px/32px | Inter | Font wrong |
| Small Paragraph | Gilroy Medium 16px/24px | Inter | Font wrong |

---

## Responsive/Mobile Issues

| Issue | Status |
|-------|--------|
| Viewport meta tag | Present and correct (`width=device-width, initial-scale=1`) |
| Desktop (1200px) | Renders correctly, no overflow or layout breaks |
| Mobile testing | **Not performed** — Figma does not include mobile breakpoint designs in this frame. Separate mobile frames may exist in the file. Recommend separate mobile QA pass. |

---

## Recommendations

1. **Alignment meeting required** — The build and Figma are so divergent that this needs a design/dev alignment session before any fixes are attempted. Determine which is the source of truth.
2. **If Figma is source of truth:** The page needs a near-complete rebuild — theme inversion (dark→light), color palette swap, typography change (Inter→Epilogue/Gilroy), content replacement, and adding 3 missing sections.
3. **If the build is the approved direction:** The Figma file must be updated to reflect the current implementation to prevent future confusion.
4. **Typography licensing:** If Figma spec is adopted, Epilogue (Google Fonts, free) and Gilroy (paid license required) need to be acquired and configured.
5. **Mobile QA:** Schedule a separate mobile responsiveness review once desktop design is locked.

---

*Report generated 2026-02-27 by Elena, Principal QA Engineer*
