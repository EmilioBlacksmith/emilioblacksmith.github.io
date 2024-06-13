/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			black: "#000000",
			white: "#FFFFFF",
			gray: "#D3D3D3",
			dark_gray: "#4D535E",
		},
		fontFamily: {
			sans: ["Hack"],
		},
		extend: {},
	},
	plugins: [],
};
