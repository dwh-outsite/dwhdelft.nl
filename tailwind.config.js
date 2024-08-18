/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './**/components/**/*.{js,vue,ts}',
    './**/layouts/**/*.vue',
    './**/pages/**/*.vue',
    './**/plugins/**/*.{js,ts}',
    './**/app.vue',
    './**/error.vue',
    './**/content/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: 'rgb(var(--color-brand-50) / <alpha-value>)',
          100: 'rgb(var(--color-brand-100) / <alpha-value>)',
          200: 'rgb(var(--color-brand-200) / <alpha-value>)',
          300: 'rgb(var(--color-brand-300) / <alpha-value>)',
          400: 'rgb(var(--color-brand-400) / <alpha-value>)',
          450: 'rgb(var(--color-brand-450) / <alpha-value>)',
          500: 'rgb(var(--color-brand-500) / <alpha-value>)',
          600: 'rgb(var(--color-brand-600) / <alpha-value>)',
          700: 'rgb(var(--color-brand-700) / <alpha-value>)',
          800: 'rgb(var(--color-brand-800) / <alpha-value>)',
          900: 'rgb(var(--color-brand-900) / <alpha-value>)',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#f4f4f5',
          300: '#d1d5db',
          400: '#b4abb7',
          500: '#6b7280',
          600: '#625c65',
          700: '#48454b',
          800: '#1f2937',
          900: '#111827',
        },
      },
      skew: {
        '-7': '-7deg',
        7: '7deg',
      },
    },
  },
  plugins: [
    require('tailwind-heropatterns')({
      // as per tailwind docs you can pass variants
      variants: [],

      // the list of patterns you want to generate a class for
      // the names must be in kebab-case
      // an empty array will generate all 87 patterns
      patterns: [],

      // The foreground colors of the pattern
      colors: {
        default: '#ffc4e8',
        'blue-dark': '#000044', // also works with rgb(0,0,205)
      },

      // The foreground opacity
      opacity: {
        default: '0.4',
        100: '1.0',
      },
    }),
  ],
}
