import {Container, Grid, Typography} from "@mui/material";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import Pill from "../atoms/Pill/Pill";
import FilterButton from "../atoms/FilterButton/FilterButton";
import theme from "@/utils/theme";

const Header = () => {
  const form = useForm({
    defaultValues: {
      filter: false
    }
  });

  const submitHandler: SubmitHandler<{ filter: boolean }> = (formData) => {
    console.log(formData);
  }

  return (
    <Container maxWidth={false}>
      <Grid container>
        <Grid item mobile={2} tabletLandscape={4}>
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
        </Grid>
        <Grid item mobile={2} tabletLandscape={4}>
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
        </Grid>
        <Grid item mobile={2} tabletLandscape={4}>
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
        </Grid>
        <Grid item mobile={2} tabletLandscape={4}>
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
        </Grid>
        <Grid item mobile={2} tabletLandscape={4}>
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
        </Grid>
        <Grid item mobile={2} tabletLandscape={4}>
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
        </Grid>
      </Grid>
    </Container>
  )
}

export default Header;
