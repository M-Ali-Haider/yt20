import Link from 'next/link'
import ShortsSkeleton from './shared/ShortsSkeleton'
import ViewMoreBtn from '@/components/shared/ViewMoreBtn'
import { useState } from 'react'
import CaroselSlider from '@/components/shared/CarosuelSlider'
import { usePathname } from 'next/navigation'

const HotShorts = ({ hot_20_shorts = [], isLoading, selectedCategoryNumber, selectedRegion, selectedTitle }) => {
    const pathName = usePathname()
    const includePlayVideo = pathName?.includes('play_video')
    const [seeMore, setSeeMore] = useState(false)
    const seeMoreClicked = () => {
        setSeeMore(!seeMore)
    }
    const all_category = hot_20_shorts

    return (
        <div className=" mobile:gap-1 flex flex-col mobile:py-1 mobile:px-2 md:px-4">
            {isLoading ? (
                <div className="w-full grid mobile:grid-cols-2 mobileL:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-7 2xl:grid-cols-9 gap-4 mobile:px-1 ">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                        return <ShortsSkeleton key={item} />
                    })}
                </div>
            ) : (
                <>
                    {hot_20_shorts.length > 0 ? (
                        <>
                            {!includePlayVideo ? (
                                <div
                                    className=" h-[0.75px] bg-[#DDD] rounded-3xl my-4 md:mx-4 mobile:mx-2 "
                                    style={{ backgroundColor: '#EF4444' }}
                                ></div>
                            ) : (
                                ''
                            )}
                            {!includePlayVideo ? (
                                <div
                                    style={{ paddingLeft: '0px', marginBottom: '1rem' }}
                                    className="flex justify-between items-center mobile:py-[2px] mobile:px-3 mobile:mt-3 lg:gap-6 md:pb-1 xl:px-4 mb-4"
                                >
                                    <h1
                                        style={{ fontSize: '26px' }}
                                        className="mobile:text-base  md:text-[24px] 2xl:text-[22px] font-semibold text-black dark:text-white"
                                    >
                                        Hot 20 Shorts for you
                                    </h1>
                                    {/* <ViewMoreBtn /> */}
                                    <ViewMoreBtn seeMore={seeMore} onClick={seeMoreClicked} />
                                </div>
                            ) : (
                                ''
                            )}
                            {!!all_category && all_category.length > 0 ? (
                                <>
                                    {seeMore ? (
                                        // <div className="w-full grid mobile:grid-cols-2 mobileL:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-7 2xl:grid-cols-9 gap-4 ">
                                        <div className="w-ful dark:shadow grid grid-cols-1 sm:grid-cols-2 middle:grid-cols-4 laptopL:grid-cols-6 4k:grid-cols-8 gap-4">
                                            {all_category?.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className=" mobile:rounded-lg rounded-2xl overflow-hidden box-border "
                                                >
                                                    <Link
                                                        // href={`/${item.name}`}
                                                        href={`/play_video/${item?.video_id}/${selectedCategoryNumber}/${selectedRegion}/${selectedTitle}`}
                                                        src={`${item?.video.video_thumbnails.url}`}
                                                        className="flex flex-col dark:hover:opacity-100 dark:opacity-90 hover:opacity-90 hover:transition-transform duration-900 dark:bg-gradient-to-b dark:from-[#232121] dark:to-[#1c1b1b33]  bg-gradient-to-b from-[#fff] to-[#EDEEF9] hover:bg-gradient-to-b hover:from-[#fff] hover:to-[#fff]"
                                                    >
                                                        <img
                                                            src={`${item?.video.video_thumbnails.url}`}
                                                            // src={item.image}
                                                            alt="Not Found"
                                                            style={{ width: 'inherit' }}
                                                        />
                                                        <div className="flex p-4 gap-3 pb-4">
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
                                            slidesArray={hot_20_shorts}
                                            selectedCategoryNumber={selectedCategoryNumber}
                                            selectedRegion={selectedRegion}
                                            selectedTitle={selectedTitle}
                                        />
                                    )}
                                </>
                            ) : (
                                <div className="NoDataDiv">
                                    <h1 className="dark:text-white text-black">No Data Found</h1>
                                </div>
                            )}
                        </>
                    ) : (
                        ''
                    )}
                </>
            )}
        </div>
    )
}

export default HotShorts
