export function timeAgo(timestamp) {
    const now = new Date()
    const publishedDate = new Date(timestamp)
    const seconds = Math.floor((now - publishedDate) / 1000)

    let interval = Math.floor(seconds / 31536000) // 1 year
    if (interval >= 1) return interval === 1 ? '1 year ago' : `${interval} years ago`

    interval = Math.floor(seconds / 2592000) // 1 month
    if (interval >= 1) return interval === 1 ? '1 month ago' : `${interval} months ago`

    interval = Math.floor(seconds / 604800) // 1 week
    if (interval >= 1) return interval === 1 ? '1 week ago' : `${interval} weeks ago`

    interval = Math.floor(seconds / 86400) // 1 day
    if (interval >= 1) return interval === 1 ? '1 day ago' : `${interval} days ago`

    interval = Math.floor(seconds / 3600) // 1 hour
    if (interval >= 1) return interval === 1 ? '1 hour ago' : `${interval} hours ago`

    interval = Math.floor(seconds / 60) // 1 minute
    if (interval >= 1) return interval === 1 ? '1 minute ago' : `${interval} minutes ago`

    return 'Just now'
}
