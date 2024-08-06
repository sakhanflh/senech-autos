/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": '"Poppins", sans-serif',
      },
      colors: {
        'primary': '#191D88',
        'secondary': '#1450A3',
        'tertiary': '#337CCF',
        'extra': '#FFC436',
        'dark': 'rgb(23 37 84)',
        'BlueCar': '#337CCF',
        'RedCar': '#dc2626',
        'clip': '#F5F7FB',
      }
    },
  },
  plugins: [],
}

