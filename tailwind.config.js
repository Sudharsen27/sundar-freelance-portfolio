/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#030712",
        darkBlue: "#0f172a",
      },
      boxShadow: {
        glass: "0 10px 30px rgba(15, 23, 42, 0.45)",
      },
    },
  },
  plugins: [],
};
