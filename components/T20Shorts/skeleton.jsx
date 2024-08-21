import HeadingAndViewMore from '../ViewMore'

const T20ShortsSkeleton = () => {
    return (
        <div className="mt-8 md:mt-10 lg:mt-12">
            <HeadingAndViewMore
                heading={'Top 20 Shorts for you'}
                className={'tracking-[-0.014em] sm:font-medium sm:text-2xl sm:leading-[40px] lg:text-[32px]'}
            />
            <div
                className="mt-[25px] grid grid-cols-2 xs:grid-cols-4 md:grid-cols-5 xl:grid-cols-8 gap-4
                        relative
                        before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent
                        before:via-white/10
                        before:animate-[shimmerX_1.5s_infinite] overflow-hidden"
            >
                {[...Array(8)].map((_, index) => (
                    <div key={index} className={`pb-[10px] cursor-pointer aspect-[370/326.15]`}>
                        <div className="aspect-[150/265] w-full relative rounded-lg overflow-hidden dark:bg-[#3f3f3f] bg-[#e5e5e5]"></div>
                        <div className="flex gap-4 mt-6">
                            <div className="flex-1">
                                <div className="dark:bg-[#3f3f3f] bg-[#e5e5e5] w-full h-[20px] rounded-full"></div>
                                <div className="dark:bg-[#3f3f3f] bg-[#e5e5e5] w-full h-[14px] rounded-full mt-2"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default T20ShortsSkeleton
