/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    fontSize: {
      sm: "0.875rem", // 14px
      "2sm": "0.937rem", // 15px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.75rem", // 28px
      "4xl": "2rem", // 32px
      "5xl": "2.5rem", // 40px
      "6xl": "3.5rem", // 56px
      "7xl": "5rem", // 80px
      "8xl": "6.25rem", // 100px
      "10xl": "9.375rem", // 150px
    },
    extend: {
      colors: {
        "black-russian": "#0b0d17",
        quartz: "#d0d6f9",
        white: {
          DEFAULT: "#fff",
          500: "rgba(255, 255, 255, 0.5)",
        },
      },
      fontFamily: {
        bellefair: ['"Bellefair"', "serif"],
        barlow: ['"Barlow"', "sans-serif"],
        "barlow-condensed": ['"Barlow Condensed"', "sans-serif"],
      },
      letterSpacing: {
        sm: "0.1678em",
        base: "0.1687em",
        "3xl": "0.1696em",
      },
      backgroundImage: {
        "home-mobile": "url('/public/assets/home/background-home-mobile.jpg')",
        "home-tablet": "url('/public/assets/home/background-home-tablet.jpg')",
        "home-desktop":
          "url('/public/assets/home/background-home-desktop.jpg')",
        "destination-mobile":
          "url('/public/assets/destination/background-destination-mobile.jpg')",
        "destination-tablet":
          "url('/public/assets/destination/background-destination-tablet.jpg')",
        "destination-desktop":
          "url('/public/assets/destination/background-destination-desktop.jpg')",
        "crew-mobile": "url('/public/assets/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('/public/assets/crew/background-crew-tablet.jpg')",
        "crew-desktop":
          "url('/public/assets/crew/background-crew-desktop.jpg')",
        "technology-mobile":
          "url('/public/assets/technology/background-technology-mobile.jpg')",
        "technology-tablet":
          "url('/public/assets/technology/background-technology-tablet.jpg')",
        "technology-desktop":
          "url('/public/assets/technology/background-technology-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
