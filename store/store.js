import { configureStore } from '@reduxjs/toolkit'
import filtersReducer from './slice'
import sidebarReducer from './sidebar'
export const store = configureStore({
    reducer: {
        filters: filtersReducer,
        sidebar: sidebarReducer,
    },
})

export default store
