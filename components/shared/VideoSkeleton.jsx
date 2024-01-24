const VideoSkeleton = () => {
    return (
        <div>
            <div className=" shadow dark:border-[1px] dark:border-[#19191A] mx-auto animate-pulse w-full overflow-hidden box-border mobile:rounded-lg  mobile:min-h-[208px] ">
                <div className="flex items-center justify-center w-full bg-gray-300 dark:bg-[#19191A] h-[170px] "></div>
                <div className="animate-pulse flex  mobile:py-3 mobile:px-1">
                    <div className="flex gap-2">
                        <div className="rounded-full bg-gray-300 dark:bg-[#19191A] h-11 w-11"></div>
                        <div className="flex flex-col gap-2">
                            <div className=" bg-gray-300 dark:bg-[#19191A] rounded col-span-2 h-9"></div>
                            <div className=" bg-gray-300 dark:bg-[#19191A] rounded col-span-2 h-4 w-40"></div>
                            <div className=" bg-gray-300 dark:bg-[#19191A] rounded col-span-2 h-4 w-48"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoSkeleton
