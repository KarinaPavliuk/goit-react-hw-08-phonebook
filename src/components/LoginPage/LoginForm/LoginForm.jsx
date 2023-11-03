import { Link } from 'react-router-dom';

const LoginForm = ({ login }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    login({
      email: email.value,
      password: password.value,
    });
  };
  return (
    <div>
      <Link to="/">Back to home</Link>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            id="exampleInputEmail1"
            autoComplete="username"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div>
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            name="password"
            type="password"
            id="exampleInputPassword1"
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <Link to="/register">Registration</Link>
    </div>
  );
};

export default LoginForm;
