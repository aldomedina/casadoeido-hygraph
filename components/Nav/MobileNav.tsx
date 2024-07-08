import React from "react";
import { menu_items } from ".";
import { usePathname } from "next/navigation";
import LangControls from "./LangControls";

const MobileNav = ({ isOpen }: { isOpen: boolean }) => {
  const pathname = usePathname();

  return (
    <div
      className={`duration-300 delay-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      {isOpen && (
        <div className="transition-all flex-1 flex flex-col items-start justify-start">
          {menu_items.map((el) => (
            <button
              key={el}
              className={`uppercase text-mobile-menu mr-5 ${
                pathname === el ? "font-bold" : "font-medium"
              } `}
            >
              {el}
            </button>
          ))}
          <LangControls customClass="text-xxl flex" />
        </div>
      )}
    </div>
  );
};

export default MobileNav;
