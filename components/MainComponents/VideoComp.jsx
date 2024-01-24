'use client'
import AvatarImage from '@/components/shared/AvatarImage'
import CaroselSlider from '@/components/shared/CarosuelSlider'
import VideoSkeleton from '@/components/shared/VideoSkeleton'
import ViewMoreBtn from '@/components/shared/ViewMoreBtn'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const VideoComp = ({ videoData = [], isLoading, selectedCategoryNumber, selectedRegion, selectedTitle }) => {
    const includeVideos = selectedTitle?.includes('Videos')
    const pathName = usePathname()
    const includePlayVideo = pathName?.includes('videoPage')
    const [seeMore, setSeeMore] = useState(false)
    const seeMoreClicked = () => {
        setSeeMore(!seeMore)
    }
    const all_category = videoData
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

    return (
        <>
            <div className="TopVideo_Container">
                {videoData.length > 0 ? (
                    <>
                        <div
                            style={{ marginBottom: '1rem' }}
                            className="mobile:gap-1 flex flex-col flex mobile:py-1 mobile:px-1 md:px-4 duration-1000 transition-all"
                        >
                            <>
                                {!includePlayVideo ? (
                                    <div
                                        className="flex flex-wrap items-center gap-[0rem] sm:gap-[1rem] w-full my-2 sm:flex-nowrap"
                                        style={{ padding: '0rem 1rem' }}
                                    >
                                        <h1
                                            className="w-full text-black dark:text-white"
                                            style={{ fontSize: '25px', lineHeight: '50px' }}
                                        >
                                            {selectedTitle === 'Top20Videos'
                                                ? 'Top 20 Videos for you'
                                                : selectedTitle === 'Hot20Videos'
                                                ? 'Hot 20 Videos for you'
                                                : selectedTitle === 'Top20Shorts'
                                                ? 'Top 20 Shorts for you'
                                                : selectedTitle === 'Hot20Shorts'
                                                ? 'Hot 20 Shorts for you'
                                                : ''}
                                        </h1>
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
                                            <>
                                                {includeVideos ? (
                                                    <div className="w-ful dark:shadow grid grid-cols-2 sm:grid-cols-4 middle:grid-cols-5 laptopL:grid-cols-6 4k:grid-cols-8 gap-4">
                                                        {all_category?.map((item, index) => (
                                                            <div
                                                                key={index}
                                                                className="MovieDiv w-full overflow-hidden box-border mobile:rounded-lg  mobile:min-h-[208px]  "
                                                            >
                                                                <Link
                                                                    href={`/videoPage/${item?.video_id}/${selectedCategoryNumber}/${selectedRegion}/${selectedTitle}`}
                                                                    className="flex flex-col mobile:pb-2 font-light opacity-100 dark:hover:opacity-100 hover:opacity-90 hover:transition-transform duration-900 dark:bg-gradient-to-b dark:from-[#232121] dark:to-[#1c1b1b33]  bg-gradient-to-b from-[#fff] to-[#EDEEF0] hover:bg-gradient-to-b hover:from-[#fff] hover:to-[#fff]   "
                                                                >
                                                                    <div className="max-w-[1000px] w-full">
                                                                        <img
                                                                            src={`${item?.video.video_thumbnails.url}`}
                                                                            alt="Not Found"
                                                                            style={{
                                                                                width: 'inherit',
                                                                                height: 'inherit',
                                                                            }}
                                                                        />
                                                                        {/* <Image
                                                                            src={`${item?.video.video_thumbnails.url}`}
                                                                            className="flex object-cover"
                                                                            alt="Not Found"
                                                                            style={{
                                                                                width: 'inherit',
                                                                                height: 'inherit',
                                                                            }}
                                                                            height={50}
                                                                            width={50}
                                                                        /> */}
                                                                    </div>
                                                                    <div className="flex mobile:py-2 mobile:gap-1 md:gap-2 md:min-h-[90px] xl:min-h-[120px]  2xl:min-h-[130px]">
                                                                        <div className="flex bg-cover bg-center rounded-8px">
                                                                            <AvatarImage
                                                                                src={item?.video.video_thumbnails.url}
                                                                                style={{
                                                                                    borderRadius: '50%',
                                                                                    // minWidth: 'max-content',
                                                                                    minWidth: 'max-content',
                                                                                    minHeight: '50px',
                                                                                }}
                                                                                sx={{
                                                                                    borderRadius: '50%',
                                                                                    minHeight: '50px',
                                                                                    width: '50px',
                                                                                }}
                                                                            />
                                                                        </div>
                                                                        <div className="flex flex-col gap-[0.25rem] tablet:gap-[0.25rem] flex-wrap pr-4">
                                                                            <p className="line-clamp-2 dark:text-white text-black font-medium mobile:text-base mobile:font-semibold md:text-[15px] lg:text-[13px] xl:text-base 2xl:text-[16px]  text-clip overflow-hidden  ">
                                                                                {item?.video.video_title}
                                                                            </p>
                                                                            <p className="dark:text-[#FFFFFF99] text-[#00000099] mobile:text-xs md:text-xs lg:text-[9px] xl:text-[13px] font-semibold">
                                                                                {item?.video.video_channelTitle}
                                                                            </p>

                                                                            <div
                                                                                className="DaysAgo_MainDiv"
                                                                                style={{
                                                                                    display: 'flex',
                                                                                    flexDirection: 'row',
                                                                                    flexWrap: 'wrap',
                                                                                    gap: '0.25rem',
                                                                                    justifyContent: 'space-between',
                                                                                }}
                                                                            >
                                                                                <p className="dark:text-[#FFFFFF99] text-[#00000099] font-medium mobile:text-[12px] md:text-[12px] lg:text-[9px]  xl:text-[13px]">
                                                                                    {/* Publish */}
                                                                                    {timeSince(
                                                                                        item?.video?.video_publishedAt
                                                                                    )}
                                                                                </p>
                                                                                <p className="dark:text-[#FFFFFF99] text-[#00000099] font-medium mobile:text-[12px] md:text-[12px] lg:text-[9px]  xl:text-[12px]">
                                                                                    {/* ViewCount */}
                                                                                    {`${views(
                                                                                        item?.video.video_viewCount
                                                                                    )}`}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <div className="w-ful dark:shadow grid grid-cols-2 sm:grid-cols-4 middle:grid-cols-5 laptopL:grid-cols-6 4k:grid-cols-8 gap-4">
                                                        {all_category?.map((item, index) => (
                                                            <div
                                                                key={index}
                                                                className=" mobile:rounded-lg rounded-2xl overflow-hidden box-border "
                                                            >
                                                                <Link
                                                                    href={`/videoPage/${item?.video_id}/${selectedCategoryNumber}/${selectedRegion}/${selectedTitle}`}
                                                                    className="flex flex-col dark:hover:opacity-100 hover:opacity-90 hover:transition-transform duration-900 dark:bg-gradient-to-b dark:from-[#232121] dark:to-[#1c1b1b33]  bg-gradient-to-b from-[#fff] to-[#EDEEF9] hover:bg-gradient-to-b hover:from-[#fff] hover:to-[#fff]"
                                                                >
                                                                    <img
                                                                        src={`${item?.video.video_thumbnails.url}`}
                                                                        alt="Not Found"
                                                                        style={{
                                                                            width: 'inherit',
                                                                            height: 'inherit',
                                                                        }}
                                                                    />
                                                                    {/* <Image
                                                                        src={`${item?.video.video_thumbnails.url}`}
                                                                        className="flex object-cover"
                                                                        alt="Not Found"
                                                                        style={{ width: 'inherit', height: 'inherit' }}
                                                                        height={50}
                                                                        width={50}
                                                                    /> */}
                                                                    <div className="flex p-4 gap-3s pb-4">
                                                                        <div className="flex flex-col gap-1 flex-wrap text-sm">
                                                                            <p className="dark:text-white text-black  mobile:text-base lg:text-[13px] xl:text-base font-semibold  line-clamp-2">
                                                                                {item.video.video_title}
                                                                            </p>

                                                                            <p className="dark:text-[#FFFFFF99] text-[#00000099] mobile:text-[10px] md:text-sm lg:text-[9px] xl:text-[11px] text-[18px] font-medium  line-clamp-2">
                                                                                {item.video.video_title}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </>
                                        ) : (
                                            <>
                                                <CaroselSlider
                                                    slidesArray={videoData}
                                                    selectedCategoryNumber={selectedCategoryNumber}
                                                    selectedRegion={selectedRegion}
                                                    selectedTitle={selectedTitle}
                                                    // for="Videos"
                                                    for={includeVideos ? 'Videos' : 'Shorts'}
                                                />
                                            </>
                                        )}
                                    </>
                                ) : (
                                    <div className="NoDataDiv">
                                        <h1 className="dark:text-white text-black">No Data Found</h1>
                                    </div>
                                )}
                            </>
                        </div>
                    </>
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
            </div>
            {!includePlayVideo && selectedTitle !== 'Hot20Shorts' ? (
                <div
                    style={{ backgroundColor: '#EF4444' }}
                    className=" h-[0.75px] bg-[#DDD] rounded-3xl my-4 md:mx-4 mobile:mx-2 "
                ></div>
            ) : (
                ''
            )}
        </>
    )
}

export default VideoComp
