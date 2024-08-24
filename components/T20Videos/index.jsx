import { useState } from 'react'
import HeadingAndViewMore from '../ViewMore'
import Top20VidsGrid from './grid'
import LibSwiper from '../Swiper/libSwiper'

const Top20Videos = ({ data, heading, videoType, id }) => {
    const [isViewMore, setViewMore] = useState(false)
    return (
        <>
            <div id={id ? id : ''} className="mt-8 md:mt-10 lg:mt-12">
                <HeadingAndViewMore
                    heading={heading}
                    className={'tracking-[-0.014em] sm:font-bold sm:text-2xl sm:leading-[40px] lg:text-[32px]'}
                    setViewMore={setViewMore}
                    isViewMore={isViewMore}
                />
                {isViewMore ? (
                    <Top20VidsGrid data={data} videoType={videoType} />
                ) : (
                    <LibSwiper data={data} videoType={videoType} isShorts={false} />
                )}
            </div>
        </>
    )
}

export default Top20Videos
