import { useState } from 'react'

function Login() {
  const [data, setData] = useState({ username: '', password: '' })

  function handleFromSubmit(event) {
    event.preventDefault()
    alert(JSON.stringify(data))
  }

  function HandleInputChange(text, name) {
    setData({ ...data, [name]: text })
  }

  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFromSubmit}>
        <label>
          User name:
          <input
            value={data.username}
            type="text"
            onChange={(e) => HandleInputChange(e.target.value, 'username')}
          ></input>
        </label>
        <label>
          Passwrod:
          <input
            value={data.password}
            type="password"
            onChange={(e) => HandleInputChange(e.target.value, 'password')}
          ></input>
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  )
}
export default Login
