import HotShortsSVG from '@/assets/Sidebar/hotShorts'
import HotVidsSVG from '@/assets/Sidebar/hotVids'
import ShortsSVG from '@/assets/Sidebar/shorts'
import VidsSVG from '@/assets/Sidebar/vids'

export const options = [
    { title: 'Top 20 Videos', id: '#top20videos', altTitle: 'Top 20 Videos', SvgComp: VidsSVG },
    { title: 'Top 20 Short Videos', id: '#top20shorts', altTitle: 'Top 20 Shorts', SvgComp: ShortsSVG },
    { title: 'Hot 20 Videos', id: '#hot20videos', altTitle: 'Hot 20 Videos', SvgComp: HotVidsSVG },
    { title: 'Hot 20 Short Videos', id: '#hot20shorts', altTitle: 'Hot 20 Shorts', SvgComp: HotShortsSVG },
]

export const handleFilterOption = (id) => {
    const section = document.querySelector(id)
    if (section) {
        const yOffset = -96
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
    }
}
