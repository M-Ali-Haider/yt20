/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                dark: '#0A0A0A',
                medium: '#293245',
            },
            screens: {
                mobile: '320px',
                mobileM: '375px',
                mobileL: '425px',
                tablet: '768px',
                laptop: '1024px',
                laptopL: '1440px',
                '4k': '1920px',
                sm: '640px',
                md: '768px',
                middle: '900px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
}
