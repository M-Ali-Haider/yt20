import { useMemo } from 'react'

const VideoDetails = ({ data }) => {
    const { video } = data
    const { video_viewCount, video_tags, region, per_day_views } = video
    const {
        video_channelTitle,
        video_duration,
        video_commentCount,
        video_likeCount,
        video_dislikeCount,
        video_publishedAt,
    } = video.video

    const formattedDate = useMemo(() => {
        const date = new Date(video_publishedAt)
        const options = { year: 'numeric', month: 'short', day: 'numeric' }
        return date.toLocaleDateString('en-US', options)
    }, [video_publishedAt])

    const convertDuration = useMemo(() => {
        const match = video_duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/)
        const hours = match?.[1] ? parseInt(match[1]) : 0
        const minutes = match?.[2] ? parseInt(match[2]) : 0
        const seconds = match?.[3] ? parseInt(match[3]) : 0

        return [
            hours ? `${hours} hour${hours > 1 ? 's' : ''}` : '',
            minutes ? `${minutes} minute${minutes > 1 ? 's' : ''}` : '',
            seconds || (!hours && !minutes) ? `${seconds} second${seconds > 1 ? 's' : ''}` : '',
        ]
            .filter(Boolean)
            .join(' ')
            .trim()
    }, [video_duration])

    const details = [
        { heading: 'Region', value: region },
        { heading: 'Channel', value: video_channelTitle },
        { heading: 'Duration', value: convertDuration },
        { heading: 'Total Comments', value: video_commentCount },
        { heading: 'Likes', value: video_likeCount },
        { heading: 'Dislikes', value: video_dislikeCount },
        { heading: 'Views Per Day', value: per_day_views },
    ]

    return (
        <div>
            <div className="flex gap-4">
                <div>{video_viewCount} views</div>
                <div>{formattedDate}</div>
            </div>

            {details.map(({ heading, value }, index) => (
                <VidDetailKeyValue key={index} heading={heading} value={value} />
            ))}

            <div className="mt-6 flex flex-wrap">
                {video_tags?.map((tag, index) => (
                    <div key={index} className="text-[#1884F7]">
                        #{tag}&nbsp;
                    </div>
                ))}
            </div>
        </div>
    )
}

export default VideoDetails

function VidDetailKeyValue({ heading, value }) {
    return (
        <div className="flex mt-4">
            <span className="font-semibold">{heading}:&nbsp;&nbsp;</span>
            <span className="font-light">{value || 0}</span>
        </div>
    )
}
