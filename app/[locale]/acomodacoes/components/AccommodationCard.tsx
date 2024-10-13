import { IAccommodationCard } from "@/types";
import React from "react";
import RoomCard from "./RoomCard";

const AccommodationCards = ({
  name,
  description,
  rooms,
}: IAccommodationCard) => {
  return (
    <section className="container">
      <div className="bg-beige md:ml-20 pb-10">
        <div className="w-10/12 md:w-2/5 p-5 md:p-10 mb-5">
          <h3 className="title mb-5">{name}</h3>
          <p className="text-md font-light">{description}</p>
        </div>
        {rooms?.map((room) => (
          <RoomCard key={room.id} {...room} />
        ))}
      </div>
    </section>
  );
};

export default AccommodationCards;
