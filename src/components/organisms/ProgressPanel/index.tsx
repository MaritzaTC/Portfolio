
import React from 'react'
import ProgressIndicator from '@/components/molecules/ProgressIndicator';
import { SubTitle2 } from '@/components/atoms/Titles';
const ProgressPanelLanguages = [{
    title: 'English',
    porcentage: 60,
}, {
    title: 'Spanish',
    porcentage: 100,
},];

const ProgressPanelProgrammingLanguages = [
    {
        title: 'JavaScript',
        porcentage: 80,
    }, {
        title: 'Python',
        porcentage: 50,
    }, {
        title: 'Java',
        porcentage: 70,
    }, {
        title: 'C',
        porcentage: 40,
    }, {
        title: 'dart',
        porcentage: 60,
    },
]

const Index = () => {
    return (
<div >
   <div>
   <SubTitle2 text='Languages'></SubTitle2>
    {ProgressPanelLanguages.map((language) => (
        <ProgressIndicator key={language.title} title={language.title} porcentage={language.porcentage} />
    ))}
   </div>
   <div>
   <SubTitle2 text='Programming Languages'></SubTitle2>
    {ProgressPanelProgrammingLanguages.map((language) => (
        <ProgressIndicator key={language.title} title={language.title} porcentage={language.porcentage} />
    ))}
   </div>
</div>
    );
};


export default Index; 