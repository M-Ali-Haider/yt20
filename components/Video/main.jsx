import YouTube from 'react-youtube'
import VideoDetails from './details'
const VideoMain = ({ id, data }) => {
    const opts = {
        playerVars: {
            autoplay: 1,
        },
    }
    return (
        <>
            <div className="flex flex-col items-center">
                <div className="mt-[50px] w-full aspect-[16/9]">
                    <YouTube
                        videoId={id}
                        opts={opts}
                        iframeClassName="w-full h-full rounded-tl-[6px] rounded-tr-[6px]"
                        className="w-full h-full rounded-tl-[6px] rounded-tr-[6px]"
                    />
                    <VideoDetails data={data} />
                </div>
            </div>
        </>
    )
}

export default VideoMain
