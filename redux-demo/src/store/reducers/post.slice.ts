import { Dispatch, PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// types
import { Post } from "../../utils/types";

// Utils
import { sleep } from "../../utils/Common";
import { fakePosts } from "../../utils/fake-data";
import { RootState } from "..";

const initialState: Post[] = [];

// Slice definition
const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        INIT_POSTS: (state = initialState, action: PayloadAction<Post[]>) => {
            if (!action.payload.length) {
                return state
            }
            return [...action.payload];
        },

        ADD_POST: (state = initialState, action: PayloadAction<Post>) => {
            state.push(action.payload);
        },

        REMOVE_POST: (state = initialState, action: PayloadAction<Post>) => {
            state = state.filter(el => el.id !== action.payload.id);
        }
    }
});

// actions
export const { INIT_POSTS } = postSlice.actions;

// thunk action creators
export const fetchPosts = () => async (dispatch: Dispatch): Promise<void> => {
    console.log("Thunk start");
    // mock api call
    await sleep();

    dispatch(INIT_POSTS(fakePosts))
    console.log("Thunk end");
}

/* export const fetchPosts = createAsyncThunk('posts/INIT_POSTS', async () => {
    console.log("Thunk start");
    // mock api call
    await sleep();

    console.log("Thunk end");
    return fakePosts;
}) */

// Selectors
export const extractPosts = (state: RootState) => state.posts;

// reducers
export default postSlice.reducer;
