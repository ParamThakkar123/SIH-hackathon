import React from 'react'

const Voice = () => {
  return (
    <div>
      <h1 className='text-center text-4xl mt-10 mb-10 capitalize'>mental health recognition using voice in real-time</h1>
      <p className='text-center text-2xl'>Here we used a deep learning model which is trained on a large dataset. This model predicts the mental state of a person using his/her voice which is recorded in real-time</p>

      <button className='text-center m-auto flex justify-center'>Start Recording</button>
    </div>
  )
}

export default Voice