import React from 'react'
import Header from '../Front Page/Front'

const Resources = () => {
  return (
    <div>
      <Header/>
        <ul className='mt-10 ml-20'>
            <li className='bg-violet-500 text-white mb-10 w-96 cursor-pointer hover:bg-violet-950 transition-colors duration-300 rounded-xl p-4 text-2xl'><a href="/therapist">Therapists</a></li>
            <li className='bg-violet-500 text-white mb-10 w-96 cursor-pointer hover:bg-violet-950 transition-colors duration-300 rounded-xl p-4 text-2xl'><a href="/discussion">Discussion Forum</a></li>
            <li className='bg-violet-500 text-white mb-10 w-96 cursor-pointer hover:bg-violet-950 transition-colors duration-300 rounded-xl p-4 text-2xl'><a href="/books">Books and Self-help Resources</a></li>
            <li className='bg-violet-500 text-white mb-10 w-96 cursor-pointer hover:bg-violet-950 transition-colors duration-300 rounded-xl p-4 text-2xl'><a href="/counselling">Counselling</a></li>
            <li className='bg-violet-500 text-white mb-10 w-96 cursor-pointer hover:bg-violet-950 transition-colors duration-300 rounded-xl p-4 text-2xl'><a href="/info">Information about Disorders</a></li>
        </ul>
    </div>
  )
}

export default Resources