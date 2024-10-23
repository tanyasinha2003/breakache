module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-gray': 'var(--brand-dark-gray)', // Using CSS variable
        'red': 'var(--brand-red)',             // Using CSS variable
        'light-gray': 'var(--brand-light-gray)' // Using CSS variable
      },
      fontFamily: {
        livvic: ['Livvic', 'sans-serif'], // Add Livvic font
      },
    },
  },
  plugins: [],
};