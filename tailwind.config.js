// /** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#8BC6EC",
                secondary: "#9599E2",
                textColor: "#666666",
                colorBtn: "#4B7BE5",
                warningColor: "#F04248",
                lineColor: "#D7D7D7",
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "2rem",
                },
            },
        },
    },
    plugins: [],
};
