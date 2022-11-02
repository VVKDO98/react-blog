/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lexend': ['Lexend Deca', 'sans-serif'],
        'dmserif': ['DM Serif Display', 'serif']
      },
      boxShadow: {
        'cust': '0px -10px 30px 1px #272727;',
      }
    },
    colors: {
      'grey': '#272727',
      'green': '#6EEB83',
      'red': '#FF5E5B',
      'white': '#FFFFFF'
    }
  },
  plugins: [],
}
