import { ValueOf } from '@customTypes';

import { API_ROUTES } from './constants';
import { ApiMethod, GetDogFactResponse } from './types';

interface Payload {
  route: ValueOf<typeof API_ROUTES>;
  method: ApiMethod;
  body?: RequestInit['body'];
}

async function fetchData<T>({ route, method, body }: Payload): Promise<T> {
  const response = await fetch(route, { method, body });

  if (!response.ok) {
    throw new Error(
      `${method} ${route} error of ${response.status} status.`,
    );
  }

  return (await response.json()) as T;
}

export async function getDogFact(): Promise<string> {
  const response = await fetchData<GetDogFactResponse>({
    route: API_ROUTES.dogFact,
    method: ApiMethod.GET,
  });

  return response.data[0].attributes.body;
}
