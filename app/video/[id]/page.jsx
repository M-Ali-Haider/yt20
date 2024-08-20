import Video from '@/components/Video'
const VideoPage = ({ params }) => {
    return (
        <>
            <Video id={params.id} />
        </>
    )
}

export default VideoPage
