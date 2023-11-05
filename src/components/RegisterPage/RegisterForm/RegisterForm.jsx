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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" autoComplete="given-name" required />
        </label>
        <br></br>
        <label>
          Email:
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <br></br>
        <label>
          Password:
          <input
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
