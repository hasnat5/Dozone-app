/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./navigations/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        visbyHeavy: ["visbyHeavy"],
        visbyExtraBold: ["visbyExtraBold"],
        visbyBold: ["visbyBold"],
        visbyMedium: ["visbyMedium"],
        visbyRegular: ["visbyRegular"],
        visbyThin: ["visbyThin"],
      },
    },
  },
  plugins: [],
}
