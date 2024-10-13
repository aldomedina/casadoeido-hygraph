import FolhasSection from "@/components/FolhasSection";
import RichContent from "@/components/RichContent";
import { getRetiroContent } from "@/services/retiro";
import { TLocales } from "@/types";
import React from "react";

const RetiroPage = async ({ params }: { params: { locale: TLocales } }) => {
  const { title, intro } = await getRetiroContent(params.locale);

  return (
    <div className="pt-16 md:pt-24 flex flex-col gap-20 md:gap-36 ">
      <FolhasSection>
        <h2 className="title text-center my-10 md:my-0 md:mb-10">{title}</h2>
        <RichContent content={intro.raw} />
      </FolhasSection>
    </div>
  );
};

export default RetiroPage;
