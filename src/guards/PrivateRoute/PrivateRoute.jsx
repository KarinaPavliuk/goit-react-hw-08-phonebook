import { useSelector } from 'react-redux';
import { isLogInSelector } from 'store/users/selectors';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isLogIn = useSelector(isLogInSelector);
  const location = useLocation();

  return isLogIn ? children : <Navigate to="/public" state={location} />;
};

export default PrivateRoute;
