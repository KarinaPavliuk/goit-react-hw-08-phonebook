import { useDispatch } from 'react-redux';
import { handleFilterChanges } from 'store/contactsPage/slice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const value = target.value.toLowerCase();
    dispatch(handleFilterChanges(value));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" name="filter" onChange={handleChange} />
    </>
  );
};

// export const Filter = () => {
//   return (
//     <>
//       <p>Find contacts by name</p>
//       <input
//         type="text"
//         name="filter"
//         // value={filter}
//       />
//     </>
//   );
// };
