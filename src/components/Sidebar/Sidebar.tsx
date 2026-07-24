import React, { useEffect } from 'react'
import ImgProfile from "../../assets/images/img_profile.png"
import { ButtonGroup, Typography, Button, Link} from '@heroui/react'

import IconSend from "../../assets/svg/icon_send.svg"
import IconFacebook from "../../assets/svg/icon_facebook.svg"
import IconLinkedin from "../../assets/svg/icon_linkedin.svg"
import WorkExperience from '../WorkExperience/WorkExperience'
import TechStacks from '../TechStacks/TechStacks'

const Sidebar = ({open}:{open:boolean}) => {

    useEffect(() => {
    }, [open])

  return (
    <section className = 'c-sidebar '>
       
     <div className = 'c-sidebar__content w-full flex flex-col gap-[25px]'>
        <div className = 'flex flex-col gap-[20px] w-full items-center justify-center'>
            <img src={ImgProfile} alt="Donna Hope B. Banzuela" loading = 'lazy' width = '120px' height = '120px'/>
            <div className = 'flex flex-col gap-[10px]'>
                <Typography type = 'h1' className = 'text-[18px] font-bold'>Donna Hope B. Barro</Typography>
                <Typography type = 'body' className = 'text-[14px] text-[var(--text-secondary)]'>I'm a UI/UX Developer and Designer</Typography>
            </div>
            <ButtonGroup className = 'gap-[8px] shrink-0 w-full'>
                <Button className = 'c-dark-btn'>message<img src = {IconSend}/></Button>
                <Link className = 'c-icon__link'><img src={IconFacebook} alt="" /></Link>
                <Link className = 'c-icon__link '><img src={IconLinkedin} alt="" /></Link>
            </ButtonGroup>
        </div>
        <div className = 'flex flex-col gap-15px'>
            <WorkExperience/>
            <TechStacks/>
        </div>
       
     </div>
    </section>
  )
}

export default Sidebar
