import React from 'react'
import { Tabs, tv, Typography } from '@heroui/react'
import WorkExperience from '../WorkExperience/WorkExperience'
import TechStacks from '../TechStacks/TechStacks'
import NavTabs from './NavTabs'


const NavTabsSp = () => {
  return (
     <Tabs className="w-full px-[20px]" variant="secondary">
      <Tabs.ListContainer>
        <Tabs.List aria-label="my-works">
          <Tabs.Tab id="my-works" className = 'w-[fit-content] px-[5px] mr-[30px] font-bold'>
            Work
            <Tabs.Indicator className = 'bg-[var(--main-dark)] rounded-[50px]'/>
          </Tabs.Tab>
          <Tabs.Tab id="about-me" className = 'w-[fit-content] px-[5px] mr-[30px] font-bold'>
            About Me
            <Tabs.Indicator className = 'bg-[var(--main-dark)]'/>
          </Tabs.Tab>
        </Tabs.List>
      </Tabs.ListContainer>
      <Tabs.Panel className="pt-4 px-0" id="my-works" >
       <div className = 'mb-[20px]'>
        <Typography type = 'h2' className = 'text-[16px] font-bold'>My Works</Typography>
        <Typography type = 'body' className = 'text-[12px] text-[var(--text-secondary)] font-500 leading-[130%] mt-[8px]'>A showcase of my recent work, highlighting creativity, quality, and impact.</Typography>
       </div>
       <NavTabs/>
      </Tabs.Panel>
      <Tabs.Panel className="pt-4 px-0" id="about-me">
         <div className = 'flex flex-col gap-15px bg-[white] rounded-[12px] overflow-hidden'>
            <WorkExperience/>
            <TechStacks/>
        </div>
      </Tabs.Panel>
    </Tabs>
  )
}

export default NavTabsSp
