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

export interface IRoomCard {
  id: string;
  name: string;
  features: any;
  imageCarousel: IImage[];
}

export interface IAccommodationCard {
  id: string;
  name: string;
  description: string;
  rooms: IRoomCard[];
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

export interface IExperienciaContent {
  title: string;
  intro: any;
  leftCard: IBannerCard;
  rightCard: IBannerCard;
}

export interface IExploreContent {
  title: string;
  content: any;
}

export interface IAccommodationContent {
  title: string;
  intro: any;
  roomCards: IAccommodationCard[];
}

export interface IBlogContent {
  id: string;
  title: string;
  dateOfPublication: string;
  backgroundImage: IImage;
  post: any;
}

export interface ISimplePageContent {
  title: string;
  content: any;
}

export interface IRetiroWorkshopLocalized {
  title: string;
  subtitle: string;
  duration: string;
  program: any;
}

export interface IRetiroWorkshopNonLocalized {
  url: string;
  image: IImage;
  startDate?: Date;
  endDate?: Date;
  externalUrl?: string;
}

export type IRetiroContent = IRetiroWorkshopLocalized &
  IRetiroWorkshopNonLocalized;
