/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
      'nuvem' : "linear-gradient(to right, #011633, #142c50, #27436e, #3b5c8e, #4e77af)"
      },


    },
  },
  plugins: [],
}

