'use client'
import { loadFromLocalStorage } from '@/store/slice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const LoadFromLocal = ({ children }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadFromLocalStorage())
    }, [dispatch])
    return children
}

export default LoadFromLocal
