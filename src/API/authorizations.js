import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://practices-api.vercel.app/',
});

// export const setToken = token => {
//   instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// };

export const signUp = async body => {
  const { data } = await instance.post('users/signup', body);
  // setToken(data.token);
  return data;
};

export const signIn = async body => {
  const { data } = await instance.post('users/login', body);
  // setToken(data.token);
  return data;
};

export const logOut = async body => {
  const { data } = await instance.post('users/logout', body);
  // setToken(data.token);
  return data;
};
