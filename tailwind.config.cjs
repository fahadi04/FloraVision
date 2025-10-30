module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // for production
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // colors: {
      //   forest: "#1B2316",
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
