import React from 'react'
import { useState, useEffect, useRef, useCallback } from 'react'
import {motion as m} from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import Header from '../Front Page/Front'
import Webcam from 'react-webcam'

const WebcamComponent = () => {
  <Webcam/>
}

const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: 'user',
}

const Emotion = () => {
  const [picture, setPicture] = useState('')
  const webcamRef = useRef(null)

  const capture = useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot()
    setPicture(pictureSrc)
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

      <div className='p-10 w-full'>
        {picture == '' ? (
          <Webcam
            audio={false}
            height={400}
            ref={webcamRef}
            width={400}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={picture} />
        )}
      </div>
      
      </AnimatePresence>
    </m.div>
  )
}

export default Emotion