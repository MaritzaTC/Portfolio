import React from 'react'
import { ButtonIcon } from '../Icons';


const HireMe = ({ onOpen }: {onOpen: React.MouseEventHandler<HTMLButtonElement>}) => {
  return (
    <button className='bg-[#feb500] items-center text-black text-[16px] w-[154px] h-[51px] rounded-[7px] mt-8 hover:bg-amber-200   transition '   onClick={onOpen}>
      <div className='flex flex-row items-center justify-center gap-2'>
          Hire Me
        <ButtonIcon icon={'tabler:arrow-right'}></ButtonIcon>
      </div>
    </button>
  )
}


const LearnMore = ({ onOpen }: {onOpen: React.MouseEventHandler<HTMLButtonElement>}) => {
  return (
    <button className='text-[#feb500] flex self-start text-[18px] w-[154px] h-[51px]  hover:bg-amber-200 rounded-2xl transition pl-1'   onClick={onOpen}>
      <div className='flex flex-row items-center justify-center gap-2'>
          Learn More
        <ButtonIcon icon={'tabler:arrow-right'}></ButtonIcon>
      </div>
    </button>
  )
}

export {HireMe,LearnMore} ;