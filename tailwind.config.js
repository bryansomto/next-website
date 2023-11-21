const { Pacifico } = require("next/font/google");

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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#03DAC6",
        primaryVariant: "#B8F397",
        secondary: "#BB86FC",
        secondaryVariant: "#3700B3",
        tertiary: "#FC6625",
        error: "#CF6679",
        surfaceBG: "#121212",
        surfaceBright: "#F8FAF0",
        surfaceMain: "#EDEFE5",
        surfaceHigh: "#E7E9DF",
        surfaceHighest: "#E1E3DA",
      },
      textColor: {
        onPrimaryVariant: "#072100",
        onTertiaryVariant: "#002020",
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
  safelist: ["bg-secondaryVariant"],
  important: true,
};
