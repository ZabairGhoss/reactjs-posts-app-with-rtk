import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning the redux-toolkit",
    content:
      "I am building this project to practice the redux-toolkit with this project!",
  },
  {
    id: "2",
    title: "Building ReactJS projects",
    content:
      "I am building this project to practice the redux-toolkit with reactjs",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
