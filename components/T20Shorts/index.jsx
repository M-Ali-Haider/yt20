import { useState } from 'react'
import LibSwiper from '../Swiper/libSwiper'
import HeadingAndViewMore from '../ViewMore'
import T20ShortsGrid from './grid'
import T20ShortsSkeleton from './skeleton'
import TopLine from '../TopSkeleton/line'

const Top20Shorts = ({ isLoading, data, heading, videoType, id }) => {
    const [isViewMore, setViewMore] = useState(false)
    const keyMap = {
        top_short: 'top_20_shorts',
        hot_short: 'hot_20_shorts',
    }
    return (
        <>
            <div id={id} className="">
                <HeadingAndViewMore
                    heading={heading}
                    className={'tracking-[-0.014em] sm:font-medium sm:text-2xl sm:leading-[40px] lg:text-[32px]'}
                    setViewMore={setViewMore}
                    isViewMore={isViewMore}
                />
                {isLoading ? (
                    <T20ShortsSkeleton />
                ) : (
                    <>
                        {isViewMore ? (
                            <T20ShortsGrid videoType={videoType} data={data[keyMap[videoType]]} />
                        ) : (
                            <LibSwiper data={data[keyMap[videoType]]} videoType={videoType} isShorts={true} />
                        )}
                    </>
                )}
                <TopLine />
            </div>
        </>
    )
}

export default Top20Shorts
