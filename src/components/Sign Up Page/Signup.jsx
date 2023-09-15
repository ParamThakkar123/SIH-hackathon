import React, { useState } from 'react'


const Signup = () => {
  return (
    <div>
      <h1 className='text-center text-3xl mt-40'>Sign Up as : </h1>
      <ul className='text-center text-2xl mt-5'>
      <li><a href="/tsign">Therapist</a></li>
      <li><a href="/ssign">Student / Child</a></li>
      </ul>
    </div>
  )
}

export default Signup