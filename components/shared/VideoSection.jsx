'use client'
import { useVideoById } from '@/utils/http'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import YouTube from 'react-youtube'
import VideoModalBottomSection from './VideoModalBottomSection'
import useWindowDimensions from '@/utils/CustomHooks'
import VisibilityIcon from '@mui/icons-material/Visibility'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
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
    const { width: windowWidth } = useWindowDimensions()
    const { data: videoData, isLoading: isLoadingVideoData } = useVideoById(videoId, VideoType[selectedTitle])
    console.log('videoData', videoData)

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

    const Tags = videoData?.video?.video?.video_tags?.slice(0, 10)

    const aspectRatio = 2 / 2 // Desired aspect ratio
    const calculatedHeight = (windowWidth) =>
        windowWidth < 425
            ? `${Math.round(200 * aspectRatio)}px`
            : windowWidth < 600
              ? `${Math.round(400 * aspectRatio)}px`
              : windowWidth < 900
                ? `${Math.round(500 * aspectRatio)}px`
                : windowWidth < 1024
                  ? `${Math.round(500 * aspectRatio)}px`
                  : windowWidth < 1440
                    ? `${Math.round(600 * aspectRatio)}px`
                    : windowWidth < 1600
                      ? `${Math.round(900 * aspectRatio)}px`
                      : windowWidth < 2560
                        ? `${Math.round(1200 * aspectRatio)}px`
                        : `${Math.round(1400 * aspectRatio)}px`

    return (
        <main className="MainYoutube w-full flex flex-col xl:px-6 xl:py-2 ">
            <div
                className={`YoutubeMainDiv w-full mobile:object-cover xl:rounded-tl-lg xl:rounded-tr-lg mt-[6rem] mobile:mt-[4.5rem] md:mt-[4.5rem] lg:mt-[5.2rem] 2xl:mt-[6.3rem] overflow-hidden`}
            >
                <YouTube
                    className="YOUTUBE_PLAYER"
                    videoId={videoId}
                    opts={{
                        height: calculatedHeight(windowWidth),
                        // height:
                        //     windowWidth < 425
                        //         ? '200px'
                        //         : windowWidth < 600
                        //           ? '400px'
                        //           : windowWidth < 900
                        //             ? '500px'
                        //             : windowWidth < 1024
                        //               ? '500px'
                        //               : windowWidth < 1440
                        //                 ? '600px'
                        //                 : windowWidth < 1600
                        //                   ? '900px'
                        //                   : windowWidth < 2560
                        //                     ? '1200px'
                        //                     : '1400px',
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
                        {/* Title  */}
                        <div className="title">
                            <h1
                                style={{ marginTop: '2rem' }}
                                className="VideoTitle mobile:text-lg text-[28px] mobile:text-[14px] mobileL:text-[16px] md:text-[24px] font-semibold text-black dark:text-white max-w-full line-clamp-2"
                            >
                                {videoData?.video?.video?.video_title}
                            </h1>
                        </div>
                        {/* start */}
                        <div className="mainprinter flex flex-row gap-[2rem] flex-wrap">
                            <div className="views flex flex-row gap-2 items-center">
                                <VisibilityIcon sx={{ color: 'grey' }} />
                                <p style={{ color: 'grey' }}>Views</p>
                                <p style={{ color: 'grey' }}>{videoData?.video?.video?.video_viewCount}</p>
                            </div>
                            <div className="views flex flex-row gap-2 items-center">
                                <ThumbUpOffAltIcon sx={{ color: 'grey' }} />
                                <p style={{ color: 'grey' }}>Likes</p>
                                <p style={{ color: 'grey' }}>{videoData?.video?.video?.video_likeCount}</p>
                            </div>
                        </div>

                        {/* end  */}
                        {/* Tags */}
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
                                        <div className="Tag">#${item}</div>
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
