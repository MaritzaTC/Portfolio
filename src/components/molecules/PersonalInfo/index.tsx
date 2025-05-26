import React from 'react'
import { SubTitle2 } from "@/components/atoms/Titles";
import { TextRegular2 } from "@/components/atoms/Titles";
import { Img1 } from "@/components/atoms/Img";
/**
 * Renders the personal information section, including a profile image,
 * the user's name, and their professional title.
 *
 * @returns {JSX.Element} A vertical flex container with profile image, name, and title.
 */
export default function Index() {
  return (
    <div className="flex flex-col gap-4 w-[150px] h-full  pb-10">
        <Img1></Img1>
        <SubTitle2 text='Maritza Tabarez' />
        <TextRegular2 text='Software Engineer Student' />
    </div>
  )
}
