/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xxs: "0px",
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/background2.jpg')", // First background image class
        "black-pattern": "url('/src/assets/black-background.jpg')", // Second background image class
        "fabric1": "url('/src/assets/fabric.jpg')", 
        "fabric2": "url('/src/assets/fabric2.jpg')",
        "fabric3": "url('/src/assets/fabric3.jpg')", 
        "grey": "url('/src/assets/background.jpg')",
        "1": "url('/src/assets/4.jpg')"  
      },
    },
  },
  plugins: [],
};
