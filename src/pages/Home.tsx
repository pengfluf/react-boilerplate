import { JSX, useEffect } from 'react';

import { SvgIcon } from '@components';
import { SvgIconId } from '@components/SvgIcon/types';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import {
  selectDogFact,
  selectErrorMessage,
  selectLoadingStatus,
} from '@store/rootSlice/selectors';
import { fetchDogFact } from '@store/rootSlice/thunks';
import { LoadingStatus } from '@store/rootSlice/types';

export function Home(): JSX.Element {
  const dogFact = useAppSelector(selectDogFact);
  const loadingStatus = useAppSelector(selectLoadingStatus);
  const errorMessage = useAppSelector(selectErrorMessage);

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchDogFact());
  }, [dispatch]);

  if (loadingStatus === LoadingStatus.pending) {
    return <SvgIcon icon={SvgIconId.spinner} />;
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  if (loadingStatus === LoadingStatus.fail) {
    return <p>Encountered an unhandled error.</p>;
  }

  return <p>{dogFact}</p>;
}
