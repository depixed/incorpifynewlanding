import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'incorpify-primary': '#1d1834',
        'incorpifyprimary': '#1d1834',
        '1-color-modes-colors-text-text-primary-on-brand': '#FFFFFF',
        '1-color-modes-colors-border-border-primary': '#E5E7EB',
        '1-color-modes-colors-text-text-white': '#FFFFFF',
        '1-color-modes-colors-foreground-fg-white': '#FFFFFF',
        '1-color-modes-component-colors-alpha-alpha-white-40': 'rgba(255, 255, 255, 0.4)',
        '1-color-modes-colors-foreground-fg-senary-300': 'rgba(255, 255, 255, 0.1)',
        '1-color-modes-component-colors-utility-gray-utility-gray-200': 'rgba(233, 234, 235, 1)',
        '1-color-modes-component-colors-utility-gray-utility-gray-400': 'rgba(164, 167, 174, 1)',
        '1-color-modes-component-colors-components-buttons-secondary-button-secondary-bg': '#FFFFFF',
        '1-color-modes-component-colors-components-buttons-secondary-button-secondary-border': 'rgba(208, 213, 221, 1)',
      },
      fontFamily: {
        'display-lg-semibold': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'text-md-semibold': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'text-sm-semibold': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'text-sm-regular': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'text-xs-semibold': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'text-xs-medium': ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'shadows-shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'shadows-shadow-xs-skeuomorphic': '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      },
    },
  },
  plugins: [],
}
export default config


