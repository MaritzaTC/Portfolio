import React from "react";
import SocialSideBar from "@/components/molecules/SocialSideBar";
import ProgressPanel from "@/components/organisms/ProgressPanel";
import Skills from "@/components/organisms/Skills";

export default function index() {
  return (
    <div className="flex flex-col gap-4 w-[240px] h-full p-4 bg-white ">
      <SocialSideBar></SocialSideBar>
      <ProgressPanel></ProgressPanel>
      <Skills></Skills>
    </div>
  );
}
