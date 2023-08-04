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
        }
      },
      fontFamily: {
        'dancing-script': ['Dancing Script', 'cursive']
      }
    },
  },
  plugins: [],
}

