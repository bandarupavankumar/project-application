import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'

const about = () => {
  return (
    <div>about
      <Link to='/' className=' boder bg-red p-4'>
        go back home
        <Header/>

      </Link>
    </div>
  )
}

export default about