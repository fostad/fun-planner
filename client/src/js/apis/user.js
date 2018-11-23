// import fetch from 'fetch';
import { handleResponse } from './response';

export const getUserByEmail = (email) => {
  return fetch('./api/v1/users/'+email)
    .then(handleResponse);
};
