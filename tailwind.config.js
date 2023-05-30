/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      blur: {
        '4xl': '67.957px',
      }
    },
    colors: {
      "white": 'hsl(0, 0%, 100%)',
      "light-violet": 'hsl(270, 3%, 87%)',
      "dark-violet": 'hsl(279, 6%, 55%)',
      "black-violet": 'hsl(278, 68%, 11%)',
      "inpur-error": 'hsl(0, 100%, 66%)',
      "gradient1": 'hsl(249, 99%, 64%)',
      "gradient2": 'hsl(278, 94%, 30%)',
      "blue": 'hsla(210, 100%, 64%, 1)',
      "orange": 'hsla(19, 100%, 64%, 1)',
      "violet": 'hsla(287, 100%, 61%, 1)'
    }
  },
  plugins: [],
}