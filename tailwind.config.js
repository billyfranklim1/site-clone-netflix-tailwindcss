module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'netflix-border': '#222',
        'netflix': '#e50914',
      },
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,1) 100%)",
      },
    },
  },
  plugins: [],
}
