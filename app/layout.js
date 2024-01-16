'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

import ThemeContextProvider from '@/components/Context/ThemeContext'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { TWKEverett } from './fonts/TWKEverett'
import './globals.css'
import TopBar from '@/components/TopBar'
const metadata = {
    title: 'YouTubeTop 20',
    description: 'YouTubeTop20',
}

const queryClientOptions = {
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
}

export default function RootLayout({ children }) {
    const [client] = useState(new QueryClient(queryClientOptions))

    return (
        <html lang="en">
            <body className={`${TWKEverett.className}  dark:bg-[#0A0A0A] bg-[#EDEEF0] duration-1000 transition-all `}>
                <QueryClientProvider client={client}>
                    <ThemeContextProvider>
                        <TopBar />
                        {children}
                    </ThemeContextProvider>
                </QueryClientProvider>
            </body>
        </html>
    )
}
