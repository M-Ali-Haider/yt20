import { useState } from 'react'

import { VidDetailsInfo } from './detailsInfo'
import { VidDetailsOptions } from './detailsOptions'
const VideoDetails = ({ data }) => {
    const [option, setOption] = useState(0)
    const options = ['Related Videos', 'Video Details', 'About']
    return (
        <>
            <div className="dark:bg-darkVidDetail w-full">
                <VidDetailsInfo data={data} />
                <VidDetailsOptions setOption={setOption} option={option} options={options} />
            </div>
            <div className="border border-solid border-purple-500 w-full mt-7">{/* <Top20VidsSwiper /> */}</div>
        </>
    )
}

export default VideoDetails
