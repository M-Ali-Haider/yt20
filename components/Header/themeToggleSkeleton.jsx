const ThemeToggleSkeleton = () => {
    return (
        <>
            <div
                className="h-[46px] w-[189.9px] rounded-full bg-[#e5e5e5] dark:bg-[#262526] dark:border dark:border-solid 
            dark:border-[#FFFFFF4D] flex items-center px-[6px] py-[5px]
            relative
            before:absolute before:inset-0 before:-translate-y-full before:bg-gradient-to-t before:from-transparent before:via-white/10
            before:animate-[shimmerY_1.5s_infinite] overflow-hidden"
            ></div>
        </>
    )
}

export default ThemeToggleSkeleton
