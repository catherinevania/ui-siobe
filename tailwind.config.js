const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: 
    [
      "./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}",
      "./node_modules/flowbite/**/*.js"
    ],
  theme: {
    extend: {
			fontFamily: {
				sans: ['Nunito', ...defaultTheme.fontFamily.sans],
		},
		},
  }
};
