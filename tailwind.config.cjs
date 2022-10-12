/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#c6d0ef",
      secondary: "#8892b0",
      accent: "#64ffda",
    },
    extend: {
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
        notoSansMono: ["Noto Sans Mono", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
