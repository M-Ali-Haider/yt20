'use client'
import useWindowDimensions from '@/utils/CustomHooks'

const Banner = () => {
    const { width: windowWidth } = useWindowDimensions()

    return (
        <div className="overflow-hidden md:px-4 mobile:px-[2px] ">
            <div className=" relative flex flex-col justify-center items-center  " style={{ height: '140px' }}>
                {/* <video
                    autoPlay
                    muted
                    loop
                    className="object-cover mobile:w-full  mobile:h-[17rem] mobile:rounded-xl md:rounded-lg md:h-[350px] lg:h-[24rem] 2xl:h-[24rem] 2xl:rounded-xl"
                >
                    <source src="/background-video.mp4" type="video/mp4" />
                </video> */}
                <div className="absolute w-full flex flex-col mb-[22px] mobileL:mb-[14px] middle:mb-[8px]  justify-center mobile:px-1 items-center mobile:gap-[.8rem] md:gap-10 lg:gap-8 2xl:gap-10">
                    <div className="flex flex-col items-center px-1 -gap-4 text-center">
                        <p className="dark:text-white text-black mobile:text-[30px] mobileM:text-[33px] md:text-[48px] lg:text-6xl font-normal mobile:gap-5 flex leading-[.9] md:leading-[1.3]">
                            Discover the Top
                        </p>
                        <p className="text-[#E72925] mobile:text-[30px] mobileM:text-[33px] md:text-5xl lg:text-6xl font-normal ">
                            <span className="dark:text-white text-black">20 </span>Videos
                            <span className="dark:text-white text-black"> & </span> Shorts
                        </p>
                    </div>
                    {/* <SearchComponent className=" self-center mobile:max-w-[90%]" /> */}
                </div>
            </div>
        </div>
    )
}

export default Banner
