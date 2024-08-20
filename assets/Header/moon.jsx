'use client'

import { useTheme } from 'next-themes'

const MoonSVG = (props) => {
    const { resolvedTheme } = useTheme()

    return (
        <>
            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                    d="M1.35331 8.27997C1.59331 11.7133 4.50664 14.5066 7.99331 14.66C10.4533 14.7666 12.6533 13.62 13.9733 11.8133C14.52 11.0733 14.2266 10.58 13.3133 10.7466C12.8666 10.8266 12.4066 10.86 11.9266 10.84C8.66664 10.7066 5.99998 7.97997 5.98664 4.75997C5.97998 3.89331 6.15998 3.07331 6.48664 2.32664C6.84664 1.49997 6.41331 1.10664 5.57998 1.45997C2.93998 2.57331 1.13331 5.23331 1.35331 8.27997Z"
                    stroke={resolvedTheme === 'light' ? '#000000' : '#ffffff'}
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </>
    )
}
export default MoonSVG