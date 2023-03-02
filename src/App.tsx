import Header from "@/organisms/Header/Header";
import MainContent from "./components/organisms/MainContent/MainContent";
import {useCharacters} from "./hooks/useCharacters";
import SearchBar from "@/molecules/SearchBar/SearchBar";
import {FormProvider, useForm} from "react-hook-form";
import {homepageSearchBarFilters} from "@/utils/constants";
import {useState} from "react";

const App = () => {
  const {
    data,
    hasNextPage,
    fetchNextPage
  } = useCharacters();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const form = useForm({
    defaultValues: {
      searchKey: "",
      filters: {
        gender: "",
        status: "",
        species: ""
      }
    }
  });

  return (
    <FormProvider {...form}>
      <Header isDropdownOpen={isDropdownOpen}
              onDropdownOpen={() => setIsDropdownOpen(isOpen => !isOpen)}/>

      <MainContent hasNextPage={!!hasNextPage}
                   onIntersecting={fetchNextPage}
                   isDropdownOpen={isDropdownOpen}
                   characterPages={data?.pages || []}/>
    </FormProvider>
  )
}

export default App
