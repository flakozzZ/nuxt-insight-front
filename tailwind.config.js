/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./error.vue",
  ],
  theme: {
    extend: {
      width: {
        '253px': '253px',
        '143px': '143px',
      },
      height: {
        '91px': '91px',
        '80px': '80px',
        '68px': '68px',
      },
      colors: {
        'a-side': '#C3C1C13D',

      }
    },
  },
  plugins: [],
}

