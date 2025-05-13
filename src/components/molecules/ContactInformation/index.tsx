
import { TextRegular3 } from '@/components/atoms/Titles'
import React from 'react'

const ContactInformation = [
    {
        title: 'Location',
        text: 'Medellin'
    },
  
]


export default function index() {
  return (
    <div className='w-[220px] '>
        {ContactInformation.map((item) => (
           <div key={item.title} className='flex  justify-between' >
             <TextRegular3 text={item.title} ></TextRegular3>
             <TextRegular3 text={item.text} ></TextRegular3>
           </div>
        ))}
    </div>
  )
}
