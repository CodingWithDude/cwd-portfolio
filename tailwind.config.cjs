/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
        notoSansMono: ["Noto Sans Mono", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#c6d0ef",
        secondary: "#8892b0",
        accent: "#64ffda",
        background: "#0a192f",
      },
    },
  },
  plugins: [],
};
