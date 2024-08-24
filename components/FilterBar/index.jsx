'use client'
import CategoryDropDown from '../Dropdowns/category'
import DateDropDown from '../Dropdowns/date'
import RegionDropDown from '../Dropdowns/region'
import FilterOption from './option'

const Filterbar = () => {
    const options = [
        { title: 'Top 20 Videos', id: '#top20videos' },
        { title: 'Top 20 Short Videos', id: '#top20shorts' },
        { title: 'Hot 20 Videos', id: '#hot20videos' },
        { title: 'Hot 20 Short Videos', id: '#hot20shorts' },
    ]

    const handleFilterOption = (id) => {
        const section = document.querySelector(id)
        if (section) {
            const yOffset = -96
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
            window.scrollTo({ top: y, behavior: 'smooth' })
        }
    }

    return (
        <>
            <div className="w-full flex justify-between">
                <div className={`hidden filterBarDim:flex items-center rounded-full lg:rounded-[10px] overflow-hidden`}>
                    {options.map((item, index) => (
                        <div key={index} onClick={() => handleFilterOption(item.id)}>
                            <FilterOption title={item.title} />
                        </div>
                    ))}
                </div>

                <div
                    className="flex items-center w-full mx-4 rounded-lg justify-evenly dark:bg-[#19191A] bg-[white] 
                    filterBarDim:mx-0 filterBarDim:bg-transparent filterBarDim:dark:bg-transparent filterBarDim:w-auto filterBarDim:gap-[15px] filterBarDim:justify-normal"
                >
                    <CategoryDropDown />
                    <div className="bg-[#99A2AD] w-[2px] h-[28px] lg:h-[32px]" />
                    <DateDropDown />
                    <div className="bg-[#99A2AD] w-[2px] h-[28px] lg:h-[32px]" />
                    <RegionDropDown />
                </div>
            </div>
        </>
    )
}

export default Filterbar

const FilterDropDown = ({ Component }) => <Component />
