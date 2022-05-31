import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { errorActions, errorReducer } from './reducers/errorSlice';
import { homeReducer, homeActions } from '../modules/Home/homeSlice';

// Main store of the app.
export const store = configureStore({
  reducer: {
    error: errorReducer,
    home: homeReducer,
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

export const homeSlice = {
  state: (state: RootState) => state.home,
  actions: homeActions,
};
