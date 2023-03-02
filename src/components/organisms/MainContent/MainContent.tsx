import {Box, Container, Grid, Typography} from "@mui/material";
import {Fragment, useEffect, useRef} from "react";
import {MainContentProps} from "./MainContent.props";
import theme from "@/utils/theme";
import Card from "@/molecules/Card/Card";

const MainContent = (props: MainContentProps) => {
  const {
    onIntersecting,
    hasNextPage,
    characterPages
  } = props;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      const [target] = entries;
      if (target.isIntersecting || hasNextPage) return;
      onIntersecting();
    }, { threshold: 0 });

    observer.observe(element);

    return () => observer.unobserve(element);
  }, []);

  return (
    <Box component="main"
         sx={{
           minHeight: "100vh",
           paddingTop: theme.spacing(243),
           paddingBottom: theme.spacing(40),
           background: "linear-gradient(180deg, #C6E4E6 0%, rgba(224, 248, 252, 0) 100%)"
    }}>
      <Container>
        <Grid container>
          {characterPages.map((page, index) => (
            <Fragment key={index}>
              {page.characters?.results && page.characters.results.map((character) => (
                <Grid item
                      mobile={4}
                      tabletPortrait={4}
                      desktopMedium={3}
                      key={character?.id}>
                  <Card key={character?.id}
                        imageUrl={character?.image || ""}
                        title={character?.name || ""}
                        description={<Typography color="tertiary.700" component="span" variant="body1">
                          <strong>{character?.name}</strong> origin is <strong>{character?.origin?.name}</strong>{' '}
                          and is last known location was <strong>{character?.location?.name}</strong>. He was
                          first seen in <strong>{character?.episode?.[0]?.name}</strong> and last seen in
                          episode <strong>{character?.episode?.at(-1)?.name}.</strong>
                        </Typography>}
                        imageAlt=""
                        statusVariant="success"
                        statusLabel={character?.status || ""}
                        subtitle={`${character?.species} – ${character?.gender}`}
                  />
                </Grid>
              ))}
            </Fragment>
          ))}
        </Grid>
        <Box ref={ref}/>
      </Container>
    </Box>
  )
}

export default MainContent;
