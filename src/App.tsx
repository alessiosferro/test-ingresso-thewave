import {ThemeProvider} from "@mui/material";
import theme from "./utils/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}></ThemeProvider>
  )
}

export default App
