import { NEXT_HYGRAPH_ENDPOINT } from "@/lib/constants";
import { AnyObject, deepMergeObjects } from "@/lib/utils";
import { IHomeContent, TLocales } from "@/types";
import { GraphQLClient, gql } from "graphql-request";

//@ts-ignore
const graphQLClient = new GraphQLClient(NEXT_HYGRAPH_ENDPOINT);

const getHomeContent = async (
  locales: TLocales = "en"
): Promise<IHomeContent> => {
  const query = gql`
   query Homepages {
  nonLocalizedData: homepages(locales: en) {
    heroImage {
      id
      height
      width
      url
    }
    bannerHouseCard {
      image {
        id
        width
        height
        url
      }
    }
        bannerAccomodationsCard {

      image {
        height
        id
        width
        url
      }
    }
    exploreBanner {
      image {
        id
        width
        url
        height
      }
    }
  }
  localizedData: homepages(locales: ${locales}) {
    bannerHouseCard {
      title
      description
      buttonText
    }
    bannerAccomodationsCard {
      id
      title
      description
      buttonText
    }
    experienceTitle
    experiencesListItem
    exploreBanner {
      id
      title
      buttonText
      description
      
    }
  }
}
  `;

  const resp: { localizedData: AnyObject; nonLocalizedData: AnyObject } =
    await graphQLClient.request(query);
  const response: IHomeContent[] = deepMergeObjects(
    resp.nonLocalizedData,
    resp.localizedData
  );
  return response[0];
};

export { getHomeContent };
