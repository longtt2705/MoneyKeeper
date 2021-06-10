import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    title: "salary",
    icon: "",
    type: "income",
  },
  {
    title: "bonus",
    icon: "",
    type: "income",
  },
  {
    title: "invest",
    icon: "",
    type: "income",
  },
  {
    title: "side job",
    icon: "",
    type: "income",
  },
  {
    title: "shopping",
    icon: "",
    type: "expense",
  },
  {
    title: "food",
    icon: "",
    type: "expense",
  },
  {
    title: "transport",
    icon: "",
    type: "expense",
  },
];

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
});

export default categoriesSlice.reducer;
