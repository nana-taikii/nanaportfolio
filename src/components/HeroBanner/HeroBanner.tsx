import ImgHeroBanner from "../../assets/images/img_heroBanner.webp";
import ImgHeroBannerSp from "../../assets/images/img_heroBanner_sp.png"
import { Typography } from "@heroui/react";

const HeroBanner = () => {
  return (
    <div className = 'w-full'>
      <div className="w-full bg-[var(--main-darkBlue)] overflow-hidden relative ">
        <picture>
          <source srcSet = {ImgHeroBannerSp} media = '(max-width:768px)'/>
           <img
          src={ImgHeroBanner}
          width="100%"
          className='
          float-right h-[300px] max-w-[1200px]
          max-[768px]:h-[auto]
          '
        />
        </picture>
       
        <div className='
        absolute top-1/2 -translate-y-1/2 left-[40px] flex flex-col gap-[15px] max-w-[440px]
        max-[768px]:max-w-[258px]
        max-[767px]:top-[130px]
        max-[550px]:top-[66px]
        max-[768px]:left-[20px]
        max-[768px]:gap-[10px]
        '>
            <Typography type = 'h2' 
            className='
            text-[24px] font-bold text-[var(--text-white)]
            max-[768px]:text-[16px]
            '>Hello, I'm Hope. Glad You're Here.</Typography>
            <Typography type = 'body' className='
            !leading-[130%] text-[var(--text-white)] font-normal text-[16px]
            max-[768px]:text-[12px]
            '>Take a look at my projects, technical skills, and experiences in web development and design.</Typography>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
