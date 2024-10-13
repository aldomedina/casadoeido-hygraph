import FolhasSection from "@/components/FolhasSection";
import RichContent from "@/components/RichContent";
import { getAccommodationContent } from "@/services";
import { TLocales } from "@/types";
import React from "react";
import AccommodationCard from "./components/AccommodationCard";

const AcomodacoesPage = async ({
  params,
}: {
  params: { locale: TLocales };
}) => {
  const { title, intro, roomCards } = await getAccommodationContent(
    params.locale
  );

  return (
    <div className="pt-16 md:pt-24 flex flex-col gap-20 pb-20 md:pb-36">
      <FolhasSection>
        <h2 className="title text-center my-10 md:my-0 md:mb-10">{title}</h2>
        <RichContent content={intro.raw} />
      </FolhasSection>

      {roomCards.map((room) => (
        <AccommodationCard key={room.id} {...room} />
      ))}
    </div>
  );
};

export default AcomodacoesPage;
