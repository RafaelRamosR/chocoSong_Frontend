module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        black:{
          100:'#080707',
          200:'#030202'
        }
      }
    },
    fontFamily:{
      poppins:['poppins'],
    },
  },
  plugins: [],
}
