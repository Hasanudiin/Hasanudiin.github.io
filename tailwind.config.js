/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        'bg-project': '#1e293b',
      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}
