import {Box, Button, Container, Grid, Typography} from "@mui/material";
import SvgLogo from "@/atoms/Svg/SvgLogo";
import SvgBarsSolid from "@/atoms/Svg/SvgBarsSolid";
import SvgSearch from "@/atoms/Svg/SvgSearch";
import SearchBar from "@/molecules/SearchBar/SearchBar";
import {homepageSearchBarFilters} from "@/utils/constants";
import {HeaderProps} from "@/organisms/Header/Header.props";
import theme from "@/utils/theme";

const Header = (props: HeaderProps) => {
  const { onDropdownOpen, isDropdownOpen } = props;

  return (
    <Box component="header"
         position="fixed"
         zIndex={1}
         width="100%"
         bgcolor="neutral.white">
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

      <SearchBar name="searchKey"
                 onDropdownOpen={onDropdownOpen}
                 isDropdownOpen={isDropdownOpen}
                 filters={homepageSearchBarFilters}
      />
    </Box>
  )
}

export default Header;
