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
import Resources from './components/Resources Page/Resources'
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
import Threapist from './components/Resources Page/Threapist'
import Counselling from './components/Resources Page/Counselling'
import Books from './components/Resources Page/Books'
import Discussion from './components/Resources Page/Discussion'
import Info from './components/Resources Page/Info'
import Signup from './components/Sign Up Page/Signup'
import Login from './components/Login Page/Login'
import Therapistsign from './components/Sign Up Page/Therapistsign'
import Studentsign from './components/Sign Up Page/Studentsign'
import Profile from './components/Profile Page/Profile'
import Chatbot from './components/Chatbot Page/Chatbot'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/chat' Component={Chatbot}/>
        <Route path='profile' Component={Profile}/>
        <Route path='/tsign' Component={Therapistsign}/>
        <Route path='/ssign' Component={Studentsign}/>
        <Route path='/login' Component={Login}/>
        <Route path='/signup' Component={Signup}/>
        <Route path='/discussion' Component={Discussion}/>
        <Route path='/books' Component={Books}/>
        <Route path='/info' Component={Info}/>
        <Route path='/counselling' Component={Counselling}/>
        <Route path='/therapist' Component={Threapist}/>
        <Route path='*' Component={Page}/>
        <Route path='/resources' Component={Resources}/>
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