'use client'
import { useDispatch, useSelector } from 'react-redux'
// import BurgerMenuSVG from '../../assets/Header/burgerMenu'
import { handleSidebar, openSidebar } from '@/store/sidebar'

const BurgerMenu = () => {
    const dispatch = useDispatch()
    const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen)
    return (
        <>
            <div
                onClick={() => dispatch(handleSidebar())}
                className="flex filterBarDim:hidden flex-1 justify-end items-center"
            >
                <div className="flex items-center justify-center cursor-pointer">
                    <div className="w-8 h-[30px] absolute right-4">
                        <div
                            className={`w-8 h-[30px] flex flex-col gap-[6px] p-[6px] relative ${
                                isSidebarOpen && 'items-center justify-center'
                            }`}
                        >
                            <div
                                className={`h-[2px] bg-black dark:bg-white transform transition-transform duration-300 ${
                                    isSidebarOpen ? 'absolute rotate-45 w-[24px] rounded-lg' : 'w-[20px]'
                                }`}
                            />
                            <div
                                className={`h-[2px] w-[20px] bg-black dark:bg-white transition-opacity duration-300 ${
                                    isSidebarOpen && 'opacity-0'
                                }`}
                            />
                            <div
                                className={`h-[2px] bg-black dark:bg-white transform transition-transform duration-300 ${
                                    isSidebarOpen ? 'absolute -rotate-45 w-[24px] rounded-lg' : 'w-[20px]'
                                }`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BurgerMenu
