import { useRef } from "react";
import SideBar from "../components/SideBar";
import TopNav from "../components/TopNav";
import DashBoardContent from "../components/DashBoardContent";

function DashboardLayout() {
  const commonRef = useRef<HTMLDivElement>(null);
  return (
    <div className="h-screen w-full  overflow-x-hidden relative sm:flex sm:justify-start">
      <TopNav commonRef={commonRef} />
      <div
        tabIndex={-1}
        ref={commonRef}
        className="absolute outline-none w-full h-full -z-50 top-0 -translate-y-full duration-300 focus:-translate-y-0 focus:z-50 sm:relative sm:translate-y-0  sm:h-screen sm:max-w-xs sm:w-full sm:z-0"
      >
        <SideBar commonRef={commonRef} />
      </div>
      <DashBoardContent />
    </div>
  );
}

export default DashboardLayout;
