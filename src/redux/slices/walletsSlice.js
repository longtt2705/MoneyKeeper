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
      balance: 0,
      limit: null,
      datestart: null,
      dateend: null,
      note: "",
      transactions: [],
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

        // Cập nhật số dư của ví
        if (transaction.type == "expense") {
          existingWallet.balance -= transaction.moneyAmount;
        } else if (transaction.type == "income") {
          existingWallet.balance += transaction.moneyAmount;
        }

        // Cập nhật ví sử dụng gần nhất
        state.lastUsedWalletId = walletId;

        // Thêm transaction vào ví
        if (existingWallet) {
          existingWallet.transactions.push(transaction);
        }
      },
      prepare(
        categoryId,
        moneyAmount,
        note,
        date,
        image,
        walletId,
        eventId,
        type
      ) {
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
            type,
          },
        };
      },
    },
    deleteTransactionOfCategory(state, action) {
      const deletedCategoryId = action.payload.id;
      state.wallets.forEach((wallet) => {
        wallet.transactions = wallet.transactions.filter(
          (transaction) => transaction.categoryId != deletedCategoryId
        );
      });
    },
    addWallet: {
      reducer(state, action) {
        state.wallets.push(action.payload);
        // console.log("wallet Slice", state);
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
            transactions: [],
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

      // cập nhật lastUsedWallet trước
      if (walletId == state.lastUsedWalletId) {
        const newLastUsedWalet = state.wallets.find(
          (wallet) => wallet.id != walletId
        );
        if (!newLastUsedWalet) {
          state.lastUsedWalletId = "";
        } else {
          state.lastUsedWalletId = newLastUsedWalet.id;
        }
      }

      const indexOfDeletedWallet = state.wallets.findIndex(
        (wallet) => wallet.id == walletId
      );
      if (indexOfDeletedWallet >= 0) {
        state.wallets.splice(indexOfDeletedWallet, 1);
      }

      // console.log(state);
    },
  },
});

export const {
  addTransaction,
  addWallet,
  updateWallet,
  deleteWallet,
  deleteTransactionOfCategory,
} = walletsSlice.actions;

export default walletsSlice.reducer;
