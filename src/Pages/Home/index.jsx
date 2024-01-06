import React, { useEffect, useState } from 'react'
import Arrow from '../../Components/Arrow'
import Body from './Body'

export default function Home() {
    const [heroes,setHeroes]=useState()
    const [currentIndex,setCurrentIndex]=useState(0)
   useEffect(()=>{
  fetch('http://localhost:3001/heroes')
  .then(res=>res.json())
  .then(data=>setHeroes(data))
  console.log(heroes)
   
   
   }
   ,[])

  //  const items=heroes?.map((e,index)=><Body index={index} img={e.img} name={e.name} level={e.level} desc={e.description}/>)

  const nextFunc=()=>{
   setCurrentIndex(currentIndex===heroes.length-1?0:currentIndex+1)
  }
  const prevFunc=()=>{
    setCurrentIndex(currentIndex===0?heroes.length-1:currentIndex-1)
   }
  return (
    <>
     <div class="slide-container">


        <div class="wrapper">
            <Arrow classArrow="prev" handleIndex={prevFunc}/>

            <Body  hero={currentIndex}/>

           <Arrow classArrow="next"  handleIndex={nextFunc}/>

        </div>



     

    </div> 
    </>
  )
}
