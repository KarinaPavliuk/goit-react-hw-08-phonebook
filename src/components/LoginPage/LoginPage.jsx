import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './LoginForm/LoginForm';
import { loginThunk } from 'store/users/thunks';
import { authSelector } from 'store/users/selectors';
import { useEffect } from 'react';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuth = useSelector(authSelector);

  const login = body => {
    dispatch(loginThunk(body));
  };

  useEffect(() => {
    isAuth && navigate('/contacts');
  }, [isAuth, navigate]);

  return <LoginForm login={login} />;
};

export default LoginPage;
