const { Pacifico } = require("next/font/google");
const { buttons } = require("./lib/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        homeBg: "url('../components/assets/img/homeBG.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        forest: "#4CBB17", //forest green
        kelly: "#4CBB17", //kelly green
        snow: "#FFFFFA", //white - for background
        onyx: "#050206", //black shade - text & bg
        jet: "#040404", //black shade - text & bg
      },
      width: {
        215: "215px",
        430: "430px",
      },
      height: {
        180: "180px",
        240: "240px",
        300: "300px",
        360: "360px",
      },
      fontFamily: {
        Exo: ["Exo", "sans-serif"],
        Cedarville: ["Cedarville Cursive", "cursive"],
      },
      fontWeight: {
        thin: "100",
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        "extra-bold": "800",
        black: "900",
      },
    },
  },
  plugins: [],
  safelist: ["bg-secondary"],
  important: true,
};
