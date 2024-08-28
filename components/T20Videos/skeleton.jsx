const T20VideosSkeleton = () => {
    return (
        <div className="mt-8 md:mt-10 lg:mt-12">
            <VidGridSkeleton />
        </div>
    )
}

export default T20VideosSkeleton

export function VidGridSkeleton() {
    return (
        <div
            className="mt-[25px] grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4
                        relative
                        before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent
                        before:via-white/5
                        before:animate-[shimmerX_1.5s_infinite] overflow-hidden"
        >
            {[...Array(4)].map((_, index) => (
                <div key={index} className="pb-[10px] cursor-pointer aspect-[370/326.15]">
                    <div className="aspect-[16/9] w-full relative rounded-lg overflow-hidden dark:bg-[#3f3f3f] bg-[#e5e5e5]" />
                    <div className="flex gap-4 mt-6">
                        <div className="min-h-[36px] min-w-[36px] max-h-[36px] max-w-[36px] rounded-full overflow-hidden relative dark:bg-[#3f3f3f] bg-[#e5e5e5]" />
                        <div className="flex-1">
                            <div className="dark:bg-[#3f3f3f] bg-[#e5e5e5] w-full h-[20px] rounded-full"></div>
                            <div className="dark:bg-[#3f3f3f] bg-[#e5e5e5] w-[150px] h-[14px] rounded-full mt-2"></div>
                            <div className="dark:bg-[#3f3f3f] bg-[#e5e5e5] w-[150px] h-[14px] rounded-full mt-1"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
