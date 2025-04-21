export enum LoadingStatus {
  'idle' = 'idle',
  'pending' = 'pending',
  'fail' = 'fail',
  'success' = 'success',
}

export interface State {
  dogFact: string;

  loadingStatus: LoadingStatus;
  errorMessage: string;
}
