import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const setToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const deleteToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signUp = async body => {
  const { data } = await axios.post('users/signup', body);
  setToken(data.token);
  return data;
};

export const signIn = async body => {
  const { data } = await axios.post('users/login', body);
  setToken(data.token);
  return data;
};

export const logOut = async () => {
  await axios.post('users/logout');
  deleteToken();
};

export const currentUser = async persistedToken => {
  setToken(persistedToken);
  const { data } = await axios('users/current');
  return data;
};
