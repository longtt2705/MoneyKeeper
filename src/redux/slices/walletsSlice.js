import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import icons from "../../api/icons";

const initialState = {
  lastUsedWalletId: "1",
  wallets: [
    {
      id: "1",
      title: "Cash",
      icon: icons.wallet,
      balance: 1000000,
      limit: 1000000,
      datestart: "07/01/2021",
      dateend: "08/01/2021",
      note: "asd",
      transactions: [
        {
          id: "1",
          categoryId: "1",
          userCreatedCategoryId: "",
          eventId: null,
          moneyAmount: 25000,
          note: "breakfast in vietnam !!! Pho",
          date: sub(new Date(), { minutes: 10 }).toISOString(),
          image: "",
        },
        {
          id: "2",
          categoryId: "2",
          userCreatedCategoryId: "",
          eventId: null,
          moneyAmount: 50000,
          note: "coffee",
          date: sub(new Date(), { days: 7 }).toISOString(),
          image: "",
        },
        {
          id: "3",
          categoryId: "3",
          userCreatedCategoryId: "",
          eventId: null,
          moneyAmount: 50000,
          note: "awfasfiashfoijasoifjoifjaiosf",
          date: sub(new Date(), { days: 20 }).toISOString(),
          image: "",
        },
      ],
    },
    {
      id: "2",
      title: "momo",
      icon: icons.wallet,
      balance: 135000,
      limit: 10000,
      datestart: "01/05/2020",
      dateend: "02/04/2020",
      note: "",
      transactions: [
        {
          id: "3",
          categoryId: "",
          userCreatedCategoryId: "",
          eventId: null,
          moneyAmount: 15000,
          note: "beamin order",
          date: sub(new Date(), { minutes: 17 }).toISOString(),
          image: "",
        },
        {
          id: "4",
          categoryId: "",
          userCreatedCategoryId: "",
          eventId: null,
          moneyAmount: 29000,
          note: "foodie",
          date: sub(new Date(), { minutes: 12 }).toISOString(),
          image: "",
        },
      ],
    },
  ],
};

const walletsSlice = createSlice({
  name: "wallets",
  initialState,
  reducers: {
    addTransaction: {
      reducer(state, action) {
        const { walletId, ...transaction } = action.payload;
        const existingWallet = state.wallets.find(
          (wallet) => wallet.id === walletId
        );
        if (existingWallet) {
          existingWallet.transactions.push(transaction);
        }
        existingWallet.balance += transaction.moneyAmount;
      },
      prepare(categoryId, moneyAmount, note, date, image, walletId, eventId) {
        return {
          payload: {
            id: nanoid(),
            categoryId,
            moneyAmount: Number(moneyAmount),
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
        state.wallets.push(action.payload);
      },
      prepare(title, balance = 0, note) {
        return {
          payload: {
            id: nanoid(),
            title,
            icon: icons.wallet,
            balance,
            limit: null,
            datestart: null,
            dateend: null,
            note,
            transaction: [],
          },
        };
      },
    },
    updateWallet(state, action) {
      // console.log(action.payload);
      const { walletId, ...updatingField } = action.payload;
      const existingWallet = state.wallets.find(
        (wallet) => wallet.id == walletId
      );
      if (existingWallet) {
        for (let prop in updatingField) {
          let val = updatingField[prop];
          existingWallet[prop] = val;
        }
      }
    },
    deleteWallet(state, action) {
      const { walletId } = action.payload;
      console.log(action.payload)
      const indexOfDeletedWallet = state.wallets.findIndex(
        (wallet) => wallet.id == walletId
      );
      if (indexOfDeletedWallet >= 0) {
        state.wallets.splice(indexOfDeletedWallet, 1);
      }
    },
  },
});

export const {
  addTransaction,
  addWallet,
  updateWallet,
  deleteWallet,
} = walletsSlice.actions;

export default walletsSlice.reducer;
