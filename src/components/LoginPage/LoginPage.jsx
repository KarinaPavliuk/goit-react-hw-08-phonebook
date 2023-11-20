import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './LoginForm/LoginForm';
import { loginThunk } from 'store/users/thunks';
import { isLogInSelector } from 'store/users/selectors';
import { useEffect } from 'react';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLogIn = useSelector(isLogInSelector);

  const login = body => {
    dispatch(loginThunk(body));
  };

  useEffect(() => {
    isLogIn && navigate('/contacts');
  }, [isLogIn, navigate]);

  return <LoginForm login={login} />;
};

export default LoginPage;
