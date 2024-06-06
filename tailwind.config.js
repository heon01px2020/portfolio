/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-white': '#FFFFFF',
        'custom-blue': '#DEF1FE',
        'highlight': '#183F7C'
        // D2ECDD is also a nice green color
      },
    },
  },
  plugins: [],
}
