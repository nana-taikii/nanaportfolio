import React from "react";
import ImgHeroBanner from "../../assets/images/img_heroBanner.webp";
import { Typography } from "@heroui/react";
import NavTabs from "../NavTabs/NavTabs";

const HeroBanner = () => {
  return (
    <div className = 'w-full'>
      {/* <div className = 'w-full bg-[var(--main-darkBlue)] overflow-hidden'>
            <img src={ImgHeroBanner} width = 'auto' style = {{float:'right', maxHeight:'260px'}}/>

        </div> */}
      <div className="w-full bg-[var(--main-darkBlue)] overflow-hidden relative ">
        <img
          src={ImgHeroBanner}
          width="100%"
          style={{ float: "right", height: "300px", maxWidth: "1200px" }}
        />
        <div className = 'absolute top-1/2 -translate-y-1/2 left-[40px] flex flex-col gap-[15px] max-w-[440px]'>
            <Typography type = 'h2' className = 'text-[24px] font-bold text-[var(--text-white)]'>Hello, I'm Glad You're Here.</Typography>
            <Typography type = 'body' className = '!leading-[130%] text-[var(--text-white)] font-normal text-[16px]'>Take a look at my projects, technical skills, and experiences in web development and design</Typography>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
