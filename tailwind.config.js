/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                corange: '#FF7D1A',
                plorange: '#FFEDE0',
                dgblue: '#68707D'
            },
            fontFamily: {
                tutor: ['Kumbh Sans', 'sans-serif'],
            }
        },
    },
    plugins: [],
}