'use client'

import { useEffect, useRef } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'

const GoToTop = () => {
    const toTopButton = useRef(null)

    const handleToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(toTopButton.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: '50px top',
                end: 'top top',
                onLeave: () => {
                    gsap.to(toTopButton.current, {
                        scale: 1,
                        duration: 0.5,
                        ease: 'poweri.out',
                    })
                },
                onEnterBack: () => {
                    gsap.to(toTopButton.current, {
                        scale: 0,
                        duration: 0.5,
                        ease: 'poweri.out',
                    })
                },
            },
        })
    }, [])

    return (
        <button
            ref={toTopButton}
            onClick={() => handleToTop()}
            className="
                flex fixed
                bg-swiperButton items-center justify-center
                w-9 h-9 md:w-12 md:h-12 rounded-md 
                bottom-[6px] right-[6px] md:bottom-6 md:right-6
                scale-0 z-50"
        >
            <UpArrowSVG />
        </button>
    )
}

export default GoToTop

const UpArrowSVG = (props) => (
    <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        className="w-[18px] h-[18px] md:w-8 md:h-8"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.33203 15.9987L7.21203 17.8787L14.6654 10.4387V26.6654H17.332V10.4387L24.772 17.892L26.6654 15.9987L15.9987 5.33203L5.33203 15.9987Z"
            fill="white"
        />
    </svg>
)
