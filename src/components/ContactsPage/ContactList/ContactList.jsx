import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContactThunk,
  getContactsThunk,
} from 'store/contactsPage/thunks';
import { selectVisibleContacts } from 'store/contactsPage/selectors';
import css from './ContactList.module.css';
import ClearIcon from '@mui/icons-material/Clear';

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
    <ul className={css.list}>
      {visibilityContacts?.map(contact => (
        <li key={contact.id} className={css.item}>
          {contact.name} {contact.number}
          <button
            type="button"
            id={contact.id}
            onClick={handleDelete}
            className={css.button}
          >
            <ClearIcon />
          </button>
        </li>
      ))}
    </ul>
  );
};
