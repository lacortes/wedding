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
          light: '#B4DBB9',
          DEFAULT: '#8AA88E',
          dark: '#6D9272'
        },
        blush: {
          light: '#FAA5B6',
          DEFAULT: '#AD3E54',
          dark: '#7A2C3C'
        },
        ivory: {
          DEFAULT: '#F4F7F6'
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

