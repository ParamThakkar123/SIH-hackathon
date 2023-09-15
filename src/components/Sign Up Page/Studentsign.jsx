import React, { useState } from 'react'

const Studentsign = () => {
  return (
    <div>
      <h1>Welcome to Students' Sign Up</h1>
      <form method='POST'>
        <input type="text" name='fname' placeholder='First Name'/>
        <input type="text" name="lname"  placeholder='Last Name'/>
        <input type="text" name='age' placeholder='Your Age'/>
        <input type="text" name='number' placeholder='Your Contact Number'/>
        <input type="email" name="email" placeholder='Email'/>
        <input type="password" name="password" placeholder='Password'/>
        <input type="password" name="cpassword" placeholder='Confirm Password'/>
        <button>Sign Up</button>
      </form>
    </div>
  )
}

export default Studentsign