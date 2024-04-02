import {
  ArrowsDownUp,
  Bell,
  BuildingOffice,
  Cube,
  Gear,
  HourglassLow,
  House,
  List,
  Question,
  Wallet,
  X,
} from "@phosphor-icons/react";
import { RefObject } from "react";

function SideBar({ commonRef }: { commonRef: RefObject<HTMLDivElement> }) {
  return (
    <div
      className="flex flex-col justify-between  bg-dark-secondary text-ash-secondary text-sm p-2 text-[20px] font-semibold pb-5 w-full h-full  max-w-full"
    >
      <div className="flex justify-between items-center px-4 py-2">
        <img
          src={"src/assets/logo.png"}
          alt="logo"
          className="w-24 cursor-pointer hidden sm:block"
        />
        <List
          size={40}
          alt="hamburger-icon"
          className="cursor-pointer hidden sm:block sm:invisible"
        />
        <X
          size={24}
          className="cursor-pointer sm:hidden"
          onClick={() => commonRef.current?.blur()}
        />
      </div>
      <ul className="space-y-6 px-5 tracking-wider">
        <li className="flex items-center space-x-4  rounded cursor-pointer hover:text-indicator-primary">
          <House size={24} />
          <span>Home</span>
        </li>
        <li className="flex items-center space-x-4  rounded cursor-pointer hover:text-indicator-primary">
          <BuildingOffice size={24} />
          <span>Organization</span>
        </li>
        <li className="flex items-center space-x-4  rounded cursor-pointer hover:text-indicator-primary">
          <Cube size={24} />
          <span>Assets</span>
        </li>
        <li className="flex items-center space-x-4  rounded cursor-pointer hover:text-indicator-primary">
          <ArrowsDownUp size={24} />
          <span>Trade</span>
        </li>
        <li className="flex items-center space-x-4  rounded cursor-pointer hover:text-indicator-primary">
          <HourglassLow size={24} />
          <span>History</span>
        </li>
        <li className="flex items-center space-x-4  rounded cursor-pointer hover:text-indicator-primary">
          <Wallet size={24} />
          <span>Wallet</span>
        </li>
      </ul>

      <ul className="space-y-6 px-5 tracking-wider">
        <li className="flex items-center space-x-4  rounded cursor-pointer hover:text-indicator-primary">
          <Bell size={24} />
          <span>Notifications</span>
        </li>
        <li className="flex items-center space-x-4  rounded cursor-pointer hover:text-indicator-primary">
          <Question size={24} />
          <span>Support</span>
        </li>
        <li className="flex items-center space-x-4  rounded cursor-pointer hover:text-indicator-primary">
          <Gear size={24} />
          <span>Settings</span>
        </li>
      </ul>

      <div className="h-20 w-full rounded flex items-center space-x-3 px-3  bg-ash-secondary/20">
        <img
          src={"src/assets/avatar.png"}
          alt="avatar"
          className="w-14 h-14 rounded-[14rem]"
        />
        <div className="text-ash-secondary">
          <div className="text-[16px] text-white brightness-90">
            Basavaraj S M
          </div>
          <div className="text-[12px]">basavaraj2770@gmail.com</div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
