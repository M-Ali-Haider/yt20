import Image from 'next/image'
import nextConfig from '../../next.config'
import InputSearchSVG from '@/assets/Discover/search'

const Discover = () => {
    return (
        <>
            <div className="mt-[25px] relative w-full py-[73px] md:py-[62px] md:pt-[70px] lg:pt-[62px] rounded-2xl md:rounded-3xl overflow-hidden flex flex-col items-center gap-8">
                <Image src={`${nextConfig.basePath}/discover.webp`} fill alt="discover image" priority />
                <p className="text-[32px] leading-[39.07px] md:text-[48px] md:leading-[64px] lg:text-6xl lg:leading-[73.26px] max-w-[326px] md:max-w-[489px] lg:max-w-[600px] w-full font-extrabold text-center z-10 text-white transition-all ease-custom-ease duration-500">
                    Discover the Top 20 <span className="text-[#E72925]">Videos</span> &
                    <span className="text-[#E72925]"> Shorts</span>
                </p>
                <div className="w-full px-[10px] flex items-center justify-center">
                    <div className="max-w-[426px] w-full h-[44px] md:h-[50px] relative flex items-center border border-solid border-[#ffffff4d] rounded-[10px] overflow-hidden backdrop-blur-3xl">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full h-full bg-[#ffffff1a] pl-4 font-inter font-normal text-sm leading-[17.09px] md:text-[20px] md:leading-[24.2px] placeholder:text-white placeholder:font-normal text-white border-none focus:outline-none"
                        />
                        <div className="absolute right-4">
                            <InputSearchSVG />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Discover
