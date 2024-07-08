import { getHomeContent } from "@/services";
import { TLocales } from "@/types";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Home = async ({ params }: { params: { locale: TLocales } }) => {
  // const t = useTranslations("home");
  const { heroImage } = await getHomeContent(params.locale);

  return (
    <div>
      <div className="h-dvh w-full">
        <Image
          src={heroImage.url}
          alt="hero"
          fill
          objectFit="cover"
          objectPosition="top"
        />
      </div>
    </div>
  );
};
export default Home;
