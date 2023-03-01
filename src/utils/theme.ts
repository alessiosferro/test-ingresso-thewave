import {createTheme} from "@mui/material";
import {ThemeColors, ThemeShadows} from "@/model/theme.model";

declare module '@mui/material/styles' {
  interface ThemeOptions {
    colors: ThemeColors;
    boxShadow: ThemeShadows;
  }
}

const theme = createTheme({
  colors: {
    primary: {
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
    }
  },
  boxShadow: {
    dp2: '0px 4px 6px -4px rgba(24, 39, 75, 0.1), 0px 8px 8px -4px rgba(24, 39, 75, 0.06)',
    dp4: '0px 6px 12px -6px rgba(24, 39, 75, 0.1), 0px 8px 24px -4px rgba(24, 39, 75, 0.06)',
    dp6: '0px 8px 18px -6px rgba(24, 39, 75, 0.1), 0px 12px 42px -4px rgba(24, 39, 75, 0.1)',
    dp8: '0px 8px 28px -6px rgba(24, 39, 75, 0.1), 0px 18px 88px -4px rgba(24, 39, 75, 0.12)',
  }
});

export default theme;
