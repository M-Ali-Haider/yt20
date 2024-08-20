import T20ShortCard from './card'

const ShortSwiperPage = ({ data }) => {
    return (
        <>
            <div className="grid grid-cols-2 xs:grid-cols-4 md:grid-cols-5 xl:grid-cols-8 gap-4 min-w-full max-w-full relative">
                {data.map((item, index) => (
                    <T20ShortCard key={index} data={item} />
                ))}
            </div>
        </>
    )
}

export default ShortSwiperPage
