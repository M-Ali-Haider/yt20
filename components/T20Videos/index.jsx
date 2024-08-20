import { useState } from 'react'
import HeadingAndViewMore from '../ViewMore'
import Top20VidsGrid from './grid'
import Top20VidsSwiper from './swiper'

const Top20Videos = ({ data }) => {
    const [isViewMore, setViewMore] = useState(false)
    return (
        <>
            <div className="mt-8 md:mt-10 lg:mt-12">
                <HeadingAndViewMore
                    heading={'Top 20 Videos for you'}
                    className={'tracking-[-0.014em] sm:font-bold sm:text-2xl sm:leading-[40px] lg:text-[32px]'}
                    setViewMore={setViewMore}
                    isViewMore={isViewMore}
                />
                {isViewMore ? <Top20VidsGrid data={data} /> : <Top20VidsSwiper data={data} />}
            </div>
        </>
    )
}

export default Top20Videos
