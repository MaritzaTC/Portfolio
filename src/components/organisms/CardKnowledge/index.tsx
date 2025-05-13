import React from 'react'
import GeneralInformation from "@/components/molecules/GeneralInformation";
import { SubTitle4, TextRegular2 } from '@/components/atoms/Titles'


const knowledge = [
{
    title: "UI/UX Design",
    description: "Movil App, Website Design.",
    icon: 'tabler:brand-instagram-filled'
}

];



const Index = () => {
    return(
        <div>
            <div>
                 <GeneralInformation
                          title="My Knowledge"
                          description="Education has always been my gateway to growth. I strive to acquire knowledge that not only sharpens my technical abilities but also contributes to solving problems that matter in today's technology-driven world."
                        />
            </div>
            <div className='flex flex-row items-center justify-center gap-8 mt-8 bg-white w-[310px] h-[225px]'>
                {knowledge.map((item) => (
                    <div key={item.title} className="flex flex-col items-center justify-center">
                        <SubTitle4 text={item.title}></SubTitle4>
                        <TextRegular2 text={item.description}></TextRegular2>
                       {/* <IconCard1 icon={item.icon} /> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Index;



