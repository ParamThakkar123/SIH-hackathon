import React, { useState } from 'react'
import { WaveSurfer } from 'wavesurfer-react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'



const Voice = () => {
   const [text, setText] = useState('Start Recording');
    const {
      transcript, listening, resetTranscript, browserSupportsSpeechRecognition
    } = useSpeechRecognition();
  
    if(!browserSupportsSpeechRecognition){
      return <span>Browser doesn't support speech recognition</span>
    }
  return (
    <div>
      <h1 className='text-center text-4xl mt-10 mb-10 capitalize'>mental health recognition using voice in real-time</h1>
      <p className='text-center text-2xl'>Here we used a deep learning model which is trained on a large dataset. This model predicts the mental state of a person using his/her voice which is recorded in real-time</p>

      <p className='ml-20 mt-20 text-xl'>Microphone : {listening ? 'on' : 'off'}</p>
      <div className='m-0 mt-10 absolute inset-y-1/2 ml-20 bg-violet-400 translate-y-2/4'>
      <button onClick={SpeechRecognition.startListening} className='bg-violet-600 hover:bg-violet-800 transition-colors duration-200 p-5 mr-10 rounded-xl text-white font-bold'>Start Recording</button>
      <button onClick={SpeechRecognition.stopListening} className='bg-violet-600 hover:bg-violet-800 transition-colors duration-200 p-5 mr-10 rounded-xl text-white font-bold'>Stop Recording</button>
      <button onClick={resetTranscript} className='bg-violet-600 hover:bg-violet-800 transition-colors duration-200 p-5 rounded-xl text-white font-bold'>Reset</button>
      <p>{transcript}</p>
      </div>
    </div>
  )
}

export default Voice