import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { useMediaQuery } from 'react-responsive'
import 'swiper/css'
import T20VidCard from '../T20Videos/card'
import { useRef, useState } from 'react'
import SwiperButton from './swiperButton'
import T20ShortCard from '../T20Shorts/card'

const LibSwiper = ({ data, videoType, isShorts }) => {
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
                <div className="w-full h-full relative flex items-center">
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
                        {data['0'].map((item, index) => (
                            <SwiperSlide key={index}>
                                {isShorts ? (
                                    <T20ShortCard data={item} videoType={videoType} />
                                ) : (
                                    <T20VidCard data={item} videoType={videoType} />
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <SwiperButton
                        className={`${
                            isNextDisabled ? 'scale-0' : 'scale-100'
                        } flex bottom-0 absolute right-0 md:-right-[20px] xs:top-[78px] transition-all ease-custom-ease duration-[400ms]`}
                        handleClick={() => swiperRef.current?.slideNext()}
                    />
                    <SwiperButton
                        className={`${
                            isPrevDisabled ? 'scale-0' : 'scale-100'
                        } flex bottom-0 absolute left-0 md:-left-[20px] rotate-180 xs:top-[78px] transition-all ease-custom-ease duration-[400ms]`}
                        handleClick={() => swiperRef.current?.slidePrev()}
                    />
                </div>
            </div>
        </>
    )
}

export default LibSwiper
