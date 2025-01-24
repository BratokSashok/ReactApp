import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './components/redux/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  devTools: true,
});
