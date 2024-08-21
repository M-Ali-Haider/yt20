const VideoPageSkeleton = () => {
    return (
        <>
            <div
                className="w-full mt-[50px] 
                        relative
                        before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent
                        before:via-white/5
                        before:animate-[shimmerX_1.5s_infinite] overflow-hidden"
            >
                <div className="w-full aspect-[16/9] dark:bg-[#3f3f3f] bg-[#e5e5e5] rounded-lg" />
                <div className="dark:bg-darkVidDetail w-full">
                    <div className="flex flex-col md:flex-row flex-wrap w-full gap-2">
                        <div className="flex-1 pt-10 px-2 xs:px-10">
                            <div className="h-7 md:h-8 dark:bg-[#3f3f3f] bg-[#e5e5e5] w-full rounded-full" />
                            <div className="flex flex-wrap items-center gap-4 text-[#99A2AD] text-sm mt-3">
                                <div className="dark:bg-[#3f3f3f] bg-[#e5e5e5] h-[24px] rounded-full" />
                                <div className="flex flex-wrap gap-4">
                                    {[...Array(3)].map((_, index) => (
                                        <div
                                            key={index}
                                            className="h-[20px] w-[111px] dark:bg-[#3f3f3f] bg-[#e5e5e5] rounded-full"
                                        />
                                    ))}
                                </div>
                                <div className="dark:bg-[#3f3f3f] bg-[#e5e5e5] h-[20px] rounded-full" />
                            </div>
                        </div>
                        <div className="w-[140px] pl-10 md:pl-0 md pt-3 md:pt-[60px] flex items-center gap-[22px]">
                            <button
                                className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer dark:bg-[#3f3f3f] bg-[#e5e5e5]`}
                            />
                            <button
                                className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer dark:bg-[#3f3f3f] bg-[#e5e5e5]`}
                            />
                        </div>
                    </div>
                    <div className="mt-9 md:pl-10 flex items-center gap-4">
                        {[...Array(3)].map((_, index) => (
                            <div
                                onClick={() => setOption(index)}
                                key={index}
                                className={`md:uppercase rounded-full font-normal text-center dark:bg-[#3f3f3f] bg-[#e5e5e5] text-xs md:text-sm w-[176px] cursor-pointer pb-5 select-none transition-all duration-300 ease-custom-ease`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoPageSkeleton
