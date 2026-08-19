import React from 'react'
import { Typography } from '@heroui/react'
import IconFigma from "../../assets/images/icon_figma.png"
import IconAffinity from "../../assets/images/icon_affinity.png"
import IconIllustrator from "../../assets/images/icon_illustrator.png"
import IconCanva from  "../../assets/images/icon_canva.png"
import IconPostman from "../../assets/images/icon_postman.png"
import IconVSCode from "../../assets/images/icon_vsCode.png"


const ToolsList = ({ showTools  = []}:{showTools?:string[]}) => {
     
    const tools = [
        {
          id: 1,
          toolName: "Figma",
          toolLogo: IconFigma
        },
        {
          id: 2,
          toolName: "Affinity",
          toolLogo: IconAffinity
        },
        {
          id: 3,
          toolName: "Illustrator",
          toolLogo: IconIllustrator
        },
        {
          id: 4,
          toolName: "Canva",
          toolLogo: IconCanva
        },
        {
          id: 5,
          toolName: "Postman",
          toolLogo: IconPostman
        },
        {
          id: 6,
          toolName: "VS Code",
          toolLogo:IconVSCode
        },
      ];

    const filteredTools = showTools.length === 0 ? tools : tools.filter((toolList) => showTools.includes(toolList.toolName))

  return (
    <ul className = 'flex flex-row flex-wrap gap-[6px]'>
        {filteredTools.map((tools) => (
            <li key = {tools.id} className = 'flex flex-col items-center gap-[8px] py-[10px] px-[8px] rounded-[8px] h-[60px] min-w-[60px] bg-[var(--main-lightGray)]'>
                <img src={tools.toolLogo} alt={tools.toolName} />
                <Typography type = 'body' className = 'text-[12px] font-normal text-[var(--text-secondary)] max-[767px]:text-[10px]'>{tools.toolName}</Typography>
            </li>
        ))}
    </ul>
  )
}

export default ToolsList
