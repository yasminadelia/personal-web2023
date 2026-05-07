/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        blink: 'blink 1s step-end infinite',
      },
    },
    colors: {
      theme1: "#FFFCF3",
      theme2: "#FFF7B4",
      theme3: "#F6D79C",
      theme4: "#FFCD6F",
      theme5: "#D6910F",
      theme6: "#B87C0D",
      theme7: "#9E6A0B",
      theme8: "#855809",
      theme9: "#6B4707",
      theme10: "#523505",
      transparent: "transparent",
      black: "black",
      white: "white",
    },
    fontFamily: {
      old: ["Old Standard TT", "serif"],
      sourcecode: ["Source Code Pro", "monospace"],
      hind: ["Hind Guntur", "sans-serif"],
    },
  },
  plugins: [],
};
