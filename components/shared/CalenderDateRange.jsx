'use Client'
import CategoryIcon from '@/assets/icons/CategoryIcon'
import DownArrowIcon from '@/assets/icons/DownArrowIcon'
import useWindowDimensions from '@/utils/CustomHooks'
import { transformDateFormat } from '@/utils/globalFunctions'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const CalendarDateRange = ({ startDate, setStartDate }) => {
    const { width: windowWidth } = useWindowDimensions()
    const isAboveTablet = windowWidth > 768;

    const [isOpen, setIsOpen] = useState(false)
    const [selectedDate, setSelectedDate] = useState()

    const today = new Date()
    
    // Calculate 7 days before today
    const tempMinDate = new Date(today)
    const minDate = tempMinDate.setDate(today.getDate() - 6)

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

    const withHoverClass = `flex flex-row items-center justify-between mb-[4px] ${!!selectedDate ? 'cursor-pointer' : ''} bg-[#1769aa] ${!!selectedDate ? 'hover:bg-opacity-95' : ''}  rounded p-[4px] transition-background duration-200 ease-in-out`

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
                <CategoryIcon 
                        sx={{
                            display: isAboveTablet ? '' : 'none',
                        }} /> 
                <p className="Text text-white font-bold my-0 mx-0 tablet:mx-[5px] tablet:text-ellipsis overflow-hidden font text-[12px] tablet:text-[16px]"
                    style={{
                        textAlign:'center',
                        width:'100%'
                    }}
                >
                    {!!selectedDate && isAboveTablet ? selectedDate.toDateString() : 'Date'}
                </p>
                <DownArrowIcon
                            className="DownArrow w-4 color-white"
                            sx={{
                                height: isAboveTablet ? '20px' : '10px',
                                width: isAboveTablet ? '20px' : '10px',
                                color: 'white'
                            }}
                            />
            </button>

            {isOpen && (
                <div
                    id="dropdownAvatarName"
                    className="z-100 absolute right-0 mt-2 bg-[#f0f0f0] dark:text-white text-black  rounded-md"
                    style={{ zIndex: '10'}}
                >
                    <div 
                        className={withHoverClass}
                        onClick={() =>{
                            if(!!selectedDate){
                                setSelectedDate(null)
                                setStartDate('')
                            }
                            }}
                    >
                        <p style={{
                            fontSize: '10px',
                            color: 'white',
                            width: '100%',
                            marginLeft:'0.5rem'
                        }}> {!!selectedDate ? 'Clear Date' : 'Select a Date'} </p>
                    {!!selectedDate ? (
                        <>
                            <CalendarTodayIcon fontSize='large' style={{cursor:'pointer', color:'white'}} />
                        </>
                    ): (<>
                            <InsertInvitationIcon fontSize='large' style={{cursor:'pointer', color:'white'}} />
                    </>)}
                    </div>
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
                        isClearable={true}
                        placeholderText='Date'
                    />
                  
                </div>
            )}
        </div>
    )
}

export default CalendarDateRange
