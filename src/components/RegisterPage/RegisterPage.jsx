import { useNavigate } from 'react-router-dom';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { useDispatch, useSelector } from 'react-redux';
import { registrationThunk } from 'store/users/thunks';
import { authSelector } from 'store/users/selectors';
import { useEffect } from 'react';

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuth = useSelector(authSelector);
  console.log('isAuth', isAuth);

  const registration = body => {
    dispatch(registrationThunk(body));
  };

  useEffect(() => {
    isAuth && navigate('/contacts');
  }, [isAuth, navigate]);

  return <RegisterForm registration={registration} />;
};

export default Registration;
