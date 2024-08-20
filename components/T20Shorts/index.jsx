import { useState } from 'react'
import HeadingAndViewMore from '../ViewMore'
import T20ShortsGrid from './grid'
import T20ShortsSwiper from './swiper'

const Top20Shorts = ({ data, heading, videoType }) => {
    const [isViewMore, setViewMore] = useState(false)
    return (
        <>
            <div className="mt-8 md:mt-10 lg:mt-12">
                <HeadingAndViewMore
                    heading={heading}
                    className={'tracking-[-0.014em] sm:font-medium sm:text-2xl sm:leading-[40px] lg:text-[32px]'}
                    setViewMore={setViewMore}
                    isViewMore={isViewMore}
                />
                {isViewMore ? (
                    <T20ShortsGrid videoType={videoType} data={data} />
                ) : (
                    <T20ShortsSwiper videoType={videoType} data={data} />
                )}
            </div>
        </>
    )
}

export default Top20Shorts
