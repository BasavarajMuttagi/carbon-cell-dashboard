import { List } from "@phosphor-icons/react";
import { RefObject } from "react";

function TopNav({ commonRef }: { commonRef: RefObject<HTMLDivElement> }) {
  return (
    <nav className="bg-dark-secondary flex justify-between items-center h-[75px] px-5 w-full sm:hidden">
      <img
        src={"src/assets/logo.png"}
        alt="logo"
        className="w-24 cursor-pointer"
      />
      {/* <div className="flex  items-center text-ash-secondary space-x-12">
        <div className="relative ">
          <input
            type="text"
            className="px-10 p-1 rounded outline-none bg-dark-tertiary"
            placeholder="Search"
          />
          <MagnifyingGlass size={24} className="absolute top-1 left-2" />
        </div>
        <Bell size={24} className="cursor-pointer" />
        <img
          src={"src/assets/avatar.png"}
          alt="avatar"
          className="w-10 h-10 rounded-[10rem] cursor-pointer"
        />
      </div> */}
      <List
        size={40}
        alt="hamburger-icon"
        className="cursor-pointer text-ash-secondary"
        onClick={() => commonRef.current?.focus()}
      />
    </nav>
  );
}

export default TopNav;
