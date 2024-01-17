'use client'
import { useCallback, useState } from 'react'
import TopVideos from '../TopVideos'
import VideoDetails from '../VideoDetails'
import { useRegionGlobal } from '@/utils/http'

const PlayVideoDetails = [
    {
        name: 'Related Videos',
    },
    {
        name: 'Video Details',
    },
]

const VideoModalBottomSection = ({ videoId, videoData, isLoadingVideoData, categoryNum, selectedRegion }) => {
    const { data, isLoading } = useRegionGlobal(categoryNum, selectedRegion)

    const deleteVideoById = useCallback(
        (videos = [], videoID) => {
            const updatedVideos = videos.filter((video) => video?.video_id !== videoID)?.slice(0, 4)
            return updatedVideos
        },
        [data, videoId]
    )
    const newArr = deleteVideoById(data?.top_20_videos[categoryNum], videoId)
    console.log('newArr', newArr)

    const [selected, setSelected] = useState('Related Videos')
    const renderSteps = {
        'Video Details': <VideoDetails videoData={videoData} isLoadingVideoData={isLoadingVideoData} />,
        'Related Videos': (
            <TopVideos
                top_20_videos={
                    data?.top_20_videos?.hasOwnProperty(`${categoryNum}`)
                        ? data?.top_20_videos[`${categoryNum}`]?.slice(-4)
                        : //  ? newArr
                          []
                }
                isLoading={isLoading}
                selectedCategoryNumber={data?.top_20_videos?.hasOwnProperty(`${categoryNum}`) ? `${categoryNum}` : ''}
                selectedRegion={selectedRegion}
            />
        ),
    }
    return (
        <section>
            <>
                <div className="ContentAndDividerWrapper w-full px-2">
                    <div className="VideoBottomSection flex gap-10 mt-4 mobile:mt-2">
                        {PlayVideoDetails.map((item, index) => (
                            <div className="ItemDiv" key={index}>
                                <p
                                    onClick={() => setSelected(item.name)}
                                    className={`${
                                        selected === item?.name
                                            ? 'text-red-500 underline underline-offset-[20px] '
                                            : 'dark:text-white text-black'
                                    }  text-sm mobile:text-[10px] font-medium  mobileL:text-[11px] md:text-[13px]  uppercase hover:underline underline-offset-[20px] md:underline-offset-[21.5px] transition-all cursor-pointer`}
                                >
                                    {item.name}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className=" h-[1px] mobileM:h-[2px] bg-[#DDD] rounded-3xl my-[1rem]"></div>
                </div>
                {renderSteps[selected]}
            </>
        </section>
    )
}

export default VideoModalBottomSection
