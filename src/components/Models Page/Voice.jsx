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
    <div>
      <Header/>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={listen}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};
export default Dictaphone;