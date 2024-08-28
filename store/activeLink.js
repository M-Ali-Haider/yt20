import { createSlice } from '@reduxjs/toolkit'

const keyMap = {
    'Top 20 Videos': 'Top 20 Videos',
    'Top 20 Short Videos': 'Top 20 Videos',
    'Hot 20 Videos': 'Top 20 Short Videos',
    'Hot 20 Short Videos': 'Hot 20 Videos',
}

export const activeLinkSlice = createSlice({
    name: 'activeLink',
    initialState: {
        activeLink: 'Top 20 Videos',
    },
    reducers: {
        setActiveLink: (state, action) => {
            if (action.payload !== state.activeLink) {
                state.activeLink = action.payload
            }
        },
        onLeaveBack: (state) => {
            state.activeLink = keyMap[state.activeLink]
        },
        resetActiveLink: (state) => {
            state.activeLink = null
            state.previousActiveLink = null
        },
    },
})

export const { setActiveLink, onLeaveBack, resetActiveLink } = activeLinkSlice.actions
export default activeLinkSlice.reducer
