import { configureStore } from "@reduxjs/toolkit";
import money from "./storeSlice/storeSlice";
export const store = configureStore({
    reducer:{
        money
    },
});