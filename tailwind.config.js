module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1a1a1a',
        'secondary-dark': '#2d2d2d',
        'accent-light': '#f3e8ff',
        'rating-gold': '#ffd700'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}