'use Client'
import CategoryIcon from '@/assets/icons/CategoryIcon'
import useWindowDimensions from '@/utils/CustomHooks'
import { transformDateFormat } from '@/utils/globalFunctions'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import DownArrowIcon from '@/assets/icons/DownArrowIcon'

const CalendarDateRange = ({ startDate, setStartDate }) => {
    const { width: windowWidth } = useWindowDimensions()
    const isAboveTablet = windowWidth > 768;

    const [isOpen, setIsOpen] = useState(false)
    const [selectedDate, setSelectedDate] = useState()

    const today = new Date()
    
    // Calculate 7 days before today
    const tempMinDate = new Date(today)
    const minDate = tempMinDate.setDate(today.getDate() - 7)

    // Calculate 7 days after today
    const tempMaxDate = new Date(today)
    const maxDate = tempMaxDate.setDate(today.getDate() - 1)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const closeDropdown = () => {
        setIsOpen(false)
    }

    const handleDateChange = (date) => {
        setSelectedDate(date)
        const newStartDate = transformDateFormat(date)
        setStartDate(newStartDate)
        closeDropdown()
    }

    return (
        <div className="relative inline-block text-left tablet:px-0"
        >
            <button
                id="dropdownAvatarNameButton"
                onClick={toggleDropdown}
                // className="d-flex items-center z-100 h-[36px] tablet:h-[46px] bg-red-500 inline-flex w-[100%] justify-between rounded-md px-4 py-2 text-[17px] font-medium  bg-gradient-to-r from-[#E72825] to-[#F37F1F]  dark:text-white text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 min-w-max"
                className="d-flex items-center z-100 h-[36px] tablet:h-[46px] bg-red-500 inline-flex w-[90px] tablet:w-[240px]  justify-between rounded-md px-4 py-2 text-[17px] font-medium  bg-gradient-to-r from-[#E72825] to-[#F37F1F]  dark:text-white text-black  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                type="button"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    zIndex: '10',
                }}
            >
                {/* <FilterDateIcon /> */}
                {isAboveTablet ? <CategoryIcon /> : ''}
                <p className="SelectADateDiv font-bold text-white"
                    style={{
                        textOverflow: isAboveTablet ? 'ellipsis' : '',
                        fontSize: !isAboveTablet ? '12px' : '',
                        textAlign:'center',
                        width:'100%'
                    }}
                >
                    {!!selectedDate && isAboveTablet ? selectedDate.toDateString() : 'Date'}
                </p>
                <DownArrowIcon
                            className="DownArrow w-4 dark:color-white color-black"
                            sx={{
                                height: isAboveTablet ? '20px' : '10px',
                                width: isAboveTablet ? '20px' : '10px',
                                color: 'white'
                            }}
                            />
                {/* <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                    style={{
                        // display: !isAboveTablet ? 'none' : '',
                    }}
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                    />
                </svg> */}
            </button>

            {isOpen && (
                <div
                    id="dropdownAvatarName"
                    className="z-100 absolute right-0 mt-2 dark:bg-[#19191A] bg-white dark:text-white text-black  rounded-md"
                    style={{ zIndex: '10' }}
                >
                    <DatePicker
                        wrapperClassName="DatePickerComp w-full"
                        onChange={handleDateChange}
                        inline
                        fixedHeight
                        dropdownMode="select"
                        selected={selectedDate}
                        startDate={selectedDate}
                        minDate={minDate}
                        maxDate={maxDate}
                    />
                  
                </div>
            )}
        </div>
    )
}

export default CalendarDateRange
