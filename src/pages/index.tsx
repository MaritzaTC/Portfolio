import React from "react";

import CardEducation from "@/components/organisms/CardEducation";
import CardPersonal from "@/components/organisms/CardPersonal";
import CardKnowledge from "@/components/organisms/CardKnowledge";
import SocialSideBar from "@/components/molecules/SocialSideBar";
import PanelLeft from "@/components/organisms/PanelLeft";
import CardPortfolio from "@/components/organisms/CardPortfolio";
import Footer from "@/components/molecules/Footer";


/**
 * The main Home page component for the portfolio application.
 *
 * @returns The JSX layout for the home page, including the social sidebar, left panel,
 *          and a central column with personal, knowledge, education, portfolio cards, and a footer.
 */
export default function Home() {
 

  return (
    <div className="bg-[#F0F0F6] min-h-screen flex gap-10">
      <SocialSideBar></SocialSideBar>
   <PanelLeft></PanelLeft>
      <div className="flex-1/4 flex flex-col items-center justify-center bg-[#F0F0F6] mr-14">
        <CardPersonal></CardPersonal>
        <CardKnowledge></CardKnowledge>
        <CardEducation></CardEducation>
        <CardPortfolio></CardPortfolio>
        <Footer></Footer>
      </div>
    </div>
  );
}
