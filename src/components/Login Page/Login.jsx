import React from 'react'

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>

      <form action="">
        <input type="text" name='username' placeholder='Username'/>
        <input type="text" name='email' placeholder='Email'/>

        <button>Log in</button>
      </form>
    </div>
  )
}

export default Login