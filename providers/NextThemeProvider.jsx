'use client'
import { ThemeProvider } from 'next-themes'

const NextThemeProvider = ({ children }) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
    )
}

export default NextThemeProvider
