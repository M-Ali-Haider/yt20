'use client'
import { useVideoById } from '@/utils/http'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import YouTube from 'react-youtube'
import VideoModalBottomSection from './VideoModalBottomSection'

const VideoSection = () => {
    const { id } = useParams()
    const { data: videoData, isLoading: isLoadingVideoData } = useVideoById(id, 'top_video')

    // const videoLink = `https://www.youtube.com/watch?v=fUJevhTZR6Y`
    // const videoId = 'your-video-id' // Replace with the actual YouTube video ID

    const opts = {
        height: '600',
        width: '100%',
        // className='w-full mobile:object-cover  xl:h-[580px] xl:rounded-tl-lg xl:rounded-tr-lg',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    }

    const onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo()
    }

    const onPlay = () => {
        // console.log('Video playing')
    }

    const onPause = () => {
        // console.log('Video paused')
    }

    const onEnd = () => {
        // console.log('Video ended')
    }

    const onError = (event) => {
        // console.error('Error:', event.data)
    }

    const onStateChange = (event) => {
        // console.log('State changed:', event.data)
    }

    return (
        <main className="Main w-full flex flex-col xl:px-6 xl:py-2 ">
            <div
                className={`YoutubeMainDiv w-full mobile:object-cover  xl:h-[630px] xl:rounded-tl-lg xl:rounded-tr-lg mt-[6rem] mobile:mt-[4.5rem] md:mt-[4.5rem] lg:mt-[5.2rem] 2xl:mt-[6.3rem] overflow-hidden`}
            >
                <YouTube
                    videoId={id}
                    opts={opts}
                    onReady={onReady}
                    onPlay={onPlay}
                    onPause={onPause}
                    onEnd={onEnd}
                    onError={onError}
                    onStateChange={onStateChange}
                    style={{
                        margin: '0rem 0rem',
                    }}
                />
            </div>
            {!isLoadingVideoData ? (
                <>
                    <div className="xl:px-4 xl:py-4 mobile:px-2 mobile:py-2 flex flex-col gap-3 mobile:gap-1 md:gap-4 dark:bg-gradient-to-b dark:from-[#232121] dark:to-[#1c1b1b33] ">
                        <h1 className="mobile:text-lg text-[28px] mobile:text-[14px] mobileL:text-[16px] md:text-[24px] font-semibold text-black dark:text-white max-w-full line-clamp-2">
                            {videoData?.video?.video?.video_title}
                        </h1>
                        <div className=" flex gap-10 mobile:pb-[.7rem]">
                            <Link href={`/play_video/${videoData?.video?.video?.video_title}`}>
                                <div className="text-base mobile:text-xs mobileL:text-[11px] md:text-[14px] font-medium dark:text-[#FFFFFF99] text-[#00000099] hover:text-red-700 dark:hover:text-red-700 transition-all">
                                    {videoData?.video?.video?.video_title}
                                </div>
                                {}
                            </Link>
                        </div>
                        <VideoModalBottomSection videoData={videoData} isLoading={isLoadingVideoData} />
                    </div>
                </>
            ) : (
                ''
            )}
        </main>
    )
}

export default VideoSection
