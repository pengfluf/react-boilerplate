const API_ORIGIN = 'https://dogapi.dog/api';
const API_VERSION = 'v2';

function getRoute(route: string): string {
  return `${API_ORIGIN}/${API_VERSION}/${route}`;
}

enum ApiRoute {
  dogFact = 'facts',
}

export const API_ROUTES = {
  dogFact: getRoute(ApiRoute.dogFact),
} as const;
