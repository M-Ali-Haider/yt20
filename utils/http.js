import { useQuery } from '@tanstack/react-query'
import { get } from './axios'

export const useRegionGlobal = (category = '0', region = 'Global', startDate = '') => {
    // const withStartDate = `/data?region=${!!region && region !== undefined ? region : 'Global'}&category=${category}&start_date=${startDate}`;
    // const withOutStartDate = `/data?region=${!!region && region !== undefined ? region : 'Global'}&category=${category}`;
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['AllVideos', category, region, startDate],
        // queryFn: () => get(`${!!startDate && startDate.length > 0 ? withStartDate : withOutStartDate}`),
        queryFn: () => get(`/data?region=${!!region && region !== undefined ? region : 'Global'}&category=${category}&start_date=${startDate}`),
        enabled: !!region && !!category,
    })
    return { data, isLoading, refetch }
}

export const useVideoById = (id, videoType) => {
    const { data, isLoading } = useQuery({
        queryKey: ['videoId', id],
        queryFn: () => get(`/video-detail?video_id=${id}&video_type=${videoType}`),
        enabled: !!id,
    })
    return { data, isLoading }
}

export const useGetRegions = (search = '') => {
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['Regions', search],
        queryFn: () => get(`/regions?search=${search}`),
    })
    return { data, isLoading, refetch }
}
