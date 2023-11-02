import { logOutThunk } from 'store/users/thunks';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const LogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = body => {
    dispatch(logOutThunk(body));
    navigate('/');
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        Log out
      </button>
    </>
  );
};
