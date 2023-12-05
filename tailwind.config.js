/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  themes: ["light", "dark"],
  theme: {
    extend: {
      fontFamily: {
        fira: "'Fira Sans', sans-serif",
      },
      colors: {
        primary: "#ff4605",
      },
    },
  },
  plugins: [require("daisyui")],
};
