import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "cash",
    icon: "",
    balance: 1000000,
    limit: null,
    transactions: [
      {
        categoryId: "",
        userCreatedCategoryId: "",
        moneyAmount: 25000,
        note: "breakfast in vietnam !!! Pho",
        date: sub(new Date(), { minutes: 10 }),
        image: "",
      },
      {
        categoryId: "",
        userCreatedCategoryId: "",
        moneyAmount: 50000,
        note: "coffee",
        date: sub(new Date(), { minutes: 20 }),
        image: "",
      },
    ],
  },
  {
    id: "2",
    title: "momo",
    icon: "",
    balance: 135000,
    limit: null,
    transactions: [
      {
        categoryId: "",
        userCreatedCategoryId: "",
        moneyAmount: 15000,
        note: "beamin order",
        date: sub(new Date(), { minutes: 17 }),
        image: "",
      },
      {
        categoryId: "",
        userCreatedCategoryId: "",
        moneyAmount: 29000,
        note: "foodie",
        date: sub(new Date(), { minutes: 12 }),
        image: "",
      },
    ],
  },
];

const walletsSlice = createSlice({
  name: "wallets",
  initialState,
  reducers: {
    transactionAdded: {
      reducer(state, action) {
        const { walletId, ...transaction } = action.payload;
        const existingWallet = state.find((wallet) => wallet.id === walletId);
        if (existingWallet) {
          existingWallet.transactions.push(transaction);
        }
      },
      prepare(
        categoryId,
        userCreatedCategoryId,
        moneyAmount,
        note,
        date,
        image,
        walletId
      ) {
        return {
          payload: {
            id: nanoid(),
            categoryId,
            userCreatedCategoryId,
            moneyAmount,
            note,
            date,
            image,
            walletId,
          },
        };
      },
    },
    walletAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, icon, balance = 0) {
        return {
          payload: {
            id: nanoid(),
            icon,
            balance,
          },
        };
      },
    },
  },
});

export const { transactionAdded } = walletsSlice.actions;

export default walletsSlice.reducer;
