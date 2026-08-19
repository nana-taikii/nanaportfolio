import { useEffect } from 'react'
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
