/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#174544',
        customYellow: '#FBD590',
        customGray: "#DAD8D6",
        customBrown: "#BB633F",
        customRed: "#451718",
      },
    },
  },
  plugins: [],
}