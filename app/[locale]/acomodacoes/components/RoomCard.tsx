import ImageCarousel from "@/components/ImageCarousel";
import RichContent from "@/components/RichContent";
import { IRoomCard } from "@/types";
import React from "react";

const RoomCard = ({ name, features, imageCarousel }: IRoomCard) => {
  return (
    <div className="md:-ml-20 flex flex-col md:flex-row mb-10 p-5 md:p-0">
      <div className="flex-1 h-max mb-5 md:mb-0 md:mr-10">
        {imageCarousel && !!imageCarousel?.length && (
          <ImageCarousel images={imageCarousel} className="h-50v" />
        )}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-medium mb-5">{name}</h3>
        <RichContent content={features.raw} />
      </div>
    </div>
  );
};

export default RoomCard;
