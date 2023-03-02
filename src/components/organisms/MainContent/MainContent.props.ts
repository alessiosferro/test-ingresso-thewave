import {Character, Characters, GetCharactersQuery} from "@/model/graphql";
import {InfiniteData} from "@tanstack/react-query";

export interface MainContentProps {
  onIntersecting: () => void;
  hasNextPage: boolean;
  characterPages: InfiniteData<GetCharactersQuery>['pages'];
}
