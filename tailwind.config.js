module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        sunset: 'rgb(248, 91, 44)', // Sunset Red-Orange
        midnight: 'rgb(21, 28, 41)', // Midnight Blue-Black
        gold: 'rgb(249, 200, 83)', // Warm Yellow-Gold
        cosmic: 'rgb(88, 109, 161)' // Cosmic Lavender-Blue
      }
    }
  },
  plugins: []
}
