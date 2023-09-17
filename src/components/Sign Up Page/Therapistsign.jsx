import React, { useState } from 'react'

const Therapistsign = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-2/3 '>
      <h1 className='text-center text-4xl p-4 mt-10'>Welcome To Therapist Sign Up</h1>
      <form method='POST'>
        <input className='text-2xl px-4 py-2 bg-gray-200 block rounded-3xl w-full m-3' type="text" name='fname' placeholder='First Name'/>
        <input className='text-2xl px-4 py-2 bg-gray-200 block rounded-3xl w-full m-3' type="text" name='lname' placeholder='Last Name'/>
        <input className='text-2xl px-4 py-2 bg-gray-200 block rounded-3xl w-full m-3' type="email" name="email" placeholder='Email'/>
        <input className='text-2xl px-4 py-2 bg-gray-200 block rounded-3xl w-full m-3' type="number" name="number" placeholder='Your Contact Number'/>
        <input className='text-2xl px-4 py-2 bg-gray-200 block rounded-3xl w-full m-3' type="text" name="address" placeholder='Your Clinic Address'/>
        <input className='text-2xl px-4 py-2 bg-gray-200 block rounded-3xl w-full m-3' type="text" name='workspace' placeholder='Your workspace'/>
        <input className='text-2xl px-4 py-2 bg-gray-200 block rounded-3xl w-full m-3' type="password" name="password" placeholder='Password'/>
        <input className='text-2xl px-4 py-2 bg-gray-200 block rounded-3xl w-full m-3' type="password" name="cpassword" placeholder='Confirm Password'/>
        <button className='text-3xl px-4 py-2 bg-indigo-600 text-white rounded-3xl w-full m-3' >Sign Up</button>
      </form>
      </div>
    </div>
  )
}

export default Therapistsign