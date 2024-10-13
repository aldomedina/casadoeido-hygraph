import { NEXT_HYGRAPH_ENDPOINT } from "@/lib/constants";
import { AnyObject, deepMergeObjects } from "@/lib/utils";
import { IExploreContent, TLocales } from "@/types";
import { GraphQLClient, gql } from "graphql-request";

//@ts-ignore
const graphQLClient = new GraphQLClient(NEXT_HYGRAPH_ENDPOINT);

const getExploreContent = async (
  locales: TLocales = "en"
): Promise<IExploreContent> => {
  const query = gql`
    query Explores {

      localizedData: explores(locales: ${locales}) {
        title
        content {
          raw
        }
      }
    }
  `;
  const resp: { localizedData: AnyObject; nonLocalizedData: AnyObject } =
    await graphQLClient.request(query);
  const response: IExploreContent[] = deepMergeObjects({}, resp.localizedData);

  return response[0];
};

export { getExploreContent };
