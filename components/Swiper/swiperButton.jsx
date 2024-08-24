import styles from '@/components/style.module.css'
const SwiperButton = ({ className, handleClick }) => {
    return (
        <>
            <div
                onClick={handleClick}
                className={`z-30
                md:w-[40px] md:h-[40px] w-[32px] h-[32px] 
                cursor-pointer ${className}`}
            >
                <div
                    className={`${styles.swiperButton} dark:bg-[#19191a] bg-white w-full h-full rounded-[4px] flex items-center justify-center`}
                >
                    <SwiperArrowSVG />
                </div>
            </div>
        </>
    )
}

export default SwiperButton

const SwiperArrowSVG = (props) => (
    <svg
        width={10}
        height={18}
        viewBox="0 0 10 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        className="dark:stroke-white stroke-black"
    >
        <path d="M2 15.5L8 9L2 2.5" strokeWidth={2} strokeLinejoin="round" />
    </svg>
)
