import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectError, selectIsLoading } from 'store/contactsPage/selectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import css from './ContactsPage.module.css';

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    isLoading
      ? Loading.dots({
          svgColor: 'hsl(225, 43%, 40%)',
          backgroundColor: '#00000073',
        })
      : Loading.remove();
  }, [isLoading]);

  return (
    <div className={css.container}>
      {error && Notify.error(`${error}`)}
      <ContactForm />
      <div className={css.section}>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default ContactsPage;
