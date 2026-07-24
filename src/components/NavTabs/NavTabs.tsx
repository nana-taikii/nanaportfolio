import React, {useState} from 'react'
import { Tabs, tv } from '@heroui/react'
import UIUXProjects from '../Projects/UIUXProjects/UIUXProjects'
import WebDevelopment from '../Projects/WebDevelopment/WebDevelopment'
import GraphicDesigns from '../Projects/GraphicDesigns/GraphicDesigns'
import { useNavigate, useSearchParams } from 'react-router'


const customTabStyles = tv({
    base:'rounded-[8px] text-[var(--text-black)] text-[12px] font-bold !w-fit whitespace-nowrap bg-[var(--main-white)] shadow-[var(--box-shadow1)] data-[selected=true]:text-[var(--text-white)] data-[selected=true]:![background:var(--gradient-blue)] ',
    variants:{
        intent:{
            default:'',
            error:'',
            success:'',
            warning:''
        },
        disabled:{
            true:''
        }
    },
    defaultVariants:{
        intent:'default',
        disabled:false
    }
})

const NavTabs = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [currentTab, setCurrentTab] = useState(searchParams.get('projects') || 'uiux')

    const handleOpenProjectTabs = (projectTab:string) => {
        setCurrentTab(projectTab)
        const tabParams = new URLSearchParams(searchParams);
        tabParams.set('projects', `${projectTab}`);
        navigate(`?${tabParams.toString()}`, {replace:true})
    }


  return (
    <Tabs className = 'w-full !gap-[20px]' selectedKey = {currentTab} onSelectionChange={(key) => handleOpenProjectTabs(key as string)}>
        <Tabs.ListContainer className = '!p-0 !rounded-0 bg-transparent rounded-[0px]'>
            <Tabs.List aria-lable = '' className = '!p-0 !rounded-0 gap-[10px] !pb-[5px]'>
                <Tabs.Tab key = 'uiux' id = 'uiux' className={customTabStyles({intent:'default'})} onClick = {() => handleOpenProjectTabs('uiux')}>
                    UI/UX Design
                </Tabs.Tab>
                 <Tabs.Tab key = 'webDevelopment' id = 'webDevelopment' className={customTabStyles({intent:'default'})} onClick = {() => handleOpenProjectTabs('webDevelopment')}>
                    Web Development
                </Tabs.Tab>
                 <Tabs.Tab key = 'graphicDesigns' id = 'graphicDesigns' className={customTabStyles({intent:'default'})} onClick = {() => handleOpenProjectTabs('graphicDesigns')}>
                    Graphic Designs
                </Tabs.Tab>
                 {/* <Tabs.Tab id = 'arts' className={customTabStyles({intent:'default'})}>
                    Arts
                </Tabs.Tab> */}
            </Tabs.List>
        </Tabs.ListContainer>
        <Tabs.Panel id = 'uiux' className = ' w-full p-0 max-w-[1500px] mx-auto h-full' >
            <UIUXProjects/>
        </Tabs.Panel>
        <Tabs.Panel id = 'webDevelopment' className = ' w-full p-0 max-w-[1100px] mx-auto h-full' >
            <WebDevelopment/>
        </Tabs.Panel>
        <Tabs.Panel id = 'graphicDesigns' className = 'w-full p-0 max-w-[1100px] mx-auto h-full' >
           <GraphicDesigns/>
        </Tabs.Panel>
         {/* <Tabs.Panel id = 'arts'>
            <p>tab3</p>
        </Tabs.Panel> */}
    </Tabs>
  )
}

export default NavTabs
