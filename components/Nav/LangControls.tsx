import { locales } from "@/lib/constants";
import { usePathname, Link } from "@/navigation";

import { useParams } from "next/navigation";

import React from "react";

const LangControls = ({ customClass }: { customClass: string }) => {
  const pathname = usePathname();
  const { locale } = useParams();

  return (
    <li className={` ${customClass}`}>
      {locales.map((item) => (
        <div
          className={`uppercase mr-2 ${locale == item && "underline"}`}
          key={item}
        >
          <Link href={pathname} locale={item}>
            {item}
          </Link>
        </div>
      ))}
    </li>
  );
};

export default LangControls;
