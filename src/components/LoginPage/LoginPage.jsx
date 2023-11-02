const LoginPage = () => {
  const submitHandler = e => {
    e.preventDefault();
    // const user = await loginUser(loginDetails);
    // setUser(user);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            // value={loginDetails.email}
            autoComplete="username"
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
            autoComplete="current-password"
            required
          />
        </label>
        <button type="submit"> Login </button>
      </form>
      {/* {user && <Navigate to="/dashboard" state={user} replace={true} />} */}
    </div>
  );
};

export default LoginPage;
