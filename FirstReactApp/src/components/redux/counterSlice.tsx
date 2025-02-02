import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment: (state) => {
        
      },
      decrement: (state) => {
        
      },
      reset: (state) => {
        
      },
    },
});
  
export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;