// import { transformDateFormat } from '@/utils/globalFunctions'
// import { useState } from 'react'
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'

// const CalenderDateRange = ({ setStartDate }) => {
//     const [isOpen, setIsOpen] = useState(false)
//     const [selectedDate, setSelectedDate] = useState(null)

//     const toggleDropdown = () => {
//         setIsOpen(!isOpen)
//     }

//     const closeDropdown = () => {
//         setIsOpen(false)
//     }

//     const handleDateChange = (date) => {
//         setSelectedDate(date)
//         console.log(date)
//         const newStartDate = transformDateFormat(date)
//         console.log('newStartDate:', newStartDate)
//         setStartDate(newStartDate)
//         closeDropdown()
//     }

//     return (
//         <div className="relative inline-block text-left">
//             <button
//                 id="dropdownAvatarNameButton"
//                 onClick={toggleDropdown}
//                 className=" bg-red-500 inline-flex w-[240px] justify-between rounded-md px-4 py-2 text-base font-medium  bg-gradient-to-r from-[#E72825] to-[#F37F1F]  dark:text-white text-black  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
//                 type="button"
//                 style={{
//                     height: '52px',
//                     display: 'flex',
//                     alignItems: 'center',
//                 }}
//             >
//                 <span className="sr-only">Open user menu</span>
//                 {/* <FilterDateIcon /> */}
//                 {selectedDate ? selectedDate.toDateString() : 'Select Date'}
//                 <svg
//                     className="w-2.5 h-2.5 ms-3"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 10 6"
//                 >
//                     <path
//                         stroke="currentColor"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="m1 1 4 4 4-4"
//                     />
//                 </svg>
//             </button>

//             {isOpen && (
//                 <div
//                     id="dropdownAvatarName"
//                     className="z-100 absolute right-0 mt-2 dark:bg-[#19191A] bg-white dark:text-white text-black  rounded-md"
//                 >
//                     <DatePicker selected={selectedDate} onChange={handleDateChange} inline fixedHeight />
//                 </div>
//             )}
//         </div>
//     )
// }

// export default CalenderDateRange
