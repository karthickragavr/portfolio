/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ['Outfit', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
            colors: {
                primary: {
                    DEFAULT: '#0B0F19',
                    light: '#111827',
                },
                secondary: {
                    DEFAULT: '#030712',
                    surface: 'rgba(255, 255, 255, 0.03)',
                },
                accent: {
                    blue: '#38BDF8',
                    purple: '#A855F7',
                }
            }
        },
    },
    plugins: [],
}
