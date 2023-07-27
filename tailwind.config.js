/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "body-color": "#0a151f",
        primary: "#acd4f6",
        secondary: "#224b6da6",
        "nav-bg": "#224b6d",
        tertiary: "#f0f5fa",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #04060b40",
        contact: "5px 5px 5px #acd4f6",
      },
      screens: {
        xs: "370px",
        md: "930px",
        tablet: "771px",
      },
      fontFamily: {
        body: ["Nunito", "serif"],
        title: ["Bebas Neue", "cursive"],
        greeting: ["Merriweather", "serif"],
      },
      lineHeight: {
        0: "0",
      },
    },
  },
  plugins: [],
};
