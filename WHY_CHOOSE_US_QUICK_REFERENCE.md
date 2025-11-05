# Why Choose Us - Quick Reference

## 🎯 What Was Implemented

### ✅ Feature Tab Switching
- Click any of the 4 feature cards to view its corresponding image
- Active card highlights with purple styling and shadow
- Smooth image transitions when switching tabs

### ✅ Dynamic Backgrounds
Each feature displays with its unique background:
```
1. "3x Faster Setup"          → Image: 3x faster.png          + Background: bg Variant=1.png
2. "All-in-One Platform"       → Image: all in one.png         + Background: bg Variant=2.png
3. "Zero Paperwork, Full Clarity" → Image: zero paperwor.png  + Background: bg Variant=3.png
4. "Trusted & Proven"          → Image: trusted and proven.png + No background
```

### ✅ User Experience Enhancements
- **Click interaction**: Cards are clickable/tappable
- **Hover effects**: Cards show hover state with enhanced shadow
- **Keyboard navigation**: Use Enter or Space keys to activate cards
- **Visual feedback**: Active card shows purple icon and title
- **Smooth transitions**: 500ms opacity transition for professional feel

## 📁 File Structure

```
public/img/why-choose-us/
├── 3x faster.png              # Feature image
├── all in one.png             # Feature image
├── zero paperwor.png          # Feature image
├── trusted and proven.png     # Feature image
├── bg Variant=1.png           # Background for 3x faster
├── bg Variant=2.png           # Background for all-in-one
└── bg Variant=3.png           # Background for zero paperwork
```

## 🔧 Technical Implementation

### Component: `WhyIncorpify.tsx`
- **State**: Tracks active feature ID
- **Click handler**: Updates active feature when card is clicked
- **Layered images**: Background (if exists) + feature image overlay
- **Responsive**: Images hidden on mobile, visible on tablet+

### Key Code Snippets

**State Management:**
```typescript
const [activeFeatureId, setActiveFeatureId] = useState("3x-faster");
```

**Click Handler:**
```typescript
onClick={() => setActiveFeatureId(feature.id)}
```

**Layered Image Display:**
```typescript
{/* Background layer */}
{activeFeature.background && (
  <div className="absolute inset-0 z-0">
    <Image src={activeFeature.background} ... />
  </div>
)}

{/* Feature image layer */}
<div className="relative z-10">
  <Image src={activeFeature.image} ... />
</div>
```

## 🎨 Visual States

### Inactive Card:
- White icon background
- Dark text color
- No shadow
- Hover: Enhanced shadow

### Active Card:
- Purple icon background
- Purple title text
- Enhanced shadow
- Elevated appearance

## 🚀 How to Test

1. Start dev server: `npm run dev`
2. Navigate to homepage
3. Scroll to "Why Choose Us" section
4. Click different feature cards
5. Observe:
   - Image changes immediately
   - Background changes (or removed for "Trusted & Proven")
   - Active card styling updates
   - Smooth transitions

## 📱 Responsive Behavior

- **Mobile (< md)**: Feature cards only, no images
- **Tablet (md+)**: Images appear alongside cards
- **Desktop (lg+)**: Full layout with proper spacing

## ♿ Accessibility

- ✅ Keyboard navigation supported
- ✅ Proper ARIA attributes
- ✅ Alt text for all images
- ✅ Focus indicators
- ✅ Semantic HTML structure

## 🎯 Default State

On page load:
- **Active feature**: "3x Faster Setup"
- **Image shown**: 3x faster.png
- **Background**: bg Variant=1.png

## 💡 User Flow

1. User sees "3x Faster Setup" active by default
2. User clicks "All-in-One Platform" card
3. Image instantly switches to "all in one.png"
4. Background changes to "bg Variant=2.png"
5. "All-in-One Platform" card now shows active styling
6. Process repeats for any clicked feature

---

**Status**: ✅ Implementation Complete
**Files Modified**: `components/WhyIncorpify.tsx`
**Files Added**: 7 images in `public/img/why-choose-us/`
**Linting**: ✅ No errors
**Ready for**: Browser testing

