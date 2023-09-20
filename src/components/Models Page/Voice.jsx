import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Header from '../Front Page/Front';

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const listen = () => {
    SpeechRecognition.startListening({continuous: true, language: 'en-IN'})
  }

  return (
    <div >
      <Header/>
      <div className='mt-20 flex flex-col justify-center text-center items-center'>
      <p className='text-3xl'>Microphone: {listening ? 'on' : 'off'}</p>
      <p className='h-40 text-lg text-left p-4 '>{transcript}</p>
      <button className='text-white bg-indigo-500 rounded-3xl m-2 p-1 text-xl w-1/3' onClick={listen}>Start</button>
      <button className='text-white bg-indigo-500 rounded-3xl m-2 p-1 text-xl w-1/3' onClick={SpeechRecognition.stopListening}>Stop</button>
      <button className='text-white bg-indigo-500 rounded-3xl m-2 p-1 text-xl w-1/3' onClick={resetTranscript}>Reset</button>
      
      </div>
    </div>
  );
};
export default Dictaphone;