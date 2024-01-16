'use client'
import Banner from '@/components/Banner'
import Categories from '@/components/Cateogries'
import HotShorts from '@/components/HotShorts'
import HotVideos from '@/components/HotVideos'
import TopBar from '@/components/TopBar'
import TopShorts from '@/components/TopShorts'
import TopVideos from '@/components/TopVideos'
import Region from '@/components/shared/Region'
import { useRegionGlobal } from '@/utils/http'
import { useState } from 'react'

const eNum = {
    Now: '1',
    Music: '2',
    Gaming: '3',
    Movies: '4',
}
export default function Home() {
    // const { theme, setTheme } = useContext(ThemeContext)
    // console.log('theme in HomePage', theme)

    const [selectedCategory, setSelectedCategory] = useState('Now')
    const [selectedRegion, setSelectedRegion] = useState('Global')

    const { data, isLoading } = useRegionGlobal(eNum[selectedCategory], selectedRegion, '')
    console.log('MAIN Data', data)
    const { top_20_videos, hot_20_videos, top_20_shorts, hot_20_shorts } = data || {}

    //Videos
    // console.log('🚀 ~ Home ~ top_20_videos:', top_20_videos)
    // console.log('🚀 ~ Home ~ hot_20_videos:', hot_20_videos)
    //Shorts
    // console.log('🚀 ~ Home ~ top_20_shorts:', top_20_shorts)
    // console.log('🚀 ~ Home ~ hot_20_shorts:', hot_20_shorts)

    const handleCategoryChange = (category) => {
        // console.log('🚀 category:', category)
        if (category === selectedCategory) {
            setSelectedCategory('Now')
        } else {
            setSelectedCategory(category)
        }
    }

    return (
        <main className="scroll-smooth xl:px-16 2xl:px-32 md:px-1">
            <div className="flex flex-col mobile:gap-2 mobile:pt-20 md:pt-20 lg:pt-24 2xl:pt-30">
                <Banner />
                <div
                    style={{
                        backgroundColor:
                            'dark:bg-[#19191A] bg-[rgb(0 0 0 / var(--tw-text-opacity))] dark:text-white text-black',
                    }}
                    className="flex gap-[2rem] justify-start mobile:flex-col md:flex-row w-full xl:px-4 xl:max-h-[65px] 2xl:max-h-[70px] md:my-2 lg:my-3 mobile:px-2 md:px-4   md:flex dark:bg-[#19191A] bg-white dark:text-[#99A2AD] text-[#737174]"
                >
                    <Categories onCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} />
                    <Region selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />

                    {/* <CountrySelect selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} /> */}
                    {/* <CalendarDateRange setStartDate={setStartDate} /> */}
                </div>
            </div>

            <div className="Main_Videos_Div">
                <>
                    <div className="TopVideo_Container">
                        <TopVideos
                            top_20_videos={
                                top_20_videos?.hasOwnProperty(`${eNum[selectedCategory]}`)
                                    ? top_20_videos[`${eNum[selectedCategory]}`]
                                    : []
                            }
                            isLoading={isLoading}
                        />
                    </div>

                    <div className="HotVideo_Container">
                        <HotVideos
                            hot_20_videos={
                                hot_20_videos?.hasOwnProperty(`${eNum[selectedCategory]}`)
                                    ? hot_20_videos[`${eNum[selectedCategory]}`]
                                    : []
                            }
                            isLoading={isLoading}
                        />
                    </div>

                    <div className="TopShorts_Container">
                        <TopShorts
                            top_20_shorts={
                                top_20_shorts?.hasOwnProperty(`${eNum[selectedCategory]}`)
                                    ? top_20_shorts[`${eNum[selectedCategory]}`]
                                    : []
                            }
                            isLoading={isLoading}
                        />
                    </div>

                    <div className="HotShorts_Container">
                        <HotShorts
                            hot_20_shorts={
                                hot_20_shorts?.hasOwnProperty(`${eNum[selectedCategory]}`)
                                    ? hot_20_shorts[`${eNum[selectedCategory]}`]
                                    : []
                            }
                            isLoading={isLoading}
                        />
                    </div>
                </>
            </div>
        </main>
    )
}
