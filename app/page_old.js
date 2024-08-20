'use client'
import '@/app/(MainCss)/base.css'
import '@/app/(MainCss)/embla.css'
import '@/app/(MainCss)/sandbox.css'
import Banner from '@/components/Banner'
import Categories from '@/components/Cateogries'
import VideoComp from '@/components/MainComponents/VideoComp'
import Region from '@/components/shared/Region'
import VideoSkeleton from '@/components/shared/VideoSkeleton'
import { checkFirstIndex, getDataWithNonEmptyIndex } from '@/utils/globalFunctions'
import { useRegionGlobal } from '@/utils/http'
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined'
import { useParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
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
    const [selectedRegion, setSelectedRegion] = useState('Global')
    const [startDate, setStartDate] = useState('')

    const { data, isLoading } = useRegionGlobal(eNum[selectedCategory], selectedRegion, startDate)
    const { top_20_videos, hot_20_videos, top_20_shorts, hot_20_shorts } = data || {}

    const isAllDataHere = checkFirstIndex({
        "top_20_videos": data?.top_20_videos,
        "hot_20_videos": data?.hot_20_videos,
        "top_20_shorts": data?.top_20_shorts,
        "hot_20_shorts": data?.hot_20_shorts,
    });

    const mainData = useMemo(()=>{
        const tempData = getDataWithNonEmptyIndex({
            "top_20_videos": data?.top_20_videos,
            "hot_20_videos": data?.hot_20_videos,
            "top_20_shorts": data?.top_20_shorts,
            "hot_20_shorts": data?.hot_20_shorts,
        })
        return tempData
    },[data])

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
            
            {!isLoading ? (
               <>
               {mainData !== null && mainData !== undefined && isAllDataHere ? (
               <div className="Main_Videos_Div">
                   <VideoComp
                       videoData={mainData?.top_20_videos}
                       isLoading={isLoading}
                       selectedCategoryNumber={
                           top_20_videos?.hasOwnProperty(`${eNum[selectedCategory]}`) ? `${eNum[selectedCategory]}` : ''
                       }
                       selectedRegion={selectedRegion}
                       selectedTitle="Top20Videos"
                       isAllDataHere={isAllDataHere}
                   />
   
                   <VideoComp
                       videoData={mainData?.hot_20_videos}
                       isLoading={isLoading}
                       selectedCategoryNumber={
                           hot_20_videos?.hasOwnProperty(`${eNum[selectedCategory]}`) ? `${eNum[selectedCategory]}` : ''
                       }
                       selectedRegion={selectedRegion}
                       selectedTitle="Hot20Videos"
                   />
   
                   <VideoComp
                       videoData={mainData?.top_20_shorts}
                       isLoading={isLoading}
                       selectedCategoryNumber={
                           top_20_shorts?.hasOwnProperty(`${eNum[selectedCategory]}`) ? `${eNum[selectedCategory]}` : ''
                       }
                       selectedRegion={selectedRegion}
                       selectedTitle="Top20Shorts"
                   />
   
                   <VideoComp
                       videoData={mainData?.hot_20_shorts}
                       isLoading={isLoading}
                       selectedCategoryNumber={
                           hot_20_shorts?.hasOwnProperty(`${eNum[selectedCategory]}`) ? `${eNum[selectedCategory]}` : ''
                       }
                       selectedRegion={selectedRegion}
                       selectedTitle="Hot20Shorts"
                   />
               </div>
               ) : <div style={{
                color: 'white',
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '30px',
                display:'flex',
                flexDirection:'row',
                gap:'1rem'
               }}>
                <ErrorOutlineOutlinedIcon style={{fontSize:'larger'}} />
                No Data Found!
            </div>}
               </>

            ) : (
                <Skeleton />
            )
            }
        </main>
    )
}

const Skeleton = () => {
    return(
        <div
        style={{ marginBottom: '10rem' }}
        className="w-ful dark:shadow grid grid-cols-2 sm:grid-cols-4 middle:grid-cols-5 laptopL:grid-cols-6 4k:grid-cols-8 gap-4 mb-4 my-4 mx-4"
    >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
            return <VideoSkeleton key={item} />
        })}
    </div>
    )
}