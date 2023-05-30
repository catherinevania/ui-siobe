const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: 
    [
      "./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}",
      // "./node_modules/flowbite/**/*.js"
    ],
  theme: {
    extend: {
			fontFamily: {
				sans: ['Nunito', ...defaultTheme.fontFamily.sans],
		},
		},
    
    plugins: [
      require('flowbite/plugin')
  ]
  }
>>>>>>> ff0d419ff7e828e89b1134ce75f448ce6dff6956
};
