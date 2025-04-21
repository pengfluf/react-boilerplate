export enum ApiMethod {
  'GET' = 'GET',
  'POST' = 'POST',
}

export interface GetDogFactResponse {
  data: {
    id: string;
    type: string;
    attributes: {
      body: string;
    };
  }[];
}
