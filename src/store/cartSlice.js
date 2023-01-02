import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Tokri",
  initialState: [],
  reducers: {
    yeKhareednaHai(state, action) {
      state.push(action.payload);
      // createSlice allows you to mutate the state directly which was not allowed in pure redux
    },
    yeAbNaiKhareednaHai(state, action) {
      // The state cannot be reassigned, it needs to be modified which can be done by using return
      // state = state.filter((item) => item.id !== action.payload.id);
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

// export the functions so that they are available every where. Actions are created automatically
export const { yeKhareednaHai, yeAbNaiKhareednaHai } = cartSlice.actions;

// This needs to go there in the indexStore file
export default cartSlice.reducer;
