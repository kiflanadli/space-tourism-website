/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "black-russian": "#0b0d17",
        quartz: "#d0d6f9",
      },
      fontFamily: {
        bellefair: ['"Bellefair"', "serif"],
        barlow: ['"Barlow"', "sans-serif"],
        "barlow-condensed": ['"Barlow Condensed"', "sans-serif"],
      },
      fontSize: {
        sm: [
          "0.875rem",
          {
            letterSpacing: "0.1678em",
          },
        ],
        base: [
          "1rem",
          {
            letterSpacing: "0.1687em",
          },
        ],
        lg: "1.125rem",
        "3xl": [
          "1.75rem",
          {
            letterSpacing: "0.1696em",
          },
        ],
        "4xl": "2rem",
        "6xl": "3.5rem",
        "8xl": "6.25rem",
        "10xl": "9.375rem",
      },
    },
  },
  plugins: [],
};
