import React from "react";

import { SubTitle2 } from "@/components/atoms/Titles";
import { TextRegular } from "@/components/atoms/Titles";
import {IconSkill} from "@/components/atoms/Icons";
 

const Skills = [
    {
        title: 'React / Next.js'
    },
    {
        title: 'Git / GitHub'
    },
    {
        title: 'Spring Boot'
    },
    {
        title: 'Serenity BDD'
    },
    {
        title: 'Gatling'
    },
    {
        title: 'Relational Databases'
    },
    {
        title: ' No SQL Databases'
    },
]

const Index = () => {
    return (
        <div>
            <SubTitle2 text='Extra Skills'></SubTitle2>
            {Skills.map((skill)=>(
                <div className="flex gap-2 items-center" key={skill.title}>
                    <IconSkill />
                    <TextRegular text={skill.title} />
                </div>
            ))}
        </div>
    );
};

export default Index;

