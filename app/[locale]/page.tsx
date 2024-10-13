import { getHomeContent } from "@/services";
import { TLocales } from "@/types";
import Image from "next/image";
import HomeCard from "./components/HomeCard";
import ExperiencesCard from "./components/ExperiencesCard";
import ExploreSection from "./components/ExploreSection";

const Home = async ({ params }: { params: { locale: TLocales } }) => {
  const {
    heroImage,
    bannerHouseCard,
    bannerAccomodationsCard,
    retreatsBanner,
    experiencesListItem,
    experienceTitle,
    exploreBanner,
  } = await getHomeContent(params.locale);
  return (
    <div className="flex flex-col  md:gap-20">
      {/* HERO */}
      <section>
        <div className="h-dvh w-full">
          <Image
            src={heroImage.url}
            alt="hero"
            fill
            objectFit="cover"
            objectPosition="top"
          />
        </div>
      </section>
      {/* A CASA & ACOMODAÇÕES */}
      <section>
        <div className="bg-beige container flex full-w flex-col md:flex-row p-5 md:p-10 md:pt-20">
          <HomeCard
            href={"/a-casa"}
            title={bannerHouseCard.title}
            content={bannerHouseCard.description}
            img={bannerHouseCard.image.url}
            imgCustomClass="mb-5"
            className="flex-1 md:mr-10 md:-mt-28 mb-10 md:mb-0"
          />
          <HomeCard
            href={"/acomodacoes"}
            title={bannerAccomodationsCard.title}
            content={bannerAccomodationsCard.description}
            img={bannerAccomodationsCard.image.url}
            imgCustomClass="mb-5"
            className="flex-1"
          />
        </div>
      </section>
      {/* EXPERIENCIAS */}
      <ExperiencesCard list={experiencesListItem} title={experienceTitle} />
      {/* RETIROS */}
      <section className="bg-beige container flex full-w flex-col md:flex-row px-5 md:px-10">
        <HomeCard
          href={"/retiros"}
          title={retreatsBanner.title}
          content={retreatsBanner.description}
          img={retreatsBanner.image.url}
          imgCustomClass="md:flex-1 mb-5 md:mb-0 md:mr-10 -mt-10 md:-mt-20 min-h-50v"
          contentWrapperCustomClass="md:flex-1"
          className="md:flex-row py-0 items-end pb-10"
          contentCustomClass="md:w-3/5"
        />
      </section>
      <ExploreSection
        href="/explore"
        title={exploreBanner.title}
        content={exploreBanner.description}
      />
    </div>
  );
};
export default Home;
