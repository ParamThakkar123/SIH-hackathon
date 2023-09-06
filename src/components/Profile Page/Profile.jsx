import React from 'react'


const Profile = () => {
  return (
    <div>
        <section className='pt-16 bg-blueGray-50'>
            <div className='w-full lg:w-8/12 px-4 mx-auto'>
                <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16'>
                    <div className='px-6'>
                        <div className='px-6'>
                            <div className='flex flex-wrap justify-center'>
                                <div className='w-full px-4 flex justify-center'>
                                    <div className='relative'>
                                        <img src="" alt="profile" />
                                    </div>
                                </div>
                                <div className='w-full px-4 text-center mt-20'>
                                    <div className='flex justify-center py-4 lg:pt-4 pt-8'>
                                        <div className='mr-4 p-3 text-center gap-4 flex-col'>
                                        <span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
                                                Name : Param Thakkar
                                            </span>
                                            <span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
                                                Age : 22
                                            </span>
                                            <span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
                                                Class : 4th
                                            </span>
                                            <span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
                                                Phone Number : 9829811313
                                            </span>
                                            <span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
                                                School : jwidjiwjd
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center mt-12'>
                                <h3 className='text-xl font-semibold leading-normal text-blueGray-700 mb-2'>
                                    Param Thakkar 
                                </h3>
                                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                    Los Angeles, California
                                </div>
                                <div ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Profile