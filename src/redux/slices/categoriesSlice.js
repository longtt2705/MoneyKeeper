import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "salary",
    icon: "",
    type: "income",
  },
  {
    id: "2",
    title: "bonus",
    icon: "",
    type: "income",
  },
  {
    id: "3",
    title: "invest",
    icon: "",
    type: "income",
  },
  {
    id: "4",
    title: "side job",
    icon: "",
    type: "income",
  },
  {
    id: "5",
    title: "shopping",
    icon: "",
    type: "expense",
  },
  {
    id: "6",
    title: "food",
    icon: "",
    type: "expense",
  },
  {
    id: "7",
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
