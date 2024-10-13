"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

interface HomeCardProps {
  img: string;
  title: string;
  content: string;
  href: string;
  className?: string;
  imgCustomClass?: string;
  contentCustomClass?: string;
  contentWrapperCustomClass?: string;
}

const HomeCard = ({
  img,
  title,
  content,
  href,
  className,
  imgCustomClass,
  contentCustomClass,
  contentWrapperCustomClass,
}: HomeCardProps) => {
  const t = useTranslations("common");
  const router = useRouter();
  return (
    <div className={"flex flex-col " + className}>
      <div
        className={"w-full bg-cover bg-center h-40v md:h-60v " + imgCustomClass}
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className={contentWrapperCustomClass}>
        <h2 className="text-xl font-regular uppercase mb-5">{title}</h2>
        <div
          className={"md:w-3/4 text-md font-light mb-5 " + contentCustomClass}
        >
          {content}
        </div>
        {href && (
          <div>
            <button
              onClick={() => router.push(href)}
              className="btn  btn-outline text-xxs py-1 px-2"
            >
              {t("know-more")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeCard;
