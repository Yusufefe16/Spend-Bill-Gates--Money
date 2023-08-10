import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data/Data";

const items = data.map(item => ({
  title: item.title,
  price: item.price,
  number: 0,
  total: 0
})); 



export const moneySlice = createSlice({
    name: "money",
    initialState: {
      value: 100000000000,
      items: items,
      difference: 0,
    },
    reducers: {
      buy: (state, action) => {
        const addedItem = state.items.find(
          (item) => item.title === action.payload.title
        );
        addedItem.number += action.payload.number; // `number` değerini artırın.
        addedItem.total = addedItem.number * addedItem.price;
      },
      sell: (state, action) => {
        const addedItem = state.items.find(
          (item) => item.title === action.payload.title
        );
        if (addedItem) {
          addedItem.number -= action.payload.number; // `number` değerini azaltın.
          addedItem.total = addedItem.number * addedItem.price;
        }
      },
      updateTotal: (state, action) => {
        state.value += action.payload;
      }
    },
  });
  
  export const selectItems = (state) => state.money.items;
  export const selectValue = (state) => state.money.value;
  
  export default moneySlice.reducer;
  
  export const { buy, sell, updateTotal } = moneySlice.actions;
  