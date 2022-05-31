/* eslint-disable no-param-reassign */
import { PayloadAction } from '@reduxjs/toolkit';
import { current } from '@reduxjs/toolkit';

const UPDATE_COUNTRY_PROP = (state: any, action: PayloadAction<any>) => {
  state.country = action.payload;
};

const UPDATE_SELECTED_STATE_PROP = (state: any, action: PayloadAction<any>) => {
  state.selectedState = action.payload;
};

const UPDATE_STATES_PROP = (state: any, action: PayloadAction<any>) => {
  if (Array.isArray(action.payload)) {
    state.states = action.payload;
  } else {
    let currentState = current(state);
    let newArray = [...currentState.states];
    newArray[action.payload.index] = action.payload.item;
    state.states = newArray;
  }
};

export {
  UPDATE_COUNTRY_PROP,
  UPDATE_STATES_PROP,
  UPDATE_SELECTED_STATE_PROP,
};
