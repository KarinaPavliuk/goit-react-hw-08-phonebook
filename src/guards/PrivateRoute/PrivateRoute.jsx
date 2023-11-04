import { useSelector } from 'react-redux';
import { authSelector } from 'store/users/selectors';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(authSelector);
  const location = useLocation();

  return isAuth ? children : <Navigate to="/public" state={location} />;
};

export default PrivateRoute;
