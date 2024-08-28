'use client'
import { handleFilterOption, options } from '@/utils/filterbar'
import { useDispatch } from 'react-redux'
import CategoryDropDown from '../Dropdowns/category'
import DateDropDown from '../Dropdowns/date'
import RegionDropDown from '../Dropdowns/region'
import FilterOption from './option'

const Filterbar = () => {
    const dispatch = useDispatch()
    const handleOnClick = (item) => {
        handleFilterOption(item.id)
    }
    return (
        <>
            <div className="max-w-[1552px] px-[10px] md:px-[40px] w-full flex justify-between filterBarDim:sticky filterBarDim:my-0 py-6 mt-4 mb-6 filterBarDim:top-0 filterBarDim:z-50 dark:bg-[#0a0a0a] bg-[#edeef0]">
                <div
                    className={`hidden filterBarDim:flex items-center rounded-full lg:rounded-[10px] overflow-hidden dark:bg-[#19191a] bg-white`}
                >
                    {options.map((item, index) => (
                        <div key={index} onClick={() => handleOnClick(item)}>
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
