import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  active: true,
}

export const layoutSlice = createSlice({
  name: 'sidebarToggle',
  initialState,
  reducers: {
    toggle: (state) => {
      state.active = ! state.active
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { toggle } = layoutSlice.actions

export default layoutSlice.reducer