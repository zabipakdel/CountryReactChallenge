/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    // screens: {
    //   md: "375px",
    //   xl: "1440px",
    // },
    colors: {
      // primary: "#fff",
      // darkbgelement: "#003A70",
      // verydarkbg: "#202C37",
      // darkmodetext: "#111517",
      // lightmodeinput: "#858585",
      // bglightmode: "#FAFAFA",
      // whitebg: "#FFFFFF",

      DarkElements: "hsl(209, 23%, 22%)",
      DarkBackground: "hsl(207, 26%, 17%)",
      DarkText: "hsl(200, 15%, 8%)",
      DarkGrayInput: "hsl(0, 0%, 52%)",
      LightBackground: "hsl(0, 0%, 98%)",
      White: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
