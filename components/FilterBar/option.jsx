import styles from '@/components/style.module.css'
import { useSelector } from 'react-redux'
const FilterOption = ({ title }) => {
    const activeLink = useSelector((state) => state.activeLink.activeLink)
    return (
        <div
            className={`${styles.toSectionButton} ${
                activeLink === title ? `before:opacity-100 text-white` : `before:opacity-0`
            }
            text-xs lg:text-base cursor-pointer select-none
            py-3 px-5 lg:px-6`}
        >
            {title}
        </div>
    )
}

export default FilterOption
