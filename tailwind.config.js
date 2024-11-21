/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#1a222c",
        "light": "#f1f1f1",
        "textLight": "rgb(58 58 58)",
        "textDark": "rgb(234 234 234)",
        "bgNotiColor": "rgb(235 241 250)"
      },
    },
  },
  plugins: [],
  darkMode: "class"
};
