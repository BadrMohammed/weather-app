/* eslint-disable no-param-reassign */
import { PayloadAction } from '@reduxjs/toolkit';

const SET_ERROR = (state: any, action: PayloadAction<boolean>) => {
  state.error = action.payload;
};

export default SET_ERROR;
