/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // scans all your files for classes
  ],
  theme: {
    extend: {
      // your custom colors, fonts, etc. if needed
    },
  },
  plugins: [],
}