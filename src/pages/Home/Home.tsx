import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Projects from "../../components/Projects/Projects";
import { useScreenSize } from "../../utils/useScreenSize";
import ProjectsSp from "../../components/Projects/ProjectsSp";

export function Home() {
  const { windowWidth } = useScreenSize();

  return (
    <>
      <HeroBanner />
      {windowWidth >= 768 ? (<Projects />) : <ProjectsSp/>}
    </>
  );
}
