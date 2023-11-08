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
      <form onSubmit={handleSubmit} className={css.form}>
        <label>
          Name:
          <input
            className={css.input}
            type="text"
            name="name"
            autoComplete="given-name"
            required
          />
        </label>

        <label>
          Email:
          <input
            className={css.input}
            type="email"
            name="email"
            autoComplete="email"
            required
          />
        </label>

        <label>
          Password:
          <input
            className={css.input}
            type="password"
            name="password"
            autoComplete="new-password"
            required
          />
        </label>

        <button type="submit"> Login </button>
      </form>
      {/* <Link to="/login">Login</Link> */}
    </div>
  );
};

export default RegisterForm;
