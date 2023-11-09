import css from './LoginForm.module.css';

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
    <div className={css.container}>
      {/* <Link to="/">Back to home</Link> */}
      <h2 className={css.header}>Sing in</h2>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="email"
          name="email"
          className={css.input}
          id="exampleInputEmail1"
          autoComplete="username"
          aria-describedby="emailHelp"
          placeholder="email"
          required
        />
        <input
          name="password"
          type="password"
          className={css.input}
          id="exampleInputPassword1"
          autoComplete="current-password"
          placeholder="password"
          required
        />
        <button type="submit" className={css.button}>
          Submit
        </button>
      </form>
      {/* <Link to="/register">Registration</Link> */}
    </div>
  );
};

export default LoginForm;
