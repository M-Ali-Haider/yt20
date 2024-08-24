import CalendarSVG from '@/assets/FilterBar/calendar'
import { useEffect, useRef, useState } from 'react'
import { format } from 'date-fns'
import styles from '@/components/style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setDate } from '@/store/slice'

const DateDropDown = () => {
    const dispatch = useDispatch()
    const dateValue = useSelector((state) => state.filters.date)
    const [selectedDate, setSelectedDate] = useState(dateValue)
    const [isDropDownOpen, setDropDownStatus] = useState(false)
    const dropdownRef = useRef(null)

    const getLast7Days = () => {
        const dates = []
        for (let i = 0; i < 7; i++) {
            const date = new Date()
            date.setDate(date.getDate() - i)
            const day = format(date, 'EE').slice(0, 2)
            const formattedDay = day === 'Sa' ? 'Sat' : day
            dates.unshift({
                day: formattedDay,
                dateNumber: format(date, 'd'),
                value: format(date, 'yyyy-MM-dd'),
            })
        }
        return dates
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

    const dates = getLast7Days()

    return (
        <>
            <div className={`rounded-full relative`} ref={dropdownRef}>
                <div
                    onClick={handleDropDown}
                    className={`${isDropDownOpen ? `${styles.activeButton}` : `${styles.gradientButton}`}
                            cursor-pointer w-8 h-8 lg:w-11 lg:h-11 
                            rounded-full before:rounded-full`}
                >
                    <CalendarSVG
                        className={`w-8 h-8 lg:w-11 lg:h-11 
                                p-1 lg:p-[6px] rounded-full 
                                fill-[#99A2AD] hover:fill-white 
                                transition-all ease-custom-ease duration-200 select-none`}
                    />
                </div>
                {isDropDownOpen && (
                    <div
                        className="absolute right-0 z-[35] top-[calc(100%+16px)] bg-[#ffffff] dark:bg-[#19191A] 
                            text-base leading-[17.5px] font-normal rounded-2xl"
                    >
                        <div className="px-[20px] py-6 flex">
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
                                className="border border-[#D0D5DD] text-[#99A2AD] w-[142px] h-10 rounded-lg"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => handleApply()}
                                className={`w-[142px] h-10 bg-swiperButton rounded-lg`}
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default DateDropDown
