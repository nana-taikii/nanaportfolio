import { useParams } from "react-router-dom";
import IconBackArrow from "../../../../assets/svg/icon_backArrow.svg";
import { Typography } from "@heroui/react";
import { uiuxProjects } from "../UIUXProjectList";
import { useNavigate } from "react-router-dom";
import ToolsList from "../../../Tools/ToolsList";

const UIUXProjectDesc = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const projectDesc = uiuxProjects.find((project) => project.id === projectId);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <section className="flex flex-col items-center justify-center pt-[70px] px-[30px] relative w-full max-w-[1500px] mx-auto max-[767px]:pt-[55px] max-[767px]:px-[16px]">
      <div className="w-full h-full ">
        <div
          className="flex flex-row gap-[15px] items-center absolute top-[27px] left-[25px] cursor-pointer"
          onClick={handleBack}
        >
          <img src={IconBackArrow} alt="back" className = 'max-[767px]:w-[20px]'/>
          <Typography className="text-[var(--text-secondary)] font-bold max-[767px]:text-[12px]">
            Back
          </Typography>
        </div>
        <div className="bg-[var(--main-white)] p-[40px] rounded-[20px] flex flex-col gap-[30px] items-start animation-fadeLeft max-[767px]:p-[16px] max-[767px]:rounded-[12px]">
          <img
            src={projectDesc?.projectImageBanner}
            className="w-full rounded-[20px] max-[767px]:rounded-[12px]"
            loading="lazy"
          />
          <div className=" flex flex-col gap-[30px]  w-full max-w-[1100px] mx-auto mt-[20px]  ">
            <div className="flex flex-row gap-[40px] max-[767px]:flex-col max-[767px]:gap-[20px]">
              <div>
                <Typography type="h2" className="font-[900] text-[20px] max-[767px]:text-[16px]">
                  {projectDesc?.projectTitle}
                </Typography>
                <Typography
                  type="body"
                  className="max-w-[650px] leading-[130%] mt-[15px] max-[767px]:text-[12px]"
                >
                  {projectDesc?.projectOverview}
                </Typography>
              </div>
              <div className="bg-[var(--main-gray)] p-[15px] rounded-[10px] flex flex-col gap-[25px] h-full w-[fit-content] min-w-[326px] max-[767px]:min-w-0 max-[767px]:w-full max-[767px]:gap-[20px]">
                <div className="flex flex-col gap-[8px]">
                  <Typography
                    type="body"
                    className="leading-[130%] font-medium text-[var(--text-secondary)] text-[14px] max-[767px]:text-[12px]"
                  >
                    Designed for
                  </Typography>
                  <Typography
                    type="body"
                    className="leading-[130%] text-[14px] font-bold max-[767px]:text-[12px]"
                  >
                    {projectDesc?.projectDesignedFor}
                  </Typography>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <Typography
                    type="body"
                    className="leading-[130%] font-medium text-[var(--text-secondary)] text-[14px] max-[767px]:text-[12px]"
                  >
                    Role
                  </Typography>
                  <Typography
                    type="body"
                    className="leading-[130%] text-[14px] font-bold max-[767px]:text-[12px]"
                  >
                    {projectDesc?.projectRole}
                  </Typography>
                </div>
              </div>
            </div>
            <div >
              <Typography type="h3" className="text-[16px] font-bold mb-[15px] max-[767px]:text-[12px]">
                Tools
              </Typography>
              <ToolsList showTools={projectDesc?.projectTools} />
            </div>
          </div>

          <img
            src={projectDesc?.projectMockUp}
            className="rounded-[20px] w-full max-w-[1100px] mx-auto max-[767px]:rounded-[12px]"
          />
        </div>
      </div>
    </section>
  );
};

export default UIUXProjectDesc;
