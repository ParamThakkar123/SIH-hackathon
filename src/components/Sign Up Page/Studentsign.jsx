import React, { useState } from 'react'

const Studentsign = () => {
  const [student, setStudent] = useState({
    fname:"", lname:"", age:"", number:"", email:"", password:"", cpassword:""
  });

  let fname, lname, value;
  const handleInputs = (e) => {
    console.log(e);
    e.preventDefault();
    fname = e.target.fname;
    lname = e.target.lname;
    value = e.target.value;

    setStudent({... student, [fname]:value, [lname]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <div className='flex justify-center'>
      <div className='w-2/3 '>
      <h1 className='text-center text-4xl p-4 mt-10'>Welcome to Students' Sign Up</h1>
      <form method='POST' onSubmit={handleSubmit}>
        <input className='text-2xl px-4 py-2 bg-gray-200 block rounded-3xl w-full m-3' onChange={handleInputs} type="text" name='fname' value={student.fname} placeholder='First Name'/>
        <input className='text-2xl px-4 py-2 bg-gray-200 block rounded-3xl w-full m-3' onChange={handleInputs} type="text" name="lname" value={student.lname}  placeholder='Last Name'/>
        <input className='text-2xl px-4 py-2 bg-gray-200 block rounded-3xl w-full m-3' onChange={handleInputs} type="text" name='age' value={student.age} placeholder='Your Age'/>
        <input className='text-2xl px-4 py-2 bg-gray-200 block rounded-3xl w-full m-3' onChange={handleInputs} type="text" name='number' value={student.number} placeholder='Your Contact Number'/>
        <input className='text-2xl px-4 py-2 bg-gray-200 block rounded-3xl w-full m-3' onChange={handleInputs} type="email" name="email" value={student.email} placeholder='Email'/>
        <input className='text-2xl px-4 py-2 bg-gray-200 block rounded-3xl w-full m-3' onChange={handleInputs} type="password" name="password" value={student.password} placeholder='Password'/>
        <input className='text-2xl px-4 py-2 bg-gray-200 block rounded-3xl w-full m-3' onChange={handleInputs} type="password" name="cpassword" value={student.cpassword} placeholder='Confirm Password'/>
        <button className='text-3xl px-4 py-2 bg-indigo-600 text-white rounded-3xl w-full m-3'>Sign Up</button>
      </form>
      </div>
    </div>
  )
}

export default Studentsign