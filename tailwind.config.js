/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            black: "#000000",
            white: "#FFFFFF",
            light_gray: "#D3D3D3",
            gray: "#8E8E8E",
            dark_gray: "#4D535E",
        },
        fontFamily: {
            sans: ["Hack"],
        },
        extend: {
            boxShadow: {
                "3xl": "0px 0px 15px 5px rgba(0, 0, 0, 0.25)",
            },
        },
    },
    plugins: [],
}
