import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface Users {
    name:string,
    password:string
    image:string
    authUser:boolean
}

const savedUserString = localStorage.getItem("authUser");
const savedUser = savedUserString
  ? JSON.parse(savedUserString)
  : {
      name: "",
      password: "",
      image: "",
      authUser: false,
    };

export const authSlice = createSlice({
  name: "auth",
  initialState:{
    users:savedUser as Users
  },
  reducers: {
    login(state, action:PayloadAction<{name:string, password:string}>) {
      const userId = action.payload;
      const userValidation = /^[A-Za-z]{4,10}$/i.test(userId.name);
      const passwordValidation =
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?!.*[!@#\$%\^&*()])[a-zA-Z0-9!@#$%^&*]{4,10}$/i.test(
          userId.password
        );
        state.users = {
            ...state.users,
            ...userId,
          };
      if (!userValidation || !passwordValidation) {
        state.users.authUser = false;
      } else {
        state.users.authUser = true;
        const saveState = JSON.stringify(userId);
        localStorage.setItem("authUser", saveState);
      }
    },
    logout(state) {
      state.users = {
        name: "",
        password: "",
        image: "",
        authUser: false,
      };
      localStorage.clear();
    },
  },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
