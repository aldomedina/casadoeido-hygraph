import { NEXT_HYGRAPH_ENDPOINT } from "@/lib/constants";
import { AnyObject, deepMergeObjects } from "@/lib/utils";
import { IRetiroContent, TLocales } from "@/types";
import { GraphQLClient, gql } from "graphql-request";

//@ts-ignore
const graphQLClient = new GraphQLClient(NEXT_HYGRAPH_ENDPOINT);

const getRetiroContent = async (
  locales: TLocales = "en"
): Promise<IRetiroContent[]> => {
  const query = gql`
    query RetiroWorkshop {
      nonLocalizedData: retiroWorkshops(
        locales: en
        orderBy: publishedAt_DESC
      ) {
        url
        image {
          id
          height
          width
          url
        }
        startDate
        endDate
        externalUrl
      }
      localizedData: retiroWorkshops(locales: ${locales}, orderBy: publishedAt_DESC) {
        title
        subtitle
        duration
      }
    }
  `;

  const resp: { localizedData: AnyObject; nonLocalizedData: AnyObject } =
    await graphQLClient.request(query);
  const response: IRetiroContent[] = deepMergeObjects(
    resp.nonLocalizedData,
    resp.localizedData
  );

  return response;
};

const getRetiroContentByUrl = async (
  locales: TLocales = "en",
  url: string
): Promise<IRetiroContent> => {
  const query = gql`
    query RetiroWorkshopByUrl {
  nonLocalizedData: retiroWorkshop(where: {url: ${url}}, locales: en) {
    id
    url
    image {
      id
      height
      width
      url
    }
    startDate
    endDate
    price
    externalUrl
  }
  localizedData: retiroWorkshop(where: {url: ${url}}, locales: ${locales}) {
    id
    url
    title
    subtitle
    duration
    program {
      raw
    }
  }
}
  `;
  const resp: { localizedData: AnyObject; nonLocalizedData: AnyObject } =
    await graphQLClient.request(query);

  const response: IRetiroContent[] = deepMergeObjects({}, resp.localizedData);

  return response[0];
};

export { getRetiroContent, getRetiroContentByUrl };
