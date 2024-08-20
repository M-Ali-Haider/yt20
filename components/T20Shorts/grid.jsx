import T20ShortCard from './card'

const T20ShortsGrid = ({ data, videoType }) => {
    return (
        <>
            <div className="mt-[25px] grid grid-cols-2 xs:grid-cols-4 md:grid-cols-5 xl:grid-cols-8 gap-4">
                {data['0'].map((item, index) => (
                    <T20ShortCard key={index} data={item} videoType={videoType} />
                ))}
            </div>
        </>
    )
}

export default T20ShortsGrid
