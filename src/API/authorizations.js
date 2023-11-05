import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
// const instance = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com/',
// });

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
  console.log(data.token);
  setToken(data.token);
  return data;
};

export const logOut = async () => {
  const { data } = await axios.post('users/logout');
  deleteToken();
  // setToken(data.token);
  return data;
};
