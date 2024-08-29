'use client'
import { loadFromLocalStorage } from '@/store/slice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const LoadFromLocal = ({ children }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    useEffect(() => {
        dispatch(loadFromLocalStorage())
    }, [dispatch])
    return children
}

export default LoadFromLocal
