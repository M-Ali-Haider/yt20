import { useState } from 'react'
import LibSwiper from '../Swiper/libSwiper'
import HeadingAndViewMore from '../ViewMore'
import T20ShortsGrid from './grid'

const Top20Shorts = ({ data, heading, videoType, id }) => {
    const [isViewMore, setViewMore] = useState(false)
    return (
        <>
            <div id={id ? id : ''} className="mt-8 md:mt-10 lg:mt-12">
                <HeadingAndViewMore
                    heading={heading}
                    className={'tracking-[-0.014em] sm:font-medium sm:text-2xl sm:leading-[40px] lg:text-[32px]'}
                    setViewMore={setViewMore}
                    isViewMore={isViewMore}
                />
                {isViewMore ? (
                    <T20ShortsGrid videoType={videoType} data={data} />
                ) : (
                    <LibSwiper data={data} videoType={videoType} isShorts={true} />
                )}
            </div>
        </>
    )
}

export default Top20Shorts
