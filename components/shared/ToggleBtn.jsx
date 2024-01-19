'use client'
import DarkThemeIcon from '@/assets/icons/DarkThemeIcon'
import LightThemeIcon from '@/assets/icons/LightThemeIcon'
import { Switch } from '@headlessui/react'
import { memo, useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

const ToggleBtn = ({ open = false }) => {
    const { theme, setTheme } = useContext(ThemeContext)

    const handleCheckboxChange = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (
        <div className={`relative md:flex ${open ? 'w-[25vw] mobile:w-[50vw] py-2 ' : 'mobile:hidden'} `}>
            <Switch
                checked={theme === 'light ' || theme === 'dark'}
                onChange={handleCheckboxChange}
                className=" w-full bg-[#ffffff3a] backdrop-blur-20 bg-opacity-20 border-[1px] mobile:gap-1 border-gray-300 md:px-[2px] md:py-[2px] lg:px-[1px] lg:py-[1px] xl:px-[1px] xl:py-[1px] flex items-center cursor-pointer rounded-full overflow-hidden"
            >
                <span
                    aria-hidden="true"
                    className={`flex flex-1 justify-center gap-2 mobile:gap-1 mobile:px-1 mobile:py-1 items-center rounded-full md:px-3 md:py-[6px] lg:px-3 lg:py-[7px] xl:px-3 xl:py-[7px] ${
                        theme === 'light'
                            ? 'bg-gradient-to-r from-[#E72825] to-[#F37F1F] text-white'
                            : 'hover:bg-[#6b67675a]'
                    }`}
                >
                    <DarkThemeIcon />
                    <p
                        style={{ color: 'white', fontSize: '12px' }}
                        className="mobile:text-[14px] md:text-[12px] lg:text-sx xl:text-sm 2xl:text-sm font-semibold"
                    >
                        Dark
                    </p>
                </span>
                <span
                    className={`flex flex-1 justify-center gap-2  mobile:gap-1 mobile:px-[3px] mobile:py-1 items-center rounded-full md:px-3 md:py-[6px] lg:px-3 lg:py-[5px] xl:px-3 xl:py-[7px]  ${
                        theme === 'dark' ? 'bg-gradient-to-r from-[#E72825] to-[#F37F1F]' : 'hover:bg-[#d0cccc77]'
                    }`}
                >
                    <LightThemeIcon className="dark:text-black" />
                    <p
                        style={{ color: 'white', fontSize: '12px' }}
                        className="mobile:text-[14px] md:text-[12px] lg:text-xs xl:text-sm 2xl:text-sm font-semibold"
                    >
                        Light
                    </p>
                </span>
            </Switch>
        </div>
    )
}

export default memo(ToggleBtn)
