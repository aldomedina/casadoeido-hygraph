import { NEXT_HYGRAPH_ENDPOINT } from "@/lib/constants";
import { AnyObject, deepMergeObjects } from "@/lib/utils";
import { IExperienciaContent, TLocales } from "@/types";
import { GraphQLClient, gql } from "graphql-request";

//@ts-ignore
const graphQLClient = new GraphQLClient(NEXT_HYGRAPH_ENDPOINT);

const getExperienciaContent = async (
  locales: TLocales = "en"
): Promise<IExperienciaContent> => {
  const query = gql`
    query Experiencias {
      nonLocalizedData: experiencias(locales: en) {
        leftCard {
          image {
            id
            height
            width
            url
          }
        }
        rightCard {
          image {
            id
            height
            width
            url
          }
        }
      }
      localizedData: experiencias(locales: ${locales}) {
        title
        intro {
          raw
        }
        leftCard {
          title
          richDescription {
            raw
          }
        }
        rightCard {
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
  const response: IExperienciaContent[] = deepMergeObjects(
    resp.nonLocalizedData,
    resp.localizedData
  );

  return response[0];
};

export { getExperienciaContent };
