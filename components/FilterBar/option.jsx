import styles from '@/components/style.module.css'
import { useSelector } from 'react-redux'
const FilterOption = ({ title }) => {
    const activeLink = useSelector((state) => state.activeLink.activeLink)
    return (
        <div
            className={`${
                activeLink === title
                    ? 'bg-swiperButton text-white'
                    : `dark:bg-[#19191a] bg-white ${styles.gradientButton}`
            }
            text-xs lg:text-base cursor-pointer 
            py-3 px-5 lg:px-6`}
        >
            {title}
        </div>
    )
}

export default FilterOption
