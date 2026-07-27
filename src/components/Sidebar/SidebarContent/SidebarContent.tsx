import React, { useEffect } from 'react'
import ImgProfile from "../../../assets/images/img_profile.png"
import { ButtonGroup, Typography, Button, Link} from '@heroui/react'

import IconSend from "../../../assets/svg/icon_send.svg"
import IconFacebook from "../../../assets/svg/icon_facebook.svg"
import IconLinkedin from "../../../assets/svg/icon_linkedin.svg"
import WorkExperience from '../../WorkExperience/WorkExperience'
import TechStacks from '../../TechStacks/TechStacks'
import ProfileDetails from './ProfileDetails'


const SidebarContent = () => {
  return (
     <div className = 'c-sidebar__content w-full flex flex-col gap-[0px] bg-[var(--main-white)]'>
      <ProfileDetails/>
        <div className = 'flex flex-col gap-15px'>
            <WorkExperience/>
            <TechStacks/>
        </div>
       
     </div>
    
  )
}

export default SidebarContent
