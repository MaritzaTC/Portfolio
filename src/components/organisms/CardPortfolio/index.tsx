import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import SwiperCore from 'swiper';
import { Pagination, EffectCoverflow } from 'swiper/modules';
import { LearnMore } from '@/components/atoms/Button';
import { Img3 } from '@/components/atoms/Img';
import { SubTitle4, TextRegular2 } from '@/components/atoms/Titles';
import { Dialog } from '@/components/molecules/Dialog';
import GeneralInformation from '@/components/molecules/GeneralInformation';
import { useState } from 'react';

// eslint-disable-next-line react-hooks/rules-of-hooks
SwiperCore.use([Pagination, EffectCoverflow]);
interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  details: string;
  github: string;
}
/**
 * Represents a portfolio item to be displayed in the portfolio section.
 * Each item contains information about a specific project, including its image, title, description, detailed information, and a link to the project's GitHub repository.
 *
 * @type {PortfolioItem[]}
 * @property {string} image - The path to the project's representative image.
 * @property {string} title - The title of the project.
 * @property {string} description - A brief summary of the project.
 * @property {string} details - Detailed information about the project, including features and technologies used.
 * @property {string} github - The URL to the project's GitHub repository.
 */
const portfolio: PortfolioItem[]  = [
  {
    image: "/poke.png",
    title: "Pokémon Web App",
    description: "This project is an interactive web application that allows users to explore Pokémon using the PokeAPI. ",
    details: "Users can search and view details of Pokémon, including their types, stats, evolutions, and more. The application uses JavaScript to fetch data from the API and display it in an attractive user interface.",
    github: "GitHub: https://github.com/20251-Ingenieria-WEB/taller-html-Maritza-Tabarez-Cardenas.git"
  },
  {
    image: "/serenity.png",
    title: "Serenity BDD",
    description: "The project is focused on end-to-end test automation using Serenity BDD as the main framework for executing the tests.",
    details: "Serenity BDD provides a structured approach to testing with detailed reporting, enabling a clear understanding of test results and application flows.\n The tests are designed to cover key aspects such as:\n User Authentication: Verifying that the login processes work correctly.\n User Registration: Ensuring that a user can be successfully created. ",
    github: "GitHub: https://github.com/MaritzaTC/Automation-Auth-Calidad-E2E.git"
  },
  {
    image: "/androi.png",
    title: "User interface (GUI) ",
    description: "A graphical user interface (GUI) is developed for Android. Using Jetpack Compose ",
    details: "This application implements two forms using Jetpack Compose to collect the user's personal and contact information. The application supports multiple languages, screen orientations, and properly handles the virtual keyboard.",
    github: "GitHub: https://github.com/MaritzaTC/LabsCM20251-Gr02/tree/main/Lab120251-Gr02"
  },
];

/**
 * Renders the portfolio section, displaying a list of projects in a Swiper carousel.
 * Each project card shows an image, title, description, and a "Learn More" button.
 * When a project is selected, a dialog with detailed information and a GitHub link is shown.
 *
 * @component
 * @returns {JSX.Element} The rendered portfolio section with interactive project cards and modal dialog.
 */
export default function Index() {
  const [selectedItem, setSelectedItem] =useState<PortfolioItem | null>(null);

  const handleOpen = (item: PortfolioItem) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <div className="w-full">
      <div className='flex items-center justify-center'>
        <GeneralInformation
          title="Portfolio"
          description="This section showcases the projects I have developed as part of my academic training and personal growth. Each project reflects my progress in programming, design, and system development, demonstrating both technical and problem-solving skills."
        />
      </div>
<div className="w-full max-w-[1000px] mx-auto">
  <Swiper
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={'auto'}
    spaceBetween={72}
    pagination={{ clickable: true }}
  
  >
    {portfolio.map((item) => (
      <SwiperSlide
        key={item.title}
       className="!w-[260px] !h-[400px] sm:!w-[280px] sm:!h-[420px] md:!w-[300px] md:!h-[440px] lg:!w-[310px] lg:!h-[474px]"
      >
        <div className="flex flex-col items-center justify-start bg-white">
          <div >   <Img3 img={item.image} />
          </div>
       
          <div className="p-4">
            <SubTitle4 text={item.title} />
            <TextRegular2 text={item.description} />
            <LearnMore onOpen={() => handleOpen(item)} />
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
      {selectedItem && (
        <Dialog
          isOpen={true}
          onClose={handleClose}
          titleText="Hire Me"
          description={selectedItem.details}
          link={selectedItem.github}
        />
      )}
    </div>
  );
}