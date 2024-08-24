import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { useMediaQuery } from 'react-responsive'
import 'swiper/css'
import T20VidCard from '../T20Videos/card'
import { useRef, useState } from 'react'
import SwiperButton from './swiperButton'
import T20ShortCard from '../T20Shorts/card'
import { useSelector } from 'react-redux'

const LibSwiper = ({ data, videoType, isShorts }) => {
    const categoryValue = useSelector((state) => state.filters.category)
    const isXs = useMediaQuery({ query: '(min-width: 550px)' })
    const isMd = useMediaQuery({ query: '(min-width: 768px)' })
    const isXl = useMediaQuery({ query: '(min-width: 1280px)' })

    const slidesPerPage = isShorts ? (isXl ? 8 : isMd ? 5 : isXs ? 4 : 2) : isXl ? 4 : isMd ? 3 : isXs ? 2 : 1

    const swiperRef = useRef(null)

    const [isPrevDisabled, setIsPrevDisabled] = useState(true)
    const [isNextDisabled, setIsNextDisabled] = useState(false)

    const handleSlideChange = (swiper) => {
        setIsPrevDisabled(swiper.isBeginning)
        setIsNextDisabled(swiper.isEnd)
    }

    return (
        <>
            <div className="mt-[25px] relative">
                <div className="w-full h-full relative">
                    <Swiper
                        slidesPerView={slidesPerPage}
                        slidesPerGroup={slidesPerPage}
                        spaceBetween={16}
                        navigation={{
                            prevEl: '.swiper-button-prev',
                            nextEl: '.swiper-button-next',
                        }}
                        modules={[Navigation]}
                        speed={500}
                        className="mySwiper w-full ease-custom-ease duration-500 transition-all"
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper
                            handleSlideChange(swiper)
                        }}
                        onSlideChange={handleSlideChange}
                    >
                        {data[categoryValue].map((item, index) => (
                            <SwiperSlide key={index}>
                                {isShorts ? (
                                    <T20ShortCard data={item} videoType={videoType} />
                                ) : (
                                    <T20VidCard data={item} videoType={videoType} />
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className={`${isShorts && 'flex items-center justify-center xs:block gap-4 mt-4'}`}>
                        <SwiperButton
                            className={`${isPrevDisabled ? 'scale-0' : 'scale-100'} ${
                                isShorts ? 'xs:top-[112px] xs:absolute' : 'xs:top-[78px] absolute'
                            } flex bottom-0 xs:bottom-auto left-0 md:-left-[20px] rotate-180 transition-all ease-custom-ease duration-[400ms]`}
                            handleClick={() => swiperRef.current?.slidePrev()}
                        />
                        <SwiperButton
                            className={`${isNextDisabled ? 'scale-0' : 'scale-100'} ${
                                isShorts ? 'xs:top-[112px] xs:absolute' : 'xs:top-[78px] absolute'
                            } flex bottom-0 xs:bottom-auto right-0 md:-right-[20px] transition-all ease-custom-ease duration-[400ms]`}
                            handleClick={() => swiperRef.current?.slideNext()}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LibSwiper
