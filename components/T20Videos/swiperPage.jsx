import T20VidCard from './card'
const SwiperPage = ({ data, videoType }) => {
    return (
        <>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 min-w-full max-w-full relative">
                {data.map((item, index) => (
                    <T20VidCard key={index} data={item} videoType={videoType} />
                ))}
            </div>
        </>
    )
}

export default SwiperPage
