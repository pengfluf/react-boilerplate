import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import {} from '@reduxjs/toolkit/react';

import { fetchDogFact } from './thunks';
import { LoadingStatus, State } from './types';

export const extraReducers = (
  builder: ActionReducerMapBuilder<State>,
): void => {
  builder.addCase(fetchDogFact.pending, (state) => {
    state.loadingStatus = LoadingStatus.pending;
    state.errorMessage = '';
  });
  builder.addCase(fetchDogFact.rejected, (state, action) => {
    state.loadingStatus = LoadingStatus.fail;
    state.errorMessage = action.payload as State['errorMessage'];
  });
  builder.addCase(fetchDogFact.fulfilled, (state, action) => {
    state.loadingStatus = LoadingStatus.success;
    state.dogFact = action.payload;
  });
};
