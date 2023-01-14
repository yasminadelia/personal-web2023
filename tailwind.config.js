/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      theme1: "#FFFCF3",
      theme2: "#FFF7B4",
      theme3: "#F6D79C",
      theme4: "#FFCD6F",
    },
    fontFamily: {
      old: ["Old Standard TT", "serif"],
      sourcecode: ["Source Code Pro", "monospace"],
      hind: ["Hind Guntur", "sans-serif"],
    },
  },
  plugins: [],
};
