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
        eventId: null,
        moneyAmount: 25000,
        note: "breakfast in vietnam !!! Pho",
        date: sub(new Date(), { minutes: 10 }),
        image: "",
      },
      {
        categoryId: "",
        userCreatedCategoryId: "",
        eventId: null,
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
        eventId: null,
        moneyAmount: 15000,
        note: "beamin order",
        date: sub(new Date(), { minutes: 17 }),
        image: "",
      },
      {
        categoryId: "",
        userCreatedCategoryId: "",
        eventId: null,
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
    addTransaction: {
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
        walletId,
        eventId
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
            eventId,
          },
        };
      },
    },
    addWallet: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, icon, balance = 0, limit = null) {
        return {
          payload: {
            id: nanoid(),
            title,
            icon,
            balance,
            limit,
          },
        };
      },
    },
    updateWallet(state, action) {
      const { walletId, ...updatingField } = action.payload;
      const existingWallet = state.find((wallet) => wallet.id == walletId);
      if (existingWallet) {
        for (let prop in updatingField) {
          let val = updatingField[prop];
          existingWallet[prop] = val;
        }
      }
    },
  },
});

export const { addTransaction, addWallet } = walletsSlice.actions;

export default walletsSlice.reducer;
