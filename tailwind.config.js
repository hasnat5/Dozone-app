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
        // summer
        'primary1': '#D8F5E099',
        'primary2': '#2E8B7A',
        'accent1': '#23695E',
        'accent2': '#94D60A',

        // autumn
        // 'primary1': '#FCD9C5',
        // 'primary2': '#F36429',
        // 'accent1': '#EF5C27',
        // 'accent2': '#8D1938',

        // winter
        // 'primary1': '#C1EAEE',
        // 'primary2': '#8BD9DF',
        // 'accent1': '#81D0DA',
        // 'accent2': '#FFFFFF',

        // night
        // 'primary1': '#8765D04D',
        // 'primary2': '#8342C7',
        // 'accent1': '#3D0F64',
        // 'accent2': '#FFFFFF',


      },
    },
  },
  plugins: [],
}

//   'primary1': '#C8F5C4',
// 'primary2': '#E8FFB8',
// 'accent1': '#653CB9',
// 'accent2': '#94D60A',