import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { LogOut } from './LogOut/LogOut';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectError, selectIsLoading } from 'store/contactsPage/selectors';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    isLoading
      ? Loading.dots({ backgroundColor: '#00000073' })
      : Loading.remove();
  }, [isLoading]);

  return (
    <>
      {/* {error && Notify.error(`${error}`)} */}
      <ContactForm />
      <Filter />
      <ContactList />
      <LogOut />
    </>
  );
};

export default ContactsPage;
