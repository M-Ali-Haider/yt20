'use client'
import { onEnter, onLeaveBack, setActiveLink } from '@/store/activeLink'
import { options } from '@/utils/filterbar'
import { useQuery } from '@tanstack/react-query'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Top20Shorts from '../T20Shorts'
import Top20Videos from '../T20Videos'
const Top = () => {
    const dispatch = useDispatch()
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

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const triggers = options.map((option) => {
            return ScrollTrigger.create({
                trigger: option.id,
                start: 'top top+=97px',
                end: 'bottom center',
                onEnter: () => dispatch(onEnter(option.title)),
                onEnterBack: () => dispatch(onLeaveBack()),
                markers: true,
            })
        })

        return () => {
            triggers.forEach((trigger) => trigger.kill())
        }
    }, [isLoading])

    if (isError) {
        return <div>Error loading Home data + {error}</div>
    }
    return (
        <>
            <div className="flex flex-col gap-1 2xl:pb-28">
                <Top20Videos
                    isLoading={isLoading}
                    data={homeData}
                    heading={'Top 20 Videos for you'}
                    videoType={'top_video'}
                    id={'top20videos'}
                    isLine={false}
                    className={`pt-[40px]`}
                />
                <Top20Shorts
                    isLoading={isLoading}
                    data={homeData}
                    heading={'Top 20 Shorts for you'}
                    videoType={'top_short'}
                    id={'top20shorts'}
                    isLine={true}
                    className={``}
                />
                <Top20Videos
                    isLoading={isLoading}
                    data={homeData}
                    heading={'Hot 20 Videos for you'}
                    videoType={'hot_video'}
                    id={'hot20videos'}
                    isLine={true}
                    className={``}
                />
                <Top20Shorts
                    isLoading={isLoading}
                    data={homeData}
                    heading={'Hot 20 Shorts for you'}
                    videoType={'hot_short'}
                    id={'hot20shorts'}
                    isLine={true}
                    className={``}
                />
            </div>
        </>
    )
}

export default Top
