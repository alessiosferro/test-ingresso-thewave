import {ThemeProvider, Typography} from "@mui/material";
import theme from "@/utils/theme";
import Pill from "./components/atoms/Pill/Pill";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import FilterButton from "./components/atoms/FilterButton/FilterButton";
import Header from "./components/organisms/Header";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  )
}

export default App
