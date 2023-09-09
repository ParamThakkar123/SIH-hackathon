import React from 'react'
import { useState, useEffect } from 'react'

const Emotion = () => {
  const [data, setData] = useState("");
  const [val, setVal] = useState("Send");

  useEffect(() => {
    
  })
  return (
    <div>
      <h1 className='text-center text-4xl mt-10'>Mental Health Prediction using Machine Learning and Deep learning</h1>
      <p className='text-center text-2xl mt-5'>Our model predicts your mental state and mental health on the basis of your facial expressions in images</p>
      <p className='text-center text-2xl mt-2'>First this model will take your picture from your webcam and based on what pciture it obtains it will show you your mental state</p>

      <button className='mt-20 ml-80 bg-violet-600 p-5 hover:bg-violet-900 transition-colors duration-200 rounded-xl text-white text-xl'>Click Image</button>
    </div>
  )
}

export default Emotion