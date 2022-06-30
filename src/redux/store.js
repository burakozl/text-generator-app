import { configureStore } from "@reduxjs/toolkit";
import pragraphsSlice from './pragraphsSlice';

export const store = configureStore({
    reducer: {
        pragraphs: pragraphsSlice,
    }
});