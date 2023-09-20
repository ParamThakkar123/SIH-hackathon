import React from 'react'
import Header from '../Front Page/Front'
import counselors from '../../counselors.json'

const Counselling = () => {
  return (
    <div>
      <Header/>
      {
        counselors.map(counselor => {
          return(
            <>
            <div className='flex justify-center h-48'>
            <div className='w-1/2 self-center text-center text-5xl m-2'>
              {counselor.name}
            </div>
            <div className='w-1/2 flex justify-center m-2 '>
              <img className='w-36 rounded-full ' src={counselor.photo}/>             
            </div>
            </div>
            </>
          )
        })
      }
    </div>
  )
}

export default Counselling