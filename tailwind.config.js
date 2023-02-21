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

      colors: {
        'primary1': '#D8F5E099',
        'primary2': '#2E8B7A',
        'accent1': '#23695E',
        'accent2': '#94D60A',
      },
    },
  },
  plugins: [],
}

//   'primary1': '#C8F5C4',
// 'primary2': '#E8FFB8',
// 'accent1': '#653CB9',
// 'accent2': '#94D60A',