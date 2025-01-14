/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        deepTeal: '#185C65',
      },
    },
  },
  plugins: [require("daisyui")],
};
