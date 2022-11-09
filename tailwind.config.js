/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      keyframes:{
        'open-menu': {
          '0%': {transform: 'scaleX(0)',  transform: 'translateX(100%)'},
          '80%': {transform: 'scaleX(1.2)'},
          '100%': {transform: 'scaleX(1)'},
        },
      },
      animation:{
        'open-menu': 'open-menu 0.5s cubic-bezier(.17,.67,.23,.76) forwards',
      },
      fontFamily:{
        onlyFont: 'Inter'
      },
      width:{
        firstwidth: '360px'
      }
    },
  },
  plugins: [],
}
