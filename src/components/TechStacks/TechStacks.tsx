import React from "react";
import { Typography } from "@heroui/react";
import TechStacksList from "./TechStacksList";
import Tools from "../Tools/Tools";

const TechStacks = () => {

  return (
    <div className="w-full p-[25px] flex flex-col gap-[15px]">
        <Typography type = 'h2' className = 'c-section-title'>Tech Stacks</Typography>
        <TechStacksList/>
        <Tools/>
    </div>

  );
};

export default TechStacks;
