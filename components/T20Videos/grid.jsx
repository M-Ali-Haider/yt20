import { useSelector } from 'react-redux'
import T20VidCard from './card'

const Top20VidsGrid = ({ data, videoType }) => {
    const categoryValue = useSelector((state) => state.filters.category)
    return (
        <>
            <div className="mt-[25px] grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {data[categoryValue].map((item, index) => (
                    <T20VidCard key={index} data={item} videoType={videoType} />
                ))}
            </div>
        </>
    )
}

export default Top20VidsGrid
