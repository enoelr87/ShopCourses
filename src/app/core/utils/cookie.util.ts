import { environment } from '../../../environments/environment';

const shopCourseDomain = 'klever.tec.br';
const localhostDomain = 'localhost';

export const getCookie = (name: string): string => {
  const cookie = document.cookie
    .split('; ')
    .find((f) => f.startsWith(name + '='));
  return cookie ? cookie.split('=')[1] : '';
};

export const deleteCookie = (cookieName: string): void => {
  setCookie(cookieName, '', 0);
};

export const setCookie = (
  name: string,
  value: string,
  maxAge = 604800
): void => {
  const domain = document.location.hostname.endsWith(shopCourseDomain)
    ? shopCourseDomain
    : localhostDomain;
  environment.env === 'production'
    ? (document.cookie = `${name}=${value}; Domain=${domain}; Max-Age=${maxAge}; SameSite=None; Secure; Path=/;`)
    : (document.cookie = `${name}=${value}; Domain=${domain}; Max-Age=${maxAge}; Path=/;`);
};
