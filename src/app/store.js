import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../feature/postsSlice";


export const store = configureStore({
    reducer: {
        posts: postsReducer,
    }
}) 