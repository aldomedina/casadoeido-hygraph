export type TLocales = "en" | "pt";
export interface IImage {
  id: string;
  height: number;
  width: number;
  url: string;
}

interface IBannerCard {
  title: string;
  description: string;
  richDescription: any;
  buttonText: string;
  image: IImage;
}

interface IExploreBanner {
  buttonText: string;
  description: string;
  id: string;
  image: IImage | null;
  title: string;
}

export interface IHomeContent {
  heroImage: IImage;
  bannerHouseCard: IBannerCard;
  bannerAccomodationsCard: IBannerCard;
  experienceTitle: string;
  experiencesListItem: string[];
  exploreBanner: IExploreBanner;
  retreatsBanner: IBannerCard;
}

export interface IACasaContent {
  title: string;
  intro: any;
  imageCarousel: IImage[];
  finalCard: IBannerCard;
}
