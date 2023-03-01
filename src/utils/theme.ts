import {createTheme, responsiveFontSizes} from "@mui/material";
import {Colors, NeutralColors, ThemeShadows} from "@/model/theme.model";

const htmlFontSize = 20;

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    mobile: true,
    tabletPortrait: true,
    tabletLandscape: true,
    desktopMedium: true,
    desktopLarge: true,
    desktopExtraLarge: true
  }

  interface ThemeOptions {
    boxShadows: ThemeShadows;
  }

  interface PaletteOptions {
    tertiary: Colors;
    neutral: NeutralColors;
  }
}

const theme = createTheme({
  typography: {
    htmlFontSize,
  },
  palette: {
    primary: {
      main: "#96ce4b",
      50: '#f0fce2',
      100: '#daf0be',
      200: '#c4e499',
      300: '#add972',
      400: '#96ce4b',
      500: '#7db431',
      600: '#608c24',
      700: '#446418',
      800: '#283c0b',
      900: '#0a1500'
    },
    secondary: {
      main: "#f9bf1f",
      50: '#fff8db',
      100: '#feeaae',
      200: '#fddc80',
      300: '#face4f',
      400: '#f9bf1f',
      500: '#e0a606',
      600: '#ae8101',
      700: '#7c5c00',
      800: '#4c3700',
      900: '#1d1100'
    },
    tertiary: {
      main: "#69a8af",
      50: '#e0f8fc',
      100: '#c6e4e6',
      200: '#a8d0d4',
      300: '#89bcc2',
      400: '#69a8af',
      500: '#508f96',
      600: '#3c6f75',
      700: '#275054',
      800: '#123134',
      900: '#001316'
    },
    neutral: {
      black: "#1a1a1a",
      white: "#ffffff",
      red: "#c81d25",
      darkGray: "#264653"
    }
  },
  spacing: (factor: number) => `${factor / htmlFontSize}rem`,

  breakpoints: {
    values: {
      mobile: 0,
      tabletPortrait: 768,
      tabletLandscape: 1024,
      desktopMedium: 1280,
      desktopLarge: 1440,
      desktopExtraLarge: 1920
    }
  },
  boxShadows: {
    dp2: '0px 4px 6px -4px rgba(24, 39, 75, 0.1), 0px 8px 8px -4px rgba(24, 39, 75, 0.06)',
    dp4: '0px 6px 12px -6px rgba(24, 39, 75, 0.1), 0px 8px 24px -4px rgba(24, 39, 75, 0.06)',
    dp6: '0px 8px 18px -6px rgba(24, 39, 75, 0.1), 0px 12px 42px -4px rgba(24, 39, 75, 0.1)',
    dp8: '0px 8px 28px -6px rgba(24, 39, 75, 0.1), 0px 18px 88px -4px rgba(24, 39, 75, 0.12)'
  }
});

theme.typography.h1 = {
  fontSize: theme.spacing(29),
  lineHeight: theme.spacing(40),
  fontFamily: "Playfair Display",
  fontWeight: "bold",
  letterSpacing: "auto",

  [theme.breakpoints.up('desktopMedium')]: {
    fontSize: theme.spacing(40),
    lineHeight: theme.spacing(52),
  }
}

theme.typography.h2 = {
  fontSize: theme.spacing(22),
  lineHeight: theme.spacing(40),
  fontFamily: "Playfair Display",
  fontWeight: "bold",
  letterSpacing: "auto",

  [theme.breakpoints.up('desktopMedium')]: {
    fontSize: theme.spacing(36),
    lineHeight: theme.spacing(52)
  }
}

theme.typography.body1 = {
  fontFamily: "Open Sans",
  fontSize: theme.spacing(16),
  lineHeight: theme.spacing(18),
  fontWeight: "normal",
  letterSpacing: "auto"
}

theme.components = {
  MuiContainer: {
    defaultProps: {
      sx: {
        px: {
          "mobile": theme.spacing(20),
          "tabletPortrait": theme.spacing(32),
          "tabletLandscape": theme.spacing(44),
          "desktopMedium": theme.spacing(42),
          "desktopLarge": theme.spacing(76),
          "desktopExtraLarge": theme.spacing(88)
        }
      }
    }
  },
  MuiGrid: {
    defaultProps: {
      columns: {
        "mobile": 4,
        "tabletPortrait": 8,
        "tabletLandscape": 8,
        "desktopMedium": 12
      },
      rowSpacing: {
        mobile: 24,
        desktopMedium: 40,
      },
      columnSpacing: {
        mobile: 20,
        tabletPortrait: 24,
        tabletLandscape: 24,
        desktopMedium: 28,
        desktopLarge: 32,
        desktopExtraLarge: 32,
      }
    }
  }
};

export default theme;
