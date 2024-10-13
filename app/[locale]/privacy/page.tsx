import RichContent from "@/components/RichContent";
import { getSimplePageContent } from "@/services/simplePage";
import { TLocales } from "@/types";
import React from "react";

const Privacy_ENTRY_ID = "cm287f1h71nyv07uq81k1oaje";

const PrivacyPage = async ({ params }: { params: { locale: TLocales } }) => {
  const { title, content } = await getSimplePageContent(
    params.locale,
    Privacy_ENTRY_ID
  );

  return (
    <article className="container pt-24 md:pt-36 flex flex-col">
      <h2 className="title text-center my-10 md:my-0 md:mb-10">{title}</h2>
      <RichContent content={content.raw} />
    </article>
  );
};

export default PrivacyPage;
