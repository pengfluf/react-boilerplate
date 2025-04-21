import { PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './constants';
import { State } from './types';

export const reducers = {
  resetState(state: State) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    state = initialState;
  },

  updateDogFact(state: State, action: PayloadAction<State['dogFact']>) {
    state.dogFact = action.payload;
  },
} as const;
