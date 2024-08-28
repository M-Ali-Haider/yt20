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
            state.activeLink = action.payload
        },
        onEnter: (state, action) => {
            if (action.payload !== state.activeLink) {
                state.activeLink = action.payload
            }
        },
        onLeaveBack: (state) => {
            console.log('OnLeaveBack Triggered: ' + keyMap[state.activeLink])
            state.activeLink = keyMap[state.activeLink]
        },
        resetActiveLink: (state) => {
            state.activeLink = null
            state.previousActiveLink = null
        },
    },
})

export const { setActiveLink, onLeaveBack, resetActiveLink, onEnter } = activeLinkSlice.actions
export default activeLinkSlice.reducer
