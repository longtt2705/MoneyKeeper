import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    title: "None",
    description: "",
    date: "",
    status: "pending",
  },
];

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: {
      reducer(state, action) {},
      prepare(title, description, date, status) {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            date,
            status,
          },
        };
      },
    },
  },
});

export const { addEvent } = eventsSlice.actions;

export default eventsSlice.reducer;
