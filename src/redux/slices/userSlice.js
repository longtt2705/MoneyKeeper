import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // id: "1",
  // firstName: "Luong",
  // lastName: "Nhan",
  // userName: "day la username",
  // email: "day la email",
  // password: "day la password",
  // address: "day la dia chi",
  // career: "day la nghe nghiep",
  // DOB: "day la ngay sinh",
  // phone: "day la so dien thoai",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser(state, action) {
      const data = action.payload;
      for (let prop in data) {
        state[prop] = data[prop];
      }
      // console.log(state);
    },
    logIn(state, action) {
      state = action.payload;
      state.isLogedIn = true;
      state.firstName = action.payload.fullName;
      state.lastName = "";
      // console.log(state);
      return state;
    },
    logOut(state, action) {
      state = {};
      state.isLogedIn = false;
      // console.log("log out", state);
      return state;
    },
  },
});

export const { updateUser, logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
