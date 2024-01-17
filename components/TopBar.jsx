'use client'
import CloseIcon from '@/assets/icons/CloseIcon'
import HamburgerIcon from '@/assets/icons/HamburgerIcon'
import HomeIcon from '@/assets/icons/HomeIcon'
import YoutubeIcon from '@/assets/icons/YoutubeIcon'
import { TopBarList } from '@/utils/constants'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from './Context/ThemeContext'
import ToggleBtn from './shared/ToggleBtn'

const TopBar = () => {
    const { theme, useTheme } = useContext(ThemeContext)
    const [open, setOpen] = useState(false)
    const handleMenu = () => {
        setOpen((prev) => !prev)
    }
    useEffect(() => {
        if (theme === 'light') {
            document.documentElement.classList.add('dark')
        }
        if (theme === 'dark') {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    return (
        <div className="MainDiv">
            <div
                className={`flex justify-between w-full z-50 mobile:px-2 mobile:py-3 md:px-4 md:py-4 lg:px-6 lg:py-5 xl:px-5 xl:py-5 2xl:py-5 2xl:px-16 items-center dark:bg-[#19191A] bg-white dark:text-white text-black duration-1000 transition-all fixed`}
            >
                <a href="/">
                    <YoutubeIcon className="mobile:w-[151px] mobile:h-[26px] md:w-[200px] md:h-[30px] lg:w-[250px] lg:h-[40px] xl:w-[250px] 2xl:w-[230px]" />
                </a>
                <div>
                    <div className="flex md:gap-5 xl:gap-7 2xl:gap-8 mobile:hidden md:flex lg:mr-20">
                        <div className="flex group hover:text-[#E72825] hover:cursor-pointer hover:opacity-80 ">
                            <Link
                                href={`/`}
                                className={
                                    'flex items-center items md:gap-[.3rem] lg:gap-2 text-base font-medium transition-all 2xl:-pl-1'
                                }
                            >
                                <p className="md:w-6 lg:w-7 xl:w-6 2xl:w-6">
                                    <HomeIcon />
                                </p>
                                <p className="md:text-sm lg:text-base 2xl:text-lg">Home</p>
                            </Link>
                        </div>
                        {/* <div className="flex group hover:opacity-80 cursor-not-allowed">
                            <div
                                // href={`/`}
                                className={
                                    'flex items-center items md:gap-[.3rem] lg:gap-2 text-base font-medium transition-all 2xl:-pl-1'
                                }
                            >
                                <p className="md:w-6 lg:w-7 xl:w-6 2xl:w-6">
                                    <VideosIcon />
                                </p>
                                <p className="md:text-sm lg:text-base 2xl:text-lg">Videos</p>
                            </div>
                        </div>
                        <div className="flex group hover:opacity-80 cursor-not-allowed">
                            <div
                                // href={`/`}
                                className={
                                    'flex items-center items md:gap-[.3rem] lg:gap-2 text-base font-medium transition-all 2xl:-pl-1'
                                }
                            >
                                <p className="md:w-6 lg:w-7 xl:w-6 2xl:w-6">
                                    <ShortsIcon />
                                </p>
                                <p className="md:text-sm lg:text-base 2xl:text-lg">Shorts</p>
                            </div>
                        </div> */}
                    </div>
                </div>
                <ToggleBtn />
                <div className="-mr-2 flex md:hidden">
                    <button
                        type="button"
                        onClick={handleMenu}
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400"
                    >
                        {open == true ? (
                            <CloseIcon className="dark:text-white text-black mobile:w-8 mobile:h-7" />
                        ) : (
                            <HamburgerIcon className="dark:text-white text-black mobile:w-8 mobile:h-7" />
                        )}
                    </button>
                </div>
            </div>
            {open && (
                <>
                    <div
                        className={`block right-0 left-0 top-16 z-10 md:hidden dark:bg-[#19191A] bg-white dark:text-white text-black w-full py-2 px-8 fixed duration-1000 transition-all `}
                    >
                        {TopBarList.map((item, index) => (
                            <div key={index} className="flex items-center justify-start py-2 ">
                                <Link href={item.name.toLowerCase()} passHref>
                                    <div className="flex items-center justify-center gap-x-2 hover:text-red-600 hover:scale-110">
                                        <p className="mobile:w-6">{item.icon}</p>
                                        <p
                                            className={
                                                index === TopBarList.length - 3
                                                    ? 'mobile:text-[16px] font-[410] text-[#E72825]'
                                                    : 'mobile:text-[16px] font-[410] '
                                            }
                                        >
                                            {item.name}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                        <div>
                            <ToggleBtn open={open} />
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default TopBar
