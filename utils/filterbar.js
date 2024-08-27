export const options = [
    { title: 'Top 20 Videos', id: '#top20videos' },
    { title: 'Top 20 Short Videos', id: '#top20shorts' },
    { title: 'Hot 20 Videos', id: '#hot20videos' },
    { title: 'Hot 20 Short Videos', id: '#hot20shorts' },
]

export const handleFilterOption = (id) => {
    const section = document.querySelector(id)
    if (section) {
        const yOffset = -96
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
    }
}
