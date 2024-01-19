import { useState, useEffect } from 'react'

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window
    return {
        width,
        height,
    }
}

export default function useWindowDimensions() {
    const isClient = typeof window === 'object' // Check if window is defined

    const [windowDimensions, setWindowDimensions] = useState(isClient ? getWindowDimensions() : { width: 0, height: 0 })

    useEffect(() => {
        if (isClient) {
            function handleResize() {
                setWindowDimensions(getWindowDimensions())
            }

            window.addEventListener('resize', handleResize)

            return () => {
                window.removeEventListener('resize', handleResize)
            }
        }
    }, [isClient])

    return windowDimensions
}
