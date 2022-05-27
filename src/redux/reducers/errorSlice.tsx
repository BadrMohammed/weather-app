import { createSlice } from '@reduxjs/toolkit';

// Imported actions
import SET_ERROR from '../actions/errorActions';
import { IError } from '../../core/interfaces/IError';

const initialState: IError = {
  // TODO! response shape to be handled with the BE team.
  error: null,
};

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: SET_ERROR,
  },
});

export const errorActions = errorSlice.actions;
export const errorReducer = errorSlice.reducer;
