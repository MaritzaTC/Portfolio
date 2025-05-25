
import React from 'react'
import { Img2 } from '../../atoms/Img/index'
import { TextTitle, TextRegular, TextTitle2 } from '../../atoms/Titles/index'
import { HireMe } from '@/components/atoms/Button'
export default function index() {
  return (
    <div className='w-full max-w-[970px] bg-white  flex flex-row justify-between '>
    <div className='sm:px-12 py-8' >
      <div className='flex flex-col  w-full h-full justify-center '>
        <TextTitle text="I'm Maritza Tabarez"></TextTitle>
        <TextTitle2 text="System engineers"></TextTitle2>
        <TextRegular text="I am passionate about technology, with a strong interest in programming and developing innovative solutions. I enjoy tackling challenges that allow me to continuously learn, enhance my technical skills, and contribute to impactful projects."></TextRegular>
        <HireMe></HireMe>
      </div>
      
      </div> 
    

     <Img2 />


    </div>
  )
}
