// When we make api calls from the store then it becomes necessary to have something to show to the user in between when the request is send and when it is received.

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Object.freeze does not allows to change properties, add or delete but nested properties can be changed
export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  //   initialState is basically the first "state"
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    // setProducts(state, action) {
    //   state.data = action.payload;
    // },
    // setStatus(state, action) {
    //   state.status = action.payload;
    // },
  },
  // METHOD 2:
  extraReducers: (builder) => {
    builder.addCase(fetchAPIFromThunk.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(fetchAPIFromThunk.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = STATUSES.IDLE;
    });
    builder.addCase(fetchAPIFromThunk.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Thunks
// Thunks as in-built features of redux-toolkit
// There are two ways: 1-Normal Thunk and

// Method 1: Normal Thunk: A normal thunk is a function that returns an async function
// export function fetchAPIFromThunk() {
//   // abc=dispatch
//   return async function fetchProductsThunk(abc, getState) {
//     abc(setStatus(STATUSES.LOADING));
//     try {
//       const res = await fetch("https://fakestoreapi.com/products");
//       const data = await res.json();
//       abc(setProducts(data));
//       abc(setStatus(STATUSES.IDLE));
//     } catch (error) {
//       console.log(error);
//       abc(setStatus(STATUSES.ERROR));
//     }
//   };
// }
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// METHOD 2:

export const fetchAPIFromThunk = createAsyncThunk(
  "products/fetch",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products/");
    const data = await res.json();
    return data;
  }
);
