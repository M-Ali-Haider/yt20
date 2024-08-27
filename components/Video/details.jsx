const VideoDetails = ({ data }) => {
    // List of keys to exclude
    const excludedKeys = [
        'id',
        'category',
        'video_id',
        'timestamp',
        'video_etag',
        'video_channelId',
        'video_categoryId',
        'video_embeddable',
        'video_thumbnails',
        'video_description',
        'video_licensedContent',
        'created_at',
        'updated_at',
    ]

    return (
        <div>
            <h2>Video Information</h2>
            <ul>
                {Object.entries(data.video).map(([key, value]) => {
                    // Exclude the keys listed in excludedKeys
                    if (excludedKeys.includes(key)) {
                        return null
                    }

                    if (typeof value === 'object' && value !== null) {
                        return (
                            <li key={key}>
                                <strong>{key}:</strong>
                                <ul>
                                    {Object.entries(value).map(([nestedKey, nestedValue]) => {
                                        // Exclude nested keys as well
                                        if (excludedKeys.includes(nestedKey)) {
                                            return null
                                        }
                                        return (
                                            <li key={nestedKey}>
                                                <strong>{nestedKey}:</strong> {JSON.stringify(nestedValue)}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                        )
                    }

                    return (
                        <li key={key}>
                            <strong>{key}:</strong> {JSON.stringify(value)}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default VideoDetails
