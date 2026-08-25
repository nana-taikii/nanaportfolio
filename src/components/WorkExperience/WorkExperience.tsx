import { Typography } from '@heroui/react'
import IconMoriTech from "../../assets/svg/icon_moriTech.svg"
import IconAsialink from "../../assets/svg/icon_asialink.svg"

const WorkExperience = () => {
    const workExperience = [
        {
            id:1,
            jobTitle:'Junior UI/UX Developer',
            company:'Asialink Finance Corporation',
            dateHired:'Nov 2024 - Present',
            companyLogo: IconAsialink
        },
        {
            id:2,
            jobTitle:'Wordpress Developer',
            company:'Mori Tech',
            dateHired:'Sept 2025 - May 2025',
            companyLogo: IconMoriTech
        },
        {
            id:3,
            jobTitle:'Information Developer',
            company:'Asialink Finance Corporation',
            dateHired:'Oct 2024 - Nov 2024',
            companyLogo: IconAsialink
        }

    ]
  return (
    <div className = 'p-[25px] rounded-[20px] bg-[var(--main-lightGray)] flex flex-col gap-[20px] w-full max-[768px]:p-[16px] max-[767px]:bg-[white]'>
        <Typography type = 'h2' className = 'c-section-title'>Work Experience</Typography>
        <ul className = 'flex flex-col gap-[20px] '>
            {workExperience.map((experience) => (
                <li className = 'flex flex-row gap-[8px] items-center '>
                    <div className = 'bg-[var(--main-white)] p-[8px] rounded-[8px]'>
                         <img src={experience.companyLogo} alt={experience.company} />
                    </div>
                    <div className = 'flex flex-col gap-[5px]'>
                        <Typography type = 'body' className = 'text-[14px] font-[500]'>{experience.jobTitle}</Typography>
                        <Typography type = 'body' className = 'text-[12px] font-normal text-[var(--text-secondary)]'>{experience.company}</Typography>
                        <Typography type = 'body' className = 'text-[12px] font-normal text-[var(--text-secondary)]'>{experience.dateHired}</Typography>
                    </div>
                   
                </li>
            ))}
        </ul>
      
    </div>
  )
}

export default WorkExperience
