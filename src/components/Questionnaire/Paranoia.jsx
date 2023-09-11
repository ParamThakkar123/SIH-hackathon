import React, { useState } from 'react'
import { quiz10 } from './Paranoia1';

const Eating = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  const {questions} = quiz10;
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
      <h1>Paranoia Test</h1>
      {!showResult ? (
        <div>
          <div>
            <span>{addLeadingZero(activeQuestion + 1)}</span>
            <span>{addLeadingZero(questions.length)}</span>
            <div>
              <h2>{question}</h2>
              <ul>
                {answers.map((answer, index) => (
                  <li onClick={() => onAnswerSelected(answer, index)}
                  key={answer}
                  className={selectedAnswerIndex === index ? 'selected-answer' : null}>{answer}</li>
                ))}
              </ul>
              <div>
                <button onClick={onClickNext}>
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

export default Eating