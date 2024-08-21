import Top20VidsSwiper from '@/components/T20Videos/swiper'
import T20ShortsSwiper from '../T20Shorts/swiper'
const RelatedVideos = ({ videoData, data, videoType, relatedKey }) => {
    const videoIdToRemove = videoData.video.video_id
    const filteredData = data[relatedKey]['0'].filter((video) => video.video_id !== videoIdToRemove)
    const filteredDataObj = {
        0: filteredData,
    }
    const swiperKeyMap = {
        top_20_videos: <Top20VidsSwiper data={filteredDataObj} videoType={videoType} />,
        hot_20_videos: <Top20VidsSwiper data={filteredDataObj} videoType={videoType} />,
        top_20_shorts: <T20ShortsSwiper data={filteredDataObj} videoType={videoType} />,
        hot_20_shorts: <T20ShortsSwiper data={filteredDataObj} videoType={videoType} />,
    }
    return <>{swiperKeyMap[relatedKey]}</>
}

export default RelatedVideos
