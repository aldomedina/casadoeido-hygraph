import React from "react";

import FolhasSection from "@/components/FolhasSection";
import RichContent from "@/components/RichContent";
import { getACasaContent } from "@/services";
import { TLocales } from "@/types";
import ImageCarousel from "@/components/ImageCarousel";

const ACasaPage = async ({ params }: { params: { locale: TLocales } }) => {
  const { title, intro, finalCard, imageCarousel } = await getACasaContent(
    params.locale
  );

  return (
    <div className="pt-16 md:pt-24 flex flex-col gap-20 md:gap-36 pb-20 md:pb-36">
      <FolhasSection>
        <h2 className="title text-center my-10 md:my-0 md:mb-10">{title}</h2>
        <RichContent content={intro.raw} />
      </FolhasSection>
      <section className="container md:max-w-65v">
        <ImageCarousel images={imageCarousel} className="h-80v" />
      </section>
      <section>
        <div className="container bg-beige p-5 md:p-10 flex flex-col  md:flex-row md:pt-36">
          <div className="flex-1">
            <div
              className="w-full h-full min-h-60v md:min-h-0 mb-10 md:mb-0 bg-cover bg-center md:-mt-56"
              style={{ backgroundImage: `url(${finalCard.image.url})` }}
            />
          </div>
          <div className="flex-1 md:pl-10">
            <h2 className="title mb-5">{finalCard.title}</h2>
            <RichContent content={finalCard.richDescription.raw} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ACasaPage;
