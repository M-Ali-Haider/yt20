import { useEffect, useState } from 'react'

export const transformDateFormat = (inputDate) => {
    const originalDate = new Date(inputDate)
    const year = originalDate.getFullYear()
    const month = (originalDate.getMonth() + 1).toString().padStart(2, '0') // Months are zero-indexed
    const day = originalDate.getDate().toString().padStart(2, '0')
    const transformedDate = `${year}-${month}-${day}`
    return transformedDate
}

export const useDebounce = (value, milliSeconds) => {
    const [debouncedValue, setDebouncedValue] = useState(value)
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, milliSeconds)
        return () => {
            clearTimeout(handler)
        }
    }, [value, milliSeconds])
    return debouncedValue
}

export const checkFirstIndex = (objects) => {
    for (const objKey in objects) {
        if (objects.hasOwnProperty(objKey)) {
            const indexValues = objects[objKey]
            if (indexValues && Object.values(indexValues).some((value) => value && value.length > 0)) {
                return true
            }
        }
    }
    return false
}

export const getDataWithNonEmptyIndex = (objects) => {
    const resultData = {}
    for (const objKey in objects) {
        if (objects.hasOwnProperty(objKey)) {
            const indexValues = objects[objKey]
            if (indexValues && Object.values(indexValues).some((value) => value && value.length > 0)) {
                resultData[objKey] = Object.values(indexValues)[0]
            }
        }
    }
    return resultData
}
