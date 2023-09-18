import React from 'react'

const Login = () => {
  return (
    <div className='h-screen flex justify-center '>
      <div className='h-2/5 w-1/2 self-center rounded-3xl bg-gray-200 text-center'>
        <div className=''>
          <h1 className='text-xl text-center m-6'>Login Page</h1>
          <form className='' action="">
            <input className='text-xl p-2 m-2 w-5/6 rounded-3xl' type="text" name='username' placeholder='Username'/>
            <input className='text-xl p-2 m-2 w-5/6 rounded-3xl' type="text" name='email' placeholder='Email'/>
            <button className='text-xl p-2 m-8 w-5/6 rounded-3xl bg-indigo-500 text-white font-bold'>Log in</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login