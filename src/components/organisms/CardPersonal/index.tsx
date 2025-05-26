
import React, { useState } from 'react'
import { Img2 } from '../../atoms/Img/index'
import { TextTitle, TextRegular, TextTitle2 } from '../../atoms/Titles/index'
import { HireMe } from '@/components/atoms/Button'
import { Dialog } from '@/components/molecules/Dialog';
/**
 * Renders the main personal card component for the portfolio, displaying personal information,
 * a brief introduction, and a "Hire Me" dialog. The component includes a title, subtitle,
 * description, and an image, and manages the state for showing or hiding the dialog.
 *
 * @returns {JSX.Element} The rendered personal card component.
 */
export default function index() {
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const [showDialog, setShowDialog] = useState(false);
  return (
    <div className='w-full max-w-[970px] bg-white  flex flex-row justify-between '>
    <div className='sm:px-12 py-8' >
      <div className='flex flex-col  w-full h-full justify-center '>
        <TextTitle text="I'm Maritza Tabarez"></TextTitle>
        <TextTitle2 text="System engineers"></TextTitle2>
        <TextRegular text="I am passionate about technology, with a strong interest in programming and developing innovative solutions. I enjoy tackling challenges that allow me to continuously learn, enhance my technical skills, and contribute to impactful projects."></TextRegular>
        <HireMe onOpen={() => setShowDialog(true)} />
      <Dialog isOpen={showDialog} onClose={() => setShowDialog(false)}
          titleText="Hire Me"
          description='I am available for freelance projects and collaborations. If you are interested in working together, please feel free to reach out to me. I would be happy to discuss your project and how I can contribute to its success.' link={''}        />
      </div>
      
      </div> 
    
<div className='sm:flex flex-col items-center justify-center w-full h-full'>
     <Img2 />
</div>



    </div>
  )
}
