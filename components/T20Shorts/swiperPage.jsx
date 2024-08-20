import T20ShortCard from './card'

const ShortSwiperPage = ({ data, videoType }) => {
    return (
        <>
            <div className="grid grid-cols-2 xs:grid-cols-4 md:grid-cols-5 xl:grid-cols-8 gap-4 min-w-full max-w-full relative">
                {data.map((item, index) => (
                    <T20ShortCard key={index} data={item} videoType={videoType} />
                ))}
            </div>
        </>
    )
}

export default ShortSwiperPage
