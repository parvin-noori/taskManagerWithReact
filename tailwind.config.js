/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#213357",
      },
      spacing:{
        'initial':'initial'
      }
    },
  },
  plugins: [],
};
