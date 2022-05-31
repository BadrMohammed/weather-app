import { createSlice } from '@reduxjs/toolkit';

// Imported actions
import {
  UPDATE_COUNTRY_PROP,
  UPDATE_STATES_PROP,
  UPDATE_SELECTED_STATE_PROP,
} from './homeActions';

const initialState: any = {
  country: {},
  states: [],
  selectedState:{}
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    updateCountryProp: UPDATE_COUNTRY_PROP,
    updateStatesProp: UPDATE_STATES_PROP,
    updateSelectedStateProp: UPDATE_SELECTED_STATE_PROP,
  },
});

export const homeActions = homeSlice.actions;
export const homeReducer = homeSlice.reducer;
