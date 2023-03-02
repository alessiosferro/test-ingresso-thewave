import Header from "./components/organisms/Header";
import MainContent from "./components/organisms/MainContent/MainContent";
import {useCharacters} from "./hooks/useCharacters";

const App = () => {
  const {
    data,
    hasNextPage,
    fetchNextPage
  } = useCharacters();

  return (
    <>
      <Header/>
      <MainContent hasNextPage={!!hasNextPage}
                   onIntersecting={fetchNextPage}
                   characterPages={data?.pages || []}/>
    </>
  )
}

export default App
