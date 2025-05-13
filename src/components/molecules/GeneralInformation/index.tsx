import { SubTitle, TextRegular2 } from '@/components/atoms/Titles'
import React from 'react'

export default function index({title, description}: {title: string, description: string}) {
  return (
    <div key={title} className="flex flex-col items-center justify-center w-[438px] p-8 ">
        <SubTitle text={title}></SubTitle>
        <TextRegular2 text={description}></TextRegular2>
    </div>
  )
}

