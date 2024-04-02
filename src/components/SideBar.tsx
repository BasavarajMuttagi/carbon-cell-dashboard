import {
  ArrowFatLinesLeft,
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
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";


function SideBar({
  commonRef,
  hideSideTab,
}: {
  commonRef: RefObject<HTMLDivElement>;
  hideSideTab: () => void;
}) {
  return (
    <div className="flex flex-col justify-between border border-ash-primary/10  bg-dark-secondary text-ash-secondary text-sm p-2 text-[20px] font-semibold pb-5 w-full h-full  max-w-full">
      <div className="flex justify-between items-center px-4 py-2">
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            className="w-24 cursor-pointer hidden sm:block"
          />
        </Link>
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
        <ArrowFatLinesLeft
          size={32}
          weight="fill"
          className="text-yellow-300 cursor-pointer hidden sm:block"
          onClick={() => hideSideTab()}
        />
      </div>
      <ul className="space-y-6 px-5 tracking-wider">
        <li>
          <NavLink
            to={"/"}
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#2563eb",
                  }
                : { color: "" }
            }
          >
            {" "}
            <li className="flex items-center space-x-4  rounded cursor-pointer hover:text-indicator-primary">
              <House size={24} />
              <span>Home</span>
            </li>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/orgs"}
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#2563eb",
                  }
                : { color: "" }
            }
          >
            {" "}
            <li className="flex items-center space-x-4  rounded cursor-pointer hover:text-indicator-primary">
              <BuildingOffice size={24} />
              <span>Organization</span>
            </li>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/assets"}
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#2563eb",
                  }
                : { color: "" }
            }
          >
            <li className="flex items-center space-x-4  rounded cursor-pointer hover:text-indicator-primary">
              <Cube size={24} />
              <span>Assets</span>
            </li>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/trade"}
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#2563eb",
                  }
                : { color: "" }
            }
          >
            <li className="flex items-center space-x-4  rounded cursor-pointer hover:text-indicator-primary">
              <ArrowsDownUp size={24} />
              <span>Trade</span>
            </li>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/history"}
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#2563eb",
                  }
                : { color: "" }
            }
          >
            <li className="flex items-center space-x-4  rounded cursor-pointer hover:text-indicator-primary">
              <HourglassLow size={24} />
              <span>History</span>
            </li>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/wallet"}
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#2563eb",
                  }
                : { color: "" }
            }
          >
            <li className="flex items-center space-x-4  rounded cursor-pointer hover:text-indicator-primary">
              <Wallet size={24} />
              <span>Wallet</span>
            </li>
          </NavLink>
        </li>
      </ul>

      <ul className="space-y-6 px-5 tracking-wider">
        <li>
          <NavLink
            to={"/notifications"}
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#2563eb",
                  }
                : { color: "" }
            }
          >
            {" "}
            <li className="flex items-center space-x-4  rounded cursor-pointer hover:text-indicator-primary">
              <Bell size={24} />
              <span>Notifications</span>
            </li>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/support"}
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#2563eb",
                  }
                : { color: "" }
            }
          >
            {" "}
            <li className="flex items-center space-x-4  rounded cursor-pointer hover:text-indicator-primary">
              <Question size={24} />
              <span>Support</span>
            </li>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/settings"}
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#2563eb",
                  }
                : { color: "" }
            }
          >
            {" "}
            <li className="flex items-center space-x-4  rounded cursor-pointer hover:text-indicator-primary">
              <Gear size={24} />
              <span>Settings</span>
            </li>
          </NavLink>
        </li>
      </ul>

      <div className="h-20 w-full rounded flex items-center space-x-3 px-3  bg-ash-secondary/20">
        <img
          src={avatar}
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
