export const RegisterForm = ({ registration }) => {
  // const changeHandler = e => {
  //   const { name, value } = e.target;
  //   console.log(name, value);
  //   // setLoginDetails(loginDetails => ({ ...loginDetails, [name]: value }));
  // };

  const submitHandler = async e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    registration({
      name: name.value,
      email: email.value,
      password: password.value,
    });
    // const user = await loginUser(loginDetails);
    // setUser(user);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            // value={loginDetails.email}
            // onChange={changeHandler}
            autoComplete="given-name"
            required
          />
        </label>
        <br></br>
        <label>
          Email:
          <input
            type="email"
            name="email"
            // value={loginDetails.email}
            // onChange={changeHandler}
            autoComplete="email"
            required
          />
        </label>
        <br></br>
        <label>
          Password:
          <input
            type="password"
            name="password"
            // value={loginDetails.password}
            // onChange={changeHandler}
            autoComplete="new-password"
            required
          />
        </label>
        {/* <br></br>
        <label>
          Password:
          <input
            type="password"
            name="controlPassword"
            // value={loginDetails.password}
            onChange={changeHandler}
            autoComplete="off"
            required
          />
        </label> */}
        <button type="submit"> Login </button>
      </form>
      {/* <Link to="/login">Login</Link> */}
    </div>
  );
};
