import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "salary",
    icon: "",
    type: "income",
    limit:1000000,
    datestart:"05/03/2021",
    dateend:"05/05/2021",
  },
  {
    id: "2",
    title: "bonus",
    icon: "",
    type: "income",
    limit:null,
    datestart:null,
    dateend:null
  },
  {
    id: "3",
    title: "invest",
    icon: "",
    type: "income",
    limit:1000000,
    datestart:"26/02/2021",
    dateend:"30/03/2021"
  },
  {
    id: "4",
    title: "side job",
    icon: "",
    type: "income",
    limit:null,
    datestart:null,
    dateend:null
  },
  {
    id: "5",
    title: "shopping",
    icon: "",
    type: "expense",
    limit:null,
    datestart:null,
    dateend:null
  },
  {
    id: "6",
    title: "food",
    icon: "",
    type: "expense",
    limit:null,
    datestart:null,
    dateend:null
  },
  {
    id: "7",
    title: "transport",
    icon: "",
    type: "expense",
    limit:1000000,
    datestart:"18/05/2021",
    dateend:"16/03/2021"
  },
];

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    updateCate(state, action) {
      const { cateId, ...updatingField } = action.payload;
      const existingCate = state.find(
        (cate) => cate.id == cateId
      );
      if (existingCate) {
        for (let prop in updatingField) {
          let val = updatingField[prop];
          existingCate[prop] = val;
        }
      }
    },
  },
});

export const { updateCate } = categoriesSlice.actions;

export default categoriesSlice.reducer;
