import React from 'react'
import { useState, useEffect } from 'react'
import {motion as m} from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import Header from '../Front Page/Front'

const Emotion = () => {
  const [data, setData] = useState("");
  const [val, setVal] = useState("Send");

  useEffect(() => {
    
  })
  return (
    <m.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration:0.75, ease: "easeInOut"}}
    >
      <Header/>
      <AnimatePresence>
      <h1 className='text-center text-4xl mt-10'>Mental Health Prediction using Machine Learning and Deep learning</h1>
      <p className='text-center text-2xl mt-5'>Our model predicts your mental state and mental health on the basis of your facial expressions in images</p>
      <p className='text-center text-2xl mt-2'>First this model will take your picture from your webcam and based on what pciture it obtains it will show you your mental state</p>

      <button className='mt-20 ml-80 bg-violet-600 p-5 hover:bg-violet-900 transition-colors duration-200 rounded-xl text-white text-xl'>Click Image</button>
      </AnimatePresence>
    </m.div>
  )
}

export default Emotion