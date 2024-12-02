const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class', // Enables dark mode
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', // Indigo for primary buttons
        darkBg: '#1E293B', // Dark background
        lightBg: '#F8FAFC', // Light background
        accent: '#D946EF', // Accent color for highlights
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
