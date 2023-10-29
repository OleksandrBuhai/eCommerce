import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Product {
  amount: number;
  totalPrice: number;
  id: string;
  price: number;
  size?: string;
  color: string;
  img: string;
  name: string;
  text: string;
}

export interface CartState {
  cart: Product[];
  totalAmount: number;
  totalPrice: number;
}

const initialState: CartState = {
  cart: [],
  totalAmount: 0,
  totalPrice: 0,
};

const savedCartString = localStorage.getItem("cart");
const savedCart:CartState = savedCartString ? JSON.parse(savedCartString) : initialState;

const slice = createSlice({
  name: "cart",
  initialState: savedCart,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<Product>) => {
      const productId = action.payload;
      try {
        const exist = state.cart.find(
          (product) =>
            product.id === productId.id &&
            product.size === productId.size &&
            product.color === productId.color
        );
        if (exist) {
          exist.amount++;
          exist.totalPrice += productId.price;
          state.totalAmount++;
          state.totalPrice += productId.price;
        } else {
          state.cart.push({
            id: productId.id,
            price: productId.price,
            size: productId.size,
            amount: 1,
            img: productId.img,
            totalPrice: productId.price,
            name: productId.name,
            text: productId.text,
            color: productId.color,
          });
          state.totalAmount++;
          state.totalPrice += productId.price;
        }

        
        localStorage.setItem("cart", JSON.stringify(state));
      } catch (err) {
        console.error(err);
      }
    },
    removeFromCart: (state: CartState, action: PayloadAction<Product>) => {
      const productId = action.payload;

      try {
        const exist = state.cart.find(
          (product) =>
            product.id === productId.id &&
            product.size === productId.size &&
            product.color === productId.color
        );

        if (exist!.amount === 1) {
          state.cart = state.cart.filter(
            (product) =>
              product.id !== productId.id ||
              product.size !== productId.size ||
              product.color !== productId.color
          );
        } else {
          exist!.amount--;
          exist!.totalPrice -= productId.price;
        }

        state.totalAmount--;
        state.totalPrice -= productId.price;

        
        localStorage.setItem("cart", JSON.stringify(state));
      } catch (err) {
        console.error("Error removing from cart:", err);
      }
    },
  },
});

export const { addToCart, removeFromCart } = slice.actions;
export const addReducer = slice.reducer;
