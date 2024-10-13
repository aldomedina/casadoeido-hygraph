import { NEXT_HYGRAPH_ENDPOINT } from "@/lib/constants";
import { AnyObject, deepMergeObjects } from "@/lib/utils";
import { IBlogContent, TLocales } from "@/types";
import { GraphQLClient, gql } from "graphql-request";

//@ts-ignore
const graphQLClient = new GraphQLClient(NEXT_HYGRAPH_ENDPOINT);

const getBlogContent = async (
  locales: TLocales = "en"
): Promise<IBlogContent[]> => {
  const query = gql`
    query BlogPost {
      nonLocalizedData: blogPosts(locales: en) {
        backgroundImage {
          id
          height
          width
          url
        }
      }
      localizedData: blogPosts(locales: ${locales}) {
        id
        title
        dateOfPublication
        post {
          raw
        }
      }
    }
  `;

  const resp: { localizedData: AnyObject; nonLocalizedData: AnyObject } =
    await graphQLClient.request(query);
  const response: IBlogContent[] = deepMergeObjects(
    resp.nonLocalizedData,
    resp.localizedData
  );

  return response;
};

export { getBlogContent };
