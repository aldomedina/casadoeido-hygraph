import { formatDate } from "@/lib/utils";
import { Link } from "@/navigation";
import { IRetiroContent } from "@/types";
import { useTranslations } from "next-intl";
import React from "react";

const RetiroCard = ({
  id,
  title,
  subtitle,
  image,
  duration,
  url,
  startDate,
  endDate,
  price,
}: IRetiroContent) => {
  const t = useTranslations("common");
  console.log(startDate);
  return (
    <div key={id} className="flex flex-col">
      <div className="relative">
        <div
          className="min-h-55v md:min-h-50v w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image.url})` }}
        />
      </div>
      <div className="p-3 md:p-5 bg-beige">
        <div className="mb-10">
          <h2 className="title uppercase">{title}</h2>
          <h3 className="title font-extralight uppercase">{subtitle}</h3>
        </div>
        <div>
          <div className="flex mb-2">
            <span className="mr-5">
              {startDate && formatDate(startDate)}{" "}
              {endDate && `- ${formatDate(endDate)}`}
            </span>
            {duration && (
              <span className="uppercase font-extralight">{duration}</span>
            )}
          </div>
          <div className="flex text-xxs md:text-xs">
            <Link href={`/retiros/${url}`}>
              <button className="btn btn-outline mr-2">{t("know-more")}</button>
            </Link>
            <a href={url}>
              <button className="btn btn-outline ">{t("book-now")}</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetiroCard;
