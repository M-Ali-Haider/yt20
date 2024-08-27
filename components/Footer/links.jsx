'use client'
import { handleFilterOption, options } from '@/utils/filterbar'
const FooterLinks = () => {
    return (
        <div
            className="grid grid-cols-1 xs:grid-cols-2
            md:flex md:items-center md:justify-between gap-4"
        >
            {options.map((item, index) => (
                <div onClick={() => handleFilterOption(item.id)} className="cursor-pointer select-none" key={index}>
                    {item.title}
                </div>
            ))}
        </div>
    )
}

export default FooterLinks
