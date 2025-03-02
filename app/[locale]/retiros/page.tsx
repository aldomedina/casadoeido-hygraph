import FolhasSection from "@/components/FolhasSection";
import RichContent from "@/components/RichContent";
import { getRetiroContent } from "@/services/retiro";
import { TLocales } from "@/types";
import React from "react";

const RetiroPage = async ({ params }: { params: { locale: TLocales } }) => {
  const resp = await getRetiroContent(params.locale);
  console.log({ resp });
  return (
    <div className="pt-16 md:pt-24 flex flex-col gap-20 md:gap-36 ">
      <div className="container grid gap-5 md:gap-8 grid-cols-1 md:grid-cols-2 auto-rows-fr py-5 md:px-20 lg:px-36 md:py-10"></div>
    </div>
  );
};

export default RetiroPage;
