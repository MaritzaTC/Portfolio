import React from 'react'
import GeneralInformation from "@/components/molecules/GeneralInformation";
import { SubTitle4, TextRegular2 } from '@/components/atoms/Titles'
import { KnowledgeImg } from '@/components/atoms/Img';


/**
 * An array of knowledge objects representing different technical skills and areas of expertise.
 *
 * Each object in the array contains:
 * - `image`: The path to an icon representing the skill.
 * - `title`: The name of the skill or area of knowledge.
 * - `description`: A brief description of the skill, including relevant technologies or concepts.
 *
 * Example usage:
 * ```tsx
 * {knowledge.map(item => (
 *   <Card
 *     key={item.title}
 *     image={item.image}
 *     title={item.title}
 *     description={item.description}
 *   />
 * ))}
 * ```
 */
const knowledge = [
    {
  image: "/icon_api.png",
  title: "REST API Development",
  description: "Backend services using Node.js and Spring Boot.",
},
{
  image: "/coding.png",
  title: "Web Development",
  description: "Modern websites using HTML, CSS, JavaScript, or React with Tailwind CSS.",
},
{
    image: "/illustration.png",
    title: "UI/UX Design",
    description: "Mobile app and website interface design.",
  },
  {
    image: "/icon_sql.png",
    title: "SQL Databases",
    description: "Data modeling, SQL queries, stored procedures.",
  },
  {
    image: "/NoSql.png",
    title: "NoSQL Databases",
    description: "MongoDB, Firebase, and document-oriented data.",
  },
  {
    image: "/github.png",
    title: "Git & GitHub",
    description: "Version control, team collaboration, and workflows.",
  }

];



/**
 * Renders the knowledge section of the portfolio, including a general information header
 * and a responsive grid of knowledge cards.
 *
 * Each card displays an icon, a title, and a description representing a specific area of knowledge.
 *
 * @component
 * @returns {JSX.Element} The rendered knowledge section.
 */
const Index = () => {
    return(
        <div>
            <div className='flex flex-col items-center justify-center'>
                 <GeneralInformation
                          title="My Knowledge"
                          description="Education has always been my gateway to growth. I strive to acquire knowledge that not only sharpens my technical abilities but also contributes to solving problems that matter in today's technology-driven world."
                        />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ' >
                {knowledge.map((item) => (
                    <div key={item.title} className="flex flex-col items-center justify-center w-[310px] bg-white h-[225px] p-8 gap-4">
                        <KnowledgeImg icon={item.image}></KnowledgeImg>
                        <SubTitle4 text={item.title}></SubTitle4>
                        <TextRegular2 text={item.description}></TextRegular2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Index;



