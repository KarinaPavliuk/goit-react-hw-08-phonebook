import { logOutThunk } from 'store/users/thunks';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import css from './LogOut.module.css';

export const LogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = body => {
    dispatch(logOutThunk(body));
    navigate('/');
  };

  return (
    <>
      <button type="button" onClick={handleClick} className={css.button}>
        Log out
      </button>
    </>
  );
};
