import { State } from './types';

export const selectDogFact = (state: State): State['dogFact'] =>
  state.dogFact;
export const selectLoadingStatus = (
  state: State,
): State['loadingStatus'] => state.loadingStatus;
export const selectErrorMessage = (state: State): State['errorMessage'] =>
  state.errorMessage;
