import CloudSVG from '../../assets/Video/Details/cloud'
import WatchlaterSVG from '../../assets/Video/Details/watchLater'
const VideoDetails = ({ data }) => {
    return (
        <>
            <div className="dark:bg-darkVidDetail px-10 pb-9 flex w-full">
                <div className="flex-1 pt-10">
                    <div>{data.video.video_title}</div>
                    <div className="flex items-center gap-4">
                        {data.video_tags?.map((item, index) => (
                            <div key={index} className="capitalize">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-[140px] pt-[60px] flex items-center gap-[22px]">
                    <VidDetailsButton
                        SvgComp={WatchlaterSVG}
                        className={`border border-solid dark:border-[#E2E2EA] border-black`}
                    />
                    <VidDetailsButton SvgComp={CloudSVG} className={`bg-cloudSvg`} />
                </div>
            </div>
        </>
    )
}

function VidDetailsButton({ SvgComp, className }) {
    return (
        <button className={`${className} w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer`}>
            <SvgComp />
        </button>
    )
}

export default VideoDetails
