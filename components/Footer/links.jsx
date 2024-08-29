'use client'
import styles from '@/components/style.module.css'
import useScrollToSection from '@/hooks/useScrollToSection'
import { options } from '@/utils/filterbar'
const FooterLinks = () => {
    const { handleOptionClick, pointerEvents } = useScrollToSection()
    return (
        <div
            className="grid grid-cols-1 xs:grid-cols-2
            md:flex md:items-center md:justify-between gap-4"
        >
            {options.map((item, index) => (
                <div
                    onClick={() => handleOptionClick(item)}
                    className={`${pointerEvents} select-none ${styles.gradientText}`}
                    key={index}
                >
                    {item.title}
                </div>
            ))}
        </div>
    )
}

export default FooterLinks
