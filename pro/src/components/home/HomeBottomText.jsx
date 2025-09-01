import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className="flex items-center justify-center gap-6 "> 
      <Link 
       className='text-[6.5vw] border-4 border-white rounded-full px-8 py-1 uppercase text-white'
      >
        Projets
      </Link>
      <Link 
       className='text-[6.5vw] border-4 border-white rounded-full px-8 py-1 uppercase text-white'
      >
        Agence
      </Link>
    </div>
  )
}

export default HomeBottomText