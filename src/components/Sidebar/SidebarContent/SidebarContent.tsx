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
