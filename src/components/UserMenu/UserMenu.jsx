import { Link } from 'react-router-dom';
import { LogOut } from 'components/ContactsPage/LogOut/LogOut';
import { useSelector } from 'react-redux';
import { profileSelector } from 'store/users/selectors';

const UserMenu = () => {
  const userEmail = useSelector(profileSelector);

  return (
    <>
      UserMenu
      <div>
        <p>{userEmail}</p>
        <Link to="/contacts">Contacts</Link>
        <br></br>
        <LogOut />
      </div>
    </>
  );
};

export default UserMenu;
