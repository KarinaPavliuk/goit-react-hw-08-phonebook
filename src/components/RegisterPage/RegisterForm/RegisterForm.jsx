import css from './RegisterForm.module.css';

const RegisterForm = ({ registration }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    registration({
      name: name.value,
      email: email.value,
      password: password.value,
    });
  };
  return (
    <div className={css.container}>
      <h2 className={css.header}>Sing up</h2>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          type="text"
          name="name"
          autoComplete="given-name"
          placeholder="name"
          required
        />
        <input
          className={css.input}
          type="email"
          name="email"
          autoComplete="email"
          placeholder="email"
          required
        />
        <input
          className={css.input}
          type="password"
          name="password"
          autoComplete="new-password"
          placeholder="password"
          required
        />
        <button type="submit" className={css.button}>
          {' '}
          Submit{' '}
        </button>
      </form>
      {/* <Link to="/login">Login</Link> */}
    </div>
  );
};

export default RegisterForm;
