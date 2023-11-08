import { Link } from 'react-router-dom';
import css from './PublicPage.module.css';

const PublicPage = () => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <Link to="/register">Sign up</Link>
      </li>
      <li className={css.item}>
        <Link to="/login">Sign in</Link>
      </li>
    </ul>
  );
};

export default PublicPage;
