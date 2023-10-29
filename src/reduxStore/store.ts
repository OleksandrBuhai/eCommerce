import { configureStore } from "@reduxjs/toolkit";
import { addReducer } from "./addToBag/addSlice";
import { authReducer } from "./authSlice/authSlice";
import { filterReducer } from "./filterSlice/filterSlice";
import { sliderReducer } from "./sliderSlice/sliderSlice";




export const store = configureStore({
    reducer: {
        sliderReducer,
        filterReducer,
        addReducer,
    
        authReducer
    },
   
})



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch