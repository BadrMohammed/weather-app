import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { errorActions, errorReducer } from './reducers/errorSlice';

// Main store of the app.
export const store = configureStore({
  reducer: {
    error: errorReducer,
  },
  middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export reducer and action of each slice

export const errorSlice = {
  state: (state: RootState) => state.error,
  actions: errorActions,
  
};








