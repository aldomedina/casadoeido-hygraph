import React from "react";
import { menu_items } from ".";
import { usePathname } from "next/navigation";

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
        </div>
      )}
    </div>
  );
};

export default MobileNav;
