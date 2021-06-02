const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        'Open Sans',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      serif: [
        'Playfair Display',
        'ui-serif',
        'Georgia',
        'Cambria',
        'Times New Roman',
        'Times',
        'serif',
      ],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },
    extend: {
      colors: {
        'indigo-primary': '#5945e4',
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            pre: {
              paddingTop: '16px !important',
              paddingRight: '0px !important',
              paddingBottom: '8px !important',
              paddingLeft: '0px !important',
            },
            code: {
              color: theme('colors.gray.900', defaultTheme.colors.gray[900]),
              background: theme(
                'colors.indigo.50',
                defaultTheme.colors.indigo[50]
              ),
              borderRadius: '6px',
              padding: '0.2em 0.4em',
              fontWeight: '100',
              userSelect: 'all',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            blockquote: {
              fontWeight: '600',
              borderLeftColor: theme(
                'colors.indigo.500',
                defaultTheme.colors.indigo[500]
              ),
            },
            'blockquote p:first-of-type::before': {
              content: '',
            },
            'blockquote p:last-of-type::after': {
              content: '',
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      margin: ['hover', 'focus'],
      padding: ['hover', 'focus'],
      display: ['hover', 'group-hover'],
      visibility: ['hover'],
      borderRadius: ['hover', 'focus'],
      borderWidth: ['hover', 'focus'],
      borderColor: ['active'],
      transform: ['active', 'group-hover'],
      translate: ['active', 'group-hover'],
      transitionProperty: ['hover', 'group-hover'],
      transitionDuration: ['hover', 'group-hover'],
      transitionTimingFunction: ['hover', 'group-hover'],
      transitionDelay: ['hover', 'group-hover'],
      animation: ['hover', 'group-hover', 'focus'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
