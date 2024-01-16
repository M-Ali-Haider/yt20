const ShortsSkeleton = () => {
    return (
        <div className="dark:shadow dark:border-[1px] border-[2px] dark:border-[#19191A] flex flex-col gap-3 pb-2 animate-pulse rounded-2xl   overflow-hidden">
            <div className="bg-gray-300 dark:bg-[#19191A] rounded col-span-2 h-[265px]"></div>
            <div className="bg-gray-300 dark:bg-[#19191A] rounded col-span-2 h-[45px]  mx-1"></div>
            <div className="bg-gray-300 dark:bg-[#19191A] rounded col-span-2 h-[15px] mx-1"></div>
        </div>
    )
}

export default ShortsSkeleton
