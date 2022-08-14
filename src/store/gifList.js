import { createSlice } from "@reduxjs/toolkit"

export const gifList = createSlice({
  name: "gifList",
  initialState: {
    gifs: [],
    next: "",
  },
  reducers: {
    addGifs: (state, action) => {
      state.gifs = action.payload
    },
    saveNext: (state, action) => {
      state.next = action.payload
    },
  },
})

export const { addGifs, saveNext } = gifList.actions

export default gifList.reducer
