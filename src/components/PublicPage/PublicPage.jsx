import { Link } from 'react-router-dom';

const PublicPage = () => {
  return (
    <>
      PublicPage
      <div>
        <br></br>
        <Link to="/register">Sign up</Link>
        <br></br>
        <Link to="/login">Sign in</Link>
      </div>
    </>
  );
};

export default PublicPage;
