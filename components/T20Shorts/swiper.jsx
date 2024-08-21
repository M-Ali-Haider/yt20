import { useState } from 'react'
import SwiperButton from '../T20Videos/swiperButton'
import ShortSwiperPage from './swiperPage'
import { useMediaQuery } from 'react-responsive'

const T20ShortsSwiper = ({ data, videoType }) => {
    const isXs = useMediaQuery({ query: '(min-width: 550px)' })
    const isMd = useMediaQuery({ query: '(min-width: 768px)' })
    const isXl = useMediaQuery({ query: '(min-width: 1280px)' })
    const slidesPerPage = isXl ? 8 : isMd ? 5 : isXs ? 4 : 2

    const [currentSlide, setCurrentSlide] = useState(0)
    const totalPages = Math.ceil(data['0'].length / slidesPerPage) - 1

    const nextSlide = () => {
        if (currentSlide !== totalPages) {
            setCurrentSlide(currentSlide + 1)
        }
    }
    const previousSlide = () => {
        if (currentSlide !== 0) {
            setCurrentSlide(currentSlide - 1)
        }
    }

    //
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX)
    }

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) {
            // Swiped left, go to the next slide
            nextSlide()
        }

        if (touchStart - touchEnd < -50) {
            // Swiped right, go to the previous slide
            previousSlide()
        }
    }

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    return (
        <>
            <div className="mt-[25px] relative">
                <div
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    className="w-full h-full relative flex items-center overflow-hidden"
                >
                    <div
                        style={{ left: currentSlide * -100 + '%' }}
                        className="flex relative w-full h-full transition-all duration-500 ease-custom-ease"
                    >
                        {[...Array(totalPages + 1)].map((_, index) => (
                            <ShortSwiperPage
                                videoType={videoType}
                                key={index}
                                data={data['0'].slice(slidesPerPage * index, slidesPerPage * index + slidesPerPage)}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-center xs:block gap-4 mt-2">
                    <SwiperButton
                        className={`${
                            currentSlide === 0 ? 'scale-0' : 'scale-100'
                        } flex bottom-0 xs:absolute left-0 md:-left-[20px] rotate-180 xs:top-[112px] transition-all ease-custom-ease duration-[400ms]`}
                        handleClick={previousSlide}
                    />
                    <SwiperButton
                        className={`${
                            currentSlide === totalPages ? 'scale-0' : 'scale-100'
                        } flex bottom-0 xs:absolute right-0 md:-right-[20px] xs:top-[112px] transition-all ease-custom-ease duration-[400ms]`}
                        handleClick={nextSlide}
                    />
                </div>
            </div>
        </>
    )
}

export default T20ShortsSwiper
