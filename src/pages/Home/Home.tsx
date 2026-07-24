import type {ComponentType, SVGProps} from "react";

import {Button, Drawer} from "@heroui/react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Projects from "../../components/Projects/Projects";

export function Home() {
 

  return (
    <>
     <HeroBanner/>
      <Projects/>
    </>
   

  );
}