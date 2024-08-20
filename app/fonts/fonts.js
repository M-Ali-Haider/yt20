import localFont from 'next/font/local'
import { Inter } from 'next/font/google'

export const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export const SFProText = localFont({
    src: [
        {
            path: './SFPRODISPLAYMEDIUM.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: './SFPRODISPLAYREGULAR.otf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-sfprotext',
})

export const TWKEverett = localFont({
    src: [
        {
            path: './TWKEverett-Light.otf',
            weight: '300',
            style: 'normal',
        },
        {
            path: './TWKEverett-Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './TWKEverett-Medium.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: './TWKEverett-Bold.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: './TWKEverett-Extrabold.otf',
            weight: '800',
        },
        {
            path: './TWKEverett-Black.otf',
            weight: '900',
            style: 'normal',
        },
    ],
    variable: '--font-everett',
})
