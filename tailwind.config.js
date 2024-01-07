/** @type {import('tailwindcss').Config} */
//  ./tailwindcss -i src/tailwind-input.css -o dist/output.css --watch
// npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
module.exports = {
  content:  [
    "./*.{html,php,twig}",
  ],
  theme: {
    extend: {},
  },
  rippleui: {
		themes: [
			{
				themeName: "light",
				colorScheme: "light",
				colors: {
					primary: "#43c170",
					secondary: "#00AB83",
					backgroundPrimary: "#fcfcfc",
				},
			},
			{
				themeName: "dark",
				colorScheme: "dark",
				colors: {
					primary: "#43c170",
					secondary: "#00AB83",
					backgroundPrimary: "#1a1a1a",
				},
			},
		],
	},
  plugins: [require("rippleui")],
  
}

