import {configureStore} from "@reduxjs/toolkit";
import hostReducer from "./demoSlice";
export const store = configureStore({
    reducer :{
        host : hostReducer
    }
})