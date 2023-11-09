import { useDispatch } from 'react-redux';
import { handleFilterChanges } from 'store/contactsPage/slice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const value = target.value.toLowerCase();
    dispatch(handleFilterChanges(value));
  };

  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        onChange={handleChange}
        className={css.input}
      />
    </div>
  );
};
