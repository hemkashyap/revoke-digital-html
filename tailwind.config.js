/** @type {import('tailwindcss').Config} */
//  ./tailwindcss -i ./css/tailwind-input.css -o ./css/style.css --watch
// npx tailwindcss -i ./css/tailwind-input.css -o ./css/style.css --watch
module.exports = {
  content: ["./*.{html,php,twig}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "20px",
    },
    boxShadow: {
		'serviceSec': '0px 4px 44px 0px rgba(19, 71, 104, 0.08)',
		'testiBox': '0px 4px 44px 0px rgba(19, 71, 104, 0.08)',
    },
    backgroundImage: {
      'heroBg':"linear-gradient(45deg, #d9fce2, #92f4a7)",
      'serviceSec':"linear-gradient(0deg, rgb(67 193 112 / 53%) 0%, rgba(29, 161, 243, 0.00) 100%)",
	  'mobileViewBannerBg': "linear-gradient(0deg, rgb(252 252 252) 0%, rgba(71, 101, 103, 0.00) 100%)",
    },
    colors: {
		'primary': "#43c170",
		'secondary': "#00AB83",
		'white': "#ffffff",
		'black': "#000000",
		'side-bar-bg': "#f8f8f8",
		'backgroundPrimaryLight': "#fcfcfc",
		'backgroundPrimaryDark': "#1a1a1a",
    },
    fontFamily: {
	montserrat: ["Montserrat"],
	nexaBold: ["NexaBold"],
    },
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
};
