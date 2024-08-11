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
        primary: "#038C39", //color on bgMain
        secondary: "#FFFFFF", //color on dark bg
        button: "#038C39", //buttons
        bgMain: "#D6FFE6", //light green
        bg1: "#060725", //darkblue
        bg2: "#182128", //grey 30%
        bg3: "#323A47", //grey 60%
        bg4: "#EDF1F4", //white 80%
      },
      textColor: {
        primary: "#038C39", //text on bgMain
        bg1: "#060725", //darkblue - text on light bg
        secondary: "#FFFFFF", //text on dark bg
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
      fontFamily: {},
    },
  },
  plugins: [],
  safelist: ["bg-secondary"],
  important: true,
};
