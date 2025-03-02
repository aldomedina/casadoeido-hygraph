// No 'use client' directive
import RichContent from "@/components/RichContent";
import { formatDate } from "@/lib/utils";
import { getRetiroContentByUrl } from "@/services/retiro";
import { TLocales } from "@/types";
import { notFound } from "next/navigation";
import React from "react";

export default async function RetiroPage({
  params,
}: {
  params: { locale: TLocales; slug: string };
}) {
  const locale = params.locale as TLocales;
  const slug = params.slug;

  const resp = await getRetiroContentByUrl(locale, slug);
  console.log(resp.program);
  return (
    <div className="pt-16 md:pt-24 flex flex-col">
      <section className="p-5 md:p-10 mb-6 md:mb-12">
        <div className="container bg-beige flex flex-col md:flex-row min-h-80v md:min-h-70v p-0 ">
          <div
            className="bg-center bg-cover flex-1 md:flex-none md:w-7/12"
            style={{ backgroundImage: `url(${resp.image.url})` }}
          />
          <div className="p-3 md:p-6 flex  flex-col justify-between">
            <div className="mb-10">
              <h1 className="title font-normal text-xxl md:text-xxxl mb-1 md:mb-3">
                {resp.title}
              </h1>
              {resp.subtitle && (
                <h2 className="title font-extralight text-xxl md:text-xxxl">
                  {resp.subtitle}
                </h2>
              )}
            </div>
            <div>
              <div className="md:text-xl">
                <p className="md:mb-10">
                  <span className="mr-5">
                    {resp.startDate && formatDate(resp.startDate)}{" "}
                    {resp.endDate && `- ${formatDate(resp.endDate)}`}
                  </span>
                  <br className="hidden md:block" />
                  {resp.duration && (
                    <span className="uppercase font-light">
                      {resp.duration}
                    </span>
                  )}
                </p>
                {resp.price && <p className="mb-5 md:mb-1">{resp.price} €</p>}
              </div>

              {resp.externalUrl && (
                <a
                  href={resp.externalUrl}
                  className="btn btn-outline text-xxs md:text-xs px-8 py-1.5"
                >
                  BOOK NOW
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
      {resp.program && (
        <section className="mb-10 md:mb-20">
          <div className="container p-0">
            <div className="p-5 md:p-0 md:w-5/12 ">
              <RichContent content={resp.program.raw} />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
