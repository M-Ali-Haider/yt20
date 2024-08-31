import CategorySVG from '@/assets/FilterBar/category'
import styles from '@/components/style.module.css'
import { setCategory } from '@/store/slice'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DropDownIcon from './Icon'
import DropdownWrapper from './dropdown'

const CategoryDropDown = () => {
    const [isDropDownOpen, setDropDownStatus] = useState(false)
    const categoryValue = useSelector((state) => state.filters.category)
    const dispatch = useDispatch()
    const dropdownRef = useRef(null)
    const categories = ['All', 'Now', 'Music', 'Gaming', 'Movies']

    const closeDropDown = () => {
        setDropDownStatus(false)
    }
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

    useEffect(() => {
        if (isDropDownOpen) {
            document.body.classList.add('no-scroll')
        } else {
            document.body.classList.remove('no-scroll')
        }
        return () => {
            document.body.classList.remove('no-scroll')
        }
    }, [isDropDownOpen])

    return (
        <>
            <div className={`rounded-full relative`} ref={dropdownRef}>
                <DropDownIcon SvgComp={CategorySVG} handleClick={handleDropDown} isDropDownOpen={isDropDownOpen} />
                {isDropDownOpen && (
                    <>
                        <DropdownWrapper className={`flex flex-col pt-3`} closeDropDown={closeDropDown}>
                            {categories.map((item, index) => (
                                <div
                                    className={`${
                                        index === categoryValue ? `bg-swiperButton` : `${styles.gradientButton}`
                                    } pl-[26px] py-[13px] select-none w-[191px] cursor-pointer before:rounded-md rounded-md`}
                                    onClick={() => handleOptionClick(index)}
                                    key={index}
                                >
                                    {item}
                                </div>
                            ))}
                        </DropdownWrapper>
                    </>
                )}
            </div>
        </>
    )
}

export default CategoryDropDown
