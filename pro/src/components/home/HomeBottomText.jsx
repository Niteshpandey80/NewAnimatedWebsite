import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className="flex items-center justify-center gap-6 text-white">
      <div className="border-4 h-44 flex items-center px-10 border-white rounded-full uppercase  ">
        <Link 
          className="text-[6vw] hover:text-[#D3FD50]  mt-6 text-white" 
          to="/projects"
        >
          Projets
        </Link>
      </div>

      <div className="border-4 h-44 flex items-center px-10 border-white rounded-full uppercase">
        <Link 
          className="text-[6vw] hover:text-[#D3FD50]  mt-6 text-white" 
          to="/agence"
        > 
          Agence
        </Link>
      </div>
    </div>
  )
}

export default HomeBottomText
