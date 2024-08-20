'use client'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import VideoPageSkeleton from './skeleton'
import VideoMain from './main'
import YouTube from 'react-youtube'
import VideoDetails from './details'
const Video = ({ id }) => {
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
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ['videoData'],
        queryFn: () =>
            fetch(
                `https://savvy-folio-406713.uc.r.appspot.com/api/video-detail?video_id=${id}&video_type=top_video`
            ).then((res) => res.json()),
    })
    if (isError) return <div className="mt-[76px]">Error Loading Video Content + {error}</div>
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
                            {isLoading && <VideoPageSkeleton />}
                            {!isLoading && <VideoDetails data={videoData.video} />}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Video

{
    /* https://savvy-folio-406713.uc.r.appspot.com/api/video-detail?video_id=UPrkC1LdlLY&video_type=top_video
                https://savvy-folio-406713.uc.r.appspot.com/api/video-detail?video_id=rPkvQCvCDKU&video_type=top_short */
}
