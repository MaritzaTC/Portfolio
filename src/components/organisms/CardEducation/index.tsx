import React from "react";
import { SubTitle4, TextRegular2,TextRegular4, TextRegular5} from "@/components/atoms/Titles";
import GeneralInformation from "@/components/molecules/GeneralInformation";
/**
 * Array of education records representing academic background and certifications.
 *
 * Each object in the array contains:
 * - `university`: Name of the educational institution.
 * - `rol`: Role or position held (e.g., Student).
 * - `date`: Duration or year(s) attended.
 * - `Certificate`: Name of the degree, diploma, or certificate obtained.
 * - `description`: Brief summary of the training, focus areas, and skills acquired.
 */
const educationData = [
  { 
    university: "University of Antioquia",
    rol: "Student",
    date: "2021 - 2026",
    Certificate: "Systems Engineering",
    description: "Comprehensive training in software development, systems modeling, and problem-solving with a research-based pedagogical approach. Focus on DevOps. Emphasis on innovation, ethical responsibility, and modern engineering practices.",
      },
        { 
    university: "University of North",
    rol: "Student",
    date: "2022",
    Certificate: "Diploma in Software Development",
    description: "Practical training in modern software development.",
      },
          { 
    university: "Correlation one",
    rol: "Student",
    date: "2022",
    Certificate: "Diploma in Fundamentals of Data Analytics",
    description: "Hands-on training in data analytics fundamentals, including data cleaning, exploratory data analysis, data visualization, and basic statistics using tools like Excel,Power BI, and Python."
      },
           { 
    university: "University of North",
    rol: "Student",
    date: "2022",
    Certificate: "Diploma in Programming Fundamentals",
    description: "Fundamental training in programming concepts, including algorithms, data structures, object-oriented programming, and basic software development practices using languages.",
      },

];


/**
 * Renders the Education card component, displaying a general information section
 * and a list of educational experiences. Each education entry includes the university,
 * role, date, certificate, and a description. The layout is responsive and styled using Tailwind CSS.
 *
 * @component
 * @returns {JSX.Element} The rendered Education card component.
 */
const Index = () => {
 return(
  <div>
    <div className="flex flex-col items-center justify-center">
       <GeneralInformation
                title="Education"
                description="Education has always been my gateway to growth. I strive to acquire knowledge that not only sharpens my technical abilities but also contributes to solving problems that matter in today's technology-driven world."
              />
    </div>
    <div className="bg-white p-2  w-full max-w-[970px] mx-auto flex flex-col-reverse divide-y-1 divide-y-reverse divide-gray-200 " >
      {educationData.map((education) => (
        <div key={education.university} className="flex p-8" >
            <div className="flex flex-col gap-2 pr-[120px]">
                 <SubTitle4 text={education.university}></SubTitle4>
            <div className="flex flex-col sm:flex-row  gap-8">
          <TextRegular4 text={education.rol}></TextRegular4>
          <TextRegular5 text={education.date}></TextRegular5>
            </div>
            </div>

          <div className="flex flex-col gap-2 w-full ">
            <SubTitle4 text={education.Certificate}></SubTitle4>
          <TextRegular2 text={education.description}></TextRegular2>
          </div>
    
         
        </div>
      ))}
    </div>
  </div>
      
 )
}


export default Index;
