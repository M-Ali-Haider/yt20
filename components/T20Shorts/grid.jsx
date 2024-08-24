import { useSelector } from 'react-redux'
import T20ShortCard from './card'

const T20ShortsGrid = ({ data, videoType }) => {
    const categoryValue = useSelector((state) => state.filters.category)
    return (
        <>
            <div className="mt-[25px] grid grid-cols-2 xs:grid-cols-4 md:grid-cols-5 xl:grid-cols-8 gap-4">
                {data[categoryValue].map((item, index) => (
                    <T20ShortCard key={index} data={item} videoType={videoType} />
                ))}
            </div>
        </>
    )
}

export default T20ShortsGrid
