# Design Standards & Guidelines

## Figma Export Directory Structure

**Important:** All Figma conversion directories are located at the **root level** of the project, not inside the `landing/` directory.

**Example Locations:**
- `/Users/m/Projects/Incorpify-New/Accounting Hero section/`
- `/Users/m/Projects/Incorpify-New/Accounting our features/`
- `/Users/m/Projects/Incorpify-New/header/`
- `/Users/m/Projects/Incorpify-New/footer/`

**Workflow:**
1. Locate the Figma export directory at the root level
2. Extract code from `src/screens/` directory
3. Extract styles from `tailwind.css` file
4. Copy assets from `static/img/` directory to `landing/public/img/`
5. Create professional, responsive components in `landing/components/`
6. Integrate into the appropriate page

**Note:** Always check the root directory first when looking for Figma exports.

---

## Feature Card Standards

### Text Colors (CRITICAL - ALWAYS CHECK)

**Card Titles:** MUST use `text-incorpify-primary` (dark purple `#1d1834`)
- ❌ NEVER use: `text-incorpifyprimary`, `text-white`, or CSS variable versions
- ✅ ALWAYS use: `text-incorpify-primary`

**Card Descriptions:** MUST use `text-gray-600`
- ❌ NEVER use: `text-1-color-modes-colors-text-text-secondary-700`, `text-white`, or CSS variable versions
- ✅ ALWAYS use: `text-gray-600`

**Section Headings:** MUST use `text-incorpify-primary` AND `text-center`
- ✅ Example: `className="... text-incorpify-primary text-center ..."`
- Must also include centering utilities: `items-center justify-center`

### Card Shadows (CRITICAL - ALWAYS CHECK)

**Proper Card Shadow (VISIBLE):**
```css
shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_-4px_rgba(16,24,40,0.08)]
```

**Image Container Shadow (SUBTLE):**
```css
shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]
```

**Important Notes:**
- ⚠️ Shadows MUST use `rgba()` values, NOT hex with tiny opacity (e.g., `#00000003`)
- Hex shadows like `#00000003` are invisible - they don't render properly
- Always add `border border-solid border-gray-200` to cards
- Image containers also need `border border-solid border-gray-100`

### Background Colors

**Card Container:** Use Tailwind utilities, NOT gradients or CSS variables
- ✅ `bg-white` - Card background (NOT gradients!)
- ✅ `bg-gray-50` - Image container background
- ✅ `bg-white` - Section background
- ❌ NEVER use CSS variables like `bg-1-color-modes-...`
- ❌ NEVER use gradient backgrounds on cards: `bg-[linear-gradient(...)]`

### Bento Grid Spacing

**Consistent Spacing (CRITICAL):**
- Grid container: `gap-6` (24px)
- Row containers: `gap-6` (24px)  
- ✅ Use simple Tailwind classes
- ❌ NEVER use complex CSS variables like `gap-[var(--3-spacing-spacing-3xl-duplicate)]`

**Layout Structure:**
```tsx
<div className="flex flex-col items-center gap-6 relative w-full max-w-[1280px] mx-auto">
  {/* Row */}
  <div className="flex flex-col lg:flex-row items-start gap-6 relative self-stretch w-full">
    {/* Cards */}
  </div>
</div>
```

### Asymmetric Bento Grid (40/60 Pattern)

**Use Case:** Create visual rhythm with alternating card widths

**Pattern:**
- Row 1: 40% | 60%
- Row 2: 60% | 40%
- Row 3: 40% | 60%

**Implementation:**
```tsx
// With gap-6 (24px), subtract half the gap from each card
containerWidth: "w-full lg:w-[calc(40%-12px)]" // For 40% card
containerWidth: "w-full lg:w-[calc(60%-12px)]" // For 60% card
```

**Why This Works:**
- Mobile: `w-full` ensures full-width stacking
- Desktop: `calc()` accounts for 24px gap between cards
- Formula: `(percentage - half of gap)`
  - 40% card: `calc(40% - 12px)`
  - 60% card: `calc(60% - 12px)`
  - Total: `40% - 12px + 24px + 60% - 12px = 100%` ✅

