import { NEXT_HYGRAPH_ENDPOINT } from "@/lib/constants";
import { AnyObject, deepMergeObjects } from "@/lib/utils";
import { IAccommodationContent, TLocales } from "@/types";
import { GraphQLClient, gql } from "graphql-request";

//@ts-ignore
const graphQLClient = new GraphQLClient(NEXT_HYGRAPH_ENDPOINT);

const getAccommodationContent = async (
  locales: TLocales = "en"
): Promise<IAccommodationContent> => {
  const query = gql`
    query Accommodations {
      nonLocalizedData: accommodations(locales: en) {
        roomCards {
          rooms {
            imageCarousel {
              id
              height
              width
              url
            }
          }
        }
      }
      localizedData: accommodations(locales: ${locales}) {
        title
        intro {
          raw
        }
        roomCards {
          id
          name
          description
          rooms {
            id
            name
            features {
              raw
            }
          }
        }
      }
    }
  `;
  const resp: { localizedData: AnyObject; nonLocalizedData: AnyObject } =
    await graphQLClient.request(query);
  const response: IAccommodationContent[] = deepMergeObjects(
    resp.nonLocalizedData,
    resp.localizedData
  );

  return response[0];
};

export { getAccommodationContent };
