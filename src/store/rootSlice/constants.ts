import { LoadingStatus, State } from './types';

export const SLICE_ID = 'root';

export const initialState: State = {
  dogFact: '',

  loadingStatus: LoadingStatus.idle,
  errorMessage: '',
};
