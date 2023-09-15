import React, { useState } from 'react'

const Therapistsign = () => {
  return (
    <div>
      <h1>Welcome To Therapist Sign Up</h1>
      <form method='POST'>
        <input type="text" name='fname' placeholder='First Name'/>
        <input type="text" name='lname' placeholder='Last Name'/>
        <input type="email" name="email" placeholder='Email'/>
        <input type="number" name="number" placeholder='Your Contact Number'/>
        <input type="text" name="address" placeholder='Your Clinic Address'/>
        <input type="text" name='workspace' placeholder='Your workspace'/>
        <input type="password" name="password" placeholder='Password'/>
        <input type="password" name="cpassword" placeholder='Confirm Password'/>
        <button>Sign Up</button>
      </form>
    </div>
  )
}

export default Therapistsign