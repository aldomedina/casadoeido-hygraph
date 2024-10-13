import React from "react";
import FolhasSection from "@/components/FolhasSection";
import { TLocales } from "@/types";
import { getExploreContent } from "@/services";
import RichContent from "@/components/RichContent";

const AcomodacoesPage = async ({
  params,
}: {
  params: { locale: TLocales };
}) => {
  const { title, content } = await getExploreContent(params.locale);
  return (
    <div className="pt-16 md:pt-24 flex flex-col gap-20 md:gap-36 ">
      <FolhasSection>
        <h2 className="title text-center my-10 md:my-0 md:mb-10">{title}</h2>
        <RichContent content={content.raw} />
      </FolhasSection>
    </div>
  );
};

export default AcomodacoesPage;
