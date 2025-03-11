/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkBlue: "#023047",
        MainPurple: "#987dfe"
      }
    },
  },
  plugins: [],
}

