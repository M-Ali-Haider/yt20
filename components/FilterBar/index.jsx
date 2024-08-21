import CalendarSVG from '@/assets/FilterBar/calendar'
import CategorySVG from '@/assets/FilterBar/category'
import RegionSVG from '@/assets/FilterBar/region'
import styles from '@/components/style.module.css'
const Filterbar = () => {
    const options = [
        { title: 'Top 20 Videos', id: '' },
        { title: 'Top 20 Short Videos', id: '' },
        { title: 'Hot 20 Videos', id: '' },
        { title: 'Hot 20 Short Videos', id: '' },
    ]

    const filters = [<CategorySVG />, <CalendarSVG />, <RegionSVG />]

    return (
        <>
            <div className="w-full flex justify-between">
                <div className={`flex items-center rounded-[10px] overflow-hidden`}>
                    {options.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.gradientButton} text-base cursor-pointer
                            py-3 px-6`}
                        >
                            {item.title}
                        </div>
                    ))}
                </div>
                <div className="flex items-center">
                    {filters.map((item, index) => (
                        <div key={index}>
                            <div key={index}>{item}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Filterbar
