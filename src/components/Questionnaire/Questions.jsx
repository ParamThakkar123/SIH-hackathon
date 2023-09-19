import React, { useState } from 'react'
import { quiz20 } from './quiz20';
import QuizResult from './Questionscount';

const Questions = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const [score,setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  const {questions} = quiz20;
  const {question, answers} = questions[activeQuestion];

  const onClickNext = () => {
    updateScore();
    setSelectedAnswerIndex(null);
    if(activeQuestion != questions.length - 1){
      setActiveQuestion((prev) => prev + 1);
    }
    else{
      setActiveQuestion(0);
      setShowResult(true);
    }
  }

  const updateScore=()=>{
    if(selectedAnswer===questions[activeQuestion].answers){
        setScore(score+1);
    }
}

  const onClickPrev = () => {
    setSelectedAnswerIndex(null);
    if(activeQuestion != questions.length + 1){
      setActiveQuestion((prev) => prev - 1);
    }
    else{
      setActiveQuestion(0);
      setShowResult(true);
    }
  }

  

  const onAnswerSelected = (answers, index) => {
    selectedAnswerIndex(index);
  }

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <div className='h-screen'>
      <h1 className='text-3xl text-center mb-5 mt-14 text-indigo-950'>Mental Health Screening</h1>
      <div className='mt-16 flex justify-center'>
      <div className='w-3/4 h-96 bg-gray-200 p-8 rounded-3xl relative'>
      {!showResult ? (
        <div className='text-indigo-950 p-2'>
          <div className=''>
            <div className='mb-5 text-center'>
              <span className='text-xl '>{addLeadingZero(activeQuestion + 1)}</span>
              <span className='text-xl'>/</span>
              <span className='text-xl'>{addLeadingZero(questions.length)}</span>
              
            </div>
            
            <div>
              <h2 className='text-xl'>{question}</h2>
              <ul className='mb-4'>
                <div className='text-xl mb-4 mt-4 grid grid-cols-2'>
                {answers.map((answer, index) => (
                  <li onClick={() => onAnswerSelected(answer, index)}
                  key={question.id}
                  className={selectedAnswerIndex === index ? 'selected-answer' : null} >
                    <input type="radio"/>
                    {answer}
                  </li>
                ))}
                </div>
                
              </ul>
              
              <div className=''>
                <button className='text-xl p-4 absolute bottom-8 left-8 bg-indigo-600 rounded-xl text-white' onClick={onClickPrev}>
                  {activeQuestion === questions.length+1 ? 'Finish' : 'Previous'}
                </button>
                <button className='text-xl p-4 absolute bottom-8 right-8 bg-indigo-600 rounded-xl text-white' onClick={onClickNext}>
                  {activeQuestion === questions.length-1 ? 'Finish' : 'Next'}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='text-center p-3 text-2xl'>
          <h2>Result</h2>
          <p>
            Total Question : <span>{questions.length}</span>
          </p>
          <a href="/survey">Take Disorder Specific Test</a>
        </div>
      )
      }
    </div>
    </div>
    </div>
  )
}

export default Questions