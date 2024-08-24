'use client'
import { useQuery } from '@tanstack/react-query'
import Top20Shorts from '../T20Shorts'
import Top20Videos from '../T20Videos'
import TopLine from './line'
import TopSkeleton from './skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadFromLocalStorage } from '@/store/slice'
const Top = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadFromLocalStorage())
    }, [dispatch])

    const { category, region, date } = useSelector((state) => state.filters)

    const {
        data: homeData,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ['homeData', category, region, date],
        queryFn: () =>
            fetch(
                `https://savvy-folio-406713.uc.r.appspot.com/api/data?region=${region}&category=${category}&start_date=${date}`
            ).then((res) => res.json()),
    })

    if (isError) {
        return <div>Error loading Home data + {error}</div>
    }

    return (
        <>
            {isLoading && <TopSkeleton />}
            {!isLoading && (
                <>
                    <Top20Videos
                        data={homeData.top_20_videos}
                        heading={'Top 20 Videos for you'}
                        videoType={'top_video'}
                    />
                    <TopLine />
                    <Top20Shorts
                        data={homeData.top_20_shorts}
                        heading={'Top 20 Shorts for you'}
                        videoType={'top_short'}
                    />
                    <TopLine />
                    <Top20Videos
                        data={homeData.hot_20_videos}
                        heading={'Hot 20 Videos for you'}
                        videoType={'hot_video'}
                    />
                    <TopLine />
                    <Top20Shorts
                        data={homeData.hot_20_shorts}
                        heading={'Hot 20 Shorts for you'}
                        videoType={'hot_short'}
                    />
                </>
            )}
        </>
    )
}

export default Top
