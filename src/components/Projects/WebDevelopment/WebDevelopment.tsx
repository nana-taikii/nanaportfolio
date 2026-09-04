import TechStackList from '../../TechStacks/TechStacksList'
import {customButtonStyles } from '../../../styles/CustomButtonStyles'
import IconArrow from "../../../assets/svg/icon_arrow.svg"
import IconLock from "../../../assets/svg/icon_lock.svg"
import ImgFuncars from "../../../assets/images/img_funcars.webp"
import ImgRuffree from "../../../assets/images/img_ruffree.webp"
import ImgSmileTruck from "../../../assets/images/img_smileTruck.webp"
import ImgIsuzu from "../../../assets/images/img_isuzu.webp"
import ImgAmazones from "../../../assets/images/img_amazones.webp"
import ImgIyasheep from  "../../../assets/images/img_iyasheep.webp"
import ImgMatasuke from "../../../assets/images/img_matasuke.webp"
import ImgShareChirashi from "../../../assets/images/img_shareChirashi.webp"
import ImgRopahub from "../../../assets/images/img_ropa.png"
import ImgWarehouse from "../../../assets/images/img_warehouse.png"
import ImgLecs from "../../../assets/images/img_lecs.jpg"


import {Typography} from '@heroui/react'

interface webDevProjectTypes{
    id:number,
    projectTitle:string,
    projectDesc:string,
    projectTechStacks:string[],
    projectImage:string,
    projectLink:string,
    private?:boolean
}

