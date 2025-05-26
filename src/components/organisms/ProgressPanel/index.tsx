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

/**
 * Represents a list of programming languages with their respective proficiency percentages.
 * Each object in the array contains:
 * - `title`: The name of the programming language.
 * - `porcentage`: The proficiency percentage (0-100) for the language.
 */
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

/**
 * Renders the ProgressPanel component, displaying two sections:
 * one for general languages and another for programming languages.
 * Each section lists language proficiency using the ProgressIndicator component.
 *
 * @returns {JSX.Element} The rendered ProgressPanel component.
 */
const Index = () => {
    return (
<div >
   <div>
   <SubTitle2 text='Languages'></SubTitle2>
    {ProgressPanelLanguages.map((language) => (
        <ProgressIndicator key={language.title} title={language.title} porcentage={language.porcentage} />
    ))}
   </div>
    <hr className="w-[220px] h-[1px] bg-gray-300 my-10 border-none gap-6 " />
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