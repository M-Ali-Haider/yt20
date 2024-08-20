'use client'
import DropdownSVG from '@/assets/Filterbox/dropdown'
import { useEffect, useRef, useState } from 'react'

const FilterboxOption = ({ title, SvgComp, options }) => {
    const [isDropdropOpen, setDropdownStatus] = useState(false)
    const dropdownRef = useRef(null)

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownStatus(false)
        }
    }

    useEffect(() => {
        if (isDropdropOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isDropdropOpen])

    return (
        <>
            <div
                ref={dropdownRef}
                className="relative px-[20px] md:px-0 w-[309px] h-[60px] md:h-[80px] flex items-center gap-4 justify-between md:justify-center 
            rounded-lg filterbox:rounded-none filterbox:first:rounded-tl-lg filterbox:first:rounded-bl-lg 
            filterbox:last:rounded-tr-lg filterbox:last:rounded-br-lg bg-[#ffffff] dark:bg-[#19191A] cursor-pointer 
            filterbox:border-r-2 filterbox:border-solid filterbox:border-[#99A2AD4D] filterbox:dark:border-[#99A2AD] 
            filterbox:last:border-r-0 transition-all ease-custom-ease duration-500"
                onClick={() => setDropdownStatus(!isDropdropOpen)}
            >
                <div className="flex items-center gap-4 pointer-events-none">
                    <SvgComp className="fill-[#99A2AD] w-[30px] h-[30px]" />
                    <div className="text-[#99A2AD] text-[20px] leading-[24.42px]">{title}</div>
                </div>
                <div className="pointer-events-none">
                    <DropdownSVG />
                </div>
                {isDropdropOpen && (
                    <div className="max-h-[200px] overflow-y-scroll no-scrollbar absolute z-30 w-full top-[calc(100%+10px)] left-0 right-0 bg-white dark:bg-[#19191A] rounded-2xl py-3 text-sm px-1">
                        {title === 'Region' ? (
                            <>
                                {options.data.map((option, index) => (
                                    <div
                                        className="h-8 pl-4 rounded-full text-[#19191A] dark:text-white flex items-center font-inter font-normal hover:text-white hover:bg-gradient-to-r hover:from-[#E72825] hover:to-[#F37F1F]"
                                        key={index}
                                    >
                                        {option.region}
                                    </div>
                                ))}
                            </>
                        ) : (
                            <>
                                {options.map((option, index) => (
                                    <div
                                        className="h-8 pl-4 rounded-full text-[#19191A] dark:text-white flex items-center font-inter font-normal hover:text-white hover:bg-gradient-to-r hover:from-[#E72825] hover:to-[#F37F1F]"
                                        key={index}
                                    >
                                        {option}
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                )}
            </div>
        </>
    )
}

export default FilterboxOption
