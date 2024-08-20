const SwiperButton = ({ className, handleClick }) => {
    return (
        <>
            <div
                onClick={handleClick}
                className={`${className} bottom-0 absolute bg-swiperButton 
                flex items-center justify-center rounded-[4px] 
                md:w-[40px] md:h-[40px] w-[32px] h-[32px] 
                cursor-pointer`}
            >
                <SwiperArrowSVG />
            </div>
        </>
    )
}

export default SwiperButton

const SwiperArrowSVG = (props) => (
    <svg width={10} height={18} viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M2 15.5L8 9L2 2.5" stroke="white" strokeWidth={2} strokeLinejoin="round" />
    </svg>
)
