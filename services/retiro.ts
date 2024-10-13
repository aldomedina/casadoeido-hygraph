import { NEXT_HYGRAPH_ENDPOINT } from "@/lib/constants";
import { AnyObject, deepMergeObjects } from "@/lib/utils";
import { IRetiroContent, TLocales } from "@/types";
import { GraphQLClient, gql } from "graphql-request";

//@ts-ignore
const graphQLClient = new GraphQLClient(NEXT_HYGRAPH_ENDPOINT);

const getRetiroContent = async (
  locales: TLocales = "en"
): Promise<IRetiroContent> => {
  const query = gql`
    query Retiros {
      localizedData: retiros(locales: ${locales}) {
        title
        intro {
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

export { getRetiroContent };
