import { Typography } from "@heroui/react";

const TechStacksList = ({ showTechs = [] }: { showTechs?: string[] }) => {
  const techStacks = [
    "HTML",
    "CSS",
    "JS",
    "REACT",
    "MUI",
    "TYPESCRIPT",
    "TAILWIND",
    "HERO UI",
    "REDUX",
    "RTK QUERY",
    "AXIOS",
    "WORDPRESS",
    "PHP",
    "ACF",
    "CONTACT F7",
  ];

  const filteredTechStacks =
    showTechs.length === 0
      ? techStacks
      : techStacks.filter((stacks) => showTechs.includes(stacks));

  return (
    <ul className="flex flex-row gap-[6px] flex-wrap w-full">
      {filteredTechStacks.map((stacks) => (
        <li key = {stacks} className="rounded-[8px] bg-[var(--main-lightGray)] py-[10px] px-[8px]">
          <Typography type="body" className="text-[12px] font-[700]">
            {stacks}
          </Typography>
        </li>
      ))}
    </ul>
  );
};

export default TechStacksList;
