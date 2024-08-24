import { useDispatch } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { setRegion } from '@/store/slice'
import { regions } from '@/utils/regions'
import styles from '@/components/style.module.css'
import RegionSVG from '@/assets/FilterBar/region'
import DropDownIcon from './Icon'
import DropdownWrapper from './dropdown'

const RegionDropDown = () => {
    const [isDropDownOpen, setDropDownStatus] = useState(false)
    const dispatch = useDispatch()
    const [searchTerm, setSearchTerm] = useState('')
    const dropdownRef = useRef(null)

    const filteredRegions = regions.filter((item) => item.region.toLowerCase().startsWith(searchTerm.toLowerCase()))

    const closeDropDown = () => {
        setDropDownStatus(false)
    }
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

    useEffect(() => {
        if (isDropDownOpen) {
            document.body.classList.add('no-scroll')
        } else {
            document.body.classList.remove('no-scroll')
        }
    }, [isDropDownOpen])

    return (
        <div className={`rounded-full relative`} ref={dropdownRef}>
            <DropDownIcon SvgComp={RegionSVG} handleClick={handleDropDown} isDropDownOpen={isDropDownOpen} />
            {isDropDownOpen && (
                <>
                    <DropdownWrapper className={'flex flex-col gap-[10px] w-[307px]'} closeDropDown={closeDropDown}>
                        <input
                            type="search"
                            className="w-full min-w-fit border-[#FFFFFF4D] border h-[47px] pl-4 py-3 rounded-2xl focus:outline-none"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        <div className="min-h-[217.5px] filterBarDim:min-h-[auto] max-h-[217.5px] overflow-y-scroll">
                            <div className="flex flex-col">
                                {filteredRegions.length > 0 ? (
                                    filteredRegions.map((item, index) => (
                                        <div
                                            onClick={() => handleOptionClick(item.region)}
                                            className={`pl-4 py-[13px] cursor-pointer before:rounded-md select-none ${styles.gradientButton}`}
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
                    </DropdownWrapper>
                </>
            )}
        </div>
    )
}

export default RegionDropDown
