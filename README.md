# Incorpify Landing Page

A modern landing page with a hero section built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- 🚀 Built with Next.js 14 and React 18
- 💎 TypeScript for type safety
- 🎭 Tailwind CSS for styling
- 📱 Mobile-responsive layout
- ♿ Accessible components with ARIA labels
- 🎯 Service navigation with icons
- 🖼️ Optimized images with Next.js Image component

## Services Showcased

- Incorporation
- Accounting & Tax
- Visa & Residency
- Banking
- Insurance
- Payroll
- Legal

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm, yarn, or pnpm package manager

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
landing/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page
├── components/
│   ├── HeroNoGradient.tsx   # Main hero section component
│   └── icons/               # SVG icon components
│       ├── BankNote02.tsx
│       ├── Building07.tsx
│       ├── Calculator.tsx
│       ├── CreditCard02.tsx
│       ├── Scales02.tsx
│       ├── Shield03.tsx
│       └── UserCheck01.tsx
├── public/
│   └── images/              # Image assets
│       ├── image-1376.png
│       └── frame-2095585000.png
└── ...config files
```

## Customization

### Colors

The primary brand color and other design tokens can be customized in:
- `tailwind.config.ts` - Tailwind color palette
- `app/globals.css` - CSS custom properties

### Typography

Font sizes, weights, and spacing are defined as CSS variables in `app/globals.css`. Modify these to adjust the typography scale.

### Images

Replace the placeholder images in `public/images/` with your actual assets:
- `image-1376.png` - Dashboard preview (1050x689px)
- `frame-2095585000.png` - License/certification banner (1280x120px)

## Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Inter Font** - Modern typography

## License

This project is private and proprietary.
