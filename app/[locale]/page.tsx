import { getHomeContent } from "@/services";
import { TLocales } from "@/types";
import Image from "next/image";

const Home = async ({ params }: { params: { locale: TLocales } }) => {
  const { heroImage } = await getHomeContent(params.locale);
  console.log({ heroImage });
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
