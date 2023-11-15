/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {

      screens: {
        'sm': '576px',
        'md': '1024px',
        'lg': '1280px',
        'xl': '1900px',
      },

      fontFamily: {
        mukta: ['Mukta Mahee', 'sans-serif'],
      },



      colors: {
        // Define your color variables here
        textColorPrimary: '#ffffff', // Change this to your desired color
        textColorSecondary: '#868686',
        textColorTertiary:  '#FFC38B',


        backgroundColorPrimary: '#000000',
        backgroundColorSecondary: '#FFC38B',
        // backgroundColorTertiary: '#F6ECF5',
        // backgroundColorQuaternary: '#F6F6EB',
      },

    },
  },
  plugins: [],
};

