import { createAsyncThunk } from '@reduxjs/toolkit';

import { getDogFact } from '@api';
import { getErrorMessage } from '@utils';

import { SLICE_ID } from './constants';

export const fetchDogFact = createAsyncThunk(
  `${SLICE_ID}/fetchDogFact`,
  async () => {
    try {
      return await getDogFact();
    } catch (error) {
      return getErrorMessage(error);
    }
  },
);
