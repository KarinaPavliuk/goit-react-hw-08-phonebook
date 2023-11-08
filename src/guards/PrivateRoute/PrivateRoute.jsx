import { useSelector } from 'react-redux';
import { authSelector, isLogInSelector } from 'store/users/selectors';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(authSelector);
  const isUserLogIn = useSelector(isLogInSelector);
  const location = useLocation();

  return isAuth && isUserLogIn ? (
    children
  ) : (
    <Navigate to="/public" state={location} />
  );
};

export default PrivateRoute;
