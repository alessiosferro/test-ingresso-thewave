import {ThemeProvider, Typography} from "@mui/material";
import theme from "@/utils/theme";
import Pill from "./components/atoms/Pill/Pill";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import FilterButton from "./components/atoms/FilterButton/FilterButton";

const App = () => {
  const form = useForm({
    defaultValues: {
      filter: false
    }
  });

  const submitHandler: SubmitHandler<{ filter: boolean }> = (formData) => {
    console.log(formData);
  }

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1">Headline H1!</Typography>
      <Typography variant="h2">Headline H2!</Typography>
      <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ducimus error ex, laboriosam numquam perspiciatis quaerat quos similique. Dignissimos, fugit?</Typography>

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(submitHandler)}>
          <Pill variant="success" label="alive" />
          <Pill variant="error" label="dead" />
          <Pill variant="dark" label="unknown" />
          <FilterButton controlName="filter" label="male" />
        </form>
      </FormProvider>
    </ThemeProvider>
  )
}

export default App
