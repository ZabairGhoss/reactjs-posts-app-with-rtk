import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '1',
        name: 'Zabair Ghoss',
    },
    {
        id: '2',
        name: 'Muhammad Yasir',
    },
    {
        id: '3',
        name: 'Rayyan Amjad',
    }
]


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{}
})


export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;