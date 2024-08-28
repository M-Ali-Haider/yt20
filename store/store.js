import { configureStore } from '@reduxjs/toolkit'
import filtersReducer from './slice'
import sidebarReducer from './sidebar'
import activeLinkReducer from './activeLink'
export const store = configureStore({
    reducer: {
        filters: filtersReducer,
        sidebar: sidebarReducer,
        activeLink: activeLinkReducer,
    },
})

export default store
