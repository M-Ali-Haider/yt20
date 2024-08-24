import { configureStore } from '@reduxjs/toolkit'
import filtersReducer from './slice'
export const store = configureStore({
    reducer: {
        filters: filtersReducer,
    },
})

export default store
