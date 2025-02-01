/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          "blue-800": "#1e3a8a",
          "gray-900": "#111827",
        },
      },
    },
    
    plugins: [],
  };
  