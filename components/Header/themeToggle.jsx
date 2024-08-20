'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import SunSVG from '../../assets/Header/sun'
import MoonSVG from '../../assets/Header/moon'
import ThemeToggleSkeleton from './themeToggleSkeleton'

const ThemeToggle = () => {
    const [isMounted, setIsMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()
    useEffect(() => {
        setIsMounted(true)
    }, [])
    if (!isMounted) {
        return <ThemeToggleSkeleton />
    }
    return (
        <>
            <div
                className="h-[46px] rounded-full bg-[#EDEEF0] dark:bg-[#FFFFFF1A]
             dark:border dark:border-solid dark:border-[#FFFFFF4D] 
             flex items-center px-[6px] py-[5px]"
            >
                <ToggleButton text={'light'} setTheme={setTheme} resolvedTheme={resolvedTheme} SvgComp={SunSVG} />
                <ToggleButton text={'dark'} setTheme={setTheme} resolvedTheme={resolvedTheme} SvgComp={MoonSVG} />
            </div>
        </>
    )
}

function ToggleButton({ text, setTheme, SvgComp, resolvedTheme }) {
    return (
        <button
            onClick={() => setTheme(text)}
            className={`px-4 py-[9.5px] flex items-center justify-center gap-[6px] rounded-full text-black dark:text-white ${
                resolvedTheme === text && `bg-gradient-to-r from-[#E72825] to-[#F37F1F]`
            }`}
        >
            <SvgComp />
            <span
                className={`font-medium text-sm leading-[17.09px] capitalize ${resolvedTheme === text && 'text-white'}`}
            >
                {text}
            </span>
        </button>
    )
}

export default ThemeToggle
