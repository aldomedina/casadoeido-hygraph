"use client";
import { useRouter } from "@/navigation";
import { useTranslations } from "next-intl";

import React from "react";

interface FolhasSectionProps {
  children: React.ReactNode;
  hasBtn?: boolean;
  href?: string;
  className?: string;
}

const FolhasSection = ({
  children,
  hasBtn,
  href,
  className,
}: FolhasSectionProps) => {
  const router = useRouter();
  const t = useTranslations("common");

  return (
    <section className={"bg-folhas " + className}>
      <div className="container p-5 md:p-10">
        <div className="bg-white p-5 md:p-20  mx-auto lg:w-3/5 mb-10">
          {children}
        </div>
        {hasBtn && href && (
          <div>
            <button
              onClick={() => router.push(href)}
              className="btn btn-white mx-auto text-xxs block"
            >
              {t("know-more")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FolhasSection;
