import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StoreDataType, storeData } from "../../assets/data/dataStore";


const storedFilterData = localStorage.getItem('filterData');
const filterProducts: StoreDataType = storedFilterData ? JSON.parse(storedFilterData) : storeData;

const storedForSongleProduct = localStorage.getItem('singleProduct')
const selectedProduct: StoreDataType = storedForSongleProduct ? JSON.parse(storedForSongleProduct) : storeData

const slice = createSlice({
    name: 'filter',
    initialState: {
        filterProducts: filterProducts,
        selectedProduct: selectedProduct,
        error: false
    },
    reducers: {
        filterProducts: (state, action: PayloadAction<string | undefined>) => {
            try {
                const filter = storeData.filter((el) => el.type === action.payload)
                state.filterProducts = filter
                const savedState = JSON.stringify(filter)
                localStorage.setItem('filterData', savedState)
            }
            catch (error) {
                console.log("error" + error)
            }
        },
        singleProduct: (state, action) => {
            const oneProduct = storeData.filter((el) => el.id === action.payload.id)
            state.selectedProduct = oneProduct
            const save = JSON.stringify(oneProduct)
            localStorage.setItem('singleProduct', save)

        },
        filterGender: (state, action: PayloadAction<{ gender: string }>) => {
            try {
              const originalData = JSON.parse(localStorage.getItem('filterData') || '[]');
              const gender = originalData.filter(
                (product: { gender: string; }) => product.gender === action.payload.gender
              );
          
              state.filterProducts = gender;
              const oneGenderType = gender.length > 0;
          
              if (oneGenderType) {
                const saveState = JSON.stringify(gender);
                sessionStorage.setItem("filteredData", saveState);
              } else {
                state.filterProducts = [];
              }
            } catch (err) {
              console.error("Error filtering by gender:", err);
            }
          },
        sortByPrice: (state) => {
            const price = state.filterProducts.sort((a, b) =>
                a.price > b.price ? -1 : 1
            );
            state.filterProducts = price;
            let count = price.length;
            if (count > 1) {
                const noError = false;

                if (!noError) {
                    state.filterProducts = price;
                    const saveState = JSON.stringify(price);
                    sessionStorage.setItem("filteredData", saveState);
                }
            } else {

                state.filterProducts = [];
            }

        },
        filterByColor(state, action: PayloadAction<{ color: string }>) {

            const color = state.filterProducts.filter((product) =>
                product.color.includes(action.payload.color)
            );

            state.filterProducts = color;
            if (color.length <= 0) {

                state.filterProducts = [];
            } else {

                state.filterProducts = color;
                const saveState = JSON.stringify(color);
                sessionStorage.setItem("filteredData", saveState);
            }
        }
        ,
        filterBySize: (state, action: PayloadAction<{ size: string }>):void => {
          try {
            const size = state.filterProducts.filter((product) =>
              product.size?.includes(action.payload.size)
            );
    
            state.filterProducts = size;
    
            if (size.length <= 0) {
              state.filterProducts = [];
            } else {
              state.filterProducts = size;
              const saveState = JSON.stringify(size);
              localStorage.setItem("filteredData", saveState);
            }
            
            // Тут тип має бути void, оскільки немає значення, яке повертається
            return;
          } catch (err:any) {
            // Тут можна повернути об'єкт з помилкою або специфічний тип помилки
            console.error("Error filtering by gender:", err);;
          }
          }
    }
})

export const filteredAction = slice.actions
export const filterReducer = slice.reducer