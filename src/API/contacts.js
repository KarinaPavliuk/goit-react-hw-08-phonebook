import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const getContacts = async () => {
  const { data } = await axios('/contacts');
  return data;
};

export const createContact = async body => {
  const { data } = await axios.post('/contacts', body);
  return data;
};

export const deleteContact = async contactId => {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
};
