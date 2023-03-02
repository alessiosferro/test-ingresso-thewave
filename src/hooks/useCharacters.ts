import {useInfiniteQuery} from "@tanstack/react-query";
import {graphqlClient} from "@/utils/graphql-client";
import {graphql} from "@/model/gql";

const charactersQuery = graphql(/* GraphQL */ `
    query getCharacters($page: Int) {
        characters(page: $page) {
            results {
                id
                image
                name
                gender
                species
                status
                location {
                    name
                }
                episode {
                    name
                }
                origin {
                    name
                }
            }
        }
    }
`);

export const useCharacters = () => {
  return useInfiniteQuery(['characters'], ({ pageParam = 1 }) => {
    return graphqlClient.request(charactersQuery, { page: pageParam });
  }, {
      getNextPageParam: (lastPage, allPages) => {
          const nextPage = allPages.length + 1;
          return lastPage.characters?.results?.length !== 0 ? nextPage : undefined;
      }
  });
}
