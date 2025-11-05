# Feature Card Implementation Checklist

Use this checklist EVERY time you create a feature card section from Figma exports.

## ✅ Before Submitting

### 1. Text Colors
- [ ] Card titles use `text-incorpify-primary` (NOT `text-incorpifyprimary`)
- [ ] Card descriptions use `text-gray-600` (NOT CSS variable versions)
- [ ] Section badge text uses `text-incorpify-primary`
- [ ] Section heading uses `text-incorpify-primary`

### 2. Text Alignment
- [ ] Section header has `items-center justify-center`
- [ ] Section heading has `w-full text-center`
- [ ] Header container has `mx-auto`

### 3. Card Shadows & Borders
- [ ] Card shadow: `shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_-4px_rgba(16,24,40,0.08)]`
- [ ] Cards have `border border-solid border-gray-200`
- [ ] Image container shadow: `shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]`
- [ ] Image container border: `border border-solid border-gray-100`
- [ ] Shadows must be VISIBLE - use proper rgba values, not hex with 03/08 opacity

### 4. Background Colors
- [ ] Card background: `bg-white` (NOT gradients or CSS variables)
- [ ] Image container: `bg-gray-50` (NOT CSS variables)
- [ ] Section uses `bg-white` (for white sections)
- [ ] No CSS variable backgrounds like `bg-1-color-modes-...`

### 5. Bento Grid Spacing
- [ ] Grid container: `gap-6` (consistent horizontal and vertical)
- [ ] Row containers: `gap-6` (consistent spacing between cards)
- [ ] Grid is properly aligned with `items-start` on rows
- [ ] All cards stack properly on mobile

### 6. Responsive Design
- [ ] Mobile layout tested (< 768px)
- [ ] Tablet layout tested (768px - 1024px)
- [ ] Desktop layout tested (> 1024px)
- [ ] Images optimized for mobile with Next.js Image

### 7. Code Quality
- [ ] No linter errors
- [ ] TypeScript type safety maintained
- [ ] Accessibility attributes present (ARIA labels)
- [ ] Semantic HTML used

## Common Mistakes to Avoid

❌ **WRONG:**
```tsx
// Wrong text colors
<h3 className="text-incorpifyprimary">Title</h3>
<p className="text-1-color-modes-colors-text-text-secondary-700">Desc</p>

// Wrong backgrounds
<article className="bg-[linear-gradient(...)]">
<div className="bg-1-color-modes-component-colors-utility-gray-utility-gray-50">

// Invisible shadows (hex with tiny opacity)
<div className="shadow-[0px_20px_20px_-4px_#00000003]">

// Wrong spacing
<div className="gap-[var(--3-spacing-spacing-3xl-duplicate)]">

// Not centered
<h2 className="self-stretch text-incorpify-primary">
```

✅ **CORRECT:**
```tsx
// Correct text colors
<h3 className="text-incorpify-primary">Title</h3>
<p className="text-gray-600">Description</p>

// Correct backgrounds
<article className="bg-white">
<div className="bg-gray-50">

// Visible shadows (rgba with proper opacity)
<div className="shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_-4px_rgba(16,24,40,0.08)]">

// Consistent spacing
<div className="gap-6">

// Properly centered
<h2 className="w-full text-center text-incorpify-primary">
```

## Quick Reference

### Standard Colors
- Primary text: `#1d1834` → `text-incorpify-primary`
- Description text: → `text-gray-600`
- Card background: → `bg-white`
- Image container background: → `bg-gray-50`

### Standard Shadows
```tsx
// Card shadow (visible, professional)
shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_-4px_rgba(16,24,40,0.08)]

// Image container shadow (subtle)
shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]
```

### Standard Borders
```tsx
// Card border
border border-solid border-gray-200

// Image container border
border border-solid border-gray-100
```

### Bento Grid Layout Structure
```tsx
{/* Features Grid - Bento Layout */}
<div className="flex flex-col items-center gap-6 relative w-full max-w-[1280px] mx-auto">
  {/* Row 1 */}
  <div className="flex flex-col lg:flex-row items-start gap-6 relative self-stretch w-full">
    {/* Cards */}
  </div>
  
  {/* Row 2 */}
  <div className="flex flex-col lg:flex-row items-start gap-6 relative self-stretch w-full">
    {/* Cards */}
  </div>
</div>
```

### Standard Header Structure
```tsx
<header className="flex flex-col items-center justify-center gap-6 md:gap-8 relative w-full max-w-[1280px] mx-auto">
  <div className="inline-flex items-center justify-center ...">
    {/* Badge */}
  </div>
  <h2 className="w-full text-center text-incorpify-primary ...">
    {/* Heading */}
  </h2>
</header>
```

### Standard Card Structure
```tsx
<article className="flex-1 w-full flex flex-col min-h-[350px] md:min-h-[400px] lg:h-[420px] items-start gap-4 md:gap-6 p-4 md:p-6 relative rounded-2xl lg:rounded-3xl overflow-hidden bg-white shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_-4px_rgba(16,24,40,0.08)] border border-solid border-gray-200">
  <div className="relative flex-1 self-stretch w-full bg-gray-50 rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] border border-solid border-gray-100">
    {/* Image */}
  </div>
  
  <div className="flex flex-col items-start gap-2 px-2 relative self-stretch w-full">
    <h3 className="text-incorpify-primary ...">Title</h3>
    <p className="text-gray-600 ...">Description</p>
  </div>
</article>
```

---

**Last Updated:** October 30, 2025  
**Status:** Use this checklist for ALL feature card implementations

