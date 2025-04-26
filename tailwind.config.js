/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // pickstudyPink: '#f23a5f', // PickStudy 공식 색상
        pickstudyPink: '#ff5476', // PickStudy 공식 색상
      }
    },
  },
  plugins: [],
}

