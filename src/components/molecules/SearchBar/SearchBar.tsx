import {SearchBarProps} from "@/molecules/SearchBar/SearchBar.props";
import {Box, Button, Container, Input, Typography} from "@mui/material";
import {useFormContext} from "react-hook-form";
import theme from "@/utils/theme";
import SvgFilter from "@/atoms/Svg/SvgFilter";
import {useState} from "react";
import SvgTimesIcon from "@/atoms/Svg/SvgTimesIcon";

const SearchBar = (props: SearchBarProps) => {
  const {
    name,
    isDropdownOpen,
    onDropdownOpen,
    filters
  } = props;

  const {
    register
  } = useFormContext();

  return (
      <Box position="absolute" width="100%" top={158}>
        <Container>
          <Box position="relative">
          <Input
            sx={{
              padding: theme.spacing(10, 44, 11, 41),
              display: "block",
              fontFamily: "Playfair Display",
              fontWeight: "normal",
              fontSize: theme.spacing(30),
              lineHeight: theme.spacing(52),
              color: "tertiary.300",
              borderBottom: 0,
              ":before": {display: "none"},
              ":after": {display: "none"},
              borderRadius: theme.spacing(100),
              backgroundColor: "neutral.white",
              boxShadow: theme.boxShadows.dp8,
              zIndex: 2
            }}
            type="text" {...register(name)}
          />

          <Button
            sx={{
              zIndex: 3,
              padding: 0,
              top: theme.spacing(23),
              position: "absolute",
              right: theme.spacing(35),
              color: "tertiary.400"
            }}
            onClick={onDropdownOpen}>
            <Typography textTransform="uppercase"
                        fontSize={theme.spacing(20)}
                        lineHeight={theme.spacing(27)}
                        fontWeight="bold"
                        color="tertiary.600"
                        variant="body1"
                        mr={theme.spacing(13)}>
              Filters
            </Typography>
            {isDropdownOpen ? <SvgTimesIcon height="14" width="15"/> : <SvgFilter height="22" width="15"/>}
          </Button>
          </Box>
        </Container>
      </Box>
  );
}

export default SearchBar;
