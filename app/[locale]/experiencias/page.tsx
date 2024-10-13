import FolhasSection from "@/components/FolhasSection";
import RichContent from "@/components/RichContent";
import { getExperienciaContent } from "@/services";
import { TLocales } from "@/types";
import React from "react";
import MainCard from "../components/MainCard";

const AcomodacoesPage = async ({
  params,
}: {
  params: { locale: TLocales };
}) => {
  const { title, intro, leftCard, rightCard } = await getExperienciaContent(
    params.locale
  );

  return (
    <div className="pt-16 md:pt-24 flex flex-col gap-20 md:gap-36 pb-20 md:pb-36">
      <FolhasSection>
        <h2 className="title text-center my-10 md:my-0 md:mb-10">{title}</h2>
        <RichContent content={intro.raw} />
      </FolhasSection>
      <section className="bg-beige container flex full-w flex-col md:flex-row p-5 md:p-10 md:pt-20">
        <MainCard
          title={leftCard.title}
          img={leftCard.image.url}
          content={<RichContent content={leftCard.richDescription.raw} />}
          imgCustomClass="mb-5"
          className="flex-1 md:mr-10 md:-mt-32 mb-10 md:mb-0"
        />
        <MainCard
          title={rightCard.title}
          img={rightCard.image.url}
          content={<RichContent content={rightCard.richDescription.raw} />}
          imgCustomClass="mb-5"
          className="flex-1"
        />
      </section>
    </div>
  );
};

export default AcomodacoesPage;
