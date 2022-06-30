import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPragraphs = createAsyncThunk('pragraphs/getPragraphs', async ({n,h}) => {
    const res = await axios(`https://baconipsum.com/api/?type=all-meat&paras=${n}&format=${h}`);
    return res.data;
})

export const pragraphsSlice = createSlice({
    name: 'pragraphs',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: {
          [fetchPragraphs.pending]: (state) => {
            state.status = "loading";
          },
          [fetchPragraphs.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = "idle";
          },
          [fetchPragraphs.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
          },
    }
});

export default pragraphsSlice.reducer;