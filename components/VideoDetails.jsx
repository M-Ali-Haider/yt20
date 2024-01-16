const VideoDetails = ({ videoData, isLoadingVideoData }) => {
    // console.log('videoData', videoData)
    const timeSince = (postedDate) => {
        const currentDate = new Date()
        const seconds = Math.floor((currentDate - new Date(postedDate)) / 1000)

        let interval = Math.floor(seconds / 31536000)
        if (interval >= 1) {
            return `${interval} year${interval === 1 ? '' : 's'} ago`
        }
        interval = Math.floor(seconds / 2592000)
        if (interval >= 1) {
            return `${interval} month${interval === 1 ? '' : 's'} ago`
        }
        interval = Math.floor(seconds / 86400)
        if (interval >= 1) {
            return `${interval} day${interval === 1 ? '' : 's'} ago`
        }
        interval = Math.floor(seconds / 3600)
        if (interval >= 1) {
            return `${interval} hour${interval === 1 ? '' : 's'} ago`
        }
        interval = Math.floor(seconds / 60)
        if (interval >= 1) {
            return `${interval} minute${interval === 1 ? '' : 's'} ago`
        }
        return `${Math.floor(seconds)} second${Math.floor(seconds) === 1 ? '' : 's'} ago`
    }

    return (
        <>
            {!isLoadingVideoData && !!videoData ? (
                <main className=" p-5 flex flex-col xl:gap-1.5 mobile:gap-3 md:gap-2 xl:rounded   dark:bg-gradient-to-b dark:from-[#232121] dark:to-[#1c1b1b33]  bg-gradient-to-b from-[#fff] to-[#EDEEF0] hover:bg-gradient-to-b hover:from-[#fff] hover:to-[#fff]  ">
                    <span className="text-red-500 dark:text-red-500 pr-2">
                        {videoData?.video?.video?.video_channelTitle}
                    </span>
                    <div className="flex gap-[2px]">
                        <p className="dark:text-[#FFFFFF99] text-[#00000099] mobile:text-[13px] md:text-[13px] lg:text-[9px]  xl:text-[13px]  font-medium ">
                            {timeSince(videoData?.video?.video?.video_publishedAt)}
                        </p>
                        {/* <p className="dark:text-[#FFFFFF99] text-[#00000099] mobile:text-[13px] md:text-[13px] lg:text-[9px]  xl:text-[13px]  font-medium"></p> */}
                    </div>
                    <p className="text-sm mobile:text-[12px] mobileL:text-[11px] md:text-[13px] xl:text-[14px] font-medium dark:text-[#FFF] text-black">
                        {videoData?.video?.video?.video_description}
                    </p>
                </main>
            ) : (
                'Loading...'
            )}
        </>
    )
}

export default VideoDetails
