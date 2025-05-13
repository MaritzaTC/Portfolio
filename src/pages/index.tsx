import React from "react";

import GeneralInformation from "@/components/molecules/GeneralInformation";
import CardEducation from "@/components/organisms/CardEducation";
import CardPersonal from "@/components/organisms/CardPersonal";
import CardKnowledge from "@/components/organisms/CardKnowledge";
export default function Home() {
  return (
    <div className="bg-[#F0F0F6] ">
      {/* <SocialSideBar></SocialSideBar>
   <PanelLeft></PanelLeft> */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#F0F0F6]">
        <CardPersonal></CardPersonal>
        <CardKnowledge></CardKnowledge>
        <GeneralInformation
          title="Education"
          description="Education has always been my gateway to growth. I strive to acquire knowledge that not only sharpens my technical abilities but also contributes to solving problems that matter in today's technology-driven world."
        />
        <CardEducation></CardEducation>
      </div>
    </div>
  );
}
