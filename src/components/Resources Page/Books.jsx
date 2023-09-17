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
            <>
            <div>
              {page.title}
            </div>
            <div>
              {page.author}
            </div>
            <div>
              <img src={page.photo}/>
            </div>
            </>
          )
        })
      }
    </div>
  )
}

export default Books