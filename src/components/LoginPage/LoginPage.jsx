// import { useNavigate } from 'react-router-dom';
import {
  useDispatch,
  // useSelector
} from 'react-redux';
import LoginForm from './LoginForm/LoginForm';
import { loginThunk } from 'store/users/thunks';
// import { authSelector } from 'store/users/selectors';
// import { useEffect } from 'react';

const LoginPage = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const isAuth = useSelector(authSelector);

  const login = async body => {
    try {
      await dispatch(loginThunk(body)).unwrap();
      alert('welcome');
    } catch (error) {
      alert(error.error);
    }
  };

  return <LoginForm login={login} />;
};

export default LoginPage;
