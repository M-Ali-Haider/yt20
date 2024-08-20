'use client'
import { useQuery } from '@tanstack/react-query'
import Top20Shorts from '../T20Shorts'
import Top20Videos from '../T20Videos'
import TopSkeleton from './skeleton'
import TopLine from './line'
import { useEffect } from 'react'
const Top = () => {
    const {
        data: homeData,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ['homeData'],
        queryFn: () =>
            fetch(`https://savvy-folio-406713.uc.r.appspot.com/api/data?region=Global&category=0&start_date=`).then(
                (res) => res.json()
            ),
    })

    if (isError) {
        return <div>Error loading Home data + {error}</div>
    }

    return (
        <>
            {isLoading && <TopSkeleton />}
            {!isLoading && (
                <>
                    <Top20Videos data={homeData.top_20_videos} heading={'Top 20 Videos for you'} />
                    <TopLine />
                    <Top20Shorts data={homeData.top_20_shorts} heading={'Top 20 Shorts for you'} />
                    <TopLine />
                    <Top20Videos data={homeData.hot_20_videos} heading={'Hot 20 Videos for you'} />
                    <TopLine />
                    <Top20Shorts data={homeData.hot_20_shorts} heading={'Hot 20 Shorts for you'} />
                </>
            )}
        </>
    )
}

export default Top
