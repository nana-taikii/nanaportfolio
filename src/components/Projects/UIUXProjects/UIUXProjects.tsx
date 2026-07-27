import React from 'react'
import { Typography } from '@heroui/react'
import {useSearchParams, useNavigate} from 'react-router-dom'
import {uiuxProjects} from './UIUXProjectList'

const UIUXProjects = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
   

    const handleOpenUIUXProject = (projectId:string) => {
        // const projectParams = new URLSearchParams(searchParams);
        // projectParams.set('uiux', `${projectId}`);
        // navigate(`?${projectParams.toString()}`, {replace:true})
        navigate(`/uiux/${projectId}`)
    }

  return (
     <section className="
            flex flex-wrap gap-5 items-center justify-center pb-[20px]
            max-[950px]:grid
            max-[950px]:grid-cols-2
            max-[650px]:grid-cols-1

            ">
        {uiuxProjects.map((project, index) => (
            <div key = {project.id} className={`
            rounded-[8px]
            overflow-hidden
            bg-[var(--main-white)]
            w-[calc(100%/3-14px)]
            max-w-[500px]
            max-[950px]:w-full
            max-[650px]:max-w-full
            animation-fadeUp
            `} 
            style = {{animationDelay:`${index * 0.1}s`}}
            onClick = {() => handleOpenUIUXProject(project.id)}>
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
