import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Mainlayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setOpenSidebar((prev) => !prev);
  };

  return (
    <div className="flex flex-row w-full overflow-hidden">
      <Sidebar open={openSidebar} />
      <section
        className={
          !openSidebar
            ? "c-layout flex-grow ml-0  flex flex-col overflow-hidden h-[100dvh] "
            : "c-layout-sidebar flex-grow flex flex-col h-[100dvh] overflow-hidden "
        }
      >
        <Navbar buttonFunction={() => handleToggleSidebar()} />
        <div className="flex-1 overflow-y-auto h-full bg-[var(--main-lightGray)]">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default Mainlayout;