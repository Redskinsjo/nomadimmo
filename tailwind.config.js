/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,ts,tsx}",
    "./components/**/*.{html,js,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: { max: "600px" },
      md: { min: "600px", max: "900px" },
      lg: { min: "900px", max: "1300px" },
      xl: { min: "1300px", max: "1600px" },
    },
    extend: {},
  },
  plugins: [],
  important: "#__next",
  corePlugins: {
    preflight: false,
  },
};
