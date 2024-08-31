'use client'
import CrossSVG from '@/assets/Sidebar/cross'
import { closeSidebar } from '@/store/sidebar'
import { handleFilterOption, options } from '@/utils/filterbar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ThemeToggle from '../Header/themeToggle'

const Sidebar = ({ isHomepage }) => {
    const dispatch = useDispatch()
    const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen)

    useEffect(() => {
        if (isSidebarOpen) {
            document.body.classList.add('no-scroll')
        } else {
            document.body.classList.remove('no-scroll')
        }
        return () => {
            document.body.classList.remove('no-scroll')
        }
    }, [isSidebarOpen])

    const handleSidebarLink = (id) => {
        dispatch(closeSidebar())
        handleFilterOption(id)
    }

    return (
        <>
            <div
                onClick={() => dispatch(closeSidebar())}
                className={`fixed top-0 left-0 right-0 bottom-0 flex z-[79] bg-black ${
                    isSidebarOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }  transition-all ease-custom-ease duration-500`}
            />
            <div
                className={`${
                    isSidebarOpen ? `right-0` : `-right-[320px]`
                } dark:bg-[#19191A] bg-white filterBarDim:hidden 
                h-screen w-[320px] fixed top-0
                transition-[right] ease-custom-ease duration-500 z-[80]`}
            >
                <div className="px-[10px] py-6 flex justify-end items-center">
                    <div onClick={() => dispatch(closeSidebar())} className="h-[30px] w-8 cursor-pointer">
                        <CrossSVG className={'dark:fill-white fill-[#0A0A0A]'} />
                    </div>
                </div>
                {isHomepage && (
                    <div className="pl-8 flex flex-col gap-6 mt-[40px]">
                        {options.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleSidebarLink(item.id)}
                                className="cursor-pointer flex items-center gap-3 h-10"
                            >
                                <div className="h-[25px] w-[25px] flex items-center justify-center">
                                    <item.SvgComp />
                                </div>
                                <div className="text-lg">{item.altTitle}</div>
                            </div>
                        ))}
                    </div>
                )}
                <div className="px-8 w-full pt-6">
                    <div className="h-[1px] w-full dark:bg-white bg-[#19191A]" />
                </div>
                <div className="pl-8 mt-6 w-min">
                    <ThemeToggle />
                </div>
            </div>
        </>
    )
}

export default Sidebar
