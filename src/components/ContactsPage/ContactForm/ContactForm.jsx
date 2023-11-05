import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'store/contactsPage/thunks';
import { selectContacts } from 'store/contactsPage/selectors';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import css from './ContactForm.module.css';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.name.value;
    const phone = form.number.value;

    if (
      contacts?.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is alredy in contacts.`);
      // return Notify.warning(`${name} is alredy in contacts.`);
    }

    dispatch(addContactThunk({ name, phone }));

    form.reset();
  };

  const handleClick = evt => {
    console.log(evt.target.value);
    evt.target.value = '';
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={contacts.name}
          onClick={handleClick}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="tel">Number</label>
        <input
          type="tel"
          name="number"
          value={contacts.phone}
          onClick={handleClick}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};
// export const ContactForm = () => {
//   const handleSubmit = e => {
//     e.preventDefault();
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           name="name"
//           // value={name}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//         <br></br>
//         <label htmlFor="tel">Number</label>
//         <input
//           type="tel"
//           name="number"
//           // value={number}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//         <button type="submit">Add contact</button>
//       </form>
//     </div>
//   );
// };
