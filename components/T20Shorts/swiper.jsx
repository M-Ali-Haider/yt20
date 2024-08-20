import { useState } from 'react'
import SwiperButton from '../T20Videos/swiperButton'
import ShortSwiperPage from './swiperPage'
import { useMediaQuery } from 'react-responsive'

const T20ShortsSwiper = ({ data }) => {
    const isXs = useMediaQuery({ query: '(min-width: 550px)' })
    const isMd = useMediaQuery({ query: '(min-width: 768px)' })
    const isXl = useMediaQuery({ query: '(min-width: 1280px)' })
    const slidesPerPage = isXl ? 8 : isMd ? 5 : isXs ? 4 : 2

    const [currentSlide, setCurrentSlide] = useState(0)
    const totalPages = Math.ceil(20 / slidesPerPage) - 1

    const nextSlide = () => {
        if (currentSlide === totalPages) {
            setCurrentSlide(0)
        } else {
            setCurrentSlide(currentSlide + 1)
        }
    }
    const previousSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(totalPages)
        } else {
            setCurrentSlide(currentSlide - 1)
        }
    }

    return (
        <>
            <div className="mt-[25px] relative">
                <div className="w-full h-full relative flex items-center overflow-hidden">
                    <div
                        style={{ left: currentSlide * -100 + '%' }}
                        className="flex relative w-full h-full transition-all duration-500 ease-custom-ease"
                    >
                        {[...Array(totalPages + 1)].map((_, index) => (
                            <ShortSwiperPage
                                key={index}
                                data={data['0'].slice(slidesPerPage * index, slidesPerPage * index + slidesPerPage)}
                            />
                        ))}
                    </div>
                </div>
                <SwiperButton className={'right-0 md:-right-[20px] xs:top-[112px]'} handleClick={nextSlide} />
                <SwiperButton
                    className={'left-0 md:-left-[20px] rotate-180 xs:top-[112px]'}
                    handleClick={previousSlide}
                />
            </div>
        </>
    )
}

export default T20ShortsSwiper
