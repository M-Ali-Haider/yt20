'use client'
import { useVideoById } from '@/utils/http'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import YouTube from 'react-youtube'
import VideoModalBottomSection from './VideoModalBottomSection'

const VideoType = {
    Top20Videos: 'top_video',
    Hot20Videos: 'hot_video',
    Top20Shorts: 'top_short',
    Hot20Shorts: 'hot_short',
}
const VideoSection = () => {
    const {
        id: [videoId, categoryNum, selectedRegion, selectedTitle],
    } = useParams()
    const { data: videoData, isLoading: isLoadingVideoData } = useVideoById(videoId, VideoType[selectedTitle])

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

    const Tags = videoData?.video?.video?.video_tags

    return (
        <main className="MainYoutube w-full flex flex-col xl:px-6 xl:py-2 ">
            <div
                className={`YoutubeMainDiv w-full mobile:object-cover  xl:h-[630px] xl:rounded-tl-lg xl:rounded-tr-lg mt-[6rem] mobile:mt-[4.5rem] md:mt-[4.5rem] lg:mt-[5.2rem] 2xl:mt-[6.3rem] overflow-hidden`}
            >
                <YouTube
                    videoId={videoId}
                    opts={{
                        height: '600px',
                        width: '100%',
                        playerVars: {
                            autoplay: 0,
                        },
                    }}
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
                    <div className="VideoSection xl:px-4 xl:py-4 mobile:px-2 mobile:py-2 flex flex-col gap-3 mobile:gap-1 md:gap-4 dark:bg-gradient-to-b dark:from-[#232121] dark:to-[#1c1b1b33] ">
                        <h1
                            style={{ marginTop: '2rem' }}
                            className="VideoTitle mobile:text-lg text-[28px] mobile:text-[14px] mobileL:text-[16px] md:text-[24px] font-semibold text-black dark:text-white max-w-full line-clamp-2"
                        >
                            {videoData?.video?.video?.video_title}
                        </h1>
                        <div
                            className="VideoTag flex gap-10 "
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '0.5rem',
                                color: 'grey',
                            }}
                        >
                            {Tags?.map((item) => {
                                return (
                                    <>
                                        <div className="Tag">{item}</div>
                                    </>
                                )
                            })}
                        </div>
                        <VideoModalBottomSection
                            videoId={videoId}
                            videoData={videoData}
                            isLoadingVideoData={isLoadingVideoData}
                            categoryNum={categoryNum}
                            selectedRegion={selectedRegion}
                            selectedTitle={selectedTitle}
                        />
                    </div>
                </>
            ) : (
                ''
            )}
        </main>
    )
}

export default VideoSection
