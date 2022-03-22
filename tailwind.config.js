const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      height: {
        7: '1.75rem',
        28: '7rem',
        80: '20rem',
      },
      width: {
        7: '1.75rem',
        80: '20rem',
      },
      maxWidth: {
        56: '14rem',
      },
      colors: {
        gray: {
          200: '#f4f4f5',
          400: '#b4abb7',
          600: '#625c65',
          700: '#48454b',
        },
        pink: {
          ...colors.pink,
          100: '#ffe4f4',
          200: '#ff9ad8',
          350: colors.pink[300],
          400: '#FC66C2',
          450: '#FC66C2',
        },
        purple: {
          100: '#FAF5FF',
          200: '#E9D8FD',
          300: '#D6BCFA',
          350: '#B794F4',
          400: '#B794F4',
          450: '#9F7AEA',
          500: '#9F7AEA',
          600: '#805AD5',
          700: '#6B46C1',
          800: '#553C9A',
          900: '#44337A',
        },
      },
      inset: {
        '-8': '-2rem',
        '-16': '-4rem',
        '-14': '-3.5rem',
        16: '4rem',
      },
      fontSize: {
        mega: '10rem',
      },
      aspectRatio: {
        9: '9',
        16: '16',
        100: '100',
        191: '191',
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
    require('@tailwindcss/aspect-ratio'),
  ],
}
