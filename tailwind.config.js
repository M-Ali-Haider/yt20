/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './assets/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        transitionTimingFunction: {
            'custom-ease': 'cubic-bezier(0.76,0,0.24,1)',
        },
        keyframes: {
            shimmerY: {
                '100%': { transform: 'translateY(100%)' },
            },
            shimmerX: {
                '100%': { transform: 'translateX(100%)' },
            },
        },
        extend: {
            fontFamily: {
                everett: ['var(--font-everett)'],
                inter: ['var(--font-inter)'],
                sfpro: ['var(--font-sfprotext)'],
            },
            colors: {
                dark: '#0A0A0A',
                medium: '#293245',
            },
            screens: {
                xs: '550px',
                filterbox: '947px',
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
                gridBig: '1176px',
                xl: '1280px',
                '2xl': '1563px',
            },
            backgroundImage: {
                swiperButton:
                    'linear-gradient(0deg, #E72825, #E72825), linear-gradient(90deg, #E72825 0%, #F37F1F 100%)',
                darkVidCard: 'linear-gradient(180deg, rgba(246, 246, 246, 0.08) 18.75%, rgba(246, 246, 246, 0) 100%)',
                darkVidDetail: 'linear-gradient(180deg, rgba(246, 246, 246, 0.08) 18.75%, rgba(246, 246, 246, 0) 100%)',
                cloudSvg: 'linear-gradient(90deg, #E72825 0%, #F37F1F 100%)',
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}
