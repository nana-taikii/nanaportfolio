import React, { useEffect } from 'react'
import ImgProfile from "../../assets/images/img_profile.png"
import { ButtonGroup, Typography, Button, Link} from '@heroui/react'

import IconSend from "../../assets/svg/icon_send.svg"
import IconFacebook from "../../assets/svg/icon_facebook.svg"
import IconLinkedin from "../../assets/svg/icon_linkedin.svg"
import WorkExperience from '../WorkExperience/WorkExperience'
import TechStacks from '../TechStacks/TechStacks'
import SidebarContent from './SidebarContent/SidebarContent'

const Sidebar = ({open}:{open:boolean}) => {

    useEffect(() => {
    }, [open])

  return (
    <section className = 'c-sidebar '>
           <SidebarContent/>

    </section>
  )
}

export default Sidebar
