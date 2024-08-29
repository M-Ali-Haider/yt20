import FooterLogoSVG from '@/assets/Footer/logo'
import FooterLinks from './links'

const Footer = () => {
    return (
        <footer className="px-[20px] sm:px-20 py-16 2xl:py-32 w-full border-t-2 border-[#FFFFFF4D] flex items-center justify-center">
            <div className="max-w-[1552px] w-full flex flex-col filterBarDim:flex-row flex-wrap justify-between gap-14">
                <div className="w-[233.73px] h-[40px] filterBarDim:w-[298px] filterBarDim:h-[51px]">
                    <FooterLogoSVG className={`w-[233.73px] h-[40px] filterBarDim:w-[298px] filterBarDim:h-[51px]`} />
                </div>
                <div className="flex-1 mt-1 filterBarDim:min-w-[670px]">
                    <FooterLinks />
                    <div className="mt-10 sm:mt-20 text-xs">
                        Copyright 2024 YoutubeTop20, Allright reserved. All videos featured on this website are embedded
                        directly from YouTube and remain the property of their respective creators and owners. We do not
                        host or store any video content ourselves. The rankings presented are based solely on public
                        view counts and popularity metrics and are not officially endorsed or affiliated with YouTube.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
