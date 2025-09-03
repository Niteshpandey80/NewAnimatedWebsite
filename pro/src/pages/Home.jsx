import React from 'react'
import Video from '../components/home/Video.jsx'
import HomeHeroText from '../components/home/HomeHeroText.jsx'
import HomeBottomText from '../components/home/HomeBottomText.jsx'

const Home = () => {
  return (
   <div>
     <div className="h-screen w-screen fixed">
      <Video />
    </div>
    <div className='h-screen w-screen  relative flex flex-col justify-between overflow-hidden'>
      <HomeHeroText/>
      <HomeBottomText/>
    </div>
   </div>
  )
}

export default Home
