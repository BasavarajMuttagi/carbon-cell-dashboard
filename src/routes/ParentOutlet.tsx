import { useRef, useState } from "react";
import SideBar from "../components/SideBar";
import TopNav from "../components/TopNav";
import { Outlet } from "react-router-dom";
import { ArrowFatLinesRight } from "@phosphor-icons/react";

function ParentOutlet() {
  const commonRef = useRef<HTMLDivElement>(null);
  const [pullTab, setPullTab] = useState(true);
  const hideSideTab = () => {
    setPullTab(false);
  };
  return (
    <div className="h-screen w-full  overflow-x-hidden relative sm:flex sm:justify-start">
      <TopNav commonRef={commonRef} />
      {pullTab && (
        <div
          tabIndex={-1}
          ref={commonRef}
          className="absolute outline-none w-full h-full -z-50 top-0 -translate-y-full duration-300 focus:-translate-y-0 focus:z-50 sm:relative sm:translate-y-0  sm:h-screen sm:max-w-xs sm:w-full sm:z-0 sm:duration-300"
        >
          <SideBar commonRef={commonRef} hideSideTab={hideSideTab} />
        </div>
      )}
      {!pullTab && (
        <div className="w-10 bg-dark-tertiary pt-10 hidden sm:block">
          <ArrowFatLinesRight
            size={32}
            weight="fill"
            className="drop-shadow-lg text-yellow-300 cursor-pointer"
            onClick={() => setPullTab(true)}
          />
        </div>
      )}
      <div className="relative h-full w-full bg-dark-tertiary space-y-5 overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
}

export default ParentOutlet;
