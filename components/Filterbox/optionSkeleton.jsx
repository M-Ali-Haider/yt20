const OptionSkeleton = () => {
    return (
        <>
            <div
                className="relative px-[20px] md:px-0 w-[309px] h-[60px] md:h-[80px] flex items-center gap-4 justify-between md:justify-center 
            rounded-lg filterbox:rounded-none filterbox:first:rounded-tl-lg filterbox:first:rounded-bl-lg 
            filterbox:last:rounded-tr-lg filterbox:last:rounded-br-lg bg-[#ffffff] dark:bg-[#262526] cursor-pointer 
            filterbox:border-r-2 filterbox:border-solid filterbox:border-[#99A2AD4D] filterbox:dark:border-[#99A2AD] 
            filterbox:last:border-r-0 transition-all ease-custom-ease duration-500 
            before:absolute before:inset-0 before:-translate-y-full before:bg-gradient-to-t before:from-transparent before:via-black/10
            before:animate-[shimmerY_1.5s_infinite] overflow-hidden"
                onClick={() => setDropdownStatus(!isDropdropOpen)}
            ></div>
        </>
    )
}

export default OptionSkeleton
