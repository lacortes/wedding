/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: ["./src/**/*.{jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        sage: {
          light: '#C4D4C7',
          DEFAULT: '#A1BAA6',
          dark: '#7DA183'
        },
        blush: {
          light: '#FAA5B6',
          DEFAULT: '#AD3E54',
          dark: '#7A2C3C'
        },
        ivory: {
          DEFAULT: '#F4F7F6'
        },
        champagne: {
          DEFAULT: '#F2EBE3'
        },
        'light-gray': {
          DEFAULT: 'rgb(68, 68, 68)'
}
      },
      fontFamily: {
        'dancing-script': ['Dancing Script', 'cursive'],
        'cormorant': ['Cormorant', 'serif'],
        'open-sans':['Open Sans', 'sans-serif']

      },
      transitionProperty: {
        height: 'height',
        display: 'display'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

