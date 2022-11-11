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
        firstwidth: '350px',
        secondwidth: '290px'
      },
      height:{
        lineheight: '2px'
      },
      colors:{
        firstBg: 'rgba(0, 0, 0, 0.47)',
        button: '#f15e50',
        yellowish: '#e9ab53',
        secondContent: '#00001a',
        secondUnderText: '#5d5f79',
        onetwothree: '#c5c6ce'
      },
      translate:{
        translatex: 'translateX(-100%)'
      },
      margin:{
        right: '600px'
      },
      transitionDuration:{
        transitionTime: '0.5s'
      }
    },
  },
  plugins: [],
}
