/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "app-main": "hsl(221, 12%, 32%)",
      "app-secondary": "hsl(224, 12%, 19%)",
      "app-secondary-dark": "hsl(220, 11%, 11%)",
      "app-secondary-light": "hsl(214, 9%, 55%)",
      white: "hsl(207, 13%, 83%)",
      black: "hsl(210, 20%, 2%)",
    },
    fontFamily: {
      sans: ["Hack"],
    },
    extend: {},
  },
  plugins: [],
};
