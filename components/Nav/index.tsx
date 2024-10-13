"use client";
import { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Burguer from "./Burguer";
import ResponsiveLogo from "./ResponsiveLogo";
import LangControls from "./LangControls";

export const menu_items = [
  "a-casa",
  "acomodacoes",
  "experiencias",
  "explore",
  "blog",
  "retiros",
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="z-20 top-0 left-0 w-full fixed bg-white shadow-md uppercase">
      <div
        className={`${
          isOpen ? "h-dvh" : "h-16 md:h-24"
        }  transition-all duration-300 truncate flex flex-col justify-between container`}
      >
        <MobileNav isOpen={isOpen} />
        <div className="flex justify-between items-center h-16 md:h-24">
          {/* LOGO */}
          <div onClick={() => setIsOpen(false)}>
            <ResponsiveLogo />
          </div>

          <ul className="flex items-center">
            <DesktopNav />
            <Burguer isOpen={isOpen} onClick={() => setIsOpen((s) => !s)} />
            <LangControls customClass="text-xxs hidden md:flex" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
