import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContactThunk,
  getContactsThunk,
} from 'store/contactsPage/thunks';
import { selectVisibleContacts } from 'store/contactsPage/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const handleDelete = evt => {
    dispatch(deleteContactThunk(evt.currentTarget.id));
  };

  const visibilityContacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {visibilityContacts?.map(contact => (
        <li key={contact.id}>
          {contact.name} {contact.phone}
          <button type="button" id={contact.id} onClick={handleDelete}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
