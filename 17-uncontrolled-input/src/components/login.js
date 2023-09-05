function Login() {
  function handleFromSubmit(event) {
    event.preventDefault()
    const userData = {
      username: event.target.userName.value,
      password: event.target.password.value,
    }

    alert(JSON.stringify(userData))
  }

  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFromSubmit}>
        <label>
          User name:
          <input type="text" name="userName"></input>
        </label>
        <label>
          Passwrod:
          <input type="password" name="password"></input>
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  )
}
export default Login
