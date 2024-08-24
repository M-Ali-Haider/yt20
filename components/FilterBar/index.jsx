'use client'
import CategoryDropDown from '../Dropdowns/category'
import DateDropDown from '../Dropdowns/date'
import RegionDropDown from '../Dropdowns/region'
import FilterOption from './option'

const Filterbar = () => {
    const options = [
        { title: 'Top 20 Videos', id: '#top20videos' },
        { title: 'Top 20 Short Videos', id: '#top20shorts' },
        { title: 'Hot 20 Videos', id: '#hot20shorts' },
        { title: 'Hot 20 Short Videos', id: '#hot20shorts' },
    ]
    return (
        <>
            <div className="w-full flex justify-between">
                <div className={`hidden filterBarDim:flex items-center rounded-full lg:rounded-[10px] overflow-hidden`}>
                    {options.map(({ title }, index) => (
                        <FilterOption key={index} title={title} />
                    ))}
                </div>

                <div className="flex items-center gap-[15px]">
                    <DateDropDown />
                    <CategoryDropDown />
                    <RegionDropDown />
                </div>
            </div>
        </>
    )
}

export default Filterbar

const FilterDropDown = ({ Component }) => <Component />
