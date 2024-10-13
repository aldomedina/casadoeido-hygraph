import { NEXT_HYGRAPH_ENDPOINT } from "@/lib/constants";
import { AnyObject, deepMergeObjects } from "@/lib/utils";
import { IACasaContent, TLocales } from "@/types";
import { GraphQLClient, gql } from "graphql-request";

//@ts-ignore
const graphQLClient = new GraphQLClient(NEXT_HYGRAPH_ENDPOINT);

const getACasaContent = async (
  locales: TLocales = "en"
): Promise<IACasaContent> => {
  const query = gql`
    query ACasas {
      nonLocalizedData: aCasas(locales: en) {
        imageCarousel {
          id
          height
          width
          url
        }
        finalCard {
          image {
            id
            height
            width
            url
          }
        }
      }
      localizedData: aCasas(locales: ${locales}) {
        title
        intro {
          raw
        }
        finalCard {
          title
          richDescription {
            raw
          }
        }
      }
    }
  `;
  const resp: { localizedData: AnyObject; nonLocalizedData: AnyObject } =
    await graphQLClient.request(query);
  const response: IACasaContent[] = deepMergeObjects(
    resp.nonLocalizedData,
    resp.localizedData
  );

  return response[0];
};

export { getACasaContent };
