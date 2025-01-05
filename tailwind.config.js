/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ub-grey': '#111111',
        'ub-warm-grey': '#AEA79F',
        'ub-cool-grey': '#333333',
        'ub-orange': '#E95420',
        'ub-lite-abrgn': '#77216F',
        'ub-med-abrgn': '#5E2750',
        'ub-drk-abrgn': '#2C001E',
      }
    },
  },
  plugins: [],
}
