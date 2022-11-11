/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        10: "repeat(10, 1fr)",
        30: "repeat(30, 1fr)",
        100: "repeat(100, 1fr)",
      },
      gridTemplateRows: {
        10: "repeat(10, 1fr)",
        30: "repeat(30, 1fr)",
        100: "repeat(100, 1fr)",
      },
      height: {
        tall: "36rem",
        "100vw": "100vw",
      },
      width: {
        wide: "36rem",
      },
    },
  },
  plugins: [],
};
