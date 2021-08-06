import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getData = createAsyncThunk('ecommerData/getData', async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    throw new Error(e);
  }
});

export const ecommerDataSlice = createSlice({
  name: 'ecommerceData',
  initialState: {
    loading: null,
    productsData: null,
    errorMessage: null,
  },
  reducers: {},
  extraReducers: {
    [getData.pending]: (state) => {
      state.loading = true;
    },
    [getData.fulfilled]: (state, action) => {
      state.productsData = action.payload;
      state.loading = false;
    },
    [getData.rejected]: (state, action) => {
      state.loading = false;
      state.errorMessage = 'Something went wrong';
    },
  },
});

export default ecommerDataSlice.reducer;
