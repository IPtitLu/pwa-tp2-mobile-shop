/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    theme: {
        extend: {},
        colors: {
            orange: "#f26b27",
            white: "#ffffff",
            "card-gray": "#f8f8f8",
        },
        boxShadow: {
            custom: "0 50px 25px -24px rgb(0 0 0 / 0.3)",
        },
    },
    plugins: [],
};
