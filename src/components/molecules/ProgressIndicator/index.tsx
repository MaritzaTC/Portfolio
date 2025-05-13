import React from "react";
import { TextRegular2 } from "@/components/atoms/Titles";
const Index = ({
  title,
  porcentage,
}: {
  title: string;
  porcentage: number;
}) => {
  return (
    <div className="w-[220px]">
      <div className="flex justify-between items-center mb-2 ">
        <TextRegular2 text={title}></TextRegular2>
        <TextRegular2 text={`${porcentage}%`}></TextRegular2>
      </div>
      <div className="w-full border-amber-400 rounded-full h-1.5 mb-4 ">
        <div
          className="bg-yellow-500 h-1.5 rounded-full transition-all duration-500"
          style={{ width: `${porcentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Index;
