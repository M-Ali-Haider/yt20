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
            {isSidebarOpen && (
                <div
                    onClick={() => dispatch(closeSidebar())}
                    className="fixed top-0 left-0 right-0 bottom-0 flex z-[79] bg-black opacity-50 transition-all ease-custom-ease duration-500"
                />
            )}
            <div
                className={`${
                    isSidebarOpen ? `right-0` : `-right-[320px]`
                } dark:bg-[#19191A] bg-white filterBarDim:hidden 
                h-screen w-[320px] fixed top-0
                transition-all ease-custom-ease duration-500 z-[80]`}
            >
                <div className="px-[10px] py-6 flex justify-end items-center">
                    <div onClick={() => dispatch(closeSidebar())} className="h-[30px] w-8 cursor-pointer">
                        <CrossSVG className={'dark:fill-white fill-[#0A0A0A]'} />
                    </div>
                </div>
                {isHomepage && (
                    <div className="pl-[30px] flex flex-col gap-6 text-2xl mt-[40px]">
                        {options.map((item, index) => (
                            <div key={index} onClick={() => handleSidebarLink(item.id)} className="cursor-pointer">
                                {item.title}
                            </div>
                        ))}
                    </div>
                )}
                <div className="pl-[30px] mt-6 w-min">
                    <ThemeToggle />
                </div>
            </div>
        </>
    )
}

export default Sidebar
