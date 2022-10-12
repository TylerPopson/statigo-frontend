/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'theme-dark-blue': "#010326",
        'theme-med-blue': "#393E59",
        'theme-white': "#F0F2F2",
        'theme-dark-teal': "#6FBFBF",
        'theme-light-teal': "#82D9D9",
      }
    },
  },
  plugins: [],
}
