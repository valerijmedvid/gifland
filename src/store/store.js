import { configureStore } from "@reduxjs/toolkit"
import gifList from "./gifList"

export default configureStore({
  reducer: {
    gifList,
  },
})
