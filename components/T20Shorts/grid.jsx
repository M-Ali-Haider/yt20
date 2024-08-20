import T20ShortCard from './card'

const T20ShortsGrid = ({ data }) => {
    return (
        <>
            <div className="mt-[25px] grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-8 gap-4">
                {data['0'].map((item, index) => (
                    <T20ShortCard key={index} data={item} />
                ))}
            </div>
        </>
    )
}

export default T20ShortsGrid
