export function formatDuration(duration) {
    // Remove the "PT" prefix
    duration = duration.replace('PT', '')

    // Extract hours, minutes, and seconds
    let hours = duration.match(/(\d+)H/)
    let minutes = duration.match(/(\d+)M/)
    let seconds = duration.match(/(\d+)S/)

    // Convert matches to numbers, default to 0 if null
    hours = hours ? parseInt(hours[1], 10) : 0
    minutes = minutes ? parseInt(minutes[1], 10) : 0
    seconds = seconds ? parseInt(seconds[1], 10) : 0

    // Format the time
    let formattedTime = ''
    if (hours > 0) {
        formattedTime += `${hours}:`
        formattedTime += minutes < 10 ? `0${minutes}:` : `${minutes}:`
    } else {
        formattedTime += `${minutes}:`
    }
    formattedTime += seconds < 10 ? `0${seconds}` : `${seconds}`

    return formattedTime
}
