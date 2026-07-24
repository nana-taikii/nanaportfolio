import React from 'react'
import ImgUIUXProj1 from "../../../assets/images/img_uiux_proj1.png"
import ImgUIUXProj2 from "../../../assets/images/img_uiux_proj2.png"
import ImgUIUXProj3 from "../../../assets/images/img_uiux_proj3.png"
import { Typography } from '@heroui/react'

const UIUXProjects = () => {
    const uiuxProjects = [
        {
            id:'Mood App',
            projectTitle:'Mood App',
            projectDesc:'An App that elevates your mood',
            projectImage:ImgUIUXProj1
        },
         {
            id:'lighthouse',
            projectTitle:'lighthouse',
            projectDesc:'A conceptual landing page design for lighthouse',
            projectImage:ImgUIUXProj2
        },
         {
            id:'Traverswiss',
            projectTitle:'Traverswiss',
            projectDesc:'Travel smarter with adventures',
            projectImage:ImgUIUXProj3
        } 
    ]
  return (
    <section className="flex flex-wrap gap-5 items-center justify-center pb-[20px] ">
        {uiuxProjects.map((project) => (
            <div key = {project.id} className="rounded-[8px] overflow-hidden bg-[var(--main-white)] w-[calc(100%/3-14px)] max-w-[500px]">
                <img src={project.projectImage} alt={project.projectDesc} />
                <div className = 'py-[15px] px-[10px] flex flex-col gap-[5px]'>
                    <Typography type = 'h6' className = 'text-[var(--text-dark)] text-[14px] font-bold'>{project.projectTitle}</Typography>
                    <Typography type = 'body' className = 'text-[var(--text-secondary)] text-[12px] font-bold'>{project.projectDesc}</Typography>
                </div>
            </div>
        ))}
    </section>
  )
}

export default UIUXProjects
