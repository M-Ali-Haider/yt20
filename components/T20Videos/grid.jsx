import T20VidCard from './card'

const Top20VidsGrid = ({ data }) => {
    return (
        <>
            <div className="mt-[25px] grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {data['0'].map((item, index) => (
                    <T20VidCard key={index} data={item} />
                ))}
            </div>
        </>
    )
}

export default Top20VidsGrid
