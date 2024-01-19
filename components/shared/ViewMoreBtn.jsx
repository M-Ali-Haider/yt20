import RightArrowIcon from '@/assets/icons/RightArrowIcon'

const ViewMoreBtn = ({ onClick, seeMore, className }) => {
    return (
        <button
            className={className}
            onClick={onClick}
            // className="flex items-center mobile:text-[10px]  mobile:px-[10px] mobile:py-[3px] mobile:gap-1 md:text-sm md:px-[10px] md:py-[4px] lg:text-[10px] lg:px-[8px] lg:gap-1 lg:py-[4px] xl:text-[13px] xl:px-[13px] xl:py-[10px] 2xl:text-[14px] 2xl:px-[16px] 2xl:py-[8px]  2xl:gap-1.5 font-medium border-0 rounded-full capitalize  dark:hover:opacity-100 dark:opacity-90 hover:opacity-90 hover:transition-transform duration-900 dark:bg-gradient-to-b dark:bg-[#19191A] bg-white dark:text-white dark:hover:text-red-500 hover:text-red-500 duration-1000 transition-all"
            style={{
                fontSize: '10px',
            }}
        >
            {/* <p className="text-nowrap capitalize dark:text-white dark:hover:text-red-500 hover:text-red-500 duration-1000 transition-all"> */}
            {seeMore ? 'Show Less' : 'Show More'}
            {/* </p> */}
            <RightArrowIcon
                sx={{
                    transform: !seeMore ? 'rotate(90deg)' : 'rotate(270deg)',
                    transition: 'transform 0.9s ease',
                }}
                // className="mobile:w-[4px] mobile:h-[7px] md:w-[6px] md:h-[11px] lg:w-[6px] lg:h-[6px] xl:w-[10px] xl:h-[10px]"
            />
        </button>
    )
}

export default ViewMoreBtn
