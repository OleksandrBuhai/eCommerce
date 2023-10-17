import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {sliderData} from '../../assets/data/dataStore.js'



const slice = createSlice({
    name:'slider',
    initialState: {
        value:0,
        length:sliderData.length,
    },
    reducers: {
        nextSlide: (state:{value:number, length:number}, action:PayloadAction<{id:number}>)=>{
            state.value = action.payload.id > state.length - 1 ? 0 : action.payload.id
        },
        prevSlide: (state:{value:number, length:number}, action:PayloadAction<{id:number}>)=>{
            state.value = action.payload.id < 0 ? state.length - 1 : action.payload.id
        },
        dotSlide: (state, action:PayloadAction<{id:number}>)=>{
          const slide = action.payload.id
          state.value = slide
        }
    }
})


export const sliderReducer = slice.reducer
export const { nextSlide, prevSlide, dotSlide } = slice.actions;