import Image from 'next/image'
import { formatViews } from '@/utils/convertViews'
import Link from 'next/link'

const T20ShortCard = ({ data, className, videoType }) => {
    return (
        <>
            <Link
                href={{
                    pathname: `/video/${data.video.video_id}`,
                    query: { videoType: videoType },
                }}
                className={`pb-[10px] cursor-pointer aspect-[370/326.15] ${className}`}
            >
                <div className="aspect-[150/265] w-full relative rounded-lg overflow-hidden dark:bg-[#3f3f3f] bg-[#e5e5e5]">
                    <Image
                        src={data.video.video_thumbnails.url}
                        alt="Youtube"
                        fill
                        className="object-cover w-full h-full object-center xs:object-center"
                    />
                </div>
                <div className="flex gap-4 pt-6">
                    <div className="w-full">
                        <div className="text-[#0A0A0A] dark:text-white line-clamp-2 overflow-hidden max-w-full text-base leading-[21px] tracking-[-0.32px] md:text-[17px] font-light mb-[6px]">
                            {data.video.video_title}
                        </div>
                        <div className="font-light leading-[22px] text-[13px] text-[#0A0A0A] dark:text-white">
                            {formatViews(data.video.video_viewCount)}
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default T20ShortCard
