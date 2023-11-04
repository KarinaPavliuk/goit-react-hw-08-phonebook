import { Link } from 'react-router-dom';
import { LogOut } from 'components/ContactsPage/LogOut/LogOut';
import { authSelector } from 'store/users/selectors';
import { useSelector } from 'react-redux';

const UserMenu = () => {
  const isAuth = useSelector(authSelector);

  return (
    <>
      UserMenu
      {isAuth ? (
        <div>
          <p>email</p>
          <Link to="/contacts">Contacts</Link>
          <br></br>
          <LogOut />
        </div>
      ) : (
        <div>
          <br></br>
          <Link to="/register">Sign up</Link>
          <br></br>
          <Link to="/login">Sign in</Link>
        </div>
      )}
    </>
  );
};

export default UserMenu;
