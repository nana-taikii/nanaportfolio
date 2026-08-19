import IconMenu from "../../assets/svg/icon_menu.svg";
import { Button, } from "@heroui/react";
import {
  customButtonIconStyles,
  customButtonStyles,
} from "../../styles/CustomButtonStyles";
import IconFile from "../../assets/svg/icon_file.svg";
import Resume from "../../assets/files/BANZUELA-DONNA-HOPE-CV.pdf";

const Navbar = ({ buttonFunction }: { buttonFunction: () => void }) => {
  return (
    <div className="bg-[var(--main-white)] py-[10px] pl-[0px] pr-[20px] flex flex-row justify-between w-full">
      <Button
        className={`${customButtonIconStyles({
          intent: "default",
          disabled: false,
        })} max-[767px]:hidden`}
        onClick={buttonFunction}
      >
        <img src={IconMenu} />
      </Button>
      <a
        href={Resume}
        target="_blank"
        className={`${customButtonStyles({ intent: "default", disabled: false })} max-[767px]:ml-auto`}
      >
        Download CV
        <img src={IconFile} />
      </a>
    </div>
  );
};

export default Navbar;
