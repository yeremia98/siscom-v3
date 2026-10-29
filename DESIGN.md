# SISCOM ERP v3 Design System (Swiss Minimalism & Clean B2B Architecture)

## 1. Principles
- **Minimalism & Swiss Precision**: Every element has functional purpose. No decorative gradient blobs, no neon glows, no faux badges.
- **Evidence-Based (Anti-AI-Slop)**: No unverified superlatives ("terbaik", "terdepan", "revolusioner"). Replace claims with verifiable features, document codes, and real numbers from 1994 company records.
- **Unified Action**: Exactly one primary CTA label across the entire site: "Jadwalkan demo". Secondary action: "Chat WhatsApp".

---

## 2. Color System & Theme Tokens

### Dark Mode (Default)
- **Background**: `#070A12`
- **Surface Level 1**: `#0E1320`
- **Surface Level 2**: `#141A2A`
- **Hairline Border**: `rgba(255, 255, 255, 0.08)`
- **Text Primary**: `#E8ECF4`
- **Text Secondary**: `#9AA4B8`

### Light Mode
- **Background**: `#FAFAF8`
- **Surface Level 1**: `#FFFFFF`
- **Surface Level 2**: `#F3F4F1`
- **Hairline Border**: `#E6E6E1`
- **Text Primary**: `#0E1320`
- **Text Secondary**: `#5B6475`

### Accent Colors
- **Brand Accent**: `#FF6A1A`
- **Primary Button Text**: `#0A0D14` (Contrast ratio 6.8:1, passes WCAG 2.2 AA).
- **Light Theme Accent Link**: `#C2410C`

### Vertical Accent Color Codes (Borders, Status Tags, Charts only)
- **Kontraktor**: `#E8792B`
- **Distributor**: `#C62828`
- **Manufaktur**: `#E3B617`
- **Kawasan Berikat**: `#4B2FBF`
- **Valas (Forex)**: `#1B7F4B`
- **Retail**: `#0E7C93`
- **HRIS**: `#0B8F7B`

---

## 3. Typography Scale & Fonts
- **Headings**: `Plus Jakarta Sans` (weights: 600, 700). Sentence case only.
- **Body Text**: `IBM Plex Sans` (weights: 400, 500). Max line width 68 characters.
- **Monospace (Numbers, Codes, Years, Dates)**: `IBM Plex Mono` (BC 2.3, BC 4.0, RAB, RAP).
- **Scale**: 12px, 14px, 16px, 18px, 24px, 32px, 48px, 64px.

---

## 4. Motion Tokens & Micro-interactions
- `--ease-out`: `cubic-bezier(0.22, 1, 0.36, 1)`
- `--dur-fast`: `150ms`
- `--dur-base`: `220ms`
- `--dur-sheen`: `650ms`

### Primary Button Specification
- Shadow lift (`translateY(-1px)`) + sheen sweep across button on hover & focus-visible.
- Active press: `translateY(0) scale(0.98)`.
- Reduced-motion: animations disabled, static styling.

### Mascot "HiSIS" (AI Assistant) Specification
- Idle: Gentle CSS float animation (10px amplitude, 3.6s ease-in-out infinite).
- Hover / Focus: Instant switch to `wave.gif` (crossfade 80ms) without frame jumping.
- Video preview thumbnail: Accessible video / interactive component without system console errors.
- Popup / Dialog Peek: Peeks from top edge of modal (`clip-path: inset(0 0 28px 0)`).

---

## 5. Spacing, Layout & Accessibility
- **Grid**: 12-column responsive layout, max-width 1200px.
- **Section Spacing**: 96px desktop / 64px mobile.
- **Card Radius**: 8px (controls: 6px).
- **WCAG 2.2 AA**:
  - Touch target >= 44x44px.
  - Visible focus ring (2px offset 2px).
  - Valid heading order (single H1 per page).
  - Full keyboard accessibility (Esc closes modal/drawers).
