import { useSelector } from 'react-redux';
import { isLogInSelector } from 'store/users/selectors';
import { Navigate, useLocation } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const isLogIn = useSelector(isLogInSelector);
  const location = useLocation();

  return isLogIn ? <Navigate to={location.state ?? '/contacts'} /> : children;
};

export default PublicRoute;
