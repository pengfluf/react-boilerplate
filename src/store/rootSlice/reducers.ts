import { initialState } from './constants';
import { State } from './types';

export const reducers = {
  resetState(state: State) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    state = initialState;
  },
} as const;
