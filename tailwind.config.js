const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    extend: {
      height: {
        7: '1.75rem',
        28: '7rem',
        80: '20rem'
      },
      width: {
        7: '1.75rem'
      },
      maxWidth: {
        56: '14rem'
      },
      colors: {
        pink: {
          ...colors.pink,
          200: '#ff9ad8',
          400: '#FC66C2'
        },
        gray: {
          ...colors.gray,
          400: '#b7abb3',
          600: '#655c62',
          700: '#464044'
        }
      },
      inset: {
        '-8': '-2rem',
        '-16': '-4rem',
        '-14': '-3.5rem'
      }
    },
    aspectRatio: {
      square: [1, 1],
      '16/9': [16, 9],
      '4/3': [4, 3],
      '21/9': [21, 9],
      fb: [1.91, 1]
    }
  },
  variants: {
    aspectRatio: ['responsive']
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
        'blue-dark': '#000044' // also works with rgb(0,0,205)
      },

      // The foreground opacity
      opacity: {
        default: '0.4',
        '100': '1.0'
      }
    }),
    require('tailwindcss-responsive-embed')(),
    require('tailwindcss-aspect-ratio')()
  ]
}
