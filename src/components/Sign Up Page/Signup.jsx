import React, { useState } from 'react'


const Signup = () => {
  return (
    <div className='flex justify-center '>
      <div className='mt-40 w-1/3 p-4 rounded-3xl bg-indigo-200'>
      <h1 className='text-center text-3xl p-4 '>Sign Up as : </h1>
      <ul className='text-center text-2xl  text-white  '>
      <li className='bg-indigo-600 m-2 p-2 rounded-3xl'><a href="/tsign">Therapist</a></li>
      <li className='bg-indigo-600 m-2 p-2 rounded-3xl'><a href="/ssign">Student / Child</a></li>
      </ul>
      </div>
    </div>
  )
}

export default Signup