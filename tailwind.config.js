module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            inter: ["Inter", "sans-serif"],
        },
        extend: {
            colors: {
                primary: "#242f40",
                secondary: "#009ffd",
                "gray-primary": "#e5e5e5",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/forms")],
};
