import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "1",
  firstName: "Luong",
  lastName: "Nhan",
  userName: "day la username",
  email: "day la email",
  password: "day la password",
  address: "day la dia chi",
  career: "day la nghe nghiep",
  DOB: "day la ngay sinh",
  phone: "day la so dien thoai",
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
      console.log(state);
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
