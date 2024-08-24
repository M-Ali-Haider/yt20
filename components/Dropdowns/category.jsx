import CategorySVG from '@/assets/FilterBar/category'
import styles from '@/components/style.module.css'
import { setCategory } from '@/store/slice'
import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

const CategoryDropDown = () => {
    const [isDropDownOpen, setDropDownStatus] = useState(false)
    const dispatch = useDispatch()
    const dropdownRef = useRef(null)
    const categories = ['All', 'Now', 'Music', 'Gaming', 'Movies']

    const handleDropDown = () => {
        setDropDownStatus(!isDropDownOpen)
    }
    const handleOptionClick = (index) => {
        dispatch(setCategory(index))
        setDropDownStatus(false)
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
        <>
            <div className={`rounded-full relative`} ref={dropdownRef}>
                <div
                    onClick={() => handleDropDown()}
                    className={`${isDropDownOpen ? `${styles.activeButton}` : `${styles.gradientButton} `}
                            cursor-pointer w-8 h-8 lg:w-11 lg:h-11 
                            rounded-full before:rounded-full`}
                >
                    <CategorySVG
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
                            text-base leading-[17.5px] font-normal flex flex-col gap-[10px] rounded-2xl py-3"
                        >
                            {categories.map((item, index) => (
                                <div
                                    className={`pl-[26px] py-2 w-[191px] cursor-pointer before:rounded-md ${styles.gradientButton}`}
                                    onClick={() => handleOptionClick(index)}
                                    key={index}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default CategoryDropDown
