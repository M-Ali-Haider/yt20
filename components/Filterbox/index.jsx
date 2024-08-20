'use client'
import FilterboxOption from './option'
import CategorySVG from '@/assets/Filterbox/category'
import DateSVG from '@/assets/Filterbox/date'
import RegionSVG from '@/assets/Filterbox/region'
import { useQuery } from '@tanstack/react-query'
import OptionSkeleton from './optionSkeleton'

const Filterbox = () => {
    const filterboxOptions = [
        { title: 'Category', svg: CategorySVG, options: ['All', 'Now', 'Music', 'Gaming', 'Movies'] },
        { title: 'Date', svg: DateSVG, options: ['All', 'Now', 'Music', 'Gaming', 'Movies'] },
        { title: 'Region', svg: RegionSVG, options: ['All', 'Now', 'Music', 'Gaming', 'Movies'] },
    ]

    const {
        data: regionsData,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ['regions'],
        queryFn: () => fetch(`https://savvy-folio-406713.uc.r.appspot.com/api/regions`).then((res) => res.json()),
    })
    if (isError) {
        return <div>Error Loading Regions + {error}</div>
    }
    return (
        <>
            <div className="mt-[25px] flex items-center justify-center transition-all ease-custom-ease duration-500 ">
                <div className="w-full md:w-auto flex-wrap flex items-center gap-6 filterbox:gap-0 justify-center">
                    <FilterboxOption
                        title={filterboxOptions[0].title}
                        SvgComp={filterboxOptions[0].svg}
                        options={filterboxOptions[0].options}
                    />
                    <FilterboxOption
                        title={filterboxOptions[1].title}
                        SvgComp={filterboxOptions[1].svg}
                        options={filterboxOptions[1].options}
                    />
                    {isLoading && <OptionSkeleton />}
                    {!isLoading && (
                        <FilterboxOption
                            title={filterboxOptions[2].title}
                            SvgComp={filterboxOptions[2].svg}
                            options={regionsData}
                        />
                    )}
                </div>
            </div>
        </>
    )
}

export default Filterbox
