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
  {
    id: "8",
    title: "Medical",
    icon: "",
    type: "expense",
  },
  {
    id: "9",
    title: "Education",
    icon: "",
    type: "expense",
  },
  {
    id: "12",
    title: "Contact fee",
    icon: "",
    type: "expense",
  },
  {
    id: "13",
    title: "Contact fee",
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
