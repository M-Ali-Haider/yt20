import T20ShortsSkeleton from '../T20Shorts/skeleton'
import T20VideosSkeleton from '../T20Videos/skeleton'
import TopLine from './line'

const TopSkeleton = () => {
    return (
        <>
            <T20VideosSkeleton />
            <TopLine />
            <T20ShortsSkeleton />
        </>
    )
}

export default TopSkeleton
