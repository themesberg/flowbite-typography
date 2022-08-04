const mdx = require('@mdx-js/mdx')

module.exports = {
  content: ['pages/**/*.{js,mdx}', 'components/**/*.{js,mdx}', 'theme/**/*.js'],
  transform: {
    mdx: (content) => mdx.sync(content),
  },
  darkMode: 'class',
  theme: {
    extend: {
      maxWidth: {
        '2xs': '16rem',
        '8xl': '90rem'
      },
      colors: {
        red: { 1000: '#530F0F' },
        orange: { 1000: '#521C0B' },
        amber: { 1000: '#54240B' },
        yellow: { 1000: '#4D280A' },
        lime: { 1000: '#213708' },
        green: { 1000: '#0F3D23' },
        emerald: { 1000: '#02392C' },
        teal: { 1000: '#073937' },
        cyan: { 1000: '#09364A' },
        sky: { 1000: '#072F49' },
        blue: { 1000: '#17275C' },
        indigo: { 1000: '#1F1C53' },
        violet: { 1000: '#2F1265' },
        purple: { 1000: '#3D1061' },
        fuchsia: { 1000: '#4C0C4F' },
        pink: { 1000: '#4E0B26' },
        rose: { 1000: '#4E071B' },
      },
    },
  },
  variants: {},
  plugins: [require('../src/index.js')],
}
