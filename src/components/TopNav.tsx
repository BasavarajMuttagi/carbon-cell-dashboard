import { List } from "@phosphor-icons/react";
import { RefObject } from "react";
import { Link } from "react-router-dom";

function TopNav({ commonRef }: { commonRef: RefObject<HTMLDivElement> }) {
  return (
    <nav className="bg-dark-secondary flex justify-between items-center h-[75px] px-5 w-full sm:hidden">
      <Link to={"/"}>
        <img
          src={"src/assets/logo.png"}
          alt="logo"
          className="w-24 cursor-pointer"
        />
      </Link>

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
