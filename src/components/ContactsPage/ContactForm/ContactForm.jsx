import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'store/contactsPage/thunks';
import { selectContacts } from 'store/contactsPage/selectors';
import AddIcon from '@mui/icons-material/Add';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.name.value;
    const number = form.number.value;

    if (
      contacts?.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is alredy in contacts.`);
    }

    dispatch(addContactThunk({ name, number }));

    form.reset();
  };

  const handleClick = evt => {
    evt.target.value = '';
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="name"
          className={css.input}
          // value={contacts.name}
          onClick={handleClick}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="name"
          required
        />
        <input
          type="tel"
          name="number"
          className={css.input}
          // value={contacts.number}
          onClick={handleClick}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="phone"
          required
        />
        <button type="submit" className={css.button}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
};
