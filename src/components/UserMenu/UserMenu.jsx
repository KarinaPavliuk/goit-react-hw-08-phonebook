import { Link } from 'react-router-dom';
import { LogOut } from 'components/ContactsPage/LogOut/LogOut';
import { useSelector } from 'react-redux';
import { profileSelector } from 'store/users/selectors';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const userEmail = useSelector(profileSelector);

  return (
    <div className={css.container}>
      <p>{userEmail}</p>
      <Link to="/contacts" className={css.link}>
        My contacts
      </Link>
      <LogOut />
    </div>
  );
};

export default UserMenu;
