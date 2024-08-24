import styles from '@/components/style.module.css'
const FilterOption = ({ title }) => (
    <div
        className={`${styles.gradientButton} 
            text-xs lg:text-base cursor-pointer 
            dark:bg-[#19191a] bg-white
            py-3 px-5 lg:px-6`}
    >
        {title}
    </div>
)
export default FilterOption
