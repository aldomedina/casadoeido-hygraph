"use client";
import React from "react";
import FolhasSection from "@/components/FolhasSection";

const ExperiencesCard = ({
  title,
  list,
}: {
  title: string;
  list: string[];
}) => {
  return (
    <FolhasSection className="mb-20 md:mb-20" hasBtn href="/experiencias">
      <h2 className="text-xl font-regular uppercase mb-10 text-center">
        {title}
      </h2>
      <ul className="text-center">
        {list.map((el, i) => (
          <li key={el} className="font-light mb-3">
            {el}
          </li>
        ))}
      </ul>
    </FolhasSection>
  );
};

export default ExperiencesCard;
