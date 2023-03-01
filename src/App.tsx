import {ThemeProvider, Typography} from "@mui/material";
import theme from "@/utils/theme";
import Pill from "./components/atoms/Pill";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1">Headline H1!</Typography>
      <Typography variant="h2">Headline H2!</Typography>

      <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ducimus error ex, laboriosam numquam perspiciatis quaerat quos similique. Dignissimos, fugit?</Typography>

      <Pill variant="success" label="alive" />
      <Pill variant="error" label="dead" />
      <Pill variant="dark" label="unknown" />
    </ThemeProvider>
  )
}

export default App
