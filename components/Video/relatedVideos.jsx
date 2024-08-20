import Top20VidsSwiper from '@/components/T20Videos/swiper'
import { VidGridSkeleton } from '@/components/T20Videos/skeleton'
const RelatedVideos = ({ isRelatedDataLoading, data }) => {
    return <>{isRelatedDataLoading ? <VidGridSkeleton /> : <Top20VidsSwiper data={data['top_20_videos']} />}</>
}

export default RelatedVideos