import { useSelector } from 'react-redux';
import { authSelector } from 'store/users/selectors';
import { Navigate, useLocation } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const isAuth = useSelector(authSelector);
  const location = useLocation();
  console.log('location :>> ', location);

  return !isAuth ? children : <Navigate to={location.state ?? '/contacts'} />;
};

export default PublicRoute;
