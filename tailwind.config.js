/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {},
    extend: {
      colors: {},
    },
  },
  /* eslint-disable import/no-extraneous-dependencies, global-require */
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['synthwave', 'lemonade'],
  },
};
