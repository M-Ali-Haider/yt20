import LibSwiper from '../Swiper/libSwiper'

const RelatedVideos = ({ videoData, data, videoType, relatedKey }) => {
    const { video_id: videoIdToRemove } = videoData.video
    const filteredData = data[relatedKey]['0'].filter((video) => video.video_id !== videoIdToRemove)

    const isShorts = relatedKey.includes('shorts')
    const swiperData = { 0: filteredData }

    return <LibSwiper data={swiperData} videoType={videoType} isShorts={isShorts} />
}

export default RelatedVideos
