/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/components/**/*.{js,vue,ts}",
    "./**/layouts/**/*.vue",
    "./**/pages/**/*.vue",
    "./**/plugins/**/*.{js,ts}",
    "./**/app.vue",
    "./**/error.vue",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // For now, everything is pink. Should be made dynamic later.
          50: '#fdf2f8',
          100: '#ffe4f4',
          200: '#ff9ad8',
          300: '#f9a8d4',
          350: '#f9a8d4',
          400: '#FC66C2',
          450: '#FC66C2',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
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
        }
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
