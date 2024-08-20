// import 'react-date-range/dist/styles.css'
// import 'react-date-range/dist/theme/default.css'

import './globals.css'
import Header from '@/components/Header'

import ReactQueryProvider from '@/providers/ReactQueryProvider'
import NextThemeProvider from '@/providers/NextThemeProvider'
import { TWKEverett, inter, SFProText } from './fonts/fonts'

export const metadata = {
    title: 'YouTubeTop 20',
    description: 'YouTubeTop20',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${TWKEverett.variable} ${inter.variable} ${SFProText.variable} font-everett`}>
                <NextThemeProvider>
                    <ReactQueryProvider>
                        <Header />
                        {children}
                    </ReactQueryProvider>
                </NextThemeProvider>
            </body>
        </html>
    )
}
