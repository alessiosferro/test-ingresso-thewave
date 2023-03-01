import {ThemeProvider, Typography} from "@mui/material";
import theme from "@/utils/theme";
import Header from "./components/organisms/Header";
import MainContent from "./components/organisms/MainContent";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <MainContent />
    </ThemeProvider>
  )
}

export default App
