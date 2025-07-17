import { MainLogo } from "../icons/MainLogo";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
  return (
    <div className="w-[15vw] h-screen p-5 bg-sidebar-bg border-r border-slate-300">
      <div className=" flex justify-between">
        <div className="text-primary-color ">
          <MainLogo />
        </div>
        <div className="text-black text-5xl font-bold pr-4">Drain</div>
      </div>
      <SidebarItem type="twitter" />
      <SidebarItem type="videos" />
      <SidebarItem type="documents" />
      <SidebarItem type="links" />
      <SidebarItem type="tags" />
    </div>
  );
}
