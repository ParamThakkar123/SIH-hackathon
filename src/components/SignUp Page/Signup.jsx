import React from 'react'

const Signup = () => {
  return (
    <div className='min-h-screen py-40'>
        <div className='container mx-auto '>
            <div className='w-8/12 bg-white rounded-xl mx-auto shadow-lg flex flex-col lg:flex-row'>
            <div className='w-1/2 py-16 px-12'>
                    <h2 className='text-3xl mb-4'>Create your account</h2>
                    <form action="" className='item-center justify-center'>
                        <div className='grid grid-cols-2 gap-5'>
                        <input type="text" placeholder='First Name' className='border border-gray-400 py-1 px-2 rounded-lg'/>
                        <input type="text" placeholder='Last Name' className='border border-gray-400 py-1 px-2 rounded-lg'/>
                        </div>

                        <div className='mt-5'>
                        <input type="text" placeholder='Email' className='border border-gray-400 py-1 px-2 w-full rounded-lg'/>
                        </div>
                        <div className='mt-5'>
                        <input type="password" placeholder='Password' className='border border-gray-400 py-1 px-2 w-full rounded-lg'/>
                        </div>
                        <div className='mt-5'>
                        <input type="password" placeholder='Confirm Password' className='border border-gray-400 py-1 px-2 w-full rounded-lg'/>
                        </div>

                        <div className='mt-5'>
                        <button className='bg-[#030E14] rounded-xl w-full text-white py-2 hover:scale-110 duration-300'>Sign Up</button>
                        </div>
                    </form>
                </div>
                <div className='w-full lg:w-1/2'>
                    <img className='h-full rounded-2xl' src="./images/mh2.jpg" alt="hello.jpg" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup
