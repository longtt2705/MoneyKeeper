import { createSlice, nanoid } from "@reduxjs/toolkit";
import icons from "../../api/icons";

const initialState = [
  {
    id: "1",
    title: "Salary",
    icon: icons.portfolio.source,
    type: "income",
    limit: null,
    datestart: null,
    dateend: null,
    color: icons.portfolio.color,
  },
  {
    id: "2",
    title: "Bonus",
    icon: icons.giftbox.source,
    type: "income",
    limit: null,
    datestart: null,
    dateend: null,
    color: icons.giftbox.color,
  },
  {
    id: "3",
    title: "Invest",
    icon: icons.coins.source,
    type: "income",
    limit: null,
    datestart: null,
    dateend: null,
    color: icons.coins.color,
  },
  {
    id: "4",
    title: "Side Job",
    icon: icons.part_time.source,
    type: "income",
    limit: null,
    datestart: null,
    dateend: null,
    color: icons.part_time.color,
  },
  {
    id: "5",
    title: "Shopping",
    icon: icons.shopping_cart.source,
    type: "expense",
    limit: null,
    datestart: null,
    dateend: null,
    color: icons.shopping_cart.color,
  },
  {
    id: "6",
    title: "Food",
    icon: icons.dish.source,
    type: "expense",
    limit: null,
    datestart: null,
    dateend: null,
    color: icons.dish.color,
  },
  {
    id: "7",
    title: "Transport",
    icon: icons.vehicles.source,
    type: "expense",
    limit: null,
    datestart: null,
    dateend: null,
    color: icons.vehicles.color,
  },
  {
    id: "8",
    title: "Healthcare",
    icon: icons.healthcare2.source,
    type: "expense",
    limit: null,
    datestart: null,
    dateend: null,
    color: icons.healthcare2.color,
  },
  {
    id: "9",
    title: "Education",
    icon: icons.mortarboard.source,
    type: "expense",
    limit: null,
    datestart: null,
    dateend: null,
    color: icons.mortarboard.color,
  },
  {
    id: "10",
    title: "Contact fee",
    icon: icons.phone.source,
    type: "expense",
    limit: null,
    datestart: null,
    dateend: null,
    color: icons.phone.color,
  },
];

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    updateCate(state, action) {
      const { cateId, ...updatingField } = action.payload;
      const existingCate = state.find((cate) => cate.id == cateId);
      if (existingCate) {
        for (let prop in updatingField) {
          let val = updatingField[prop];
          existingCate[prop] = val;
        }
      }
    },
    addCategory: {
      reducer(state, action) {
        // console.log(action.payload);
        state.push(action.payload);
      },
      prepare(title, icon, type, color) {
        return {
          payload: {
            id: nanoid(),
            title,
            icon,
            type,
            color,
            limit: null,
            datestart: null,
            dateend: null,
          },
        };
      },
    },
    deleteCategory(state, action) {
      const deletedCategoryId = action.payload.id;
      const indexOfDeleteCategory = state.findIndex(
        (category) => category.id == deletedCategoryId
      );

      state.splice(indexOfDeleteCategory, 1);
    },
  },
});

export const { updateCate } = categoriesSlice.actions;

export default categoriesSlice.reducer;
export const { addCategory, deleteCategory } = categoriesSlice.actions;
