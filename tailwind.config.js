/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {},
    extend: {
      colors: {},
    },
  },
  /* eslint-disable-next-line */
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['synthwave', 'lemonade'],
  },
};
