'use client'
import '@/app/(MainCss)/base.css'
import '@/app/(MainCss)/embla.css'
import '@/app/(MainCss)/sandbox.css'
import Banner from '@/components/Banner'
import Categories from '@/components/Cateogries'
import VideoComp from '@/components/MainComponents/VideoComp'
import Region from '@/components/shared/Region'
import { useRegionGlobal } from '@/utils/http'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { setRegion } from 'react-geocode'
import CalendarDateRange from '../components/shared/CalenderDateRange'

const eNum = {
    All: '0',
    Now: '1',
    Music: '2',
    Gaming: '3',
    Movies: '4',
}
export default function Home() {
    const params = useParams()
    // const [ipAddress, setIpAddress] = useState('')
    // const [geoInfo, setGeoInfo] = useState({})
    // const getVisitorIp = async () => {
    //     try {
    //         const response = await fetch('https://api.ipify.org')
    //         const data = await response.text()
    //         setIpAddress(data)
    //     } catch (err) {
    //         console.log('getVisitorIp err', err)
    //     }
    // }

    // const fetchInfoBasedOnIp = async () => {
    //     try {
    //         const response = await fetch(`https://ip-api.com/json`)
    //         const data = await response.json()
    //         setGeoInfo(data)
    //     } catch (err) {
    //         console.log('fetchInfoBasedOnIp err', err)
    //     }
    // }

    const [selectedCategory, setSelectedCategory] = useState('All')
    // const country = useMemo(() => geoInfo?.country, [geoInfo])
    const [selectedRegion, setSelectedRegion] = useState('Global')
    console.log('selectedRegion', selectedRegion)
    const [startDate, setStartDate] = useState('')

    const { data, isLoading } = useRegionGlobal(eNum[selectedCategory], selectedRegion, startDate)
    const { top_20_videos, hot_20_videos, top_20_shorts, hot_20_shorts } = data || {}

    const handleCategoryChange = (category) => {
        if (category === selectedCategory) {
            setSelectedCategory('Now')
        } else {
            setSelectedCategory(category)
        }
    }

    // useEffect(() => {
    //     getVisitorIp()
    //     fetchInfoBasedOnIp()
    // }, [ipAddress, params])

    // useEffect(() => {
    //     setSelectedRegion(`${country}`)
    // }, [ipAddress])

    useEffect(() => {
        setRegion('Global')
    }, [params])

    const OPTIONS = { slidesToScroll: 'auto', containScroll: 'trimSnaps' }
    const SLIDE_COUNT = 8
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return (
        <main className="scroll-smooth xl:px-16 2xl:px-32 md:px-1">
            <div
                className="flex flex-col mobile:gap-2 mobile:pt-20 md:pt-20 lg:pt-24 2xl:pt-30"
                style={{ paddingTop: '4rem', gap: '0px' }}
            >
                <Banner />

                <div
                    style={{
                        backgroundColor:
                            'dark:bg-[#19191A] bg-[rgb(0 0 0 / var(--tw-text-opacity))] dark:text-white text-black',
                    }}
                    className="Main flex flex-row px-4 gap-[1rem] tablet:gap-[1rem] justify-between mobileL:justify-center  tablet:justify-center tablet:flex-row w-full  xl:max-h-[65px] 2xl:max-h-[70px] md:my-2 lg:my-3   md:flex dark:bg-[#19191A] bg-white dark:text-[#99A2AD] text-[#737174]"
                >
                    <Categories selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
                    <Region selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
                    <CalendarDateRange 
                        startDate={startDate}
                        setStartDate={setStartDate}
                    />
                </div>
            </div>

            <div className="Main_Videos_Div">
                <VideoComp
                    videoData={
                        top_20_videos?.hasOwnProperty(`${eNum[selectedCategory]}`)
                            ? top_20_videos[`${eNum[selectedCategory]}`]
                            : []
                    }
                    isLoading={isLoading}
                    selectedCategoryNumber={
                        top_20_videos?.hasOwnProperty(`${eNum[selectedCategory]}`) ? `${eNum[selectedCategory]}` : ''
                    }
                    selectedRegion={selectedRegion}
                    selectedTitle="Top20Videos"
                />

                <VideoComp
                    videoData={
                        hot_20_videos?.hasOwnProperty(`${eNum[selectedCategory]}`)
                            ? hot_20_videos[`${eNum[selectedCategory]}`]
                            : []
                    }
                    isLoading={isLoading}
                    selectedCategoryNumber={
                        hot_20_videos?.hasOwnProperty(`${eNum[selectedCategory]}`) ? `${eNum[selectedCategory]}` : ''
                    }
                    selectedRegion={selectedRegion}
                    selectedTitle="Hot20Videos"
                />

                <VideoComp
                    videoData={
                        top_20_shorts?.hasOwnProperty(`${eNum[selectedCategory]}`)
                            ? top_20_shorts[`${eNum[selectedCategory]}`]
                            : []
                    }
                    isLoading={isLoading}
                    selectedCategoryNumber={
                        top_20_shorts?.hasOwnProperty(`${eNum[selectedCategory]}`) ? `${eNum[selectedCategory]}` : ''
                    }
                    selectedRegion={selectedRegion}
                    selectedTitle="Top20Shorts"
                />

                <VideoComp
                    videoData={
                        hot_20_shorts?.hasOwnProperty(`${eNum[selectedCategory]}`)
                            ? hot_20_shorts[`${eNum[selectedCategory]}`]
                            : []
                    }
                    isLoading={isLoading}
                    selectedCategoryNumber={
                        hot_20_shorts?.hasOwnProperty(`${eNum[selectedCategory]}`) ? `${eNum[selectedCategory]}` : ''
                    }
                    selectedRegion={selectedRegion}
                    selectedTitle="Hot20Shorts"
                />
            </div>
        </main>
    )
}
