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
  console.log("getRetiroContentByUrl", { locales, url });

  // Match exactly your working query from Hygraph playground
  const query = gql`
    query RetiroWorkshopById {
      nonLocalizedData: retiroWorkshop(where: {url: "${url}"}, locales: en) {
        id
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
      localizedData: retiroWorkshop(where: {url: "${url}"}, locales: ${locales}) {
        id
        title
        subtitle
        duration
        program {
          raw
        }
      }
    }
  `;

  try {
    const resp: { localizedData: AnyObject; nonLocalizedData: AnyObject } =
      await graphQLClient.request(query);

    // Check if we have any data at all
    if (!resp || (!resp.localizedData && !resp.nonLocalizedData)) {
      console.error("Empty response from GraphQL:", resp);
      throw new Error(`No retiro content found for URL: ${url}`);
    }

    // If we have at least one of the data objects, merge what we have
    const mergedData = deepMergeObjects(
      resp.nonLocalizedData || {},
      resp.localizedData || {}
    );

    return mergedData;
  } catch (error) {
    console.error("GraphQL request failed:", error);
    throw error;
  }
};
export { getRetiroContent, getRetiroContentByUrl };
