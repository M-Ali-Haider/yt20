import { createSlice } from '@reduxjs/toolkit'
import { format } from 'date-fns'

const initialState = {
    category: 0,
    region: 'Global',
    date: format(new Date(), 'yyyy-MM-dd'),
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload
            localStorage.setItem('category', action.payload)
        },
        setRegion: (state, action) => {
            state.region = action.payload
            localStorage.setItem('region', action.payload)
        },
        setDate: (state, action) => {
            state.date = action.payload
            // localStorage.setItem('date', action.payload)
        },
        loadFromLocalStorage: (state) => {
            state.category = localStorage.getItem('category') || 0
            state.region = localStorage.getItem('region') || 'Global'
        },
    },
})

export const { setCategory, setRegion, setDate, loadFromLocalStorage } = filtersSlice.actions

export default filtersSlice.reducer
