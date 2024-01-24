import AvatarImage from '@/components/shared/AvatarImage'
import { NextButton, PrevButton } from '@/components/shared/EmblaCarouselArrowsDotsButtons'
import useWindowDimensions from '@/utils/CustomHooks'
import useEmblaCarousel from 'embla-carousel-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

const CaroselSlider = ({ slidesArray, selectedCategoryNumber, selectedRegion, selectedTitle, ...props }) => {
    const pathName = usePathname()
    const includePlayVideo = pathName?.includes('videoPage')
    const { width: windowWidth } = useWindowDimensions()
    const { theme } = useContext(ThemeContext)
    const slides = slidesArray
    const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 'auto', containScroll: 'trimSnaps' })
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState([])
    const timeSince = (postedDate) => {
        const currentDate = new Date()
        const seconds = Math.floor((currentDate - new Date(postedDate)) / 1000)

        let interval = Math.floor(seconds / 31536000)
        if (interval >= 1) {
            return `${interval} year${interval === 1 ? '' : 's'} ago`
        }
        interval = Math.floor(seconds / 2592000)
        if (interval >= 1) {
            return `${interval} month${interval === 1 ? '' : 's'} ago`
        }
        interval = Math.floor(seconds / 86400)
        if (interval >= 1) {
            return `${interval} day${interval === 1 ? '' : 's'} ago`
        }
        interval = Math.floor(seconds / 3600)
        if (interval >= 1) {
            return `${interval} hour${interval === 1 ? '' : 's'} ago`
        }
        interval = Math.floor(seconds / 60)
        if (interval >= 1) {
            return `${interval} minute${interval === 1 ? '' : 's'} ago`
        }
        return `${Math.floor(seconds)} second${Math.floor(seconds) === 1 ? '' : 's'} ago`
    }
    const views = (views) => {
        const viewsInMillion = views / 1000000
        if (viewsInMillion >= 1) return `${viewsInMillion.toFixed(1)}M`

        return `${views.toFixed(0).slice(0, 3)}K`
    }

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    const onInit = useCallback((emblaApi) => {
        setScrollSnaps(emblaApi.scrollSnapList())
    }, [])

    const onSelect = useCallback((emblaApi) => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onInit(emblaApi)
        onSelect(emblaApi)
        emblaApi.on('reInit', onInit)
        emblaApi.on('reInit', onSelect)
        emblaApi.on('select', onSelect)
    }, [emblaApi, onInit, onSelect])
    return (
        <div
            className="Main_Carosuel_Container"
            style={{
                '--slide-spacing': '1rem',
                '--slide-size': `${
                    windowWidth < 600
                        ? '50%'
                        : windowWidth < 900
                        ? '25%'
                        : windowWidth < 1440
                        ? '20%'
                        : windowWidth < 1920
                        ? '16.6%'
                        : '10%'
                }`,
                '--slide-height': '19rem',
                // padding: '1.6rem',
                // border: '1px solid red',
            }}
        >
            <div className="embla__viewport" ref={emblaRef} style={{ position: 'relative' }}>
                <div className="embla__container">
                    <>
                        {props?.for === 'Videos' ? (
                            <>
                                {slides.map((item, index) => (
                                    <div className="Slide_Main embla__slide" key={index}>
                                        <div
                                            className="flex flex-col dark:hover:opacity-100 hover:opacity-90 hover:transition-transform duration-900 dark:bg-gradient-to-b dark:from-[#232121] dark:to-[#1c1b1b33]  bg-gradient-to-b from-[#fff] to-[#EDEEF9] hover:bg-gradient-to-b hover:from-[#fff] hover:to-[#fff]"
                                            key={index}
                                            style={{
                                                borderRadius: '4px',
                                                height: '100%',
                                            }}
                                        >
                                            <Link
                                                href={`/videoPage/${item?.video_id}/${selectedCategoryNumber}/${selectedRegion}/${selectedTitle}`}
                                                style={{ borderRadius: '4px' }}
                                            >
                                                <p className="max-w-[1000px] w-full">
                                                    <img
                                                        src={`${item?.video.video_thumbnails.url}`}
                                                        alt="Not Found"
                                                        style={{
                                                            width: 'inherit',
                                                            height: 'inherit',
                                                            borderRadius: '4px',
                                                        }}
                                                    />
                                                    {/* <Image
                                                        src={`${item?.video.video_thumbnails.url}`}
                                                        alt="Not Found"
                                                        className="flex object-cover"
                                                        height={100}
                                                        width={100}
                                                        style={{
                                                            objectFit: 'contain',
                                                            borderRadius: '4px',
                                                            width: '100%',
                                                        }}
                                                    /> */}
                                                </p>
                                                <div
                                                    style={{ paddingTop: '0.5rem' }}
                                                    className="MainImageAndTextDiv flex mobile:py-2 gap-[0.5rem]"
                                                >
                                                    <div className="flex bg-cover bg-center rounded-8px">
                                                        <AvatarImage
                                                            src={item?.video.video_thumbnails.url}
                                                            style={{
                                                                borderRadius: '50%',
                                                                // minWidth: '50px',
                                                                minWidth: 'max-content',
                                                                minHeight: '50px',
                                                            }}
                                                            sx={{
                                                                borderRadius: '50%',
                                                                minHeight: '50px',
                                                                width: '50px',
                                                            }}
                                                        />
                                                    </div>
                                                    {/* </div> */}
                                                    <div className="flex flex-col mobile:gap-[2px] md:gap-1 flex-wrap pr-4">
                                                        {/* <p */}
                                                        {/* style={{ lineHeight: '18px' }} */}
                                                        {/* className="line-clamp-2 dark:text-white text-black font-medium mobile:text-base mobile:font-semibold md:text-[15px] lg:text-[13px] xl:text-base 2xl:text-[16px]  text-clip overflow-hidden" */}
                                                        {/* > */}
                                                        {/* Title */}
                                                        {/* {item?.video.video_title} */}
                                                        {/* </p> */}
                                                        <p className="line-clamp-2 dark:text-white text-black font-medium mobile:text-base mobile:font-semibold md:text-[15px] lg:text-[13px] xl:text-base 2xl:text-[16px]  text-clip overflow-hidden  ">
                                                            {item?.video.video_title}
                                                        </p>
                                                        <p className="dark:text-[#FFFFFF99] text-[#00000099] mobile:text-xs md:text-xs lg:text-[9px] xl:text-[13px] font-semibold">
                                                            {/* Channel Title */}
                                                            {item?.video.video_channelTitle}
                                                        </p>
                                                        <div
                                                            className="DaysAgo_MainDiv"
                                                            style={{
                                                                display: 'flex',
                                                                flexDirection: 'row',
                                                                flexWrap: 'wrap',
                                                                gap: '2px',
                                                                justifyContent: 'space-between',
                                                            }}
                                                        >
                                                            <p className="dark:text-[#FFFFFF99] text-[#00000099] font-medium mobile:text-[12px] md:text-[12px] lg:text-[9px]  xl:text-[13px]">
                                                                {/* Publish */}
                                                                {timeSince(item?.video?.video_publishedAt)}
                                                            </p>
                                                            <p className="dark:text-[#FFFFFF99] text-[#00000099] font-medium mobile:text-[12px] md:text-[12px] lg:text-[9px]  xl:text-[12px]">
                                                                {/* ViewCount */}
                                                                {`${views(item?.video.video_viewCount)}`}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <>
                                {slides.map((item, index) => (
                                    <div className="Slide_Main embla__slide" key={index}>
                                        {/* <img className="embla__slide__img" src={imageByIndex(index)} alt="Your alt text" /> */}
                                        <div
                                            // className="MovieDiv w-full overflow-hidden box-border mobile:rounded-lg  mobile:min-h-[208px]  "
                                            className="flex flex-col dark:hover:opacity-100 hover:opacity-90 hover:transition-transform duration-900 dark:bg-gradient-to-b dark:from-[#232121] dark:to-[#1c1b1b33]  bg-gradient-to-b from-[#fff] to-[#EDEEF9] hover:bg-gradient-to-b hover:from-[#fff] hover:to-[#fff]"
                                            key={index}
                                            style={{ borderRadius: '4px', height: '100%' }}
                                        >
                                            <Link
                                                href={`/videoPage/${item?.video_id}/${selectedCategoryNumber}/${selectedRegion}/${selectedTitle}`}
                                                className="flex flex-col mobile:pb-2 font-light opacity-100 dark:hover:opacity-100 hover:opacity-90 hover:transition-transform duration-900 dark:bg-gradient-to-b dark:from-[#232121] dark:to-[#1c1b1b33]  bg-gradient-to-b from-[#fff] to-[#EDEEF0] hover:bg-gradient-to-b hover:from-[#fff] hover:to-[#fff]   "
                                                style={{ borderRadius: '4px' }}
                                            >
                                                <p className="max-w-[1000px] w-full">
                                                    {/* <Image
                                                        src={`${item?.video.video_thumbnails.url}`}
                                                        className="flex object-cover"
                                                        alt="Not Found"
                                                        style={{ width: 'inherit', height: 'inherit' }}
                                                        height={50}
                                                        width={50}
                                                    /> */}
                                                    <img
                                                        src={`${item?.video.video_thumbnails.url}`}
                                                        alt="Not Found"
                                                        style={{
                                                            width: 'inherit',
                                                            height: 'inherit',
                                                        }}
                                                    />
                                                </p>
                                                <div
                                                    style={{ paddingTop: '0.5rem' }}
                                                    className="MainImageAndTextDiv flex mobile:py-2 gap-[0.5rem]"
                                                >
                                                    <div className="flex p-0 md:p-4 gap-3s md:pb-4 ">
                                                        <div className="flex flex-col gap-1 flex-wrap text-sm">
                                                            <p className="dark:text-white text-black  mobile:text-base lg:text-[13px] xl:text-base font-semibold  line-clamp-2">
                                                                {item.video.video_title}
                                                            </p>

                                                            {/* <p className="dark:text-[#FFFFFF99] text-[#00000099] mobile:text-[13px] md:text-sm lg:text-[9px] xl:text-[11px] text-[18px] font-medium  line-clamp-2"> */}
                                                            <p className="dark:text-[#FFFFFF99] text-[#00000099] font-sm mobile:text-[10px] md:text-[12px] lg:text-[9px]  xl:text-[13px]">
                                                                {item.video.video_title}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </>
                </div>
                {!includePlayVideo ? (
                    <>
                        <div
                            className="EmblaButtons"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                position: 'absolute',
                                top: '40%',
                                transform: 'translateY(-50%)',
                                left: '0x',
                                color: '#EF4444',
                                // border: `1px solid ${theme !== 'dark' ? 'white' : '#EF4444'}`,
                                borderRadius: '50%',
                                padding: '0.5rem 0.5rem 0.5rem 0.5rem',
                            }}
                        >
                            <PrevButton
                                disabled={prevBtnDisabled}
                                sx={{
                                    width: '45%',
                                    height: '45%',
                                }}
                                style={{
                                    background: 'white',
                                    borderRadius: '50%',
                                    paddingRight: '2px',
                                    opacity: '80%',
                                }}
                                onClick={scrollPrev}
                            />
                        </div>
                        <div
                            className="EmblaButtons"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                position: 'absolute',
                                top: '40%',
                                transform: 'translateY(-50%)',
                                right: '0px',
                                color: '#EF4444',
                                borderRadius: '50%',
                                padding: '0.5rem 0.5rem 0.5rem 0.5rem',
                            }}
                        >
                            <NextButton
                                disabled={nextBtnDisabled}
                                onClick={scrollNext}
                                sx={{
                                    width: '45%',
                                    height: '45%',
                                }}
                                style={{
                                    background: 'white',
                                    borderRadius: '50%',
                                    paddingLeft: '2px',
                                    opacity: '80%',
                                }}
                            />
                        </div>
                    </>
                ) : (
                    ''
                )}
            </div>
        </div>
    )
}

export default CaroselSlider
