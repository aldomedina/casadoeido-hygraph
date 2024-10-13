import { usePathname } from "next/navigation";
import { menu_items } from ".";

import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

const DesktopNav = () => {
  const pathname = usePathname();
  const t = useTranslations("nav");
  return (
    <>
      {menu_items.map((item, i) => (
        <li
          key={item + i}
          className={`${
            pathname.includes(item) && "opacity-50"
          } text-xs mr-5 hidden md:block hover:underline`}
        >
          <Link href={`/${item}`}>{t(item)}</Link>
        </li>
      ))}
      <li className="mr-10 md:mr-5">
        <button className={"btn btn-outline text-xs"}>{t("book-now")}</button>
      </li>
    </>
  );
};

export default DesktopNav;
