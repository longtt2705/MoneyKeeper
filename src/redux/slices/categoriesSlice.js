import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "salary",
    icon: "",
    type: "income",
    limit:1000000
  },
  {
    id: "2",
    title: "bonus",
    icon: "",
    type: "income",
    limit:null
  },
  {
    id: "3",
    title: "invest",
    icon: "",
    type: "income",
    limit:1000000
  },
  {
    id: "4",
    title: "side job",
    icon: "",
    type: "income",
    limit:null
  },
  {
    id: "5",
    title: "shopping",
    icon: "",
    type: "expense",
    limit:1000000
  },
  {
    id: "6",
    title: "food",
    icon: "",
    type: "expense",
    limit:1000000
  },
  {
    id: "7",
    title: "transport",
    icon: "",
    type: "expense",
    limit:1000000
  },
];

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
});

export default categoriesSlice.reducer;
