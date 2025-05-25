import React from 'react'
import { ButtonIcon } from '../Icons';

const HireMe = () => {
  return (
    <button className='bg-[#feb500] items-center text-black text-[16px] w-[154px] h-[51px] rounded-[7px] mt-8'  >
      <div className='flex flex-row items-center justify-center gap-2'>
          Hire Me
        <ButtonIcon icon={'tabler:arrow-right'}></ButtonIcon>
      </div>
    </button>
  )
}

export {HireMe} ;