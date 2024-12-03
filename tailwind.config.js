// npm install -D tailwindcss
//npx tailwindcss init
//npx tailwindcss -i ./css/input.css -o ./css/style.css --watch
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'selector',
  content: [
    "./*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'dark-surface':'#0F172A',//Background - slate-900
        'dark-onLow':'#899ec2',//Text on Background
        'dark-onSurface':'#d1d1d1',//Text on Background
        'dark-surfaceContainerLow':'#27354c',//Container on background
        'dark-surfaceContainer':'#1E293B',//Container on background - slate-800
        'dark-surfaceContainerHigh':'#151d2a',//Container on background
        'dark-primary':'#ffe3f4',//Primary Color
        'dark-onPrimary':'#F2F2F2',//Text on Primary Color
        'dark-secondary':'#fff0f5',//Yada Yada...
        'dark-onSecondary':'#1A1A1A',
        'dark-tertiary':'#f38fcb',
        'dark-onTertiary':'#F2F2F2',

        'surface':'#f1f5f9',//Background
        'onLow':'#5c6a80',//Text on Background
        'onSurface':'#1e293b1',//Text on Background
        'surfaceContainerLow':'#e2e8f0',//Container on background
        'surfaceContainer':'#cbd5e1',//Container on background
        'surfaceContainerHigh':'#94a3b8',//Container on background
        'primary':'#ffe3f4',//Primary Color
        'onPrimary':'#F2F2F2',//Text on Primary Color
        'secondary':'#fff0f5',//Yada Yada...
        'onSecondary':'#1A1A1A',
        'tertiary':' #FF5733 ',
        'onTertiary':'#F2F2F2',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}