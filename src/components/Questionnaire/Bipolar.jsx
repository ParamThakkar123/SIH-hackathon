import React, { useState } from 'react'
import { quiz5 } from './Bipolar1';

const Bipolar = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  const {questions} = quiz5;
  const {question, answers} = questions[activeQuestion];

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    if(activeQuestion != questions.length - 1){
      setActiveQuestion((prev) => prev + 1);
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
    <div>
      <h1 className='text-3xl text-center mb-5'>Bipolar Disorder Test</h1>
      {!showResult ? (
        <div>
          <div>
            <div className='mb-5'>
              <span className='text-xl'>{addLeadingZero(activeQuestion + 1)}</span>
              <span className='text-xl'>/</span>
              <span className='text-xl'>{addLeadingZero(questions.length)}</span>
            </div>
            <div>
              <h2 className='text-2xl'>{question}</h2>
              <ul className='mb-5'>
                <div className='text-xl mb-5 mt-5'>
                {answers.map((answer, index) => (
                  <li onClick={() => onAnswerSelected(answer, index)}
                  key={answer}
                  className={selectedAnswerIndex === index ? 'selected-answer' : null} >
                    <input type="radio"/>
                    {answer}
                  </li>
                ))}
                </div>
              </ul>
              <div>
                <button className='text-xl mt-20' onClick={onClickNext}>
                  {activeQuestion === questions.length-1 ? 'Finish' : 'Next'}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3>Result</h3>
          <p>
            Total Question : <span>{questions.length}</span>
          </p>
        </div>
      )
      }
    </div>
  )
}

export default Bipolar