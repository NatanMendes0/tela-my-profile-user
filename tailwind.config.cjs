/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#756CFF",
        terciary: "#4F46E5",
        button: "#5A189A",
        complement: "#9D4EDD",
        sidebarActive: "#E0AAFF",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
