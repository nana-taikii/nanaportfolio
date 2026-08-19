import React from 'react'
import TechStackList from '../../TechStacks/TechStacksList'
import {customButtonStyles } from '../../../styles/CustomButtonStyles'
import IconArrow from "../../../assets/svg/icon_arrow.svg"
import ImgFuncars from "../../../assets/images/img_funcars.png"
import ImgRuffree from "../../../assets/images/img_ruffree.png"
import ImgSmileTruck from "../../../assets/images/img_smiletruck.png"
import ImgIsuzu from "../../../assets/images/img_isuzu.png"


import {Button, Typography} from '@heroui/react'

interface webDevProjectTypes{
    id:number,
    projectTitle:string,
    projectDesc:string,
    projectTechStacks:string[],
    projectImage:string,
    projectLink:string
}

const WebDevelopment = () => {
    const webDevProjects : webDevProjectTypes[] = [
        {
            id:1,
            projectTitle:'Funcars',
            projectDesc:'Developed the Funcars website, a WordPress-based platform designed to showcase automotive listings through a modern, user-friendly, and seamless browsing experience.',
            projectTechStacks:['HTML', 'CSS', 'JS', 'PHP', 'WORDPRESS', 'ACF', 'CONTACT F7'],
            projectImage:ImgFuncars,
            projectLink:''
        },
          {
            id:2,
            projectTitle:'Ruffree',
            projectDesc:'Worked on developing the official RUFFREE website using Wordpress, focusing on clean design, seamless navigation, and effective presentation of their wellness services',
            projectTechStacks:['HTML', 'CSS', 'JS', 'PHP', 'WORDPRESS', 'ACF', 'CONTACT F7'],
            projectImage:ImgRuffree,
            projectLink:''
        },
        {
            id:3,
            projectTitle:'Smile Truck',
            projectDesc:'Collaborated on the development of the Smile Truck website, contributing to page implementation and improving overall user experience.',
            projectTechStacks:['HTML', 'CSS', 'JS', 'PHP', 'WORDPRESS', 'ACF', 'CONTACT F7'],
            projectImage:ImgSmileTruck,
            projectLink:''
        },
         {
            id:4,
            projectTitle:'Isuzu Philippines',
            projectDesc:'Worked on developing the official RUFFREE website using Wordpress, focusing on clean design, seamless navigation, and effective presentation of their wellness services',
            projectTechStacks:['HTML', 'CSS', 'JS', 'PHP', 'WORDPRESS', 'ACF', 'CONTACT F7'],
            projectImage:ImgIsuzu,
            projectLink:''
        }
    ]
  return (
    <section className = 'flex flex-col gap-[10px] h-full'>
      {webDevProjects.map((project, index) => (
        <div key = {project.id} style = {{animationDelay:`${index * 0.1}s`}} className = {` animation-fadeUp w-full flex flex-row gap-[40px]  justify-between bg-[var(--main-white)] p-[30px] rounded-[20px] max-[1000px]:flex-col-reverse max-[1000px]:w-[700px] max-[1000px]:mx-auto max-[767px]:w-full max-[767px]:p-[16px] max-[767px]:gap-[20px] ${index % 2 === 1 ? 'flex-row-reverse':''}`}>
            <div className = 'flex flex-col gap-[15px] max-w-[530px]'>
                <Typography type = 'h3' className = 'text-[18px] max-[767px]:text-[16px]'>{project.projectTitle}</Typography>
                <Typography type = 'body' className = {'text-[14px] leading-[130%] font-normal max-[767px]:text-[12px] '}>{project.projectDesc}</Typography>
                <TechStackList showTechs = {project.projectTechStacks ? project.projectTechStacks : []}/>
                <a href = {project.projectLink} target="_blank" className = {`${customButtonStyles({intent:'default'})} !text-[12px] w-fit mt-[10px]`}>view project <img src = {IconArrow}/></a>
            </div>
            <img src = {project.projectImage} alt = {project.projectTitle} className = 'max-w-[460px] rounded-[10px] max-[1000px]:max-w-full' loading = 'lazy'/>
        </div>

      ))}
    </section>
  )
}

export default WebDevelopment
