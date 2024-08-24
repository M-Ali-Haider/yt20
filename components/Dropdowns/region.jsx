import { useDispatch } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { setRegion } from '@/store/slice'
import { regions } from '@/utils/regions'
import styles from '@/components/style.module.css'
import RegionSVG from '@/assets/FilterBar/region'

const RegionDropDown = () => {
    const [isDropDownOpen, setDropDownStatus] = useState(false)
    const dispatch = useDispatch()
    const [searchTerm, setSearchTerm] = useState('')
    const dropdownRef = useRef(null)

    const filteredRegions = regions.filter((item) => item.region.toLowerCase().startsWith(searchTerm.toLowerCase()))

    const handleDropDown = () => {
        setDropDownStatus(!isDropDownOpen)
    }
    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }
    const handleOptionClick = (region) => {
        dispatch(setRegion(region))
        setDropDownStatus(false)
        setSearchTerm('')
    }

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropDownStatus(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div className={`rounded-full relative`} ref={dropdownRef}>
            <div
                onClick={() => handleDropDown()}
                className={`${isDropDownOpen ? `${styles.activeButton}` : `${styles.gradientButton} `}
                            cursor-pointer w-8 h-8 lg:w-11 lg:h-11 
                            rounded-full before:rounded-full`}
            >
                <RegionSVG
                    className={`w-8 h-8 lg:w-11 lg:h-11 
                                p-1 lg:p-[6px] rounded-full 
                                fill-[#99A2AD] hover:fill-white 
                                transition-all ease-custom-ease duration-200 select-none`}
                />
            </div>
            {isDropDownOpen && (
                <>
                    <div
                        className="absolute right-0 z-[35] top-[calc(100%+16px)] bg-[#ffffff] dark:bg-[#19191A] 
                        text-base leading-[17.5px] font-normal flex flex-col gap-[10px] rounded-2xl w-[307px]"
                    >
                        <input
                            type="search"
                            className="w-full min-w-fit border-[#FFFFFF4D] border h-[47px] pl-4 py-3 rounded-2xl focus:outline-none"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={handleSearch}
                        />

                        <div className="max-h-[207.5px] overflow-y-scroll">
                            <div className="flex flex-col gap-[10px]">
                                {filteredRegions.length > 0 ? (
                                    filteredRegions.map((item, index) => (
                                        <div
                                            onClick={() => handleOptionClick(item.region)}
                                            className={`pl-4 py-2 cursor-pointer before:rounded-md select-none ${styles.gradientButton}`}
                                            key={index}
                                        >
                                            {item.region}
                                        </div>
                                    ))
                                ) : (
                                    <div className="pl-4 py-3 select-none">No regions found</div>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default RegionDropDown
