import CaroselSlider from '@/components/shared/CarosuelSlider'
import ViewMoreBtn from '@/components/shared/ViewMoreBtn'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import ShortsSkeleton from './shared/ShortsSkeleton'

const TopShorts = ({ top_20_shorts = [], isLoading, selectedCategoryNumber, selectedRegion, selectedTitle }) => {
    const pathName = usePathname()
    const includePlayVideo = pathName?.includes('play_video')
    const [seeMore, setSeeMore] = useState(false)
    const seeMoreClicked = () => {
        setSeeMore(!seeMore)
    }
    const all_category = top_20_shorts
    return (
        <>
            {top_20_shorts.length > 0 ? (
                <>
                    <div className=" mobile:gap-1 flex flex-col mobile:py-1 mobile:px-2 md:px-4">
                        <div>
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
                                    className="flex flex-wrap items-center gap-[0rem] sm:gap-[1rem] w-full my-2 sm:flex-nowrap"
                                    style={{ padding: '0rem 1rem' }}
                                >
                                    <h1
                                        className="w-full text-black dark:text-white"
                                        style={{ fontSize: '25px', lineHeight: '50px' }}
                                    >
                                        Top 20 Shorts for you
                                    </h1>
                                    {/* <ViewMoreBtn /> */}
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
                                            {all_category?.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className=" mobile:rounded-lg rounded-2xl overflow-hidden box-border "
                                                >
                                                    <Link
                                                        // href={`/${item.name}`}
                                                        href={`/play_video/${item?.video_id}/${selectedCategoryNumber}/${selectedRegion}/${selectedTitle}`}
                                                        className="flex flex-col dark:hover:opacity-100 hover:opacity-90 hover:transition-transform duration-900 dark:bg-gradient-to-b dark:from-[#232121] dark:to-[#1c1b1b33]  bg-gradient-to-b from-[#fff] to-[#EDEEF9] hover:bg-gradient-to-b hover:from-[#fff] hover:to-[#fff]"
                                                    >
                                                        {/* <img
                                                                    src={`${item?.video.video_thumbnails.url}`}
                                                                    // src={item.image}
                                                                    alt="Not Found"
                                                                    style={{ width: 'inherit' }}
                                                                /> */}
                                                        <Image
                                                            src={`${item?.video.video_thumbnails.url}`}
                                                            className="flex object-cover"
                                                            alt="Not Found"
                                                            style={{ width: 'inherit', height: 'inherit' }}
                                                            height={50}
                                                            width={50}
                                                        />
                                                        <div className="flex p-4 gap-3s pb-4">
                                                            <div className="flex flex-col gap-1 flex-wrap text-sm">
                                                                <p className="dark:text-white text-black  mobile:text-base lg:text-[13px] xl:text-base font-semibold  line-clamp-2">
                                                                    {item.video.video_title}
                                                                </p>

                                                                <p className="dark:text-[#FFFFFF99] text-[#00000099] mobile:text-[13px] md:text-sm lg:text-[9px] xl:text-[11px] text-[18px] font-medium  line-clamp-2">
                                                                    {item.video.video_title}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <CaroselSlider
                                            slidesArray={top_20_shorts}
                                            selectedCategoryNumber={selectedCategoryNumber}
                                            selectedRegion={selectedRegion}
                                            selectedTitle={selectedTitle}
                                            for="Shorts"
                                        />
                                    )}
                                </>
                            ) : (
                                <div className="NoDataDiv">
                                    <h1 className="dark:text-white text-black">No Data Found</h1>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <div
                    style={{ marginBottom: '10rem' }}
                    className="w-ful dark:shadow grid grid-cols-2 sm:grid-cols-4 middle:grid-cols-5 laptopL:grid-cols-6 4k:grid-cols-8 gap-4 mb-4"
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
                        return <ShortsSkeleton key={item} />
                    })}
                </div>
            )}
        </>
    )
}

export default TopShorts
