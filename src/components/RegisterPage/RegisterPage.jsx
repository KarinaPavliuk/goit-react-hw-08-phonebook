import { useNavigate } from 'react-router-dom';
import RegisterForm from './RegisterForm/RegisterForm';
import { useDispatch, useSelector } from 'react-redux';
import { registrationThunk } from 'store/users/thunks';
import { isLogInSelector } from 'store/users/selectors';
import { useEffect } from 'react';

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLogIn = useSelector(isLogInSelector);

  const registration = body => {
    dispatch(registrationThunk(body));
  };

  useEffect(() => {
    isLogIn && navigate('/contacts');
  }, [isLogIn, navigate]);

  return <RegisterForm registration={registration} />;
};

export default Registration;
