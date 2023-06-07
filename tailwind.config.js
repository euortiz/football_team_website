module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fjalla': ['Fjalla One', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      },
      colors: {
        customColor: '#9B8542',
        verde: '#00532E',
        dwhite: '#E9E9E9',
        bege: '#BCBDBD'
      },
    },
  },
  plugins: [],
};
