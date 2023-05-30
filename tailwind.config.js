const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
=======
  content: 
    [
      "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js"
    ],
>>>>>>> 8fafc0970eb2c074b905727913dfe51bfa0d5fd5
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
