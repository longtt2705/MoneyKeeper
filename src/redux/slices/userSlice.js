import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "1",
  fisrtName: "day la first name",
  lastName: "day la last name",
  userName: "day la username",
  email: "day la email",
  password: "day la password",
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
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
