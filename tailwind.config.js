/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "vanilla-cream": "#fff3e3",
        body: "rgb(9, 31, 17)",
        "anti-flash-white": "#eaf3f5",
        isabelline: "#f2f4eb",
      },
      backgroundImage: {
        "hero-mobile": "url(/hero_mobile.webp)",
        "hero-table": "url(/hero_table.webp)",
        "hero-desktop": "url(/hero_desktop.webp)",
      },
    },
    fontFamily: {
      custom: ["Helvetica", "sans-serif"],
    },
  },
  safelist: [
    {
      pattern: /(bg|text|border)-(vanilla-cream|anti-flash-white|isabelline)/,
    },
  ],
  plugins: [],
};
