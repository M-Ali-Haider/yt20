import CloudSVG from '../../assets/Video/Details/cloud'
import WatchlaterSVG from '../../assets/Video/Details/watchLater'
export function VidDetailsInfo({ data }) {
    return (
        <div className="flex flex-col md:flex-row flex-wrap w-full gap-2">
            <div className="flex-1 pt-10 px-2 xs:px-10">
                <div className="text-lg md:text-2xl font-medium">{data.video.video_title}</div>
                <div className="flex flex-wrap items-center gap-4 text-[#99A2AD] text-sm mt-3">
                    <div className="">{data.video.video_channelTitle}</div>
                    {data.video_tags?.length > 0 && (
                        <>
                            <div className="h-[22px] w-[1px] hidden md:flex bg-[#99A2AD]" />
                            <div className="flex flex-wrap">
                                {data.video_tags?.slice(0, 4).map((item, index) => (
                                    <div key={index} className="capitalize">
                                        <span>{item}</span>
                                        {index < data.video_tags.slice(0, 4).length - 1 && <span>,&nbsp;</span>}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                    <div className="h-[22px] w-[1px] hidden md:flex bg-[#99A2AD]" />
                    <div className="text-[#E72825]">+ Follow Mentor</div>
                </div>
            </div>
            <div className="w-[140px] pl-10 md:pl-0 md pt-3 md:pt-[60px] flex items-center gap-[22px]">
                <VidDetailsButton
                    SvgComp={WatchlaterSVG}
                    className={`border border-solid dark:border-[#E2E2EA] border-black`}
                />
                <VidDetailsButton SvgComp={CloudSVG} className={`bg-cloudSvg`} />
            </div>
        </div>
    )
}

function VidDetailsButton({ SvgComp, className }) {
    return (
        <button className={`${className} w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer`}>
            <SvgComp />
        </button>
    )
}
