import {ThemeProvider, Typography} from "@mui/material";
import theme from "@/utils/theme";
import Header from "./components/organisms/Header";
import MainContent from "./components/organisms/MainContent";
import {useEffect, useState} from "react";
import {QueryClient, QueryClientProvider, useQuery} from "@tanstack/react-query";
import request, {gql} from "graphql-request";
import {graphql} from "graphql/graphql";
import {graphqlClient} from "@/utils/graphql-client";

const charactersQuery = gql`
    query {
        characters {
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
`;

const App = () => {
  const [characters, setCharacters] = useState([]);

  const {
    data
  } = useQuery(['characters'], () => {
    return graphqlClient.request(charactersQuery);
  });

  console.log(data);

  return (
    <>
      <Header />
      <MainContent />
    </>
  )
}

export default App
