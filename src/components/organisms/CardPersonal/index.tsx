
import React from 'react'
import { Img2 } from '../../atoms/Img/index'
import { TextTitle, TextRegular, TextTitle2 } from '../../atoms/Titles/index'
export default function index() {
  return (
    <div className='w-[970px]  h-[467px] bg-white flex flex-row items-center justify-center pt-8 pr-8 pl-8' >
      <div className='flex flex-col  w-full h-full justify-center '>
        <TextTitle text="I'm Maritza Tabarez"></TextTitle>
        <TextTitle2 text="System engineers"></TextTitle2>
        <TextRegular text="I am passionate about technology, with a strong interest in programming and developing innovative solutions. I enjoy tackling challenges that allow me to continuously learn, enhance my technical skills, and contribute to impactful projects."></TextRegular>
      </div>
      <Img2></Img2>
    </div>
  )
}