const WebDevelopment = () => {
    const webDevProjects : webDevProjectTypes[] = [
      {
            id: 1,
            projectTitle: 'Lead Engagement and Conversion System (LECS)',
            projectDesc: 'Contributed to the development of LECS (Lead Engagement and Conversion System), focusing on the Reports Module, Scope Management, and Sign Web App, providing users with a more efficient and organized experience throughout the lead engagement process.',            projectTechStacks: ['HTML', 'CSS', 'JS', 'REACT', 'REDUX', 'API INTEGRATION', 'MUI', 'TYPESCRIPT', 'RTK QUERY',],
            projectImage: ImgLecs,
            projectLink: '',
            private:true
        },
       {
            id: 1,
            projectTitle: 'ROPAHUB',
            projectDesc: 'Designed and developed ROPAHUB, a web system that streamlines legal workflows for loan account processing, collateral management, appraisal, and bidding, improving efficiency and simplifying complex processes.',            
            projectTechStacks: ['HTML', 'CSS', 'JS', 'REACT', 'REDUX', 'API INTEGRATION', 'MUI', 'TYPESCRIPT', 'RTK QUERY',],
            projectImage: ImgRopahub,
            projectLink: '',
            private:true
        },
        {
            id: 1,
            projectTitle: 'Warehouse Monitoring System (WMS)',
            projectDesc: 'Designed and developed the User Management and Reports modules for the Warehouse system, focusing on providing administrators with an organized and efficient interface for managing user accounts, roles, and access, while presenting operational data through clear and structured reports.',            
            projectTechStacks: ['HTML', 'CSS', 'JS', 'REACT', 'AXIOS', 'API INTEGRATION', 'MUI', 'TYPESCRIPT',],
            projectImage: ImgWarehouse,
            projectLink: '',
            private:true
        },
         {
            id: 4,
            projectTitle: 'Isuzu Philippines',
            projectDesc: 'Collaborated with co-developers in developing the official Isuzu Philippines website, delivering a clean, responsive, and user-friendly experience with seamless navigation and an engaging presentation of Isuzu vehicles, services, and automotive offerings.',
            projectTechStacks: ['HTML', 'CSS', 'JS', 'PHP'],
            projectImage: ImgIsuzu,
            projectLink: 'https://www.isuzuphil.com/'
        },
        {
            id: 2,
            projectTitle: 'Funcars',
            projectDesc: 'Developed the Funcars website, an automotive platform showcasing vehicle listings and related information through a modern, user-friendly, and seamless browsing experience.',
            projectTechStacks: ['HTML', 'CSS', 'JS', 'PHP', 'WORDPRESS', 'ACF', 'CONTACT F7'],
            projectImage: ImgFuncars,
            projectLink: 'https://funcars.shop/'
        },
        {
            id: 3,
            projectTitle: 'Ruffree',
            projectDesc: 'Developed the official RUFFREE website, a wellness and relaxation brand offering services designed to promote rest and well-being. Focused on creating a clean design, intuitive navigation, and engaging service presentation.',
            projectTechStacks: ['HTML', 'CSS', 'JS', 'PHP', 'WORDPRESS', 'ACF', 'CONTACT F7'],
            projectImage: ImgRuffree,
            projectLink: 'https://ruffree.com/'
        },
        {
            id: 3,
            projectTitle: 'Smile Truck',
            projectDesc: 'Collaborated on the development of the Smile Truck website, an automotive platform focused on showcasing trucks and related vehicle offerings. Contributed to page implementation, responsive layouts, and an improved overall user experience.',
            projectTechStacks: ['HTML', 'CSS', 'JS', 'PHP', 'WORDPRESS', 'ACF', 'CONTACT F7'],
            projectImage: ImgSmileTruck,
            projectLink: 'https://smile-cars.jp/truck/'
        },
       
         {
            id:5,
            projectTitle:'Iyasheep',
            projectDesc: 'Developed the recruitment page for the Iyasheep official website, a Japanese dry head spa and relaxation business. The page focuses on clear job presentation, company information, and a user-friendly application flow for prospective therapists and staff.',            
            projectTechStacks:['HTML', 'CSS', 'JS', 'PHP', 'WORDPRESS', 'CONTACT F7'],
            projectImage:ImgIyasheep ,
            projectLink:'https://iyasheep.com/recruit/'
        },
        {
            id: 6,
            projectTitle: 'Matasuke',
            projectDesc: 'Developed key sections of the Matasuke landing page, a housing-focused website promoting exterior wall tile solutions designed to reduce long-term home maintenance costs. Focused on improving layout flow, content readability, and presenting the benefits of the service clearly to potential homeowners.',
            projectTechStacks: ['HTML', 'CSS', 'JS', 'PHP', 'WORDPRESS', 'CONTACT F7'],
            projectImage: ImgMatasuke,
            projectLink: 'https://www.matasuke.co.jp/lp-2/'
        },
         {
            id: 7,
            projectTitle: 'Share Chirashi',
            projectDesc: 'Contributed to the development of the Share Chirashi website, a digital flyer platform designed to simplify the creation and distribution of promotional materials.',
            projectTechStacks: ['HTML', 'CSS', 'JS', 'PHP', 'WORDPRESS', 'ACF', 'CONTACT F7'],
            projectImage: ImgShareChirashi,
            projectLink: 'https://share-chirashi.com/'
        },
         {
            id:8,
            projectTitle:'Amazones',
            projectDesc:'Collaborated on the development of the Front End User Interface of Amazones, a women only gym fitness platform designed to provide a safe, empowering and accessible space for women to achieve their health goals.',
            projectTechStacks:['HTML', 'CSS', 'JS',],
            projectImage:ImgAmazones,
            projectLink:'https://neeeeeythan.github.io/amazones/'
        }
    ]
  return (
    <section className = 'flex flex-col gap-[10px] h-full'>
      {webDevProjects.map((project, index) => (
        <div key = {project.id} style = {{animationDelay:`${index * 0.1}s`}} className = {` animation-fadeUp w-full flex flex-row gap-[40px]  justify-between bg-[var(--main-white)] p-[30px] rounded-[20px] max-[1000px]:flex-col-reverse max-[1000px]:w-[700px] max-[1000px]:mx-auto max-[767px]:w-full max-[767px]:p-[16px] max-[767px]:gap-[20px] ${index % 2 === 1 ? 'flex-row-reverse':''}`}>
            <div className = 'flex flex-col gap-[15px] max-w-[530px] max-[767px]:gap-[10px]'>
                <Typography type = 'h3' className = 'text-[18px] max-[767px]:text-[16px] !leading-[150%]'>{project.projectTitle}</Typography>
                <Typography type = 'body' className = {'text-[14px] leading-[130%] font-normal max-[767px]:text-[14px] max-[767px]:mb-[10px]'}>{project.projectDesc}</Typography>
                <TechStackList showTechs = {project.projectTechStacks ? project.projectTechStacks : []}/>
                {project.private ? (
                  <span
                    aria-disabled="true"
                    className='flex flex-row items-center justify-center gap-[8px] !text-[12px] w-fit mt-[10px] bg-[var(--main-gray)] p-[5px] rounded-[10px] px-[10px] text-[var(--text-secondary)] font-[500] '
                  >
                    Private <img src = {IconLock } width = '13px'/>
                  </span>
                ) : (
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${customButtonStyles({ intent: 'default' })} !text-[12px] w-fit mt-[10px]`}
                  >
                    View Project
                    <img src={IconArrow} alt="" />
                  </a>
                )}
            </div>
            <img src = {project.projectImage} alt = {project.projectTitle} className = 'max-w-[460px] rounded-[10px] max-[1000px]:max-w-full' loading = 'lazy'/>
        </div>

      ))}
    </section>
  )
}

export default WebDevelopment
