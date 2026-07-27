import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { DrawerSidebar } from "../components/Sidebar/DrawerSidebar/DrawerSidebar";
import { useScreenSize } from "../utils/useScreenSize";

const Mainlayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openSidebarDrawer, setOpenSidebarDrawer] = useState(false);
  const {windowWidth} = useScreenSize()
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleToggleSidebar = () => {
    setOpenSidebar((prev) => !prev);
  };

  const handleToggleSidebarDrawer = () => {
    console.log("darwer");
    setOpenSidebarDrawer((prev) => !prev);
  };

  // useEffect(() => {
  //   const handleResizeScreen = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleResizeScreen);

  //   return () => {
  //     window.removeEventListener("resize", handleResizeScreen);
  //   };
  // }, []);

  return (
    <div className="flex flex-row w-full overflow-hidden">
      <Sidebar open={openSidebar} />
      <div className="c-sidebar__drawer">
        <DrawerSidebar
          isOpen={openSidebarDrawer}
          setIsOpen={setOpenSidebarDrawer}
        />
      </div>
      <section
        className={
          !openSidebar
            ? "c-layout flex-grow ml-0  flex flex-col overflow-hidden h-[100dvh] "
            : "c-layout-sidebar flex-grow flex flex-col h-[100dvh] overflow-hidden "
        }
      >
        <Navbar
          buttonFunction={
            windowWidth <= 1200
              ? () => handleToggleSidebarDrawer()
              : () => handleToggleSidebar()
          }
        />
        <div className="flex-1 overflow-y-auto h-full bg-[var(--main-lightGray)]">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default Mainlayout;
