import React from 'react'
import Survey from './components/Questionnaire/survey'
import { Route, Routes } from 'react-router-dom'
import Emotion from './components/Models Page/Emotion'
import Medical from './components/Models Page/Medical'
import UserContent from './components/Models Page/UserContent'
import Voice from './components/Models Page/Voice'
import Schizophrenia from './components/Questionnaire/Schizophrenia'
import ADHD from './components/Questionnaire/ADHD'
import Bipolar from './components/Questionnaire/Bipolar'
import Anxiety from './components/Questionnaire/Anxiety'
import Eating from './components/Questionnaire/Eating'
import PTSD from './components/Questionnaire/PTSD'
import Specific from './components/Questionnaire/Specific'
import Panic from './components/Questionnaire/Panic'
import Mood from './components/Questionnaire/Mood'
import ODD from './components/Questionnaire/ODD'
import Psychosis from './components/Questionnaire/Psychosis'
import SUD from './components/Questionnaire/SUD'
import Page from './components/Front Page/Page'
import Header from './components/Front Page/Front'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='*' Component={Page}/>
        <Route path='/sud' Component={SUD}/>
        <Route path='/eating' Component={Eating}/>
        <Route path='/schizophrenia' Component={Schizophrenia}/>
        <Route path='/adhd' Component={ADHD}/>
        <Route path='/phobia' Component={Specific}/>
        <Route path='/mood' Component={Mood}/>
        <Route path='/anxiety' Component={Anxiety}/>
        <Route path='/odd' Component={ODD}/>
        <Route path='/psychosis' Component={Psychosis}/>
        <Route path='/panic' Component={Panic}/>
        <Route path='/bipolar' Component={Bipolar}/>
        <Route path='/ptsd' Component={PTSD}/>
        <Route path='/survey' Component={Survey}/>
        <Route path='/emotions' Component={Emotion}/>
        <Route path='/medical' Component={Medical}/>
        <Route path='/UserContent' Component={UserContent}/>
        <Route path='/voice' Component={Voice}/>
      </Routes>
    </div>
  )
}

export default App