module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F193D', // Warna biru gelap
        secondary: '#0F193D', // biru tua
        accent: '#F5B617', // aksen kuning
      },
    },
  },
  // plugins: [
  //   require('@tailwindcss/typography'), // Plugin untuk konten edukasi
  //   require('@tailwindcss/forms'), // Plugin untuk form elearning
  // ],
}