import { Img3 } from '@/components/atoms/Img';
import { SubTitle4, TextRegular2 } from '@/components/atoms/Titles';
import GeneralInformation from '@/components/molecules/GeneralInformation'

import React from 'react'

const portfolio = [
  {
    image: "/Image.png",
    title: "How to make web tempates",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna ",
    details: "I have designed user-friendly interfaces for mobile apps and websites, focusing on enhancing user experience and visual appeal.",
    github: ""
  },
  {
    image: "/Image.png",
    title: "How to make web tempates",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna ",
    details: "I have designed user-friendly interfaces for mobile apps and websites, focusing on enhancing user experience and visual appeal.",
    github: ""
  },
  {
    image: "/Image.png",
    title: "How to make web tempates",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna ",
    details: "I have designed user-friendly interfaces for mobile apps and websites, focusing on enhancing user experience and visual appeal.",
    github: ""
  },
  {
    image: "/Image.png",
    title: "How to make web tempates",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna ",
    details: "I have designed user-friendly interfaces for mobile apps and websites, focusing on enhancing user experience and visual appeal.",
    github: ""
  },
];


export default function Index() {
  return (
    <div>
      <div className='flex items-center justify-center'><GeneralInformation
        title="Portfolio"
        description="This section showcases the projects I have developed as part of my academic training and personal growth. Each project reflects my progress in programming, design, and system development, demonstrating both technical and problem-solving skills."
      />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {portfolio.map((item) => (
          <div key={item.title} className="flex flex-col items-center justify-center">
            <Img3 img={item.image}></Img3>
            <SubTitle4 text={item.title}></SubTitle4>
            <TextRegular2 text={item.description}></TextRegular2>
          </div>
        ))}
      </div>
    </div>
  )
}
