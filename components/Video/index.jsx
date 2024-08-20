'use client'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import VideoPageSkeleton from './skeleton'
import YouTube from 'react-youtube'
import { VidDetailsInfo } from './detailsInfo'
import { VidDetailsOptions } from './detailsOptions'
import RelatedVideos from './relatedVideos'
import VideoDetails from './details'
import VideoAbout from './about'
import { useSearchParams } from 'next/navigation'
const Video = ({ id }) => {
    const searchParams = useSearchParams()
    const videoType = searchParams.get('videoType')
    const opts = {
        playerVars: {
            autoplay: 1,
        },
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const {
        data: videoData,
        isLoading: isVideoDataLoading,
        isError: isVideoDataError,
        error: videoDataError,
    } = useQuery({
        queryKey: ['videoData'],
        queryFn: () =>
            fetch(
                `https://savvy-folio-406713.uc.r.appspot.com/api/video-detail?video_id=${id}&video_type=${videoType}`
            ).then((res) => res.json()),
    })

    const {
        data: relatedData,
        isLoading: isRelatedDataLoading,
        isError: isRelatedDataError,
        error: relatedDataError,
    } = useQuery({
        queryKey: ['homeData'],
        queryFn: () =>
            fetch(`https://savvy-folio-406713.uc.r.appspot.com/api/data?region=Global&category=0&start_date=`).then(
                (res) => res.json()
            ),
    })

    const [option, setOption] = useState(0)
    const options = [
        {
            title: 'Related Videos',
            comp: (
                <RelatedVideos isRelatedDataLoading={isRelatedDataLoading} data={relatedData} videoType={'top_video'} />
            ),
        },
        { title: 'Video Details', comp: <VideoDetails data={videoData} /> },
        { title: 'About', comp: <VideoAbout data={videoData} /> },
    ]

    if (isVideoDataError) return <div className="mt-[76px]">Error Loading Video Content + {videoDataError}</div>
    return (
        <>
            <main
                style={{ transition: 'background-color 0.5s cubic-bezier(0.76,0,0.24,1)' }}
                className="min-h-screen mt-[76px] w-full flex flex-col items-center dark:bg-[#0a0a0a] bg-[#edeef0] text-[#0a0a0a] dark:text-white"
            >
                <div className="max-w-[1100px] 2xl:max-w-[1440px] px-[10px] md:px-[40px] w-full pb-[100px]">
                    <div className="flex flex-col items-center">
                        <div className="mt-[50px] w-full aspect-[16/9]">
                            <YouTube
                                videoId={id}
                                opts={opts}
                                iframeClassName="w-full h-full rounded-tl-[6px] rounded-tr-[6px]"
                                className="w-full h-full rounded-tl-[6px] rounded-tr-[6px]"
                            />
                        </div>
                        {isVideoDataLoading ? (
                            <VideoPageSkeleton />
                        ) : (
                            <>
                                <div className="dark:bg-darkVidDetail w-full">
                                    <VidDetailsInfo data={videoData.video} />
                                    <VidDetailsOptions setOption={setOption} option={option} options={options} />
                                </div>
                            </>
                        )}
                        <div className="w-full min-h-[324px] mt-7">{options[option].comp}</div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Video
