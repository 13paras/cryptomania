import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackBackground: "#000000",
        paraText: "#99999b",
        heading: "#dfdfd7",
        cardBackground: "#252529",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