**Visual Effect:**
- Creates dynamic "zigzag" rhythm
- Highlights important content with larger cards
- Breaks monotony of equal-width grids
- Maintains perfect alignment

### Centering Headers

**Required Classes for Section Headers:**
```tsx
<header className="flex flex-col items-center justify-center ... w-full max-w-[1280px] mx-auto">
  <h2 className="... w-full ... text-center ...">
```

**Key Elements:**
1. Header: `items-center justify-center`
2. H2: `w-full text-center`
3. Container: `mx-auto` for horizontal centering

---

## CTA Button Standards

### Primary "Get Started" CTA Button

**Required Radius:** `12px` (must be consistent across all pages)

**CSS Variable:** `--2-radius-radius-xl: 12px;` (defined in `globals.css`)

**Usage:**
- Use `rounded-[12px]` directly in Tailwind classes
- OR use `rounded-[var(--2-radius-radius-xl)]` for CSS variable reference
- Both border-radius AND before pseudo-element must use `12px`

**Example:**
```tsx
className="... rounded-[12px] ... before:rounded-[12px] ..."
```

**Components Currently Using Correct Radius:**
- ✅ `PrimaryCTA.tsx` - Uses `rounded-[12px]`
- ✅ `AccountingHero.tsx` - Fixed to use `rounded-[12px]`

**Components to Check:**
- `IncorporationHero.tsx` - Uses `rounded-xl` (should verify it's 12px)
- `Header.tsx` - Get Started buttons
- Any other hero sections with Get Started CTAs

---

## Icon Assets Standards

### Small SVG Icons (< 50px)

**Rule:** Use `<img>` tag instead of Next.js `<Image>` component for small SVG icons

**Why:**
- Next.js Image optimization can cause issues with small SVG files
- `<img>` tag loads faster for simple SVG icons
- No need for optimization overhead on small assets

**Example:**
```tsx
// ✅ Correct - Small SVG icon
<img
  className="w-5 h-5"
  src="/img/chevron-right.svg"
  alt=""
  aria-hidden="true"
/>

// ❌ Incorrect - Don't use Image component for small SVGs
<Image
  className="w-5 h-5"
  src="/img/chevron-right.svg"
  width={20}
  height={20}
/>
```

**When to Use Next.js Image:**
- Images > 50px in dimension
- Photographs or complex graphics
- Images that need optimization/resizing
- Above-the-fold hero images

**When to Use `<img>` Tag:**
- Small SVG icons (< 50px)
- Simple decorative icons
- Icons that don't need optimization

---

## Component Consistency Checklist

When creating new hero sections or CTA buttons:

- [ ] Get Started button uses `rounded-[12px]`
- [ ] Before pseudo-element also uses `rounded-[12px]`
- [ ] Small SVG icons use `<img>` tag
- [ ] Large images use Next.js `<Image>` component
- [ ] Consistent hover states across all CTAs
- [ ] Proper ARIA labels on all interactive elements

---

## Known Issues Fixed

1. ✅ **AccountingHero Get Started Button** - Fixed radius from `rounded-[var(--2-radius-radius-xl)]` to `rounded-[12px]`
2. ✅ **AccountingHero Chevron Icon** - Fixed from Next.js `<Image>` to `<img>` tag
3. ✅ **AccountingOurFeatures Card Shadows** - Fixed invisible hex shadows to visible rgba shadows
4. ✅ **AccountingOurFeatures Bento Grid Spacing** - Simplified from CSS variables to consistent `gap-6`
5. ✅ **AccountingOurFeatures Card Backgrounds** - Removed gradient backgrounds, using solid `bg-white`
6. ✅ **AccountingOurFeatures Text Colors** - Fixed to use proper Tailwind utilities
7. ✅ **AccountingOurFeatures Asymmetric Layout** - Implemented 40/60 alternating card widths with proper gap calculation

---

**Last Updated:** October 30, 2025  
**Maintained By:** Development Team

