import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '1', title: 'Learning', content: "I love learning"},
    {id: '2', title: 'Teaching', content: "I love teaching"},
]

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        }
    }
})

export const {increment, decrement, reset, incrementByAmount} = postsSlice.actions;

export default postsSlice.reducer; 