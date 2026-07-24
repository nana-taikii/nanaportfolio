import React from "react";
import { Typography } from "@heroui/react";
import ToolsList from "./ToolsList";


const Tools = () => {
 

  return (
    <div className="w-full mt-[20px] flex flex-col gap-[15px]">
        <Typography type = 'h2' className = 'c-section-title'>Tools</Typography>
        <ToolsList/>
    </div>
);
};

export default Tools;
