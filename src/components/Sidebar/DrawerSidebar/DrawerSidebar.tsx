import {  Drawer } from "@heroui/react";
import SidebarContent from "../SidebarContent/SidebarContent";

export function DrawerSidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  return (
    <Drawer isOpen={isOpen} onOpenChange={() => setIsOpen(false)}>
      <Drawer.Backdrop>
        <Drawer.Content placement="left" className = 'max-w-[400px] w-full overflow-hidden h-full '>
          <SidebarContent />
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
}
