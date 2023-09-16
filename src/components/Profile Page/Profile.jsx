import React from 'react'
import Header from '../Front Page/Front'


const Profile = () => {
  return (
    <div>
      <Header/>
      <div className='flex m-14 bg-indigo-100 rounded-3xl'>
    <div className='p-8 md:w-2/3 '>
        <section className='text-indigo-950 font-semibold'>
            <ul >
                <h2 className='text-center text-4gxl p-4' >varun35</h2>
                <li ><p className='text-3xl p-2'>Name :Varun Sriram</p></li>
                <li ><p className='text-3xl p-2'>Username : varun35</p></li>
                <li ><p className='text-3xl p-2'>Email Id : vssriram_b22@ce.vjti.ac.in</p></li>
                <li ><p className='text-3xl p-2'>Gender : Male</p></li>
                <li ><p className='text-3xl p-2'>City : Mumbai</p></li>
                <li ><p className='text-3xl p-2'>School/College : VJTI</p></li>
                <li ><p className='text-3xl p-2'>Age : 18</p></li>
                <li ><p className='text-3xl p-2'>Personal Contact No. :9283747823</p></li>
                <li ><p className='text-3xl p-2'>Parents/Guardians Contact No. : 9938432903</p></li> 
            </ul>
        </section>
        <div >

        </div>
    </div>
    <div className='p-14 md:w-1/3'>

    </div>
    </div>
    </div>
  )
}

export default Profile