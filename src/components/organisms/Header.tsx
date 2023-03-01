import {Box, Button, Container, Grid, Typography} from "@mui/material";
import SvgLogo from "../atoms/Svg/SvgLogo";
import SvgBarsSolid from "../atoms/Svg/SvgBarsSolid";
import SvgSearch from "../atoms/Svg/SvgSearch";

const Header = () => {
  return (
    <Box component="header" position="fixed" width="100%" bgcolor="neutral.white">
      <Container>
        <Box pt={{ mobile: 21, tabletPortrait: 31, desktopLarge: 45 }}
             pb={{ mobile: 25, tabletPortrait: 91, desktopLarge: 85 }}
             display="flex"
             alignItems="center"
             justifyContent="space-between"
        >
          <Button sx={{color: "tertiary.600", display: {tabletLandscape: "none"}}} >
            <SvgSearch />
          </Button>

          <SvgLogo />

          <Button sx={{color: "tertiary.600"}}>
            <SvgBarsSolid />
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Header;
