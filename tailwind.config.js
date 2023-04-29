/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bodybg: "#ecf0f1",
        darkBg: "#151221",
        darkColor: "#222222",
        primary: "#5F30F8",
      },
      boxShadow: {
        smallShadow: "0px 2px 10px rgba(58, 53, 65, 0.1)",
      },
    },
  },
  plugins: [],
};
