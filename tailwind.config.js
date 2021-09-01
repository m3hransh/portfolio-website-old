const colors = require('tailwindcss/colors')
const { padding } = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}',],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.rose,
        accent: colors.teal,
        main: colors.coolGray,
        background: colors.blueGray,
        rose: colors.rose,
        fuchsia: colors.fuchsia,
        violet: colors.violet,
        sky: colors.sky,
        cyan: colors.cyan,
        teal: colors.teal,
        emerald: colors.emerald,
        lime: colors.lime,
        amber: colors.amber,
        orange: colors.orange,
        grey: {
          '100': '#f5f5f5',
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121'
        },
        white: colors.white,
        black: colors.black,
        red: colors.red,
        yellow: colors.yellow,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.grey.800'),
            a: {
              color: theme('colors.red.500'),
              'text-decoration': 'none',
              '&:hover, &.active': {
                color: 'white',
                'background-color': theme('colors.red.500'),
                strong: {
                  color: 'white'
                },
              },
            },
            strong: {
              color: theme('colors.red.500')
            },
            h1: {
              color: theme('colors.grey.800'),
              'margin-top': '0'
            },
            h2: {
              color: theme('colors.grey.800'),
              'margin-top': '0'
            },
            h3: {
              color: theme('colors.grey.800'),
              'margin-top': '0'
            },
            h4: {
              color: theme('colors.grey.800'),
              'margin-top': '0'
            },

            p: {
              color: theme('colors.grey.800'),
              'margin-top': '0',
              'margin-bottom': '1em'
            },
            img: {
              'margin-top': '0',
              'margin-bottom': '0',
              'box-shadow': '0px 2px 4px -2px rgba(0, 0, 0, 30%)'
            },
            pre: {
              'background-color': 'transparent',
              'padding': '0'
            },
            'ul > li': {
              '&::before': {
                'background-color': theme('colors.grey.800'),
                'font-weight': 'bold'
              }
            },
            'ol > li': {
              '&::before': {
                color: theme('colors.grey.800'),
                'font-weight': 'bold'
              }
            }
          },
        },

        dark: {
          css: {
            color: 'white',
            a: {
              color: theme('colors.red.500'),
              'text-decoration': 'none',
              '&:hover, &.active': {
                color: 'white',
                'background-color': theme('colors.red.500'),
              },
            },
            strong: {
              color: theme('colors.red.500')
            },
            h1: {
              color: 'white',
              'margin-top': '0'
            },
            h2: {
              color: 'white',
              'margin-top': '0'
            },
            h3: {
              color: 'white',
              'margin-top': '0'
            },
            h4: {
              color: 'white',
              'margin-top': '0'
            },
            // code: {
            //   color: theme('colors.grey.800'),
            //   'background-color': 'white',
            //   '&:before, &:after': {
            //     display: 'none'
            //   }
            // },
            p: {
              color: 'white',
              'margin-top': '0',
              'margin-bottom': '1em'
            },
            img: {
              'margin-top': '0',
              'margin-bottom': '0',
              'box-shadow': '0px 2px 4px -2px rgba(255, 255, 255, 30%)'
            },
            'ul > li': {
              '&::before': {
                'background-color': 'white',
                'font-weight': 'bold'
              }
            },
            'ol > li': {
              '&::before': {
                color: 'white',
                'font-weight': 'bold'
              }
            }
          }
        },
        xl: {
          css: {
            pre: {
              'padding': '0'
            }
          }
        },
      })
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      typography: ['dark', 'responsive']
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
