const VideoDetails = ({ data }) => {
    return (
        <>
            <div>
                <h2>Video Information</h2>
                <ul>
                    {Object.entries(data.video).map(([key, value]) => {
                        if (typeof value === 'object' && value !== null) {
                            return (
                                <li key={key}>
                                    <strong>{key}:</strong>
                                    <ul>
                                        {Object.entries(value).map(([nestedKey, nestedValue]) => (
                                            <li key={nestedKey}>
                                                <strong>{nestedKey}:</strong> {JSON.stringify(nestedValue)}
                                            </li>
                                        ))}
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
        </>
    )
}

export default VideoDetails
