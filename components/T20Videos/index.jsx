import HeadingAndViewMore from '../ViewMore'
import Top20VidsGrid from './grid'
import LibSwiper from '../Swiper/libSwiper'
import T20VideosSkeleton from './skeleton'
import TopLine from '../TopSkeleton/line'

const Top20Videos = ({ isLine, isLoading, data, heading, videoType, id, className, isViewMore, setViewMore }) => {
    const keyMap = {
        top_video: 'top_20_videos',
        hot_video: 'hot_20_videos',
    }
    return (
        <>
            <div id={id} className={`pb-[40px] ${className}`}>
                {isLine && <TopLine />}
                <HeadingAndViewMore
                    heading={heading}
                    className={'tracking-[-0.014em] sm:font-bold sm:text-2xl sm:leading-[40px] lg:text-[32px]'}
                    setViewMore={setViewMore}
                    isViewMore={isViewMore}
                />
                {isLoading ? (
                    <T20VideosSkeleton />
                ) : (
                    <>
                        {isViewMore ? (
                            <Top20VidsGrid data={data[keyMap[videoType]]} videoType={videoType} />
                        ) : (
                            <LibSwiper data={data[keyMap[videoType]]} videoType={videoType} isShorts={false} />
                        )}
                    </>
                )}
            </div>
        </>
    )
}

export default Top20Videos
