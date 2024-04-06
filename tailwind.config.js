/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        newsreader: ["Newsreader", "serif"],
        figtree: ["Figtree", "sans-serif"],
      },
    },
  },
  plugins: [],
};
