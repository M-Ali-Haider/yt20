import styles from '@/components/style.module.css'
import { useSelector } from 'react-redux'
const FilterOption = ({ title }) => {
    const activeLink = useSelector((state) => state.activeLink.activeLink)
    return (
        <div
            className={`${
                activeLink === title ? `${styles.activeLink} bg-swiperButton text-white` : `dark:bg-[#19191a] bg-white`
            }
            text-xs lg:text-base cursor-pointer select-none
            py-3 px-5 lg:px-6 ${styles.toSectionButton}`}
        >
            {title}
        </div>
    )
}

export default FilterOption
