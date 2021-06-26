import { createSlice, nanoid } from "@reduxjs/toolkit";
import icons from "../../api/icons";

const initialState = [
  {
    id: "1",
    title: "Salary",
    icon: icons.portfolio.source,
    type: "income",
    color: icons.portfolio.color,
  },
  {
    id: "2",
    title: "Bonus",
    icon: icons.giftbox.source,
    type: "income",
    color: icons.giftbox.color,
  },
  {
    id: "3",
    title: "Invest",
    icon: icons.coins.source,
    type: "income",
    color: icons.coins.color,
  },
  {
    id: "4",
    title: "Side Job",
    icon: icons.part_time.source,
    type: "income",
    color: icons.part_time.color,
  },
  {
    id: "5",
    title: "Shopping",
    icon: icons.shopping_cart.source,
    type: "expense",
    color: icons.shopping_cart.color,
  },
  {
    id: "6",
    title: "Food",
    icon: icons.dish.source,
    type: "expense",
    color: icons.dish.color,
  },
  {
    id: "7",
    title: "Transport",
    icon: icons.vehicles.source,
    type: "expense",
    color: icons.vehicles.color,
  },
  {
    id: "8",
    title: "Healthcare",
    icon: icons.healthcare2.source,
    type: "expense",
    color: icons.healthcare2.color,
  },
  {
    id: "9",
    title: "Education",
    icon: icons.mortarboard.source,
    type: "expense",
    color: "#fff",
  },
  {
    id: "12",
    title: "Contact fee",
    icon: icons.phone.source,
    type: "expense",
    color: icons.phone.color,
  },
];

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
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

export default categoriesSlice.reducer;
export const { addCategory, deleteCategory } = categoriesSlice.actions;
