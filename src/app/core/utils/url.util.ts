import { environment } from '../../../environments/environment';

const api: string = environment.apiUrl;

export const buildApiURL = (serviceUrl: string): string =>
  `${api + serviceUrl}`;
