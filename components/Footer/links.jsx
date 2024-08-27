'use client'
import { handleFilterOption, options } from '@/utils/filterbar'
const FooterLinks = () => {
    return (
        <div className="flex flex-col sm:flex-row flex-wrap sm:items-center justify-between gap-4">
            {options.map((item, index) => (
                <div onClick={() => handleFilterOption(item.id)} className="cursor-pointer select-none" key={index}>
                    {item.title}
                </div>
            ))}
        </div>
    )
}

export default FooterLinks
