'use client'
import AvatarImage from '@/components/shared/AvatarImage'
import CaroselSlider from '@/components/shared/CarosuelSlider'
import ViewMoreBtn from '@/components/shared/ViewMoreBtn'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import VideoSkeleton from './shared/VideoSkeleton'

const HotVideos = ({ hot_20_videos = [], isLoading, selectedCategoryNumber, selectedRegion, selectedTitle }) => {
    const pathName = usePathname()
    const includePlayVideo = pathName?.includes('play_video')

    const [seeMore, setSeeMore] = useState(false)
    const seeMoreClicked = () => {
        setSeeMore(!seeMore)
    }
    const all_category = hot_20_videos

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

    const views = (views) => {
        const viewsInMillion = views / 1000000
        if (viewsInMillion >= 1) return `${viewsInMillion.toFixed(1)}M`

        return `${views.toFixed(0).slice(0, 3)}K`
    }

    // const timesAgo = timeSince(formattedPostedDate)

    return (
        <>
            {hot_20_videos.length > 0 ? (
                <div
                    className="mobile:gap-1 flex flex-col mobile:py-1 mobile:px-1 md:px-4 duration-1000 transition-all"
                    style={{ padding: `${includePlayVideo ? '0px' : ''}` }}
                >
                    <>
                        {!includePlayVideo ? (
                            <div
                                style={{ backgroundColor: '#EF4444' }}
                                className=" h-[0.75px] bg-[#DDD] rounded-3xl my-4 md:mx-4 mobile:mx-2 "
                            ></div>
                        ) : (
                            ''
                        )}
                        {!includePlayVideo ? (
                            <div
                                // className="flex justify-between items-center mobile:py-[2px] mobile:px-3 mobile:mt-3 lg:gap-6 md:pb-1 xl:px-4 mb-4"
                                className="flex flex-wrap items-center gap-[0rem] sm:gap-[1rem] w-full my-2 sm:flex-nowrap"
                                style={{ paddingLeft: '0px' }}
                            >
                                <h1
                                    className="w-full text-black dark:text-white"
                                    style={{ fontSize: '25px', lineHeight: '50px' }}
                                >
                                    Hot 20 Videos for you
                                </h1>
                                {/* <ViewMoreBtn isLoading={isLoading} /> */}
                                <ViewMoreBtn
                                    className={
                                        'flex items-center justify-between h-[30px] w-full sm:w-[110px] px-4 rounded-[16px] border border-1 border-red-500 dark:bg-gradient-to-b dark:bg-[#19191A] bg-white text-nowrap capitalize dark:text-white dark:hover:text-red-500 hover:text-red-500 duration-1000 transition-all dark:hover:opacity-100 hover:opacity-90'
                                    }
                                    seeMore={seeMore}
                                    onClick={seeMoreClicked}
                                />
                            </div>
                        ) : (
                            ''
                        )}
                        {!!all_category && all_category.length > 0 ? (
                            <>
                                {seeMore ? (
                                    <div className="w-ful dark:shadow grid grid-cols-2 sm:grid-cols-4 middle:grid-cols-5 laptopL:grid-cols-6 4k:grid-cols-8 gap-4">
                                        {all_category.map((item, index) => (
                                            <div
                                                key={index}
                                                className="MovieDiv w-full overflow-hidden box-border mobile:rounded-lg  mobile:min-h-[208px]  "
                                            >
                                                <Link
                                                    // href={`/play_video/${item?.video.video_id} `}
                                                    href={`/play_video/${item?.video_id}/${selectedCategoryNumber}/${selectedRegion}/${selectedTitle}`}
                                                    className="flex flex-col mobile:pb-2 font-light opacity-100 dark:hover:opacity-100 hover:opacity-90 hover:transition-transform duration-900 dark:bg-gradient-to-b dark:from-[#232121] dark:to-[#1c1b1b33]  bg-gradient-to-b from-[#fff] to-[#EDEEF0] hover:bg-gradient-to-b hover:from-[#fff] hover:to-[#fff]   "
                                                >
                                                    <div className="max-w-[1000px] w-full">
                                                        {/* <img
                                                                src={`${item?.video.video_thumbnails.url}`}
                                                                alt="Not Found"
                                                                style={{ width: 'inherit', height: 'inherit' }}
                                                            /> */}
                                                        <Image
                                                            src={`${item?.video.video_thumbnails.url}`}
                                                            className="flex object-cover"
                                                            alt="Not Found"
                                                            style={{ width: 'inherit', height: 'inherit' }}
                                                            height={50}
                                                            width={50}
                                                        />
                                                    </div>
                                                    {/* <div className="MainImageAndTextDiv flex mobile:py-2 mobile:gap-1 mobile:px-1 md:gap-2 md:min-h-[90px] xl:min-h-[120px]  2xl:min-h-[130px]"> */}
                                                    <div
                                                        style={{ paddingTop: '0.5rem' }}
                                                        className="MainImageAndTextDiv flex mobile:py-2 gap-[0.5rem]"
                                                    >
                                                        <div className="flex bg-cover bg-center rounded-8px">
                                                            <AvatarImage
                                                                src={item?.video.video_thumbnails.url}
                                                                style={{
                                                                    borderRadius: '50%',
                                                                    minWidth: '50px',
                                                                    minHeight: '50px',
                                                                }}
                                                                sx={{
                                                                    borderRadius: '50%',
                                                                    minHeight: '50px',
                                                                    width: '50px',
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="flex flex-col mobile:gap-[2px] md:gap-1 flex-wrap">
                                                            <p className="line-clamp-2 dark:text-white text-black font-medium mobile:text-base mobile:font-semibold md:text-[15px] lg:text-[13px] xl:text-base 2xl:text-[16px]  text-clip overflow-hidden  ">
                                                                {item?.video.video_title}
                                                            </p>
                                                            <p className="dark:text-[#FFFFFF99] text-[#00000099] mobile:text-xs md:text-xs lg:text-[9px] xl:text-[13px] font-semibold">
                                                                {item?.video.video_channelTitle}
                                                            </p>
                                                            {/* <div className="flex gap-[2px]">
                                                                    <p className="dark:text-[#FFFFFF99] text-[#00000099] mobile:text-[13px] md:text-[13px] lg:text-[9px]  xl:text-[13px]  font-medium ">
                                                                        {timeSince(item?.video?.video_publishedAt)}
                                                                    </p>
                                                                    <p className="dark:text-[#FFFFFF99] text-[#00000099] mobile:text-[13px] md:text-[13px] lg:text-[9px]  xl:text-[13px]  font-medium">
                                                                        {`${views(item?.video.video_viewCount)}`}
                                                                    </p>
                                                                </div> */}
                                                            <div
                                                                className="DaysAgo_MainDiv"
                                                                style={{
                                                                    display: 'flex',
                                                                    flexDirection: 'row',
                                                                    flexWrap: 'wrap',
                                                                    // gap: '4px',
                                                                    justifyContent: 'space-between',
                                                                }}
                                                            >
                                                                <p className="dark:text-[#FFFFFF99] text-[#00000099] font-medium mobile:text-[12px] md:text-[12px] lg:text-[9px]  xl:text-[13px]">
                                                                    {/* Publish */}
                                                                    {timeSince(item?.video?.video_publishedAt)}
                                                                </p>
                                                                <p className="dark:text-[#FFFFFF99] text-[#00000099] font-medium mobile:text-[12px] md:text-[12px] lg:text-[9px]  xl:text-[12px]">
                                                                    {/* ViewCount */}
                                                                    {`${views(item?.video.video_viewCount)}`}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <CaroselSlider
                                        slidesArray={hot_20_videos}
                                        selectedCategoryNumber={selectedCategoryNumber}
                                        selectedRegion={selectedRegion}
                                        selectedTitle={selectedTitle}
                                        for="Videos"
                                    />
                                )}
                            </>
                        ) : (
                            <div className="NoDataDiv">
                                <h1 className="dark:text-white text-black">No Data Found</h1>
                            </div>
                        )}
                    </>
                </div>
            ) : (
                <div
                    style={{ marginBottom: '10rem' }}
                    className="w-ful dark:shadow grid grid-cols-2 sm:grid-cols-4 middle:grid-cols-5 laptopL:grid-cols-6 4k:grid-cols-8 gap-4 mb-4"
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
                        return <VideoSkeleton key={item} />
                    })}
                </div>
            )}
        </>
    )
}

export default HotVideos
