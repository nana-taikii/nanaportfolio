import React, { useEffect } from "react";
import ImgProfile from "../../../assets/images/img_profile.png";
import { ButtonGroup, Typography, Button, Link } from "@heroui/react";
import { customButtonStyles } from '../../../styles/CustomButtonStyles'


import IconSend from "../../../assets/svg/icon_send.svg";
import IconFacebook from "../../../assets/svg/icon_facebook.svg";
import IconLinkedin from "../../../assets/svg/icon_linkedin.svg";

const ProfileDetails = () => {
  return (
    <div className="
    flex flex-col gap-[20px] w-full items-center justify-center
    max-[768px]:flex-row
    max-[768px]:pt-[30px] pb-[20px] px-[20px]
    max-[768px]:justify-start
    
    ">
      <img
        src={ImgProfile}
        alt="Donna Hope B. Banzuela"
        loading="lazy"
        width="120px"
        height="120px"
        className='
            max-[768px]:max-w-[90px]
        '
      />
      <div className="
      flex flex-col gap-[20px]
       max-[768px]:gap-[15px]
       max-[768px]:!flex-1
      ">
        <div className="
        flex flex-col gap-[10px]
        max-[768px]:gap-[8px]

        ">
          <Typography type="h1" className="
          text-[18px] font-bold
           max-[768px]:text-[16px]
          ">
            Donna Hope B. Barro
          </Typography>
          <Typography
            type="body"
            className="
            text-[14px] text-[var(--text-secondary)]
             max-[768px]:text-[12px]
            "
          >
            I'm a UI/UX Developer and Designer
          </Typography>
        </div>
        <ButtonGroup className="gap-[8px] shrink-0 w-full justify-start">
          <Button className={`c-dark-btn w-[fit-content] flex-start`}>
            message
            <img src={IconSend} />
          </Button>
          <Link className="c-icon__link">
            <img src={IconFacebook} alt="" />
          </Link>
          <Link className="c-icon__link ">
            <img src={IconLinkedin} alt="" />
          </Link>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default ProfileDetails;
