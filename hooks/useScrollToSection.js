import { setActiveLink } from '@/store/activeLink'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
const useScrollToSection = () => {
    const [pointerEvents, setPointerEvents] = useState('pointer-events-auto cursor-pointer')
    const dispatch = useDispatch()
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
    }, [])
    const scrollToSection = (id) => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.disable())
        const target = document.querySelector(id)
        if (target) {
            setPointerEvents('pointer-events-none cursor-wait')
            gsap.to(window, {
                scrollTo: { y: target, offsetY: 80 },
                ease: 'power2.inOut',
                onComplete: () => {
                    setPointerEvents('pointer-events-auto cursor-pointer')
                    ScrollTrigger.getAll().forEach((trigger) => trigger.enable())
                },
            })
        }
    }
    const handleOptionClick = (item) => {
        dispatch(setActiveLink(item.title))
        scrollToSection(item.id)
    }
    return { scrollToSection, pointerEvents, handleOptionClick }
}

export default useScrollToSection
