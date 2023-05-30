const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: 
    [
      "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js"
    ],
  theme: {
    extend: {
			fontFamily: {
				sans: ['Nunito', ...defaultTheme.fontFamily.sans],
		},
		},
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin')
  ]
};
