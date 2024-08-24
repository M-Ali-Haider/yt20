import styles from '@/components/style.module.css'
const DropDownIcon = ({ SvgComp, handleClick, isDropDownOpen }) => {
    return (
        <div
            onClick={() => handleClick()}
            className={`${isDropDownOpen ? `${styles.activeButton}` : `${styles.gradientButton} `}
                            cursor-pointer w-10 h-10 filterBarDim:w-8 filterBarDim:h-8 lg:w-11 lg:h-11  
                            rounded-full before:rounded-full`}
        >
            <SvgComp
                className={`w-10 h-10 filterBarDim:w-8 filterBarDim:h-8 lg:w-11 lg:h-11 
                                p-1 lg:p-[6px] rounded-full 
                                fill-[#99A2AD] hover:fill-white 
                                transition-all ease-custom-ease duration-200 select-none`}
            />
        </div>
    )
}

export default DropDownIcon
