import React from 'react'
import { Typography } from '@heroui/react'
import ToolsList from '../../Tools/ToolsList'
import ImgTakoyaki1 from "../../../assets/images/img_takoyaki1.png"
import ImgTakoyaki2 from "../../../assets/images/img_takoyaki2.png"
import ImgTakoyaki3 from "../../../assets/images/img_takoyaki3.png"
import ImgTakoyaki4 from "../../../assets/images/img_takoyaki4.png"
import ImgTakoyaki5 from "../../../assets/images/img_takoyaki5.png"
import ImgTMJ1 from "../../../assets/images/img_tmj1.png"
import ImgTMJ2 from "../../../assets/images/img_tmj2.png"
import ImgTMJ3 from "../../../assets/images/img_tmj3.png"


const GraphicDesigns = () => {
  return (
    <div className = 'w-full'>
      
      <section className = 'flex flex-row gap-[50px] w-full p-[30px] bg-[var(--main-white)] rounded-[20px] items-center '>
        <img src = {ImgTakoyaki1} className = 'shadow-[var(--box-shadow2)] max-w-[346px]' loading = 'lazy'/>
        <div className = 'flex flex-col gap-[15px] max-w-[550px]'>
            <Typography type = 'h2' className = 'text-[20px] font-[900]'>TK TAKOYAKI</Typography>
            <Typography type = 'body' className = 'text-[14px] leading-[130%] bg-[var(--main-lightGray)] p-[15px] rounded-[8px]'>
                Used a tako character and Japan scenery elements to create posters for the newly opened branch of TK takoyaki.
            </Typography>
            <Typography type = 'body' className = 'text-[14px] leading-[130%] font-[500] mt-[5px]'>Tools Used:</Typography>
            <ToolsList showTools = {["Figma", "Affinity"]}/>
        </div>
      </section>
      <div className = 'flex flex-row w-[fit-content] h-full items-center justify-between mt-[20px]'>
        <div className = 'flex flex-row gap-[52px] py-[33px] px-[70px] bg-[var(--main-dark)] w-[fit-content]  items-center justify-center'>
            <img src = {ImgTakoyaki2} className = 'shadow-[var(--box-shadow2)] max-w-[130px] h-[auto] w-[auto]' loading = 'lazy'/>
            <img src = {ImgTakoyaki3} className = 'shadow-[var(--box-shadow2)]  max-w-[130px] h-[auto] w-[auto]' loading = 'lazy'/>
        </div>
        <div className = 'flex flex-row gap-[50px] py-[33px] x] w-full px-[70px]'>
            <img src = {ImgTakoyaki4} className = 'shadow-[var(--box-shadow2)] max-w-[220px] h-[auto]' loading = 'lazy'/>
            <img src = {ImgTakoyaki5} className = 'shadow-[var(--box-shadow2)] max-w-[220px] h-[auto]' loading = 'lazy'/>
        </div>
      </div>
     <section className = 'mt-[20px] flex flex-row gap-[50px] w-full p-[30px] bg-[var(--main-white)] rounded-[20px] items-center'>
        <div className = 'flex flex-col gap-[15px] '>
            <Typography type = 'h2' className = 'text-[20px] font-[900]'>T.M.J Tutoring</Typography>
            <Typography type = 'body' className = 'text-[14px] leading-[130%] bg-[var(--main-lightGray)] p-[15px] rounded-[8px]'>
                Used a tako character and Japan scenery elements to create posters for the newly opened branch of TK takoyaki
            </Typography>
            <Typography type = 'body' className = 'text-[14px] leading-[130%] font-[500] mt-[5px]'>Tools Used:</Typography>
            <ToolsList showTools = {["Figma", "Affinity"]}/>
            <div className = 'flex flex-row px-[20px] py-[20px] gap-[30px] items-center  justify-center' >
                <img src = {ImgTMJ2} className = 'shadow-[var(--box-shadow2)] max-w-[250px]' loading = 'lazy'/>
                <img src = {ImgTMJ3} className = 'shadow-[var(--box-shadow2)] max-w-[250px]' loading = 'lazy'/>
            </div>
        </div>
         <img src = {ImgTMJ1} className = 'shadow-[var(--box-shadow2)] w-full max-w-[400px] h-[auto]' loading = 'lazy'/>
      </section>
    </div>
  )
}
 
export default GraphicDesigns
