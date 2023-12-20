import { nextui } from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        danger: '#961A54',
        olive:'#895c40',
        rosa: '#e6bab3',
        beige: '#efccb6'
        // foreground: '#6366f1',
      },
      fontFamily: {
        special: ['Sacramento', 'cursive'],
        headlines: ['Paytone One', 'sans-serif'],
        paragraph: ['Amatic SC', 'sans-serif'],
        paragraph1: ['Comfortaa', 'sans-serif'],

      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

