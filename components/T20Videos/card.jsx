import { formatViews } from '@/utils/convertViews'
import { formatDuration } from '@/utils/formatDuration'
import { timeAgo } from '@/utils/timeAgo'
import Image from 'next/image'
import Link from 'next/link'

const T20VidCard = ({ data, className, videoType }) => {
    return (
        <>
            <Link
                href={{
                    pathname: `/video/${data.video.video_id}`,
                    query: { videoType: videoType },
                }}
                className={`pb-[10px] cursor-pointer aspect-[370/326.15] select-none ${className}`}
            >
                <div className="aspect-[16/9] w-full relative rounded-lg overflow-hidden dark:bg-[#3f3f3f] bg-[#e5e5e5]">
                    <Image
                        src={data.video.video_thumbnails.url}
                        alt="Youtube"
                        fill
                        className="object-cover w-full h-full object-center xs:object-center"
                    />
                    <div
                        className="absolute right-[12px] bottom-[10px] z-[25] p-1 pb-[3px]
                     bg-white text-[#0A0A0A]
                     text-[13px] leading-[15.51px]
                     font-sfpro
                     rounded-[4px]
                     "
                    >
                        {formatDuration(data.video.video_duration)}
                    </div>
                </div>
                <div className="flex gap-4 pt-6">
                    <div className="min-h-[36px] min-w-[36px] max-h-[36px] max-w-[36px] rounded-full overflow-hidden relative dark:bg-[#3f3f3f] bg-[#e5e5e5]">
                        {/* <Image fill /> */}
                    </div>
                    <div className="w-[calc(100%-36px)]">
                        <div className="text-[#0A0A0A] dark:text-white line-clamp-2 overflow-hidden max-w-full text-base leading-[21px] md:text-[17px] font-normal mb-[6px]">
                            {data.video.video_title}
                        </div>
                        <div className="text-[#19191A99] dark:text-[#FFFFFF99] text-[12px] leading-[22px] font-sfpro uppercase">
                            {data.video.video_channelTitle}
                        </div>
                        <div className="font-sfpro leading-[22px] text-[13px] text-[#19191A99] dark:text-[#FFFFFF99]">
                            {formatViews(data.video.video_viewCount)} - {timeAgo(data.video.video_publishedAt)}
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default T20VidCard
// rounded-tl-lg rounded-tr-lg
