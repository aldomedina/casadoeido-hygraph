import { NEXT_HYGRAPH_ENDPOINT } from "@/lib/constants";
import { IHomeContent, TLocales } from "@/types";
import { GraphQLClient, gql } from "graphql-request";

//@ts-ignore
const graphQLClient = new GraphQLClient(NEXT_HYGRAPH_ENDPOINT);

const getHomeContent = async (
  locales: TLocales = "en"
): Promise<IHomeContent> => {
  const query = gql`
    query Homepages {
      homepages(locales: ${locales}) {
        heroImage {
          id
          height
          width
          url
        }
        bannerHouseCard {
          title
          description
          buttonText
          image {
            id
            width
            height
            url
          }
        }
        bannerAccomodationsCard {
          id
          title
          description
          buttonText
          image {
            height
            id
            width
            url
          }
        }
        experienceTitle
        experiencesListItem
        exploreBanner {
          buttonText
          description
          id
          image {
            id
            width
            url
            height
          }
          title
        }
      }
    }
  `;

  const response: { homepages: IHomeContent[] } = await graphQLClient.request(
    query
  );
  return response.homepages[0];
};

export { getHomeContent };
