import { createSlice } from '@reduxjs/toolkit';

import { initialState, SLICE_ID } from './constants';
import { extraReducers } from './extraReducers';
import { reducers } from './reducers';

export const rootSlice = createSlice({
  name: SLICE_ID,
  initialState,
  reducers,
  extraReducers,
});

export const { resetState } = rootSlice.actions;
