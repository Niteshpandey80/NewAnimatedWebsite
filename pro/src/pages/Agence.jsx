import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Agence = () => {
    const imageDivref  = useRef(null)
    const imageRef = useRef(null)
    const imageArray = [
      'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
    ]

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(function(){
      gsap.to(imageDivref.current,{
        scrollTrigger:{
         trigger:imageDivref.current ,
          start:'top 30.7%',
          end:'top -97%',
          scrub:true,
          pin:true , 
          onUpdate:(elem)=>{
            let imageIndex ; 
            if(elem.progress < 1 ){
              imageIndex = Math.floor(elem.progress * imageArray.length)
            }else{
              imageIndex = imageArray.length-1 
            }
            imageRef.current.src = imageArray[imageIndex]
          } 
        }  
      })
    })
    
  
  return (
   <div>  
     <div  className='section1' >
      <div ref={imageDivref} className='absolute overflow-hidden h-[20vw] w-[15vw] rounded-3xl top-56 left-[30vw] bg-red-500  '>
        <img ref={imageRef} className='h-full w-full object-cover ' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
      </div>
      <div className=' relative mt-[55vh]' >
        <h1 className='text-[21vw] font-midum text-center uppercase leading-[16vw]'>Soixan7e <br />
Douze</h1>
      </div>
      <div className='lg:pl-[40%] lg:mt-20 mt-4 p-20 ml-23'>
         <p className='lg:text-4xl text-2xl leading-tight relative '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
      </div>
    </div> <div  className='section2 h-screen' >
      
    </div>
   </div>
    
  )
}

export default Agence
