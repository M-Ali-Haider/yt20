import CalendarSVG from '@/assets/FilterBar/calendar'
import styles from '@/components/style.module.css'
import { setDate } from '@/store/slice'
import { getLast7Days } from '@/utils/getLast7Days'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DropDownIcon from './Icon'
import DropdownWrapper from './dropdown'

const DateDropDown = () => {
    const dispatch = useDispatch()
    const dateValue = useSelector((state) => state.filters.date)
    const [selectedDate, setSelectedDate] = useState(dateValue)

    useEffect(() => {
        if (dateValue !== selectedDate) {
            setSelectedDate(dateValue)
        }
    }, [dateValue])

    const [isDropDownOpen, setDropDownStatus] = useState(false)
    const dropdownRef = useRef(null)

    const closeDropDown = () => {
        setDropDownStatus(false)
    }

    const handleApply = () => {
        dispatch(setDate(selectedDate))
        setDropDownStatus(false)
    }

    const handleCancel = () => {
        setSelectedDate(dateValue)
        setDropDownStatus(false)
    }

    const handleDropDown = () => {
        setDropDownStatus(!isDropDownOpen)
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

    const dates = getLast7Days()

    return (
        <>
            <div className={`rounded-full relative`} ref={dropdownRef}>
                <DropDownIcon SvgComp={CalendarSVG} handleClick={handleDropDown} isDropDownOpen={isDropDownOpen} />
                {isDropDownOpen && (
                    <DropdownWrapper className={''} closeDropDown={closeDropDown}>
                        <div className="py-6 flex justify-center">
                            {dates.map((date, index) => (
                                <div key={index}>
                                    <div className="flex items-center justify-center w-10 h-10 select-none">
                                        {date.day}
                                    </div>
                                    <div
                                        onClick={() => setSelectedDate(date.value)}
                                        className={`${
                                            selectedDate === date.value
                                                ? 'bg-[#E72925] text-white'
                                                : `${styles.gradientButton}`
                                        } flex items-center justify-center w-10 h-10 cursor-pointer select-none rounded-full`}
                                    >
                                        {date.dateNumber}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="border-t border-[#99A2AD] p-4 flex items-center justify-center gap-3">
                            <button
                                onClick={() => handleCancel()}
                                className="border border-[#D0D5DD] text-[#99A2AD] w-[125px] xs:w-[142px] h-10 rounded-lg"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => handleApply()}
                                className={`w-[125px] xs:w-[142px] h-10 bg-swiperButton rounded-lg text-white`}
                            >
                                Apply
                            </button>
                        </div>
                    </DropdownWrapper>
                )}
            </div>
        </>
    )
}

export default DateDropDown
