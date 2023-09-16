import React from 'react'
import Header from '../Front Page/Front'

const Survey = () => {
  return (
    
    <div className='font-sans bg-gray-200 text-white'>
      <Header/>
        <h1 className='capitalize text-center text-indigo-950 text-3xl pt-8'>take the mental health test</h1>
          <div class="px-8 py-8 flex flex-wrap">

            <div class="p-4 lg:w-1/3">
              <div class=" bg-indigo-950 h-96 hover:bg-indigo-700 duration-500 rounded-lg px-10 py-10 relative ">
                <h2 class="title-font sm:text-2xl text-center font-semibold pb-5">Bipolar Disorder</h2>
                <p class="text-xl">Bipolar disorder is a mental health condition characterized by extreme mood swings, including episodes of mania and depression.</p>
                <div className='text-xl absolute bottom-4 py-3 hover:underline'>
                <a href='/bipolar' class="cursor-pointer">Take the test</a>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/3">
              <div class=" bg-indigo-950 h-96 hover:bg-indigo-700 duration-500 rounded-lg px-10 py-10 relative">
                <h2 class="title-font sm:text-2xl text-center font-semibold pb-5">Schizophrenia</h2>
                <p class="text-xl">Schizophrenia is a complex mental disorder characterized by distorted thinking, hallucinations, delusions, and impaired social functioning.</p>
                <div className='text-xl absolute bottom-4 py-3 hover:underline'>
                <a href='/schizophrenia' class="cursor-pointer">Take the test</a>
                </div>
              </div>
            </div>
            <div class=" p-4 lg:w-1/3">
              <div class=" bg-indigo-950 h-96 hover:bg-indigo-700 duration-500 rounded-lg px-10 py-10 relative">
                <h2 class="title-font sm:text-2xl text-center font-semibold pb-5">Anxiety Disorder</h2>
                <p class="text-xl">Anxiety disorders are characterised by excessive fear and worry and related behavioural disturbances. Symptoms are severe enough to result in significant distress or significant impairment in functioning.</p>
                <div className='text-xl absolute bottom-4 py-3 hover:underline'>
                <a href='/anxiety' class="cursor-pointer">Take the test</a>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/3">
              <div class=" bg-indigo-950 h-96 hover:bg-indigo-700 duration-500 rounded-lg px-10 py-10 relative">
                <h2 class="title-font sm:text-2xl text-center font-semibold pb-5">Eating Disorder</h2>
                <p class="text-xl">Eating disorders involve abnormal eating and preoccupation with food as well as prominent body weight and shape concerns.</p>
                <div className='text-xl absolute bottom-4 py-3 hover:underline'>
                <a href='eating' class="cursor-pointer">Take the test</a>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/3">
              <div class=" bg-indigo-950 h-96 hover:bg-indigo-700 duration-500 rounded-lg px-10 py-10 relative">
                <h2 class="title-font sm:text-2xl text-center font-semibold pb-5">Post Traumatic Stress Disorder</h2>
                <p class="text-xl">Post-Traumatic Stress Disorder (PTSD) is a mental health condition triggered by exposure to a traumatic event, causing symptoms like flashbacks, nightmares, and severe anxiety.</p>
                <div className='text-xl absolute bottom-4 py-3 hover:underline'>
                <a href='/ptsd' class="cursor-pointer">Take the test</a>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/3">
              <div class=" bg-indigo-950 h-96 hover:bg-indigo-700 duration-500 rounded-lg px-10 py-10 relative">
                <h2 class="title-font sm:text-2xl text-center font-semibold pb-5">Psychosis</h2>
                <p class="text-xl">Psychosis is a mental health condition characterized by a disconnection from reality, often involving hallucinations, delusions, and impaired thinking.</p>
                <div className='text-xl absolute bottom-4 py-3 hover:underline'>
                <a href='/psychosis' class="cursor-pointer">Take the test</a>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/3">
              <div class=" bg-indigo-950 h-96 hover:bg-indigo-700 duration-500 rounded-lg px-10 py-10 relative">
                <h2 class="title-font sm:text-2xl text-center font-semibold pb-5">Substance Related Disorder</h2>
                <p class="text-xl">Substance-related disorder refers to a range of addictive behaviors and patterns of substance use that lead to significant distress or impairment in daily life.</p>
                <div className='text-xl absolute bottom-4 py-3 hover:underline'>
                <a href='/sud' class="cursor-pointer">Take the test</a>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/3">
              <div class=" bg-indigo-950 h-96 hover:bg-indigo-700 duration-500 rounded-lg px-10 py-10 relative">
                <h2 class="title-font sm:text-2xl text-center font-semibold pb-5">Attention Deficit Hyperactivity Disorder</h2>
                <p class="text-xl">Attention Deficit Hyperactivity Disorder is a neurodevelopmental disorder marked by persistent patterns of inattention, hyperactivity, and impulsivity that can significantly impact one's functioning and daily life.</p>
                <div className='text-xl absolute bottom-4 py-3 hover:underline'>
                <a href='/adhd' class="cursor-pointer">Take the test</a>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/3">
              <div class=" bg-indigo-950 h-96 hover:bg-indigo-700 duration-500 rounded-lg px-10 py-10 relative">
                <h2 class="title-font sm:text-2xl text-center font-semibold pb-5">Panic Disorder</h2>
                <p class="text-xl">Panic disorder is a mental health condition characterized by recurrent and unexpected panic attacks, often accompanied by intense fear and physical symptoms, such as a racing heart and shortness of breath.</p>
                <div className='text-xl absolute bottom-4 py-3 hover:underline'>
                <a href='/panic' class="cursor-pointer">Take the test</a>
                </div>
              </div>
            </div>
          </div>

    </div>
  )
}

export default Survey