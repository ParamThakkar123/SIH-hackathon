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
            <div>
              {counselor.name}
            </div>
            <div>
              <img src={counselor.photo}/>             
            </div>
            </>
          )
        })
      }
    </div>
  )
}

export default Counselling