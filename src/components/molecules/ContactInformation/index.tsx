
import { TextRegular3 } from '@/components/atoms/Titles'
import React from 'react'

const ContactInformation = [
    {
        title: 'Location',
        text: 'Medellin'
    },
  
]


/**
 * Renders a list of contact information items using the `ContactInformation` array.
 * Each item displays its title and corresponding text in a flex row.
 *
 * @returns {JSX.Element} A container with a list of contact information rows.
 */
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
