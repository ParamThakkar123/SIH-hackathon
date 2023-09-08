import React from 'react'

const Voice = () => {
  return (
    <div>
      <h1 className='text-center text-4xl mt-10 mb-10 capitalize'>mental health recognition using voice in real-time</h1>
      <p className='text-center text-2xl'>Here we used a deep learning model which is trained on a large dataset. This model predicts the mental state of a person using his/her voice which is recorded in real-time</p>

      <div className='m-0 absolute inset-y-1/2 ml-20 bg-violet-400 translate-y-2/4'>
      <button className='bg-violet-300 p-5 rounded-xl text-white font-bold'>Start Recording</button>
      </div>
    </div>
  )
}

export default Voice