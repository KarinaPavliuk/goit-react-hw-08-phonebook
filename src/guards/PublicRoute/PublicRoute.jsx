import { useSelector } from 'react-redux';
import { authSelector, isLogInSelector } from 'store/users/selectors';
import { Navigate, useLocation } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const isAuth = useSelector(authSelector);
  const isUserLogIn = useSelector(isLogInSelector);
  const location = useLocation();
  console.log('location :>> ', location);

  return !isAuth && !isUserLogIn ? (
    children
  ) : (
    <Navigate to={location.state ?? '/contacts'} />
  );
};

export default PublicRoute;
