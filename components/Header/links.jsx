'use client'
import { headerLinks } from '@/utils/headerLinks'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const HeaderLinks = () => {
    const pathName = usePathname()
    return (
        <>
            <div className="hidden md:flex items-center justify-center md:gap-[16px] lg:gap-10 flex-1">
                {headerLinks.map((item, index) => (
                    <Link key={index} href={item.href} className="flex items-center gap-2 h-[22px]">
                        <item.svg
                            className={`${
                                item.href === pathName ? 'fill-[#E72825]' : 'fill-[#19191A] dark:fill-[#ffffff]'
                            } transition-all ease-custom-ease duration-500`}
                        />
                        <span
                            className={`font-medium md:text-sm ${
                                item.href === pathName ? 'text-[#E72825]' : 'text-[#19191A] dark:text-[#ffffff]'
                            } transition-all ease-custom-ease duration-500`}
                        >
                            {item.title}
                        </span>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default HeaderLinks
