import { NEXT_HYGRAPH_ENDPOINT } from "@/lib/constants";
import { AnyObject, deepMergeObjects } from "@/lib/utils";
import { ISimplePageContent, TLocales } from "@/types";
import { GraphQLClient, gql } from "graphql-request";

//@ts-ignore
const graphQLClient = new GraphQLClient(NEXT_HYGRAPH_ENDPOINT);

const getSimplePageContent = async (
  locales: TLocales = "en",
  id: string
): Promise<ISimplePageContent> => {
  const query = gql`
   query TextPage {
  textPage(where: { id: "${id}" }, locales: ${locales}) {
    title
    content {
      raw
    }
  }
}
  `;
  const resp: { textPage: ISimplePageContent } = await graphQLClient.request(
    query
  );

  return resp.textPage;
};

export { getSimplePageContent };
