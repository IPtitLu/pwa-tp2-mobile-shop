/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
        colors: {
            orange: "#f26b27",
            white: "#ffffff",
            "card-gray": "#f8f8f8",
        },
        boxShadow: {
            custom: "0px -16px 50px -5px rgba(0,0,0,0.1)",
        },
        borderRadius: {
            custom: "15px",
        },
    },
    plugins: [],
};
