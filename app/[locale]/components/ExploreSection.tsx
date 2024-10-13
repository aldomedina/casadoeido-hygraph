"use client";
import { useRouter } from "@/navigation";
import { useTranslations } from "next-intl";

import React from "react";

const ExploreSection = ({
  title,
  content,
  href,
}: {
  title: string;
  content: string;
  href: string;
}) => {
  const t = useTranslations("common");
  const router = useRouter();
  return (
    <section className="container flex full-w flex-col md:flex-row px-5 pt-20 pb-36 md:px-10">
      <div className="md:w-6/12 text-center mx-auto">
        <h2 className="title mb-5">{title}</h2>
        <p className="text-md font-light mb-5">{content}</p>
        <button
          onClick={() => router.push(href)}
          className="btn btn-outline text-xxs py-1 px-2"
        >
          {t("know-more")}
        </button>
      </div>
    </section>
  );
};

export default ExploreSection;
