import React, { useEffect } from 'react'
import Header from '../Front Page/Front'
import Pages from '../../books.json'

const Books = () => {

  return (
    <div>
      <Header/>
      {
        Pages.map(page => {
          return(
            <div className='m-16'>
            <div className='text-center text-2xl font-semibold'>
              {page.title}
            </div>
            <div className='flex justify-center'>
            <div className='w-48'>
              <img src={page.photo}/>
            </div>
            </div>
            <div className='text-center italic text-xl'>
              {page.author}
            </div>
            
            </div>
          )
        })
      }
    </div>
  )
}

export default Books